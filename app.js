const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite');

// db.run('CREATE TABLE AverageTemp(id INTEGER PRIMARY KEY, year INTEGER NOT NULL, temperature REAL NOT NULL)')
// db.run('INSERT INTO AverageTemp(id, year, temperature) VALUES (1, 2022, 30.6)',(error)=>{
//     if(error){
//         console.log(error)
//     }
// })
// db.run('INSERT INTO AverageTemp(year, temperature) VALUES (2023, 27.6)',(error)=>{
//     if(error){
//         console.log(error)
//     }
// })