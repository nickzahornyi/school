import express from 'express';

import { get, post } from './index';
import { getByHash, updateByHash, deleteByHash } from './hash';
import { enroll, expel } from './education';
import { authorization } from '../../utils';

export const router = express.Router();

router.get('/', get);
router.post('/', [authorization], post);

router.get('/:classHash', [authorization], getByHash);
router.put('/:classHash', [authorization], updateByHash);
router.delete('/:classHash', [authorization], deleteByHash);

router.post('/:classHash/enroll', [authorization], enroll);
router.post('/:classHash/expel', [authorization], expel);

export { router as classes };
