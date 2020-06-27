import {
  MiddlewareRequest,
  getMiddlewareRequest
} from "./ExpressMiddlewareRequest";
import { MiddlewareResponseData } from "./ExpressMiddlewareResponse";

export class LambdaMiddlewareMapper {
  static toMiddlewareRequest(event: LambdaEvent): MiddlewareRequest {
    return getMiddlewareRequest({
      url: event.url,
      path: event.path,
      headers: event.headers,
      params: event.pathParams,
      query: event.queryStringParameters,
      method: event.httpMethod,
      body: event.body && JSON.parse(event.body)
    });
  }

  static toLambdaResponse(data: MiddlewareResponseData): LambdaResponse {
    return {
      headers: {
        ...data.headers,
       "Access-Control-Allow-Headers": "*",
       "Access-Control-Allow-Methods": "*",
       "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data.body),
      statusCode: data.statusCode
    };
  }
}

export interface LambdaEvent {
  url: string;
  path: string;
  headers: string;
  pathParams: string;
  queryStringParameters: string;
  httpMethod: string;
  body: string;
}

export interface LambdaResponse {
  headers: any;
  body: string;
  statusCode: number;
}
