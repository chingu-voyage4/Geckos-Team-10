const assert = require("assert");
const mongoose = require("mongoose");
const UserModel = require("../server/models/User");

mongoose.Promise = global.Promise;

// test
describe("saving records", function() {
  // save a record to the db
  it("saves a record to db", function(done) {
    var Han = new UserModel({
      first_name: "Han",
      last_name: "Solo",
      mobile_number: 1234567,
      email: "smuggler@rebels.com",
      password: "hanAndChewy"
    });

    Han.save().then(function() {
      assert(Han.isNew === false);
    });

    done();
  });
});
