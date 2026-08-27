import { DataTypes } from 'sequelize';
import { sequelize } from '../config/bd.js'; 

export const VinculoMinoria = sequelize.define('VinculoMinoria', {
  pesquisador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  minoria: {
    type: DataTypes.STRING(128),
    primaryKey: true,
    allowNull: false,
  },
}, {
  tableName: 'vinculo_minoria',
  timestamps: false,
});