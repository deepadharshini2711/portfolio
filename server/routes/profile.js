import { Router } from 'express';
import Profile from '../models/Profile.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const profile = await Profile.findOne().lean();
    if (!profile) return res.status(404).json({ error: 'Profile not found. Run `npm run seed`.' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update profile (protected by ADMIN_KEY header)
router.put('/', async (req, res) => {
  if (req.get('x-admin-key') !== process.env.ADMIN_KEY) return res.status(401).json({ error: 'Unauthorized' });
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
