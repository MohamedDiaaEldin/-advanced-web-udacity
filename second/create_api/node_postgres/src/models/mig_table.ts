import pg_pool from '../databse'

export type Mig = {
    id:number, 
    nam:string,
    email:string,
}

export class MigTable{

    async index():Promise<Mig[]>{
       let conn = null ; 
       try{
        conn = await pg_pool.connect()

        const sql = 'select * from mig_table'
        const result = await conn.query(sql)
        
        // close connection 
        conn.release()
        pg_pool.end()
     
        return result.rows
       }
       catch(err){
           if(conn!=null){
            conn.release()            
           }
           pg_pool.end()
            throw new Error("cannot get mig from mig_table : " + err)
       }

    }

}

// for testing
// new MigTable().index().then(res=>{
//     for (const mig of res){
//         console.log('row :', mig)
//     }
// }).catch( err=>console.error(err));
