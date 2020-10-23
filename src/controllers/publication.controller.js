import moment from "moment";
import Publication from "../models/Publication";

export async function createPublication(req, res) {
  const { title, description, image } = req.body;

  let currentDate = moment().format("YYYY-MM-DD");

  try {
    let newPublication = await Publication.create(
      {
        title: title,
        description: description,
        image: image,
        createat: currentDate,
      },
      { fields: ["title", "description", "image", "createat"] }
    );

    if (newPublication) {
      return res.json({
        message: "Publication saved",
        data: newPublication,
      });
    }
  } catch (e) {
    res.status(500).json({
      message: "Error! publication not saved",
      data: {},
    });
  }
}

export async function getPublication(req, res) {
  try {
    const publications = await Publication.findAll();
    res.json({
      data: publications,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getPublicationById(req, res) {
  const { id } = req.params;

  try {
    const publication = await Publication.findOne({
      where: {
        id,
      },
    });
    res.json(publication);
  } catch (e) {
    console.log("error", e);
  }
}

export async function deletePublication(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Publication.destroy({
      where: {
        id,
      },
    });

    res.json({
      message: "publication delete!",
      count: deleteRowCount,
    });
  } catch (e) {
    console.log("Error: ", e);
  }
}

export async function updatePublication(req, res) {
  const { id } = req.params;
  const { title, description, image } = req.body;
  try {
    const publications = await Publication.findAll({
      attributes: ["id", "title", "description", "image"],
      where: { id },
    });

    if (publications.length > 0) {
      publications.forEach(async (publication) => {
        await publication.update({
          title,
          description,
          image,
        });
      });

      return res.json({
        message: 'publication updated',
        data: publications
      })
    }else{
      return res.json({
        message: "publication not found",
        data: publications,
      });
    }
  } catch (e) {
    console.log("Error!", e);
  }
}
