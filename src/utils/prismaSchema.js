import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const userTable = prisma.user;
const scoreTable = prisma.player_score;

export {
    prisma,
    userTable,
    scoreTable
}