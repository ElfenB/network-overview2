var sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite';

export const db = new sqlite3.Database(DBSOURCE, (err: Error) => {
  if (err) {
    console.warn(err.message);
    throw err;
  }

  console.log('Connected to the SQLite database');

  db.run(
    `CREATE TABLE tasmota (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip text,
    deviceName text,
    friendlyName text,
    mac text,
    deviceType text,
    swVersion text,
    topic text,
    fullTopic text,
    subTopics text,
    stateVariants text
  )`,
    (err: Error) => {
      if (err) {
        // Table already created
      } else {
        // Table was created
        var insert = 'INSERT INTO tasmota (ip, deviceName, deviceType) VALUES (?,?,?)';
        db.run(insert, ['192.168.178.71', 'Test-Device1', 'Shelly 1']);
        db.run(insert, ['192.168.178.72', 'Test-Device2', 'Shelly 2']);
        db.run(insert, ['192.168.178.73', 'Test-Device3', 'Shelly 3']);
      }
    }
  );
});
