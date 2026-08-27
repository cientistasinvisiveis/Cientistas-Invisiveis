import { DataTypes } from 'sequelize';
import { sequelize } from '../config/bd.js'; 

export const Pesquisador = sequelize.define('Pesquisador', {
  id_pesquisador: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(128),
  },
  nascimento: {
    type: DataTypes.STRING(10),
  },
  falecimento: {
    type: DataTypes.STRING(10),
  },
  cidade: {
    type: DataTypes.STRING(50),
  },
  estado: {
    type: DataTypes.STRING(50),
  },
  pais: {
    type: DataTypes.STRING(50),
  },
  resumo: {
    type: DataTypes.TEXT,
  },
  biografia: {
    type: DataTypes.TEXT,
  },
  img: {
    type: DataTypes.BLOB, 
  },
}, {
  tableName: 'pesquisadores', 
  timestamps: false,         
});