import express, { application } from 'express';
import morgan from 'morgan';
import Rutas from './Rutas.js';
import cors from 'cors';

// Instancia
const server = express();

// middlewars

// Uso de cors
server.use(cors());
//Escuchar las peticiones en modo desarrollador 
server.use(morgan('dev'));
// Habilitar el uso de json dentro de las peticiones
server.use(express.json());

// Rutas
server.use(Rutas);

export default server;