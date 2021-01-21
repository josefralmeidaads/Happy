import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

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

    const data = {
      name,
      latitude: formatLatitude,
      longitude: formatLongitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: formatOpenOnWeekends,
      images
    }

    const schema = Yup.object().shape({
      name: Yup.string().required('Preenchimento do nome é obrigatório'),
      latitude: Yup.number().required('Preenchimento da latitude é obrigatória'),
      longitude: Yup.number().required('Preenchimento da longitude é obrigatória'),
      about: Yup.string().required('Preenchimento das informações é obrigatória'),
      instructions: Yup.string().required('Preenchimento das instruções é obrigatória'),
      opening_hours: Yup.string().required('Preenchimento de horário de funcionamento é obrigatório'),
      open_on_weekends: Yup.boolean().required('Preenchimento de horário de funcionamento no fim de semana é obrigatório'),
      images: Yup.array(Yup.object().shape({
        path: Yup.string().required('o caminho da imagem é necessário'),
      })),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = orphanagesRepository.create(data);

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