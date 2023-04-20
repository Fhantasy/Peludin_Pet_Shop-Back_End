import jwt, { VerifyCallback } from "jsonwebtoken";

const jwtKey = "chave-do-jwt";

export const jwtService = {
  signToken: (payload: string | object | Buffer, expiration: string) => {
    return jwt.sign(payload, jwtKey, {
      expiresIn: expiration,
    });
  },

  verifyToken: (token: string, callbackfn: VerifyCallback) => {
    jwt.verify(token, jwtKey, callbackfn);
  },
};
