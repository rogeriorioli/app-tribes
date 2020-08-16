import {Response , Request} from 'express';

import crypto from 'crypto'

import db from '../database/connection';


export default class UserController {
    async singleUser(req : Request, res: Response) {

        const token = req.headers.token
        const {id} = req.params

        if(!token) {
            return res.status(400).json({err : 'not permited '})
        }
        
        const user = await db('users')
        .where('token', token)
        .where('token', id)
        .select('name', 'email', 'avatar', 'bio')

        return res.json(user)
    }
    async create(req : Request, res: Response)  {
        const token = crypto.randomBytes(10).toString('hex');
        const {
            name,
            avatar,
            email,
            bio,
            password
        } = req.body

        const user = await db('users')
        .column('id')
        .where( 'email' , email)
        .select('email')
        .first()
        if(!user) {       
            await db('users').insert({
                name,
                avatar,
                email,
                bio,
                password, 
                token 
            })
            return res.status(201).send()
        }
        return res.status(400).json({err : "user exist in our base"})
    }
    async update(req : Request, res: Response) {
        const token = req.headers.token
        const {id} = req.params
        const {
            name,
            avatar,
            email,
            bio,
            password
        } = req.body

        if(!token) {
            return res.status(400).json({err : 'not permited '})
        }
        const user = await db('users')
        .where('token', token)
        .where('id', id)
        .update({
            name,
            avatar,
            email,
            bio,
            password
        })
      

        return res.json({message : `user :  ${name}  edited susseful`,})
    }

    
}

