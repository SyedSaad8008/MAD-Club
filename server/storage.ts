import { type Event, type InsertEvent, type Leadership, type InsertLeadership, type ClubInfo, type InsertClubInfo, events, leadership, clubInfo } from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  // Events
  getAllEvents(): Promise<Event[]>;
  getEventById(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: string, event: Partial<InsertEvent>): Promise<Event | undefined>;
  deleteEvent(id: string): Promise<boolean>;
  getEventsByStatus(status: string): Promise<Event[]>;
  getEventsByCategory(category: string): Promise<Event[]>;

  // Leadership
  getAllLeadership(): Promise<Leadership[]>;
  getLeadershipById(id: string): Promise<Leadership | undefined>;
  createLeadership(leadership: InsertLeadership): Promise<Leadership>;
  updateLeadership(id: string, leadership: Partial<InsertLeadership>): Promise<Leadership | undefined>;
  deleteLeadership(id: string): Promise<boolean>;
  getLeadershipByCategory(category: string): Promise<Leadership[]>;

  // Club Info
  getClubInfo(): Promise<ClubInfo | undefined>;
  updateClubInfo(clubInfo: Partial<InsertClubInfo>): Promise<ClubInfo>;
}

export class MemStorage implements IStorage {
  private events: Map<string, Event>;
  private leadership: Map<string, Leadership>;
  private clubInfo: ClubInfo | undefined;

  constructor() {
    this.events = new Map();
    this.leadership = new Map();
    this.clubInfo = undefined;
    this.initializeData();
  }

  private initializeData() {
    // Initialize with sample club info
    this.clubInfo = {
      id: randomUUID(),
      totalMembers: 150,
      eventsHosted: 25,
      projectsBuilt: 40,
      yearsActive: 3,
      updatedAt: new Date(),
    };
    
    // Add sample events if empty
    this.initializeSampleData();
  }
  
  private initializeSampleData() {
    if (this.events.size === 0) {
      const sampleEvents = [
        {
          id: randomUUID(),
          title: "Mobile App Development Workshop",
          description: "Learn the fundamentals of building mobile apps with React Native. Perfect for beginners!",
          date: new Date("2024-10-15T14:00:00Z"),
          location: "Computer Science Building - Room 201",
          duration: "3 hours",
          category: "workshop",
          status: "upcoming",
          imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          attendees: null,
          rating: null,
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          title: "Hack for Good 2024",
          description: "48-hour hackathon focused on building apps that solve social problems and make a positive impact.",
          date: new Date("2024-11-08T18:00:00Z"),
          location: "Innovation Lab",
          duration: "48 hours",
          category: "hackathon",
          status: "registration_open",
          imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          attendees: null,
          rating: null,
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          title: "iOS Development Deep Dive",
          description: "Advanced workshop covering SwiftUI, Core Data, and publishing to the App Store.",
          date: new Date("2024-09-20T16:00:00Z"),
          location: "Tech Hub - Room 105",
          duration: "4 hours",
          category: "workshop",
          status: "completed",
          imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          attendees: 45,
          rating: "4.8/5",
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          title: "Flutter vs React Native",
          description: "Comparative session exploring the pros and cons of different cross-platform frameworks.",
          date: new Date("2024-08-25T15:00:00Z"),
          location: "Main Auditorium",
          duration: "2 hours",
          category: "networking",
          status: "completed",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          attendees: 78,
          rating: "4.6/5",
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          title: "Mobile UI/UX Design Workshop",
          description: "Design beautiful and user-friendly mobile interfaces using Figma and design principles.",
          date: new Date("2024-12-05T13:00:00Z"),
          location: "Design Studio",
          duration: "3 hours",
          category: "workshop",
          status: "upcoming",
          imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
          attendees: null,
          rating: null,
          createdAt: new Date(),
        },
      ];
      
      sampleEvents.forEach(event => this.events.set(event.id, event));
    }
    
    if (this.leadership.size === 0) {
      const sampleLeadership = [
        {
          id: randomUUID(),
          name: "Alex Chen",
          role: "Club President",
          description: "Computer Science senior with 3+ years of mobile development experience. Led multiple successful app launches.",
          imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          category: "club_leadership",
          linkedinUrl: "https://linkedin.com/in/alexchen",
          githubUrl: "https://github.com/alexchen",
          twitterUrl: null,
          experience: null,
          publications: null,
          studentsMentored: null,
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          name: "Sarah Rodriguez",
          role: "Technical Lead",
          description: "Full-stack developer specializing in React Native and Node.js. Passionate about mentoring new developers.",
          imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          category: "club_leadership",
          linkedinUrl: "https://linkedin.com/in/sarahrodriguez",
          githubUrl: "https://github.com/sarahrodriguez",
          twitterUrl: "https://twitter.com/sarahcodes",
          experience: null,
          publications: null,
          studentsMentored: null,
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          name: "David Kim",
          role: "Events Coordinator",
          description: "Organizing engaging workshops and hackathons. Background in project management and community building.",
          imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          category: "club_leadership",
          linkedinUrl: "https://linkedin.com/in/davidkim",
          githubUrl: null,
          twitterUrl: null,
          experience: null,
          publications: null,
          studentsMentored: null,
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          name: "Dr. Emily Foster",
          role: "Faculty Advisor",
          description: "Associate Professor of Computer Science with expertise in mobile computing and human-computer interaction. Research focuses on accessibility in mobile applications.",
          imageUrl: "https://images.unsplash.com/photo-1559209172-6fd6d8d53614?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          category: "faculty",
          linkedinUrl: "https://linkedin.com/in/emilyfoster",
          githubUrl: "https://github.com/emilyfoster",
          twitterUrl: null,
          experience: "12",
          publications: "35+",
          studentsMentored: "200+",
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          name: "Maya Patel",
          role: "Media Handle Lead",
          description: "Managing social media presence and digital marketing strategies for the club.",
          imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          category: "group_leads",
          linkedinUrl: "https://linkedin.com/in/mayapatel",
          githubUrl: null,
          twitterUrl: "https://twitter.com/mayapatel",
          experience: null,
          publications: null,
          studentsMentored: null,
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          name: "Jake Thompson",
          role: "Graphic Designer Lead",
          description: "Creating visual content, logos, and promotional materials for club events and activities.",
          imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          category: "group_leads",
          linkedinUrl: "https://linkedin.com/in/jakethompson",
          githubUrl: null,
          twitterUrl: null,
          experience: null,
          publications: null,
          studentsMentored: null,
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          name: "Lisa Wang",
          role: "Documentation Lead",
          description: "Maintaining project documentation, meeting notes, and knowledge base for club resources.",
          imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          category: "group_leads",
          linkedinUrl: "https://linkedin.com/in/lisawang",
          githubUrl: "https://github.com/lisawang",
          twitterUrl: null,
          experience: null,
          publications: null,
          studentsMentored: null,
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          name: "Carlos Mendez",
          role: "Operations Lead",
          description: "Coordinating logistics, room bookings, and operational aspects of club activities.",
          imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          category: "group_leads",
          linkedinUrl: "https://linkedin.com/in/carlosmendez",
          githubUrl: null,
          twitterUrl: null,
          experience: null,
          publications: null,
          studentsMentored: null,
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          name: "Priya Sharma",
          role: "Photography Lead",
          description: "Capturing and documenting club events, creating visual content for social media and archives.",
          imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          category: "group_leads",
          linkedinUrl: "https://linkedin.com/in/priyasharma",
          githubUrl: null,
          twitterUrl: "https://twitter.com/priyaphotos",
          experience: null,
          publications: null,
          studentsMentored: null,
          createdAt: new Date(),
        },
        {
          id: randomUUID(),
          name: "Ryan Johnson",
          role: "Marketing Lead",
          description: "Developing marketing strategies and outreach programs to grow club membership and engagement.",
          imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
          category: "group_leads",
          linkedinUrl: "https://linkedin.com/in/ryanjohnson",
          githubUrl: null,
          twitterUrl: "https://twitter.com/ryanjohnson",
          experience: null,
          publications: null,
          studentsMentored: null,
          createdAt: new Date(),
        },
      ];
      
      sampleLeadership.forEach(leader => this.leadership.set(leader.id, leader));
    }
  }

  // Events methods
  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getEventById(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = {
      ...insertEvent,
      id,
      createdAt: new Date(),
      attendees: insertEvent.attendees ?? null,
      rating: insertEvent.rating ?? null,
    };
    this.events.set(id, event);
    return event;
  }

  async updateEvent(id: string, updates: Partial<InsertEvent>): Promise<Event | undefined> {
    const event = this.events.get(id);
    if (!event) return undefined;

    const updatedEvent = { ...event, ...updates };
    this.events.set(id, updatedEvent);
    return updatedEvent;
  }

  async deleteEvent(id: string): Promise<boolean> {
    return this.events.delete(id);
  }

  async getEventsByStatus(status: string): Promise<Event[]> {
    return Array.from(this.events.values())
      .filter(event => event.status === status)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  async getEventsByCategory(category: string): Promise<Event[]> {
    return Array.from(this.events.values())
      .filter(event => event.category === category)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Leadership methods
  async getAllLeadership(): Promise<Leadership[]> {
    return Array.from(this.leadership.values()).sort(
      (a, b) => a.name.localeCompare(b.name)
    );
  }

  async getLeadershipById(id: string): Promise<Leadership | undefined> {
    return this.leadership.get(id);
  }

  async createLeadership(insertLeadership: InsertLeadership): Promise<Leadership> {
    const id = randomUUID();
    const leadership: Leadership = {
      ...insertLeadership,
      id,
      createdAt: new Date(),
      linkedinUrl: insertLeadership.linkedinUrl ?? null,
      githubUrl: insertLeadership.githubUrl ?? null,
      twitterUrl: insertLeadership.twitterUrl ?? null,
      experience: insertLeadership.experience ?? null,
      publications: insertLeadership.publications ?? null,
      studentsMentored: insertLeadership.studentsMentored ?? null,
    };
    this.leadership.set(id, leadership);
    return leadership;
  }

  async updateLeadership(id: string, updates: Partial<InsertLeadership>): Promise<Leadership | undefined> {
    const leadership = this.leadership.get(id);
    if (!leadership) return undefined;

    const updatedLeadership = { ...leadership, ...updates };
    this.leadership.set(id, updatedLeadership);
    return updatedLeadership;
  }

  async deleteLeadership(id: string): Promise<boolean> {
    return this.leadership.delete(id);
  }

  async getLeadershipByCategory(category: string): Promise<Leadership[]> {
    return Array.from(this.leadership.values())
      .filter(leadership => leadership.category === category)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  // Club Info methods
  async getClubInfo(): Promise<ClubInfo | undefined> {
    return this.clubInfo;
  }

  async updateClubInfo(updates: Partial<InsertClubInfo>): Promise<ClubInfo> {
    if (!this.clubInfo) {
      this.clubInfo = {
        id: randomUUID(),
        totalMembers: 0,
        eventsHosted: 0,
        projectsBuilt: 0,
        yearsActive: 0,
        updatedAt: new Date(),
        ...updates,
      };
    } else {
      this.clubInfo = {
        ...this.clubInfo,
        ...updates,
        updatedAt: new Date(),
      };
    }
    return this.clubInfo;
  }
}

// Supabase Storage Implementation
export class SupabaseStorage implements IStorage {
  private db: any;

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is required');
    }
    const sql = neon(process.env.DATABASE_URL);
    this.db = drizzle(sql);
  }

  // Events methods
  async getAllEvents(): Promise<Event[]> {
    const result = await this.db.select().from(events).orderBy(events.date);
    return result;
  }

  async getEventById(id: string): Promise<Event | undefined> {
    const result = await this.db.select().from(events).where(eq(events.id, id));
    return result[0];
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const result = await this.db.insert(events).values(insertEvent).returning();
    return result[0];
  }

  async updateEvent(id: string, updates: Partial<InsertEvent>): Promise<Event | undefined> {
    const result = await this.db.update(events).set(updates).where(eq(events.id, id)).returning();
    return result[0];
  }

  async deleteEvent(id: string): Promise<boolean> {
    const result = await this.db.delete(events).where(eq(events.id, id));
    return result.rowCount > 0;
  }

  async getEventsByStatus(status: string): Promise<Event[]> {
    const result = await this.db.select().from(events).where(eq(events.status, status)).orderBy(events.date);
    return result;
  }

  async getEventsByCategory(category: string): Promise<Event[]> {
    const result = await this.db.select().from(events).where(eq(events.category, category)).orderBy(events.date);
    return result;
  }

  // Leadership methods
  async getAllLeadership(): Promise<Leadership[]> {
    const result = await this.db.select().from(leadership).orderBy(leadership.name);
    return result;
  }

  async getLeadershipById(id: string): Promise<Leadership | undefined> {
    const result = await this.db.select().from(leadership).where(eq(leadership.id, id));
    return result[0];
  }

  async createLeadership(insertLeadership: InsertLeadership): Promise<Leadership> {
    const result = await this.db.insert(leadership).values(insertLeadership).returning();
    return result[0];
  }

  async updateLeadership(id: string, updates: Partial<InsertLeadership>): Promise<Leadership | undefined> {
    const result = await this.db.update(leadership).set(updates).where(eq(leadership.id, id)).returning();
    return result[0];
  }

  async deleteLeadership(id: string): Promise<boolean> {
    const result = await this.db.delete(leadership).where(eq(leadership.id, id));
    return result.rowCount > 0;
  }

  async getLeadershipByCategory(category: string): Promise<Leadership[]> {
    const result = await this.db.select().from(leadership).where(eq(leadership.category, category)).orderBy(leadership.name);
    return result;
  }

  // Club Info methods
  async getClubInfo(): Promise<ClubInfo | undefined> {
    const result = await this.db.select().from(clubInfo).limit(1);
    return result[0];
  }

  async updateClubInfo(updates: Partial<InsertClubInfo>): Promise<ClubInfo> {
    const existing = await this.getClubInfo();
    if (existing) {
      const result = await this.db.update(clubInfo).set(updates).where(eq(clubInfo.id, existing.id)).returning();
      return result[0];
    } else {
      const result = await this.db.insert(clubInfo).values(updates).returning();
      return result[0];
    }
  }
}

// For now, use memory storage with sample data
// TODO: Switch to Supabase when database connection is properly configured
export const storage = new MemStorage();
console.log('Using memory storage with sample data');
