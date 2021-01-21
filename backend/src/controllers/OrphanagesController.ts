import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanages_view';

export default {
  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = request.body;

    const formatLatitude = Number(latitude);
    const formatLongitude = Number(longitude);
    let formatOpenOnWeekends = false;

    if( open_on_weekends === "false"){
      formatOpenOnWeekends = false;
    }else {
      formatOpenOnWeekends = true;
    }

    const orphanagesRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return {
        path: image.filename
      }
    });

    const orphanage = orphanagesRepository.create({
      name,
      latitude: formatLatitude,
      longitude: formatLongitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: formatOpenOnWeekends,
      images
     });

     await orphanagesRepository.save(orphanage);
     return response.status(201).json(orphanage);
  },

  async show(request: Request, response: Response){
    const orphanagesRepository = getRepository(Orphanage);
    const orphanages = await orphanagesRepository.find({
      relations: ['images']
    });

    return response.status(200).json(orphanageView.renderMany(orphanages));
  },

  async index(request: Request, response: Response){
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const findOrphanage = await orphanagesRepository.findOne(id, {
      relations: ['images']
    });

    if(!findOrphanage){
      return response.status(404).json({ message: 'Não existe orfanato com este ID'});
    }
    return response.status(200).json(orphanageView.render(findOrphanage));
  },
}