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
    console.error('❌ ERRO NO BACKEND/SEQUELIZE:', error);
    return res.status(500).json({
      status: 'Erro 500 no Backend',
      mensagem: error.message,
      detalhes: error.parent ? error.parent.message : null,
      sql: error.sql || null,
      nomeErro: error.name
    });
  }
}