import { ExpressMiddleware } from "./services/ExpressMiddleware";
import app from "../routes";
import { getMiddlewareResponse } from "./services/ExpressMiddlewareResponse";
import {
  LambdaMiddlewareMapper,
  LambdaEvent,
  LambdaResponse
} from "./services/LambdaMiddlewareMapper";

export const handler = async (event: LambdaEvent): Promise<LambdaResponse> => {
  try {
    const mappedEvent = LambdaMiddlewareMapper.toMiddlewareRequest(event);
    console.log("Event: ", mappedEvent);

    const mw = new ExpressMiddleware(app, mappedEvent, getMiddlewareResponse());

    const response = await mw.execute();
    const mappedResponse = LambdaMiddlewareMapper.toLambdaResponse(response);
    console.log("Response: ", mappedResponse);

    return mappedResponse
  } catch (err) {
    console.log("Error: ", err);
    const errorResponse = LambdaMiddlewareMapper.toLambdaResponse({
      body: {
        ...err.body,
      },
      headers: {},
      statusCode: err.statusCode || 400,
    });

    console.log("ErrorResponse: ", errorResponse);

    return errorResponse;

  }
};
