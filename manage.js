var sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const path1 = './sqlite3.db';

if (fs.existsSync(path)) {
  //file exists
  console.log('file exists');
}
else {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('sqlite3.db');


  db.serialize(function() {
    db.run("CREATE TABLE if not exists migration (id INTEGER PRIMARY KEY AUTOINCREMENT, name BLOB, applied TEXT)");
  });
}

var dbFiles = db.run("SELECT * FROM migration ORDER BY name ASC");
console.log(dbFiles);

//joining path of directory
const directoryPath = path.join(__dirname, 'migrations');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function(err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function(file) {
    if (file === dbFiles)
    {
      console.log("file exists");
    }
    else {
      var another = require('./migrations/001');
      another.myFunc();
      var another = require('./migrations/002');
      another.myFunc1();
      console.log("ksks");
    }
    db.run(`INSERT INTO migration(id, name, applied)
            VALUES (?, ?, ?)`, [ '2' , 'migrations/002.js', 'myFunc1()']);
  });
});

db.close();
