/**
 * Single source of truth for portfolio skills.
 * Used by BoxServices.vue (About section) and WallSkills.vue (landing page wall).
 */

export interface Skill {
  name: string;
  category: string;
}

export const PORTFOLIO_SKILLS: readonly Skill[] = [
  { name: "Python", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "HTML5", category: "Web" },
  { name: "CSS3", category: "Web" },
  { name: "AI API Integration", category: "AI" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Cloud" },
  { name: "Git", category: "Tools" },
  { name: "Railway", category: "Hosting" },
  { name: "Netlify", category: "Hosting" },
] as const;
