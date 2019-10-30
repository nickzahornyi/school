import express from 'express';
import passport from 'passport';

import { get, post } from './index';
import { getByHash, updateByHash, deleteByHash } from './hash';
import { limiter, validator } from '../../utils';
import { createUser } from '../../schemas';
import { authorization } from '../../utils';

export const router = express.Router();

router.get('/', [passport.authenticate('jwt', { session: false }), authorization, limiter(2, 1000 * 60)], get);
router.post('/', [validator(createUser)], post);

router.get('/:userHash', [passport.authenticate('jwt', { session: false }), authorization], getByHash);
router.put('/:userHash', [passport.authenticate('jwt', { session: false }), authorization], updateByHash);
router.delete('/:userHash', [passport.authenticate('jwt', { session: false }), authorization], deleteByHash);

export { router as users };
