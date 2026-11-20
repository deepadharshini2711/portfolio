import { Router } from 'express';
import Message from '../models/Message.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await Message.create({ name, email, message });
    res.status(201).json({ success: true, message: 'Thanks! I will get back to you soon.' });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Please provide a valid name, email and message.' });
  }
});

// List messages (protected by ADMIN_KEY header)
router.get('/', async (req, res) => {
  if (req.get('x-admin-key') !== process.env.ADMIN_KEY) return res.status(401).json({ error: 'Unauthorized' });
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

export default router;
