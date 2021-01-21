import express, { Request, Response } from 'express';
import multer from 'multer';

import configUpload from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const orphanagesController = OrphanagesController;

const routes = express.Router();
const uploads = multer(configUpload);

routes.get('/orphanages', orphanagesController.show)
routes.get('/orphanages/:id', orphanagesController.index);
routes.post('/orphanages', uploads.array('images'), orphanagesController.create);

export default routes;