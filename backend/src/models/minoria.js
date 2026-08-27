import { DataTypes } from 'sequelize';
import { sequelize } from '../config/bd.js'; 

export const Minoria = sequelize.define('Minoria', {
  nome: {
    type: DataTypes.STRING(128),
    primaryKey: true,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'minorias',
  timestamps: false,
});