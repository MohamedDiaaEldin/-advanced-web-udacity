import { PoolClient } from "pg";
import pg_pool from "../databse";

export type Product_Order  = {
    id?:number , 
    quantity:number , 
    order_id:number, 
    product_id:number
}

class Product_OrdersStore{
    async close_connection(conn: PoolClient) {
        conn.release()
        pg_pool.end()
    }
    async index():  Promise<Product_Order[]>   {
        let conn ; 
        try{
            conn = await pg_pool.connect()
            const sql = 'SELECT * FROM orders_products ; '
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

    async create(product_order:Product_Order):Promise<Product_Order>{
        let conn ; 
        try{
            conn = await pg_pool.connect()
            const sql = "insert into orders_products (quantity, order_id, product_id) values ($1, $2, $3)"
            const result = await conn.query(sql,[product_order.quantity, product_order.order_id, product_order.product_id]) 
            const pro = result.rows[0]
            
            this.close_connection(conn)
            
            return pro
        }
        catch( error ){
            if(conn!=null){
                this.close_connection(conn)
            }
            throw new Error('error while inserting new order_product table , ' + error)
        }
    }

}

const pro_or = new Product_OrdersStore()


// pro_or.create({quantity:3, order_id:3, product_id:8})
pro_or.index().then(res =>console.log(res))