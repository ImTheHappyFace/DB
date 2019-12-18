var sqlite3 = require('sqlite3').verbose();
path = require('path');

module.exports = {
  myFunc: function() {
    var db = new sqlite3.Database('chatting.db');


    db.serialize(function() {
      db.run("CREATE TABLE if not exists migrate (id INTEGER PRIMARY KEY AUTOINCREMENT, messages Text, sender Text , reciever Text)");
      db.run("CREATE TABLE if not exists notifications (id INTEGER PRIMARY KEY AUTOINCREMENT, count INTEGER)");


    });

    db.close();
  }
}
