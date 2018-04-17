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
