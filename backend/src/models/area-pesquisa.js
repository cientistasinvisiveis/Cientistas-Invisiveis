import { DataTypes } from 'sequelize';
import { sequelize } from '../config/bd.js'; 

export const AreaPesquisa = sequelize.define('AreaPesquisa', {
  nome: {
    type: DataTypes.STRING(128),
    primaryKey: true,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  img_1: {
    type: DataTypes.BLOB,
  },
  desc_img_1: {
    type: DataTypes.STRING(50),
  },
  img_2: {
    type: DataTypes.BLOB,
  },
  desc_img_2: {
    type: DataTypes.STRING(50),
  },
  img_3: {
    type: DataTypes.BLOB,
  },
  desc_img_3: {
    type: DataTypes.STRING(50),
  },
}, {
  tableName: 'areas_pesquisa',
  timestamps: false,
});