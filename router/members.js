import { Router } from "express";
import {allMembers, typeOfMembership, amountByMember} from "../controllers/members/read.js";
import {create,createMany} from "../controllers/members/create.js";

const router = Router();

router.get("/all", allMembers)
router.get("/membership/:type", typeOfMembership)
router.get('/amount/:minAmount/:maxAmount', amountByMember);
router.post("/create", create)
router.post("/createMany", createMany)

export default router;