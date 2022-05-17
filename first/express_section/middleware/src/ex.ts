import express from 'express';
import { promises as fsPromises } from "fs";
const csv = require("csvtojson");


const app = express();
const port = 3000;

const convert_csv = () => {
    const csv_file = 'data.csv'

    csv().fromFile(csv_file)
        .subscribe(row_ob_data => {/// subscribe each row object    
            if (!row_ob_data.phone) {
                row_ob_data.phone = "missing data"
            }
            return new Promise<void>((resolve, reject) => {
                resolve(row_ob_data)
            })
        }).then(all_data => {
            fsPromises.open('data.json', 'a+').then(file => {
                file.write(JSON.stringify(all_data))
            })
        })

}
// Async / await usage
// const jsonArray=await csv().fromFile(csvFilePath);

convert_csv()


// app.get('/convert', (req, res)=>{
//     convert_csv()
//     res.send('converting...')
// })
// // start the Express server
// app.listen(port, () => {
//   console.log(`server started at http://localhost:${port}`);
// });

