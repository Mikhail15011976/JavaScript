import ErrorRepository from '../src/errorRepository';

describe('ErrorRepository', () => {
  const errorRepo = new ErrorRepository();

  test('should return error message for known error code', () => {
    expect(errorRepo.translate(400)).toBe('Bad Request');
  });

  test('should return "Unknown error" for unknown error code', () => {
    expect(errorRepo.translate(999)).toBe('Unknown error');
  });
});
