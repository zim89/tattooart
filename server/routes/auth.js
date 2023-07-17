import { Router } from 'express';
import { login, profile, register } from '../controllers/auth.js';
import { checkAuth } from '../middleware/checkAuth.js';

const router = new Router();

//Registration
router.post('/register', register);

//Login
router.post('/login', login);

//Profile
router.get('/profile', checkAuth, profile);

export default router;
