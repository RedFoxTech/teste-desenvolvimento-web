declare namespace NodeJS {
  interface Global {
      testRequest: import('supertest').SuperTest<import('supertest').Test>
  }
}
