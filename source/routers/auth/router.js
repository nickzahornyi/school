import express from 'express';
import passport from 'passport';

import { login, logout, mainPage, callback } from './index';
import { authorization } from '../../utils';

export const router = express.Router();

router.get('/', mainPage);
router.post(
    '/auth/github',
    passport.authenticate('github', { scope: ['user:email'] }),
);

router.post('/login', login);
router.post('/logout', [authorization], logout);
router.get(
    '/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    callback,
);

export { router as auth };
