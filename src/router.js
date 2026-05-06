import { readFileSync } from 'fs';
import { join } from 'path';
import { getHealth } from './modules/health/health.service.js';

const serve = (res, filePath, contentType = 'text/html') => {
  try {
    const content = readFileSync(filePath, 'utf-8');
    res.writeHead(200, { 'Content-Type': `${contentType}; charset=utf-8` });
    res.end(content);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 - Pagina nao encontrada</h1>');
  }
};

export const handleRequest = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (method === 'GET' && url === '/') {
    serve(res, join(process.cwd(), 'src/views/index.html'));
    return;
  }

  if (method === 'GET' && url === '/api/health') {
    const data = getHealth();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    return;
  }

  if (url.startsWith('/public/')) {
    const filePath = join(process.cwd(), 'src', url);
    const ext = url.split('.').pop();
    const types = { css: 'text/css', js: 'application/javascript', png: 'image/png' };
    serve(res, filePath, types[ext] || 'text/plain');
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>404 - Pagina nao encontrada</h1>');
};
