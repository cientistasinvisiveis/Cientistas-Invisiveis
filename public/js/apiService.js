const API_URL = '/api/pesquisadores';

export async function getPesquisadores() {
  try {
    const response = await fetch(API_URL);

    // Se o backend retornou 500, lemos o JSON de diagnóstico que criamos
    if (!response.ok) {
      const dadosErro = await response.json().catch(() => ({}));
      console.group('🔥 DIAGNÓSTICO DO ERRO DO BACKEND');
      console.error('Status HTTP:', response.status);
      console.error('Mensagem:', dadosErro.mensagem || 'Sem mensagem explícita');
      console.error('Detalhe do Banco (SQL):', dadosErro.detalhes || 'N/A');
      console.error('Objeto Completo:', dadosErro);
      console.groupEnd();
      
      throw new Error(dadosErro.mensagem || `Erro HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('❌ Falha geral na requisição:', error.message);
    return [];
  }
}

// Executa imediatamente para testar
(async () => {
  const dados = await getPesquisadores();
  console.log('✅ Dados no console:', dados);
})();