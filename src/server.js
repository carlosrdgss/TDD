import 'dotenv/config';
import { createServer } from 'http';
import { handleRequest } from './router.js';

const PORT = process.env.PORT || 3000;

const server = createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Shortz-App rodando em http://localhost:${PORT}`);
});
