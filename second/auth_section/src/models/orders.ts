import { PoolClient } from "pg";
import pg_pool from "../databse";


export type Order = {
    id?:number,
    status:string,
    customer_id:number
}

export class OrderStore{
    async close_connection(conn: PoolClient) {
        conn.release()
        pg_pool.end()
    }
    async index():  Promise<Order[]>   {
        let conn ; 
        try{
            conn = await pg_pool.connect()
            const sql = 'SELECT * FROM orders ; '
            const result = await conn.query(sql)

            this.close_connection(conn)

            return result.rows
        }
        catch( err ){
            if(conn != null){
                this.close_connection(conn)
            }
            throw new Error('error while selection orders ' + err)
        }
    }

    // gtx 1650 - amd raizon 5 15600 h

    async show(id:number):Promise<Order>{
        let conn  ; 
        try{
            conn = await  pg_pool.connect()
            const sql = 'SELECT * from orders where id=$1'
            const result = await conn.query(sql, [id])
            const order = result.rows[0]
            this.close_connection(conn)
            return order
        }
        catch( err){
            if(conn!=null){
                this.close_connection(conn)
            }
            throw new Error('error while selecting order ' + err)
        }
    }

    async create(order:Order):Promise<Order>{
        let conn ; 
        try{
            conn = await pg_pool.connect()
            const sql = "insert into orders (status, customer_id) values ($1, $2)"
            const result = await conn.query(sql,[order.status, order.customer_id]) 
            const pro = result.rows[0]
            
            this.close_connection(conn)
            
            return pro
        }
        catch( error ){
            if(conn!=null){
                this.close_connection(conn)
            }
            throw new Error('error while inserting new oreders, ' + error)
        }
    }
}

const order = new OrderStore()

// order.create({status:'progres', customer_id:1}).then(res=>console.log(res))

order.index().then(res => console.log(res))

// order.show(2).then(res=>console.log(res))

