import moment from 'moment';
import Publication from "../models/Publication";

export async function createPublication(req, res) {

  const { title, description, image } = req.body;

  const currentDate = moment().format('YYYY-MM-DD');

  await Publication.create({
    title: title,
    description: description,
    image: image,
    createat: currentDate,
  });
  
  res.send("Publication saved");
}
