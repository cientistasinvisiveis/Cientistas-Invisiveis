import { Minoria, Pesquisador } from '../models/index.js';

// Converte BLOB para Base64 se a foto for salva em binário
function blobParaBase64(blob) {
  if (!blob) return null;
  return `data:image/jpeg;base64,${Buffer.from(blob).toString('base64')}`;
}

export async function renderMinoria(req, res) {
  try {
    // Captura o nome da minoria vindo pela URL (ex: /minoria?nome=Mulheres)
    const nomeMinoria = req.query.nome;

    // Busca a minoria pelo seu identificador primário (nome) e inclui os pesquisadores
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

    // Se não encontrar no banco, renderiza página com aviso
    if (!minoria) {
      return res.status(404).render('minoria', {
        minoria: null,
        pesquisadores: [],
        erro: 'Comunidade/Minoria não encontrada.'
      });
    }

    // Trata os dados dos pesquisadores
    const pesquisadoresTratados = minoria.pesquisadores.map(p => {
      const item = p.toJSON();
      return {
        ...item,
        foto: p.foto ? (typeof p.foto === 'string' ? p.foto : blobParaBase64(p.foto)) : null
      };
    });

    // Envia os dados estruturados usando o campo 'descricao' do seu model
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