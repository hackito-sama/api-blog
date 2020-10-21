import {Router} from "express";

import { createPublication,
     deletePublication, 
     getPublication, 
     getPublicationById, 
     updatePublication } from "../controllers/publication.controller";

const router = Router();

// api/publications/

router.post('/', createPublication);
router.get('/', getPublication);

// api/publications/id
router.get('/:id', getPublicationById);

router.delete('/:id', deletePublication);
router.put('/:id', updatePublication);

export default router;