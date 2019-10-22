import express from 'express';

import { get, post } from './index';
import { getByHash, updateByHash, deleteByHash } from './hash';
import { limiter, validator } from '../../utils';
import { createUser } from '../../schemas';

export const router = express.Router();

router.get('/', [limiter(2, 1000 * 60)], get);
router.post('/', [validator(createUser)], post);

router.get('/:userHash', getByHash);
router.put('/:userHash', updateByHash);
router.delete('/:userHash', deleteByHash);

export { router as users };
