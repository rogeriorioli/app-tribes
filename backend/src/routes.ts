import {Router} from 'express'


import UserController from './controllers/UserController'

import LoginController from './controllers/LoginController'

import PostController from './controllers/PostController'

const routes = Router();

const classUserController = new UserController()
const classLoginController = new LoginController();

const classPostController = new PostController();

routes.post('/sigin', classUserController.create);

routes.post('/login', classLoginController.authenticate);
routes.post('/addpost', classPostController.create);
routes.put('/editpost/:id', classPostController.update);
routes.delete('/deletepost/:id', classPostController.delete);


routes.get('/posts', classPostController.index)
routes.get('/post/:id', classPostController.single)
routes.get('/userposts', classPostController.indexByUser)


export default routes