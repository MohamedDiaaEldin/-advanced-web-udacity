import express, {Request, Response, Application} from 'express'
import { Order, OrderStore } from '../models/orders'

const order_store = new OrderStore()

const index = async (_req:Request, res:Response)=>{
    const students = await order_store.index()
    res.json(students)
}

const show = async (req:Request, res:Response)=>{
    const order  = await order_store.show(Number(req.params.id))
    res.json(order)
}

const orders_routes = (app:Application)=>{
    app.get('/orders', index)
    app.get('/orders/:id', show)
}

export default orders_routes