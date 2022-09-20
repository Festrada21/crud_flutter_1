import {Sequelize} from 'sequelize';

//TODO configurar o base de dados
const db = new Sequelize('dbtest', 'sa', 'abc123**', 
{
    host: 'localhost',
    dialect: 'mssql',
    port: 1433
});

export default db;