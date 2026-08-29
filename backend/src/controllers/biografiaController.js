import { Pesquisador } from '../models/index.js';

function blobParaBase64(blob) {
  if (!blob) return null;
  return `data:image/jpeg;base64,${Buffer.from(blob).toString('base64')}`;
}

export async function renderBiografia(req, res) {
  try {
    const id = req.query.id;

    const pesquisador = await Pesquisador.findByPk(id);

    if (!pesquisador) {
      return res.status(404).render('biografia', {
        pesquisador: null,
        erro: 'Pesquisador não encontrado.'
      });
    }

    const dadosPesquisador = {
      id: pesquisador.id_pesquisador,
      nome: pesquisador.nome,
      nascimento: pesquisador.nascimento || 'Desconhecido',
      falecimento: pesquisador.falecimento || 'Presente',
      cidade: pesquisador.cidade,
      estado: pesquisador.estado,
      pais: pesquisador.pais,
      biografia: pesquisador.biografia,
      img: blobParaBase64(pesquisador.img)
    };

    return res.render('biografia', {
      pesquisador: dadosPesquisador
    });

  } catch (error) {
    console.error('❌ ERRO AO RENDERIZAR A VIEW:', error);
    return res.status(500).send('Erro interno ao carregar a página.');
  }
}