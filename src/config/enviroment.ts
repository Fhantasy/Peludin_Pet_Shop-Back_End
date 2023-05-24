import * as env from "env-var";

export const DATABASE_URL = env.get("DATABASE_URL").required().asString();
export const ADMINJS_COOKIE_PASS = env.get("ADMINJS_COOKIE_PASS").required().asString();
export const JWT_KEY = env.get("JWT_KEY").required().asString();
export const EMAIL_SENDER = env.get("EMAIL_SENDER").required().asString();
export const PASS_EMAIL_SENDER = env.get("PASS_EMAIL_SENDER").required().asString();
export const EMAIL_RECEIVER = env.get("EMAIL_RECEIVER").required().asString();
