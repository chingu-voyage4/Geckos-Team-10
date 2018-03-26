const assert = require("assert");
const UserModel = require("../server/models/User");

// describe tests
describe("Finding records", function() {
  var user;
  // add a user to the db before each test
  beforeEach(function(done) {
    user = new UserModel({
      first_name: "Ben",
      last_name: "Kenobi"
    });
    user.save().then(function() {
      done();
    });
  });

  it("finds a record in the db", function(done) {
    UserModel.findOne({ first_name: "Ben", last_name: "Kenobi" }).then(function(
      result
    ) {
      assert(result.first_name === "Ben" && result.last_name === "Kenobi");
      done();
    });
  });
});
