import 'dotenv/config';
import app from './src/app.js'; 
import { sequelize } from './src/config/bd.js';

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  try {
    await sequelize.authenticate();
    console.log('✅ Banco de dados conectado com sucesso!');

    app.listen(PORT, () => {
      console.log(`🚀 API rodando em http://localhost:${PORT}`);
    });
  } catch (erro) {
    console.error('❌ Erro de conexão com o banco:', erro.message);
  }
}

iniciarServidor();