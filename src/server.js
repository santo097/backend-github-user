import server from './Service/Middlewars.js';
import Configuracion from './Utilities/Configuracion.js';
import { sequelize } from './Utilities/Database.js';

const main = async() =>{
    try {
        await sequelize.authenticate();
        console.log('Conexion establecida');
        // await sequelize.sync({force:true});
        server.listen(Configuracion.servidor.port, ()=>{
            console.log('Server on port: ', Configuracion.servidor.port);
        });
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();
