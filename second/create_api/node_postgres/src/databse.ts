require('dotenv').config()
import { Pool } from 'pg'


const ENV = process.env.ENV

const {    
    PORT,
    POSTGRES_DB,
    POSTGRES_DB_TEST,
    POSTGRES_USER,
    POSTGRES_PASSWORD
} = process.env

let  pg_pool:Pool ;

if(ENV==="test"){
    pg_pool = new Pool({
        user: POSTGRES_USER,
        database: POSTGRES_DB_TEST,
        port: (PORT as unknown) as number,
        password: POSTGRES_PASSWORD
    })    
}
else{
    pg_pool = new Pool({
        user: POSTGRES_USER,
        database: POSTGRES_DB,
        port: (PORT as unknown) as number,
        password: POSTGRES_PASSWORD
    })
}



////// first method to connect to postgres database
// connect and run 
// pool.query('SELECT * from student', (err, result) => {
//     if (err) {
//         return console.error('Error executing query', err.stack)
//     }
//     for ( const student of result.rows){
//         console.log(typeof(student.name))
//         console.log(typeof(student.age))
//         console.log("")
//     }
// })

// // end connecion 
// pool.end()


////// second method to connect to postgres database
// connect 
// pg_pool.connect((err, client, release) => {
//     if (err) {
//       return console.error('Error acquiring client', err.stack)
//     }

//     /// insert 
//     // client.query("insert into student (name, age) values($1,$2) ;", ['mohamed', 33], (err, res)=>{
//     //     if( err){
//     //         return console.error('Error executing query', err.stack)
//     //     }else{
//     //         console.log(res)
//     //     }
//     // })

//     // select
//     client.query('SELECT * from student', (err, result) => {
//       release()
//       if (err) {
//         return console.error('Error executing query', err.stack)
//       }
//       console.log(result.rows)

//     })
    

//     // end pg connection 
//     pg_pool.end()

//   })

  export default pg_pool
