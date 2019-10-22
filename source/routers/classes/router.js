import express from 'express';

import { get, post } from './index';
import { getByHash, updateByHash, deleteByHash } from './hash';
import { enroll, expel } from './education';

export const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:classHash', getByHash);
router.put('/:classHash', updateByHash);
router.delete('/:classHash', deleteByHash);

router.post('/:classHash/enroll', enroll);
router.post('/:classHash/expel', expel);

export { router as classes };
