import { CookieOptions } from "express";

export const cookieOption:CookieOptions={
  httpOnly: true,
  secure: process.env.ENVIRONMENT==="dev"?false:true,
  sameSite: "lax",
  maxAge: 4 * 60 * 60 * 1000,
}