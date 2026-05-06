import { describe, it, expect } from 'vitest';
import { getHealth } from '../health.service.js';

describe('Health Service', () => {
  it('deve retornar status OK quando o servico esta saudavel', () => {
    const result = getHealth();

    expect(result.status).toBe('OK');
    expect(result.message).toContain('saudavel');
    expect(result).toHaveProperty('timestamp');
    expect(result).toHaveProperty('version');
  });
});
