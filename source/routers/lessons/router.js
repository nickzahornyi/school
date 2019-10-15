import express from "express";

import { get, post } from "./index";
import { getByHash } from "./hash";

export const router = express.Router();

router.get("/", get);
router.post("/", post);

router.get("/:lessonHash", getByHash);
router.put("/:lessonHash", updateByHash);
router.delete("/:lessonHash", deleteByHash);

export { router as users };
