var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback){
        orm.selectAll(function (res){
            callback(res);
        });
    },
    insertOne: function(burgername, callback){
        orm.insertOne(burgername, function (res){
            callback(res);
        });
    },
    updateOne: function(timeStamp, idVal, callback){
        orm.updateOne(timeStamp, idVal, function (res){
            callback(res);
        });
    }
}
module.exports = burger;