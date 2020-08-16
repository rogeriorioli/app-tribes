import {Response , Request} from 'express';

import db from '../database/connection';



export default class PostController {

    async index(req : Request, res: Response) {

        const token = req.headers.token

        if(!token) {
            return res.status(400).json({err : 'not permited '})
        }
        
        const posts = await db('posts')
        .select('*')
        .orderBy('id', 'desc')

        return res.json(posts)
    }

    async indexByUser(req : Request, res: Response) {

        const token = req.headers.token

        if(!token) {
            return res.status(400).json({err : 'not permited '})
        }
        
        const posts = await db('posts')
        .where('token', token)
        .select('*')
        .orderBy('id', 'desc')

        return res.json(posts)
    }
    async single(req : Request, res: Response) {

        const token = req.headers.token
        const {id} = req.params

        if(!token) {
            return res.status(400).json({err : 'not permited '})
        }
        
        const post = await db('posts')
        .where('id', id)
        .select("*")

        return res.json(post)
    }
    async create(req : Request, res: Response) {
        const token = req.headers.token
        const { title, content , feature_image } = req.body
        if(!token) {
            return res.status(400).json({err : 'not permited '})
        }

        const {name , avatar} = await db('users')
            .where('token', token)
            .select( 'name', 'avatar', 'id')
            .first()

        const [id] = await db('posts').insert({
            title,
            feature_image,
            content,
            token,
            name,
            avatar
            
        })    

        return res.json({id})
    }

    async update(req : Request, res: Response) {
        const token = req.headers.token
        const {id} = req.params
        const { title, content , feature_image } = req.body
        if(!token) {
            return res.status(400).json({err : 'not permited '})
        }
        const post = await db('posts')
        .where({id})
        .update({
            title,
            feature_image,
            content  
        })
      

        return res.json({message : `post :  ${title}  edited susseful`,})
    }

    async delete(req : Request, res: Response) {
        const token = req.headers.token
        const {id} = req.params;

        if(!token) {
            return res.status(400).json({err : 'not permited '})
        }
        const post = await db('posts')
        .where({id}).delete()
      

        return res.json({message : `post :  ${id}  deleted susseful`,})
    }

}