import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: timestamp("date").notNull(),
  location: text("location").notNull(),
  duration: text("duration").notNull(),
  category: text("category").notNull(), // workshop, hackathon, networking
  status: text("status").notNull(), // upcoming, completed, registration_open
  imageUrl: text("image_url").notNull(),
  attendees: integer("attendees"),
  rating: text("rating"),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const leadership = pgTable("leadership", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  role: text("role").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(), // club_leadership, faculty, group_leads
  linkedinUrl: text("linkedin_url"),
  githubUrl: text("github_url"),
  twitterUrl: text("twitter_url"),
  experience: text("experience"),
  publications: text("publications"),
  studentsMentored: text("students_mentored"),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const clubInfo = pgTable("club_info", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  totalMembers: integer("total_members").notNull(),
  eventsHosted: integer("events_hosted").notNull(),
  projectsBuilt: integer("projects_built").notNull(),
  yearsActive: integer("years_active").notNull(),
  updatedAt: timestamp("updated_at").default(sql`now()`).notNull(),
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
  createdAt: true,
});

export const insertLeadershipSchema = createInsertSchema(leadership).omit({
  id: true,
  createdAt: true,
});

export const insertClubInfoSchema = createInsertSchema(clubInfo).omit({
  id: true,
  updatedAt: true,
});

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export type InsertLeadership = z.infer<typeof insertLeadershipSchema>;
export type Leadership = typeof leadership.$inferSelect;

export type InsertClubInfo = z.infer<typeof insertClubInfoSchema>;
export type ClubInfo = typeof clubInfo.$inferSelect;
