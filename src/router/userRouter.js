import express from 'express';
import { 
    register,
    login
} from '../controller/userController.js';

var router = express.Router();

router
.route('/user/register')
.post(
    register
);

router
.route('/user/login')
.post(
    login
);

export { router }