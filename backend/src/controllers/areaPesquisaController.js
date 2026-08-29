// 1. Importa apenas os models necessários (AreaPesquisa e Pesquisador)
import { AreaPesquisa, Pesquisador } from '../models/index.js';

/**
 * Função auxiliar para converter o Buffer binário (BLOB) do banco de dados
 * em uma string Base64 utilizável diretamente no atributo "src" da tag <img>.
 */
function blobParaBase64(blob) {
  // Se a imagem for nula ou não existir, retorna null para evitar falhas no template
  if (!blob) return null;
  
  // Transforma os bytes do banco em Base64 com o prefixo MIME
  return `data:image/jpeg;base64,${Buffer.from(blob).toString('base64')}`;
}

export async function renderAreaPesquisa(req, res) {
  try {
    // 2. Extrai o nome da área enviado pela URL (ex: /area-pesquisa?nome=Ciência)
    const nomeArea = req.query.nome;

    // 3. Consulta a área no banco e traz apenas os pesquisadores associados
    const area = await AreaPesquisa.findOne({
      where: { nome: nomeArea },
      include: [
        {
          model: Pesquisador,
          as: 'pesquisadores',
          through: { attributes: [] } // Omite as colunas brutas da tabela intermediária
        }
      ]
    });

    // 4. Caso o nome da área não exista no banco, retorna erro 404
    if (!area) {
      return res.status(404).render('area-pesquisa', {
        area: null,
        pesquisadores: [],
        erro: 'Área de pesquisa não encontrada.'
      });
    }

    // 5. Estrutura o objeto da área, convertendo as imagens de BLOB para Base64
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

    // 6. Renderiza a view passando apenas a área e o array de pesquisadores
    return res.render('area-pesquisa', {
      area: dadosArea,
      pesquisadores: area.pesquisadores
    });

  } catch (error) {
    // 7. Loga e trata erros de banco ou execução
    console.error('❌ Erro ao buscar área:', error);
    return res.status(500).send('Erro interno do servidor');
  }
}