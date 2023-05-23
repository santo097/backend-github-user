import express from "express";
import UserGitRouter from "../Controller/UserGitModel/UserGitRouter.js";
const rutas = express();

rutas.use("/usergit", UserGitRouter);

export default rutas;