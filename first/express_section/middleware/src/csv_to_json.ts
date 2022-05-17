import { json } from "stream/consumers"

const csv = require('csvtojson')


const csv_file = 'data.csv'


const fun = async()=>{
    const data = await csv().fromFile(csv_file)
    .subscribe( row_ob_data=>{/// subscribe each row object    
        if (!row_ob_data.phone){
            row_ob_data.phone = "missing data"
        }
        return new Promise<void>((resolve,reject)=>{
            resolve(row_ob_data)
        })
    }).then( all_data => all_data)   
    return data    
}

console.log( fun() )