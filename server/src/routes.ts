import express from 'express'
import ClassesControler from './controlers/ClassesControler';
import ConnectionsControllers from './controlers/ConnectionsControllers';

const routes = express.Router();
const classesControler = new ClassesControler()
const connectionsController = new ConnectionsControllers()


routes.get('/classes', classesControler.index)
routes.post('/classes', classesControler.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes