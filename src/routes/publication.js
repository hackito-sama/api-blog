import {Router} from "express";

import { createPublication } from "../controllers/publication.controller";

const router = Router();

// api/publications/

router.post('/', createPublication);

export default router;