import express from 'express';
import { userAuth } from '../middleware/auth.js';
import { 
    publishScore,
    getTopTenScore
} from '../controller/scoreController.js';

var router = express.Router();

router
.route('/score/publish')
.post(
    userAuth,
    publishScore
);

router
.route('/score/topten')
.get(
    getTopTenScore
);

export { router }