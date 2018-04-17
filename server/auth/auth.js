import jwt from "jsonwebtoken";
import _ from "lodash";

export const createTokens = async (user, secret, secret2) => {
  const createToken = jwt.sign(
    {
      user: _.pick(user, "_id")
    },
    secret,
    {
      expiresIn: "1m"
    }
  );

  const createRefreshToken = jwt.sign(
    {
      user: _.pick(user, "_id")
    },
    secret2,
    {
      expiresIn: "7d"
    }
  );

  return Promise.all([createToken, createRefreshToken]);
};

export const refreshTokens = async (
  token,
  refreshToken,
  user_model,
  SECRET,
  SECRET_2
) => {
  let userId = -1;
  try {
    const { user: { _id } } = jwt.decode(refreshToken);
    userId = _id;
  } catch (err) {
    return {};
  }

  if (!userId) {
    return {};
  }

  const user = await user_model.findOne({ _id });

  if (!user) {
    return {};
  }

  const refreshSecret = SECRET_2 + user.password;

  try {
    jwt.verify(refreshToken, refreshSecret);
  } catch (err) {
    return {};
  }

  const [newToken, newRefreshToken] = await createTokens(
    user,
    SECRET,
    refreshSecret
  );

  return {
    token: newToken,
    refreshToken: newRefreshToken,
    user
  };
};
