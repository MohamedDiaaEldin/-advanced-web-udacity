
import { PoolClient } from "pg";
import pg_pool from "../databse";


export type Product = {
    id?:number,
    name:string,
    price:number
}

export class ProductsStore{
    async close_connection(conn: PoolClient) {
        conn.release()
        pg_pool.end()
    }
    async index():  Promise<Product[]>   {
        let conn ; 
        try{
            conn = await pg_pool.connect()
            const sql = 'SELECT * FROM products ; '
            const result = await conn.query(sql)

            this.close_connection(conn)

            return result.rows
        }
        catch( err ){
            if(conn != null){
                this.close_connection(conn)
            }
            throw new Error('error while selection products ' + err)
        }
    }

    async create(product:Product):Promise<Product>{
        let conn ; 
        try{
            conn = await pg_pool.connect()
            const sql = "insert into products (name, price) values ($1, $2)"
            const result = await conn.query(sql,[product.name, product.price]) 
            const pro = result.rows[0]
            
            this.close_connection(conn)            
            return pro
        }
        catch( error ){
            if(conn!=null){
                this.close_connection(conn)
            }
            throw new Error('error while inserting new products, ' + error)
        }
    }
}

const pro = new ProductsStore()

// pro.create({name:'sumsung TV', price:30000}).then(res=>console.log(res))
// 
pro.index().then(res => console.log(res))

