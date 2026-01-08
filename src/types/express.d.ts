import { AuthJwtPayload } from "./jwt";

declare global {
  namespace Express {
    interface Request {
      userPayload?: AuthJwtPayload;
    }
  }
}
export {}