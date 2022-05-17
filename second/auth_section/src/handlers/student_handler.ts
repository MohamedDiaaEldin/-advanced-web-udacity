import express, {Request, Response, Application} from 'express'
import { Student, Studrnt_tb  } from '../models/studnts'

const Students = new Studrnt_tb()

const index = async (_req:Request, res:Response)=>{
    const students = await Students.index()
    res.json(students)
}


const students_routes = (app:Application)=>{
    app.get('/students', index)
}

export default students_routes