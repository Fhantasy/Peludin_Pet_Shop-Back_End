import nodemailer from "nodemailer";
import { Request, Response } from "express";
import {
  EMAIL_RECEIVER,
  EMAIL_SENDER,
  PASS_EMAIL_SENDER,
} from "../config/enviroment";

export const mailController = {
  sendEmail: async (req: Request, res: Response) => {
    const { email, message } = req.body;

    try {
      const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        secure: true,
        auth: {
          user: EMAIL_SENDER,
          pass: PASS_EMAIL_SENDER,
        },
      });

      await transport.sendMail({
        from: EMAIL_SENDER,
        to: EMAIL_RECEIVER,
        subject: `Mensagem de contato de ${email}`,
        text: typeof message === "string" ? message : message?.toString(),
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(401).json(error.message);
      }
      return res.status(401).json(error);
    }

    return res.status(200).send();
  },
};
