import { Studrnt_tb } from "../studnts";

const student = new Studrnt_tb()

describe('student model test', ()=>{
    it('shloud have index method', ()=>{
        expect(student.index).toBeDefined();
    })
    it('index should return a list of students', async()=>{
        const result = await student.index();         
        expect(result).toEqual([])

    })

    
})
