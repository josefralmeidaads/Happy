import Image from "../models/Images";

export default {
  render(image: Image){
    return {
      id: image.id,
      url: `http://10.0.0.114:3333/uploads/${image.path}`
    }
  },

  renderMany(images: Image[]){
    return images.map( image => this.render(image));
  }
}