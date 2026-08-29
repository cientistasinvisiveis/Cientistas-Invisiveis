export function renderIndex(req, res) {
  try {
    return res.render('index');
  } catch (error) {
    console.error('❌ ERRO AO RENDERIZAR A VIEW:', error);
    return res.status(500).send('Erro interno ao carregar a página.');
  }
}