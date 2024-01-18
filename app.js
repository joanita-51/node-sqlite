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

//Retrieving all rows
// db.all('SELECT * FROM AverageTemp', function(error, rows){
//     if(error){
//         console.log(error)
//         return;
//     }
//     console.log(rows)
// })

//Retrieving a single row method 1
// db.all('SELECT * FROM AverageTemp', (error, rows)=>{
//     if(error){
//         console.log(error)
//         return;
//     }
//     console.log(rows.find(row=>row.id==1))

// });

// db.run('INSERT INTO AverageTemp(year, temperature) VALUES (2023, 34.6)',(error)=>{
//     if(error){
//         console.log(error)
//     }
// })

// db.get('SELECT * FROM AverageTemp WHERE year = 2023', (error, row)=>{
//     if(error){
//         console.log(error)
//         return;
//     }
//     console.log(row)
// })
db.each('SELECT * FROM AverageTemp WHERE year = 2023', (error, row)=>{
    if(error){
        console.log(error)
        return;
    }
    console.log(`${row.year} had a temperature of ${row.temperature} `)
})