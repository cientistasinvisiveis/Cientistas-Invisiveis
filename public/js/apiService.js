const API_URL = '/api/pesquisadores';

export async function getPesquisadores() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Erro ao buscar lista de pesquisadores');
    return await response.json();
  } catch (error) {
    console.error('Erro na requisição:', error);
    return [];
  }
}