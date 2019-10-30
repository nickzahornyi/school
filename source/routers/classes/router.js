import express from 'express';
import passport from 'passport';

import { get, post } from './index';
import { getByHash, updateByHash, deleteByHash } from './hash';
import { enroll, expel } from './education';
import { authorization } from '../../utils';

export const router = express.Router();

router.get('/', get);
router.post('/', [passport.authenticate('jwt', { session: false }), authorization], post);

router.get('/:classHash', [passport.authenticate('jwt', { session: false }), authorization], getByHash);
router.put('/:classHash', [passport.authenticate('jwt', { session: false }), authorization], updateByHash);
router.delete('/:classHash', [passport.authenticate('jwt', { session: false }), authorization], deleteByHash);

router.post('/:classHash/enroll', [passport.authenticate('jwt', { session: false }), authorization], enroll);
router.post('/:classHash/expel', [passport.authenticate('jwt', { session: false }), authorization], expel);

export { router as classes };
