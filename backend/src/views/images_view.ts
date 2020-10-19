import Images from '../models/Images'

export default {
  render(images:Images){
    return{
      id: images.id,
      // url:`http://localhost:3333/uploads/${images.path}`
      url:`http://192.168.0.10:3333/uploads/${images.path}`
    }
  },

  renderMany(images:Images[]){
    return images.map(images => this.render(images))}
}