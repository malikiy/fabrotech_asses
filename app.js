import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { port } from './src/config/constantConfig.js';
import rateLimit from 'express-rate-limit'
import * as logger from './src/logger/logger.js';


//call for routers
import { router as userRouter } from './src/router/userRouter.js'
import { router as scoreRouter } from './src/router/scoreRouter.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

let baseUrl = '/api'

//prefix declaration
app.use(`${baseUrl}/v1`,
userRouter,
scoreRouter
);

app.use("*", (req, res, next) => {
  logger.default.error('Url is not found')
  res.json({
      "message":"Make sure url is correct!!!"
  }).status(500)
});

app.listen(port, () => {
    console.log('service started on port', port);
})