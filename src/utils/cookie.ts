import { CookieOptions } from "express";

export const cookieOption:CookieOptions={
  httpOnly: true,
  secure: process.env.ENVIRONMENT==="dev"?false:true,
  sameSite: process.env.ENVIRONMENT==="dev"?"lax":"none",
  maxAge: 4 * 60 * 60 * 1000,
}