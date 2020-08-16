## TESTE PROCESSO SELETIVO

Este é um projeto(teste) para vaga de emprego ! 


### BACKEND

Para iniciar o projeto

- yarn : para instalar depedencias 
- yarn knex:migrate para criar as tabelas no banco 
- yarn start  : roda aplicação na porta 3333

### ROTAS ENDPOINTS BACKEND

```
    routes.post('/sigin', classUserController.create);

    routes.post('/login', classLoginController.authenticate);
    routes.post('/addpost', classPostController.create);
    routes.put('/editpost/:id', classPostController.update);
    routes.delete('/deletepost/:id', classPostController.delete);

    routes.get('/user/:id', classUserController.singleUser)

    routes.put('/user/:id', classUserController.update)

    routes.get('/posts', classPostController.index)
    routes.get('/post/:id', classPostController.single)
    routes.get('/userposts', classPostController.indexByUser)

 ```   

### FONTEND

- yarn : para instalar depedencias 
- yarn start : roda aplicação no navegador na porta 3000




## TECNOLOGIAS USADAS

- NODE 
- SQLITE
- KNEX 
- REACT (HOOKS) 
- STYLED COMPONENTS
- SESSION STORAGE
- TYPESCRIPT <3 FOR LIFE 

### PROJETO 100% FEITO EM TYPESCRIPT

