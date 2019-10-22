import express from 'express';

import { login, logout } from './index';

export const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);

export { router as auth };
