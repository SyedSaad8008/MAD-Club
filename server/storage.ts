import { type Event, type InsertEvent, type Leadership, type InsertLeadership, type ClubInfo, type InsertClubInfo } from "@shared/schema";
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

export const storage = new MemStorage();
