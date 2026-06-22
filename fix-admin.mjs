import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const p = new PrismaClient();
const hash = await bcrypt.hash("RankNex@2024", 12);
await p.user.upsert({where:{username:"admin"}, update:{password:hash}, create:{username:"admin",password:hash,role:"ADMIN"}});
console.log("Admin password fixed!");
await p.$disconnect();
