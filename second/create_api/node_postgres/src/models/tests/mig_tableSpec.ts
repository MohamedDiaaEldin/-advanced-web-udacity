import { MigTable, Mig } from "../mig_table";


const mig = new MigTable()

describe('mig model test', ()=>{
    it('shloud have index method', ()=>{
        expect(mig.index).toBeDefined();
    })
    it('index should return a list of products', async()=>{
        const result = await mig.index(); 
        expect(result).toEqual([])

    })
})
