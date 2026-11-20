import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    name: String,
    title: String,
    tagline: String,
    summary: String,
    email: String,
    phone: String,
    location: String,
    linkedin: String,
    github: String,
    photo: String,
    resume: String,
    stats: [{ label: String, value: String }],
    skills: [{ category: String, items: [String] }],
    education: [{ institution: String, degree: String, period: String, score: String }],
    projects: [{ title: String, year: String, tag: String, tech: [String], description: String, link: String }],
    experience: [{ role: String, company: String, description: String }],
    certifications: [{ name: String, issuer: String }],
    achievements: [String],
  },
  { timestamps: true }
);

export default mongoose.model('Profile', profileSchema);
