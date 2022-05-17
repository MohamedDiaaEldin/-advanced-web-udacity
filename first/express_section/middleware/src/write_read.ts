/**
 *  r-   open for reading 
 * 
 *  r+  for reading and writing for exist file  (override the file content)
 *  w+  for read and writing and create a file if not exist (override the file content)
 *  a-  for read and writing appends any data to the end of the file
 *  a+  for read and writing appends any data to the end of the file (create a file if not exist)
 */ 

import {promises as fsPromises}from 'fs'

const writeData = async()=>{
    const file = await fsPromises.open('file.txt', 'a+')
    await file.write('some text here')
}
// overide content if there
const writeData_override = async()=>{
    // overide content if there
    const file = await fsPromises.writeFile('file_2.txt', 'some text here')
    
}

/// read data using read() and buffer 
const read_file = async ()=>{
    /// alocat place in memory with 26 chars
    const buff =  Buffer.alloc(60, 'a');
    
    // open the file 
    const open_file = await fsPromises.open('file_to_read.txt', 'a+')

    // read the file 
    // read(where_to_save_data, start, end)
    await open_file.read(buff, 0, 60 )
    console.log(buff.toString())
}

// read data easy way using readFile()
const easy_read =async()=>{
    const read_file = await fsPromises.readFile('file_to_read.txt', 'utf-8')
    console.log(read_file)
}   


// read_file()
// easy_read()


// writeData()
// writeData_override()

