import { HttpRequest, HttpResponse } from './http-protocols';

export interface Controller {
  handle: (httprtequest: HttpRequest) => Promise<HttpResponse>;
}
