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

export const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:lessonHash', getByHash);
router.put('/:lessonHash', updateByHash);
router.delete('/:lessonHash', deleteByHash);

router.post('/:lessonHash/videos', addVideo);
router.post('/:lessonHash/keynotes', addKeynote);
router.get('/:lessonHash/videos/:videoHash', getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', deleteVideoByHash);
router.get('/:lessonHash/keynotes/:keynoteHash', getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', deleteKeynoteByHash);

export { router as lessons };
