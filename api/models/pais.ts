import { DataTypes, Sequelize } from "sequelize";
import db from '../database';


const Pais = db.define(
    "CatalogoPais",
    {
        PaisId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,      
        },
        FechaEdicion: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('GETUTCDATE')
        },
        Habilitado: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
        },
    },
    { timestamps: false }
);

export default Pais;