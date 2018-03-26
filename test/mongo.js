const assert = require("assert");
const mongoose = require("mongoose");
const UserModel = require("../server/models/User");
const TEST_MONGO_URI = require("./env-var");

mongoose.Promise = global.Promise;

// before test connect to the 'test' database
before(function(done) {
  mongoose.connect(TEST_MONGO_URI, { dbName: "test" });
  var db = mongoose.connection;
  db
    .once("open", function() {
      console.log("mongo is connected...fireworks!!!");
      done();
    })
    .on("error", function(error) {
      console.log("connection error", error);
    });
});

// after the test drop the db connection
after(function() {
  mongoose.connection.close();
});

// test
describe("tests for mongo db: CRUD", function() {
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

  // next test
});
