import { Application } from "express";
import { MiddlewareRequest } from "./ExpressMiddlewareRequest";
import {
  MiddlewareResponse,
  MiddlewareResponseData
} from "./ExpressMiddlewareResponse";
import UrlPattern from "url-pattern";

export class ExpressMiddleware {
  constructor(
    private _app: Application,
    private _req: MiddlewareRequest,
    private _res: MiddlewareResponse
  ) {}
  get app(): Application {
    return this._app;
  }

  get req(): MiddlewareRequest {
    return this._req;
  }

  get res(): MiddlewareResponse {
    return this._res;
  }

  public async execute(): Promise<MiddlewareResponseData> {
    return new Promise<any>((res, rej) => {
      this.res.endRequest = () => {
        if (this.res.data.statusCode >= 200 && this.res.data.statusCode < 300) {
          res(this.res.data);
        } else if (this.res.data.statusCode >= 400) {
          rej(this.res.data);
        }
      };

      const routeData = this.matchRoute();

      if (!routeData) {
        rej({
          statusCode: 404,
          message: "Route not found"
        });
      }

      routeData.handle(this.req, this.res);
    });
  }

  private matchRoute(): any | undefined {
    return this.app._router.stack.find((layer: any) => {
      if (!layer.route) {
        return false;
      }
      const methods = Object.keys(layer.route.methods) || "";

      const urlPattern = new UrlPattern(layer.route.path);
      const pathsFromUrlPattern = urlPattern.match(this.req.path);

      if (methods[0].toLowerCase() === this.req.method.toLowerCase()) {
        if (pathsFromUrlPattern) {
          this.req.params = {
            ...this.req.params,
            ...pathsFromUrlPattern
          };
          return true;
        } else {
          if (layer.route.path === this.req.path) {
            return true;
          }
        }
      }
      return false;
    });
  }
}
