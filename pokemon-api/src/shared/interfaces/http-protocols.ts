export type HttpRequest = {
  body?: any;
  header?: any;
  params?: any;
};

export type HttpResponse = {
  statusCode: number;
  body: any;
};
