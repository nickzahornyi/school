import express from 'express';

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
router.post('/', [authorization], post);

router.get('/:lessonHash', [authorization], getByHash);
router.put('/:lessonHash', [authorization], updateByHash);
router.delete('/:lessonHash', [authorization], deleteByHash);

router.post('/:lessonHash/videos', [authorization], addVideo);
router.post('/:lessonHash/keynotes', [authorization], addKeynote);
router.get('/:lessonHash/videos/:videoHash', [authorization], getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', [authorization], deleteVideoByHash);
router.get('/:lessonHash/keynotes/:keynoteHash', [authorization], getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', [authorization], deleteKeynoteByHash);

export { router as lessons };
