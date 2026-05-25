import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UsuarioPayload {
  id: number;
  email: string;
  role: string;
}

interface AuthRequest extends Request {
  usuario?: UsuarioPayload;
}

function autenticar(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader =
    req.headers["authorization"];

  const token =
    authHeader &&
    authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      erro: "Token não fornecido.",
    });
  }

  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as UsuarioPayload;

    req.usuario = payload;

    next();
  } catch (err) {
    return res.status(403).json({
      erro: "Token inválido ou expirado.",
    });
  }
}

function apenasAdmin(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  if (req.usuario?.role !== "admin") {
    return res.status(403).json({
      erro:
        "Acesso restrito a administradores.",
    });
  }

  next();
}

export {
  autenticar,
  apenasAdmin,
  AuthRequest,
};