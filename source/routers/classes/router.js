import express from 'express';
import passport from 'passport';

import { get, post } from './index';
import { getByHash, updateByHash, deleteByHash } from './hash';
import { enroll, expel } from './education';
import { authorization } from '../../utils';

export const router = express.Router();

router.get('/', get);
router.post('/', [passport.authenticate('github', { scope: ['user:email'] }), authorization], post);

router.get('/:classHash', [passport.authenticate('github', { scope: ['user:email'] }), authorization], getByHash);
router.put('/:classHash', [passport.authenticate('github', { scope: ['user:email'] }), authorization], updateByHash);
router.delete('/:classHash', [passport.authenticate('github', { scope: ['user:email'] }), authorization], deleteByHash);

router.post('/:classHash/enroll', [passport.authenticate('github', { scope: ['user:email'] }), authorization], enroll);
router.post('/:classHash/expel', [passport.authenticate('github', { scope: ['user:email'] }), authorization], expel);

export { router as classes };
