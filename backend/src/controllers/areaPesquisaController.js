import { AreaPesquisa, Pesquisador } from '../models/index.js';

function blobParaBase64(blob) {
  if (!blob) return null;
  return `data:image/jpeg;base64,${Buffer.from(blob).toString('base64')}`;
}

export async function renderAreaPesquisa(req, res) {
  try {
    const nomeArea = req.query.nome;

    const area = await AreaPesquisa.findOne({
      where: { nome: nomeArea },
      include: [
        {
          model: Pesquisador,
          as: 'pesquisadores',
          through: { attributes: [] } 
        }
      ]
    });

    if (!area) {
      return res.status(404).render('area-pesquisa', {
        area: null,
        pesquisadores: [],
        erro: 'Área de pesquisa não encontrada.'
      });
    }

    const dadosArea = {
      nome: area.nome,
      descricao: area.descricao,
      img_1: blobParaBase64(area.img_1),
      desc_img_1: area.desc_img_1,
      img_2: blobParaBase64(area.img_2),
      desc_img_2: area.desc_img_2,
      img_3: blobParaBase64(area.img_3),
      desc_img_3: area.desc_img_3,
    };

    const pesquisadoresTratados = area.pesquisadores.map(p => {
      const item = p.toJSON();
      const imagemConvertida = blobParaBase64(p.img);
      return {
        ...item,
        img: imagemConvertida,
        foto: imagemConvertida 
      };
    });

    return res.render('area-pesquisa', {
      area: dadosArea,
      pesquisadores: pesquisadoresTratados 
    });

  } catch (error) {
    console.error('❌ Erro ao buscar área:', error);
    return res.status(500).send('Erro interno do servidor');
  }
}