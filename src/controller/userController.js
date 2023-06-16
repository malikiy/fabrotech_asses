import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { userTable } from "../utils/prismaSchema.js";
import { jwtExpiryTime, jwtSecret } from '../config/constantConfig.js';
import * as logger from '../../src/logger/logger.js';

const register = async (req, res, next) => {
    try {
        const checkDuplicate = await userTable.findFirst({
            where: {
                username: req.body.username
            }
        })
        if(checkDuplicate) return res.status(400).send({status: 400, message: 'username already exist'});
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        req.body.id = uuidv4();
        req.body.created_at = new Date()
        req.body.password = hashPassword
        await userTable.create({
            data: req.body
        })
        logger.default.info(`success`)
        return res.status(200).send({status: 200, message: "create user success"})
    } catch (error) {
        logger.default.info(`error`)
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal server error'})
    }
}

const login = async(req, res, next) => {
    try {
        const checkUsername = await userTable.findFirst({
            where: {
                username: req.body.username
            }
        })
        if(!checkUsername) return res.status(400).send({status: 400, message: 'user belum terdaftar'});
        let match = await bcrypt.compare(req.body.password, checkUsername.password);
        if(!match) return res.status(200).send({status: 200, message: "password yang anda masukan salah"});
        let userData = {
            id: checkUsername.id,
            name: checkUsername.username,
            role: checkUsername.role
        }
        const signToken = jwt.sign(userData, jwtSecret, { expiresIn: jwtExpiryTime });
        logger.default.info(`success`)
        return res.status(200).send({status: 200, message: "login berhasil", data: {userData: userData, token: signToken}})
    } catch (error) {
        logger.default.info(`error`)
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal server error'})
    }
}

export { 
    register,
    login 
}