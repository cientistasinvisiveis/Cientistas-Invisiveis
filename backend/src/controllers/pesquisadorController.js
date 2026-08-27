import { Pesquisador, AreaPesquisa, Minoria } from '../models/index.js';

export async function listarPesquisadores(req, res) {
  try {
    const lista = await Pesquisador.findAll({
      include: [
        { model: AreaPesquisa, as: 'areas', through: { attributes: [] } },
        { model: Minoria, as: 'minorias', through: { attributes: [] } },
      ],
    });
    return res.json(lista);
  } catch (error) {
    console.error('❌ ERRO DETALHADO NO SEQUELIZE:', error); // <- Vai exibir o erro real no terminal
    return res.status(500).json({ erro: error.message, stack: error.stack });
  }
}