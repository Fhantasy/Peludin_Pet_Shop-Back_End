import { NextFunction, Request, Response } from "express";
import { jwtService } from "../services/jwtService";
import { userService } from "../services/userService";
import { JwtPayload } from "jsonwebtoken";
import { UserInstance } from "../models/User";

interface AuthorizatedRequest extends Request {
  user?: UserInstance | null;
}

export function ensureAuth(
  req: AuthorizatedRequest,
  res: Response,
  next: NextFunction
) {
  const authorizationToken = req.headers.authorization;

  if (!authorizationToken)
    return res
      .status(401)
      .json({ message: "Não autorizado: token não encontrado!" });

  const token = authorizationToken.replace(/Bearer /, "");

  jwtService.verifyToken(token, async (error, decoded) => {
    if (error || typeof decoded === "undefined")
      return res.status(401).json({
        message: "Não autorizado: token invalido!",
      });

    const user = await userService.findByEmail((decoded as JwtPayload).email);
    req.user = user;
    next();
  });
}
