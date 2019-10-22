import express from 'express';

import { login, logout } from './index';
import { authorization } from '../../utils';

export const router = express.Router();

router.post('/login', login);
router.post('/logout', [authorization], logout);

export { router as auth };
