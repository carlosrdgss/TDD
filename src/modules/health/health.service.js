export const getHealth = () => ({
  status: 'OK',
  message: 'Shortz-App esta saudavel e pronto para TDD!',
  timestamp: new Date().toISOString(),
  version: '1.0.0'
});
