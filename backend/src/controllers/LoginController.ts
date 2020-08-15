import {Response , Request} from 'express';


import db from '../database/connection';


export default class LoginController {
    async authenticate(req : Request, res: Response) {
        const { email, password  } = req.body;
        const user = await db('users')
        .where( 'email' , email)
        .where('password', password)
        .select('email', 'password', 'token')
        .first()
        if(!user) {
            return res.status(400).json({err : 'user or password wrong'})
        }
        return res.json({"success" : "user logon", "token" : user.token})
    }
}