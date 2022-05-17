import { promises as fsPromises } from "fs";

// move and rename are the same using rename(original_path , new_path) 
const move_rename = async()=>{
    // make dir to move and rename file inside it 
    await fsPromises.mkdir('data') 
    // move and rename a file 
    const move_file = await fsPromises.rename('file_to_move.txt', 'data/renamed_file.txt')
}

// remove a file using unlinck()
// remove empty directory using rmdir
// remove non empty directory using third party  rimraf 
const remove_file_dir = async()=>{
    const file = await fsPromises.unlink('data/renamed_file.txt')
    const dir = await fsPromises.rmdir('data')

}

// move_rename()

remove_file_dir()
