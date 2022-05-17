import pg_pool from "../databse";

export type Student = {
    id: number,
    name: string,
    phone: string,
    email: string
}

export class Studrnt_tb {

    async index(): Promise<Student[]> {
        let conn ;
        try {
            conn = await pg_pool.connect()
            const sql = 'select * from students'
            const result = await pg_pool.query(sql)

            // end connection 
            conn.release()
            pg_pool.end()

            return result.rows;
        }
        catch (err) {
            if (conn != null) {
                conn.release()
            }
            pg_pool.end()
            throw new Error("can't get students : " + err)
        }
    }

}




