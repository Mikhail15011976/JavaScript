class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [404, 'Not Found'],
      [500, 'Internal Server Error'],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}

module.exports = ErrorRepository;
