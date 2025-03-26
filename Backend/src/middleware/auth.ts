import { auth } from "express-oauth2-jwt-bearer";

//whenever add jwt fxn to as middleware --check authorization header (aka Bearer Token)--connects to server and request user
export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL, 
    tokenSigningAlg: 'RS256'
  });