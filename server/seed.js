import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Profile from './models/Profile.js';
import profileData from './data/profile.js';

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);
await Profile.deleteMany({});
await Profile.create(profileData);
console.log('Profile seeded');
await mongoose.disconnect();
