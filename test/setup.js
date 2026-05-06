import { vi } from 'vitest';

global.mockReq = (body = {}, params = {}, query = {}) => ({
  body,
  params,
  query,
  headers: {}
});

global.mockRes = () => {
  const res = {};
  res.statusCode = 200;
  res.setHeader = vi.fn();
  res.writeHead = vi.fn().mockReturnValue(res);
  res.end = vi.fn().mockReturnValue(res);
  res.write = vi.fn().mockReturnValue(res);
  return res;
};

