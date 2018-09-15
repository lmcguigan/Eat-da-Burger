var connection = require("./connection.js");

var orm = {
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) { throw err; }
            callback(result);
        });
    },
    insertOne: function (burgerName, callback) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [burgerName], function (err, result) {
            if (err) { throw err; }
            callback(result);
        });
    },
    updateOne: function (timeStamp, idVal, callback) {
        var queryString = "UPDATE burgers SET devoured = 1, timeEaten = ? WHERE id = ?";
        connection.query(queryString, [timeStamp, idVal], function (err, result) {
            if (err) { throw err; }
            callback(result);
        });
    }
};

module.exports = orm;
