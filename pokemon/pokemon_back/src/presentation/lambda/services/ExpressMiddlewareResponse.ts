export class MiddlewareResponse {
  public data: MiddlewareResponseData = {
    statusCode: 200
  };

  private _endRequest?: () => void;
  set endRequest(cb: (() => void) | undefined) {
    this._endRequest = cb;
  }
  get endRequest(): (() => void) | undefined {
    return this._endRequest;
  }

  public status(code: number): MiddlewareResponse {
    this.data.statusCode = code;
    return this;
  }

  public sendStatus(code: number) {
    this.data.statusCode = code;
    this.endRequest && this.endRequest();
  }

  public setHeaders(headers: any): void {
    this.data.headers = headers;
  }

  public send(body: any): void {
    this.data.body = body;
    this.endRequest && this.endRequest();
  }
}

export interface MiddlewareResponseData {
  body?: any;
  statusCode: number;
  headers?: any;
}

export const getMiddlewareResponse = () => {
  return new MiddlewareResponse();
};
