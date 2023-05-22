import nodemailer from "nodemailer";
import { Request, Response } from "express";

export const mailController = {
  sendEmail: async (req: Request, res: Response) => {
    const { email, message } = req.body;

    try {
      const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        secure: true,
        auth: {
          user: "alanimegamer@gmail.com",
          pass: "ezdqvikuwlkoyoxl",
        },
      });

      await transport.sendMail({
        from: "alanimegamer@gmail.com",
        to: "alan_s_pereira@hotmail.com",
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
