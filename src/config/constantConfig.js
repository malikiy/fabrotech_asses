import dotenv from 'dotenv';

dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const port = process.env.SERVER_PORT;
const jwtExpiryTime = process.env.JWT_TOKEN_EXPIRED;
const jwtSecret = process.env.JWT_SECRET;
const cors = process.env.CORS || '*';
const environment = process.env.ENVIRONMENT

export { 
    port,
    jwtExpiryTime,
    jwtSecret,
    cors,
    environment
}