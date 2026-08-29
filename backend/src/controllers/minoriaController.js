import { Minoria, Pesquisador } from '../models/index.js';

function blobParaBase64(blob) {
  if (!blob) return null;
  return `data:image/jpeg;base64,${Buffer.from(blob).toString('base64')}`;
}

export async function renderMinoria(req, res) {
  try {
    const nomeMinoria = req.query.nome;

    const minoria = await Minoria.findOne({
      where: { nome: nomeMinoria },
      include: [
        {
          model: Pesquisador,
          as: 'pesquisadores',
          through: { attributes: [] }
        }
      ]
    });

    if (!minoria) {
      return res.status(404).render('minoria', {
        minoria: null,
        pesquisadores: [],
        erro: 'Comunidade/Minoria não encontrada.'
      });
    }

    const pesquisadoresTratados = minoria.pesquisadores.map(p => {
      const item = p.toJSON();
      return {
        ...item,
        foto: p.foto ? (typeof p.foto === 'string' ? p.foto : blobParaBase64(p.foto)) : null
      };
    });

    return res.render('minoria', {
      minoria: {
        nome: minoria.nome,
        descricao: minoria.descricao
      },
      pesquisadores: pesquisadoresTratados
    });

  } catch (error) {
    console.error('❌ Erro ao buscar minoria:', error);
    return res.status(500).send('Erro interno do servidor');
  }
}