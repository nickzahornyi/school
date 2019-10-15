import express from "express";

import { get, post } from "./index";
import { getByHash } from "./hash";

export const router = express.Router();

router.get("/", get);
router.post("/", post);

router.get("/:userHash", getByHash);
router.put("/:userHash", updateByHash);
router.delete("/:userHash", deleteByHash);

export { router as users };
