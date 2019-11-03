import express from 'express';
import passport from 'passport';

import { get, post } from './index';
import { getByHash, updateByHash, deleteByHash } from './hash';
import {
    addVideo,
    addKeynote,
    getVideoByHash,
    deleteVideoByHash,
    getKeynoteByHash,
    deleteKeynoteByHash,
} from './education';
import { authorization } from '../../utils';

export const router = express.Router();

router.get('/', get);
router.post('/', [passport.authenticate('github', { scope: ['user:email'] }), authorization], post);

router.get('/:lessonHash', [passport.authenticate('github', { scope: ['user:email'] }), authorization], getByHash);
router.put('/:lessonHash', [passport.authenticate('github', { scope: ['user:email'] }), authorization], updateByHash);
router.delete('/:lessonHash', [passport.authenticate('github', { scope: ['user:email'] }), authorization], deleteByHash);

router.post('/:lessonHash/videos', [passport.authenticate('github', { scope: ['user:email'] }), authorization], addVideo);
router.post('/:lessonHash/keynotes', [passport.authenticate('github', { scope: ['user:email'] }), authorization], addKeynote);
router.get('/:lessonHash/videos/:videoHash', [passport.authenticate('github', { scope: ['user:email'] }), authorization], getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', [passport.authenticate('github', { scope: ['user:email'] }), authorization], deleteVideoByHash);
router.get('/:lessonHash/keynotes/:keynoteHash', [passport.authenticate('github', { scope: ['user:email'] }), authorization], getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', [passport.authenticate('github', { scope: ['user:email'] }), authorization], deleteKeynoteByHash);

export { router as lessons };
