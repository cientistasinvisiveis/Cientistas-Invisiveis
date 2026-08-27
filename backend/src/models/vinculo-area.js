import { DataTypes } from 'sequelize';
import { sequelize } from '../config/bd.js'; 

export const VinculoArea = sequelize.define('VinculoArea', {
  pesquisador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  area_pesquisa: {
    type: DataTypes.STRING(128),
    primaryKey: true,
    allowNull: false,
  },
}, {
  tableName: 'vinculo_area',
  timestamps: false,
});