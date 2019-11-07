import express from 'express';
import passport from 'passport';

import { login, logout } from './index';
import { authorization } from '../../utils';

export const router = express.Router();

router.post('/login', login);
router.post('/logout', [passport.authenticate('jwt', { session: false }), authorization], logout);

export { router as auth };
