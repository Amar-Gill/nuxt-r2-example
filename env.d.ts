import {
  CfProperties,
  Request,
  ExecutionContext,
  R2Bucket,
} from "@cloudflare/workers-types";

declare module "h3" {
  interface H3EventContext {
    cf: CfProperties;
    cloudflare: {
      request: Request;
      env: {
        MY_BUCKET: R2Bucket;
      };
      context: ExecutionContext;
    };
  }
}
