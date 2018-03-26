const mongoose = require("mongoose");
const TEST_MONGO_URI = require("./env-var");

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

// Drop the users collection before each test
beforeEach(function(done) {
  // Drop the collection
  mongoose.connection.collections.users.drop(function() {
    done();
  });
});

// after the test drop the db connection
after(function() {
  mongoose.connection.close();
});
