import { v4 as uuidv4 } from 'uuid';
import { scoreTable } from '../utils/prismaSchema.js';
import * as logger from '../../src/logger/logger.js';

const publishScore = async(req, res, next) => {
    try {
        req.body.id = uuidv4()
        req.body.created_at = new Date()
        const createScore = await scoreTable.create({
            data: req.body
        })
        logger.default.info(`success`)
        return res.status(200).send({status: 200, message: "success", data: createScore})
    } catch (error) {
        logger.default.info(`error`)
        console.log(error);
        return res.status(200).send({status: 200, message: "create user success"})
    }
}

const getTopTenScore = async(req, res, next) => {
    try {
        const getScore = await scoreTable.findMany({
            take: 10,
            orderBy: {
                score: 'desc'
            }
        })
        logger.default.info(`success`)
        return res.status(200).send({status: 200, message: "success get top 10 score", data: getScore})
    } catch (error) {
        console.log(error);
        logger.default.info(`error`)
        return res.status(200).send({status: 200, message: "create user success"})
    }
}

export { publishScore, getTopTenScore }