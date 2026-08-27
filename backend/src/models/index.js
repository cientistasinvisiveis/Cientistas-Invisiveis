import { Pesquisador } from './pesquisadores.js';
import { AreaPesquisa } from './area-pesquisa.js';
import { Minoria } from './minoria.js';
import { VinculoArea } from './vinculo-area.js';
import { VinculoMinoria } from './vinculo-minoria.js';

Pesquisador.belongsToMany(AreaPesquisa, {
  through: VinculoArea,
  foreignKey: 'pesquisador',
  otherKey: 'area_pesquisa',
  as: 'areas',
});

AreaPesquisa.belongsToMany(Pesquisador, {
  through: VinculoArea,
  foreignKey: 'area_pesquisa',
  otherKey: 'pesquisador',
  as: 'pesquisadores',
});

Pesquisador.belongsToMany(Minoria, {
  through: VinculoMinoria,
  foreignKey: 'pesquisador',
  otherKey: 'minoria',
  as: 'minorias',
});

Minoria.belongsToMany(Pesquisador, {
  through: VinculoMinoria,
  foreignKey: 'minoria',
  otherKey: 'pesquisador',
  as: 'pesquisadores',
});

export { Pesquisador, AreaPesquisa, Minoria, VinculoArea, VinculoMinoria };