import { Router } from "express";
import { mostrar, crear} from "./UserGitController.js";
const router = Router();

// Mostrar ciudades
router.get("/mostrar",  mostrar);
// Crear ciudad
router.post("/crear", crear);

export default router;