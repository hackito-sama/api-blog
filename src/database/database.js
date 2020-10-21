import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'blog', //database name
    'root', //user
    'Pass1010', //contraseña
    {
        host: 'localhost', // host
        dialect: 'mysql', // tipo base de datos
        /*pool:{ // cantidad de conexiones simultaneas
            min: 0,
            max: 5,
            require: 30000,
            idle: 10000
        },*/
        logging: false
    }

)