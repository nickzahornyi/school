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
router.post('/', [passport.authenticate('jwt', { session: false }), authorization], post);

router.get('/:lessonHash', [passport.authenticate('jwt', { session: false }), authorization], getByHash);
router.put('/:lessonHash', [passport.authenticate('jwt', { session: false }), authorization], updateByHash);
router.delete('/:lessonHash', [passport.authenticate('jwt', { session: false }), authorization], deleteByHash);

router.post('/:lessonHash/videos', [passport.authenticate('jwt', { session: false }), authorization], addVideo);
router.post('/:lessonHash/keynotes', [passport.authenticate('jwt', { session: false }), authorization], addKeynote);
router.get('/:lessonHash/videos/:videoHash', [passport.authenticate('jwt', { session: false }), authorization], getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', [passport.authenticate('jwt', { session: false }), authorization], deleteVideoByHash);
router.get('/:lessonHash/keynotes/:keynoteHash', [passport.authenticate('jwt', { session: false }), authorization], getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', [passport.authenticate('jwt', { session: false }), authorization], deleteKeynoteByHash);

export { router as lessons };
