import express from 'express';
import 'express-async-errors';
import auth from './auth.route';

const router = express.Router();

router.use(auth);

export default router;