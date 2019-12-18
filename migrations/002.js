var db = require('sqlite3-wrapper').open('./v1.db')
module.exports = {
  myFunc1: function() {
    db.insert('migrate', {
      "id": 1,
      messages: 'hai there!',
      sender: '1',
      reciever: '2'
    }, function(err, migrate) {
      if (err) {
        console.log(err.message);
      } else {
        console.log("okok");
      }
    })

    db.insert('migrate', {
      "id": 2,
      messages: 'Hello World',
      sender: '2',
      reciever: '1'
    }, function(err, migrate) {
      if (err) {
        console.log(err.message);
      } else {
        console.log("okok");
      }
    })
  }
}
