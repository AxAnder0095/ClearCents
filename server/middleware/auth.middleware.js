import "dotenv/config";
import { expressjwt as jwt } from "express-jwt";
import jwksRsa from "jwks-rsa";

const auth0Domain = process.env.AUTH0_DOMAIN;
const auth0Audience = process.env.AUTH0_AUDIENCE;

if (!auth0Domain || !auth0Audience) {
  throw new Error("Missing AUTH0_DOMAIN or AUTH0_AUDIENCE in server environment variables");
}

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${auth0Domain}/.well-known/jwks.json`,
  }),
  audience: auth0Audience,
  issuer: `https://${auth0Domain}/`,
  algorithms: ["RS256"],
});
