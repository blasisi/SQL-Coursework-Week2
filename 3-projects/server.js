const express = require('express');
const { Pool } = require('pg');
//// Create connection
// const pool = new Pool({
    const dbcyfecommerce ={
    user: 'cyf',
    //sets the user name
    host: 'localhost',
    //specifies the host that runs the databased
    database: 'cyf_ecommerce',
    //name of the database
    password: '',
    port: 5432
};
const pool =new Pool(dbcyfecommerce)

app.get("/hotels", function(req, res) {
    pool.query('SELECT * FROM hotels', (error, result) => {
        res.json(result.rows);
    });
});

//   //- Add a new GET endpoint `/customers` to return all the customers from the database
// app.get("/cusotmer", (req, res)=>
// )
// //- Add a new GET endpoint `/suppliers` to return all the suppliers from the database
// app.get("/cusotmer", (req, res)=>
// )
https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-mysql?source=sl_frs_nav_playlist_video_clicked
});
});