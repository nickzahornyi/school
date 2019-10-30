import express from 'express';
import passport from 'passport';

import { login, logout } from './index';
import { authorization, authentication } from '../../utils';

export const router = express.Router();

router.post('/login', [authentication], login);
router.post('/logout', [passport.authenticate('jwt', { session: false }), authorization], logout);

export { router as auth };
