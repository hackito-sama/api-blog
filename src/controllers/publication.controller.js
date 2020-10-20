import Publication from "../models/Publication";

export function createPublication(req, res) {

  const { title, description, image, create_at } = req.body;

  Publication.create({
    title: title,
    description: description,
    image: image,
    create_at: create_at,
  });
  
  console.log(req.body);
  res.send("recibido");
}
