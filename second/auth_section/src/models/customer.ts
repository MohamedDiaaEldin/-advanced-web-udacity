import { connect } from "http2";
import { Connection, PoolClient } from "pg";
import pg_pool from "../databse";
const bcrypt = require('bcrypt');
require('dotenv').config()

export type Customer = {
    id: number,
    email: string,
    password: string
}

export class Customer_table {


    async close_connection(conn: PoolClient) {
        conn.release()
        // pg_pool.end()
    }
    async authenticate(email: string, password: string): Promise<Customer | null> {
        let conn;
        try {
            conn = await pg_pool.connect()
            const sql = "SELECT password FROM customer where email=$1"

            const result = await conn.query(sql, [email])
            if (result.rows.length) {
                const user = result.rows[0]
                if (bcrypt.compareSync(password + process.env.BCRYPT_PASSWORD, user.password)) {
                    this.close_connection(conn)

                    return user
                }

            }

            this.close_connection(conn)
            return null
        }
        catch (error) {
            if (conn != null) {
                this.close_connection(conn)
            }
            throw new Error('error while validating user ' + error)
        }
    }

    async create(customer: Customer): Promise<Customer> {
        let conn;
        try {
            // connect to database
            conn = await pg_pool.connect()

            const sql = 'insert into customer (email, password) values ($1, $2) ;'

            // hash password
            const hashed_pass = bcrypt.hashSync(customer.password + process.env.BCRYPT_PASSWORD, parseInt(String(process.env.SALT_ROUNDS)))

            // insert 
            const result = await conn.query(sql, [customer.email, hashed_pass])
            customer = result.rows[0]
            console.log("rows", result.rows)

            // close connection
            this.close_connection(conn)

            return customer
        }
        catch (error) {
            if (conn != null) {
                this.close_connection(conn)
            }
            throw new Error("error while inserting a customer " + error)
        }
    }
    async index(): Promise<Customer[]> {
        let conn;
        try {
            conn = await pg_pool.connect()
            const sql = 'select * from customer'
            const result = await pg_pool.query(sql)

            // close coonection
            this.close_connection(conn)

            return result.rows;
        }
        catch (err) {
            if (conn != null) {
                this.close_connection(conn)
            }
            throw new Error("can't get students : " + err)
        }
    }
}


const customer_ob = new Customer_table()
customer_ob.create({ id: 0, email: "mdiaa", password: "123" }).then(re => console.log("after: , ", re))
// 


// customer_ob.authenticate("mdiaa", "123").then(res => console.log(res))
// customer_ob.create({ id: 0, email: "mdiaa", password: "123" }).then(re => console.log("after: , ", re))
// 


customer_ob.authenticate("mdiaa", "123").then(res => console.log(res))

// customer_ob.index().then(res=> console.log('index: ', res))
