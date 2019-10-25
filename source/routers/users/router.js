import express from 'express';

import { get, post } from './index';
import { getByHash, updateByHash, deleteByHash } from './hash';
import { limiter, validator } from '../../utils';
import { createUser } from '../../schemas';
import { authorization } from '../../utils';

export const router = express.Router();

router.get('/', [authorization, limiter(2, 1000 * 60)], get);
router.post('/', [validator(createUser)], post);

router.get('/:userHash', [authorization], getByHash);
router.put('/:userHash', [authorization], updateByHash);
router.delete('/:userHash', [authorization], deleteByHash);

export { router as users };
