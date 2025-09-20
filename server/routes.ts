import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEventSchema, insertLeadershipSchema, insertClubInfoSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Events routes
  app.get("/api/events", async (req, res) => {
    try {
      const { status, category } = req.query;
      
      let events;
      if (status && typeof status === 'string') {
        events = await storage.getEventsByStatus(status);
      } else if (category && typeof category === 'string') {
        events = await storage.getEventsByCategory(category);
      } else {
        events = await storage.getAllEvents();
      }
      
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const event = await storage.getEventById(req.params.id);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });

  app.post("/api/events", async (req, res) => {
    try {
      const validatedData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(validatedData);
      res.status(201).json(event);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid event data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create event" });
      }
    }
  });

  app.patch("/api/events/:id", async (req, res) => {
    try {
      const validatedData = insertEventSchema.partial().parse(req.body);
      const event = await storage.updateEvent(req.params.id, validatedData);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid event data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to update event" });
      }
    }
  });

  app.delete("/api/events/:id", async (req, res) => {
    try {
      const deleted = await storage.deleteEvent(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete event" });
    }
  });

  // Leadership routes
  app.get("/api/leadership", async (req, res) => {
    try {
      const { category } = req.query;
      
      let leadership;
      if (category && typeof category === 'string') {
        leadership = await storage.getLeadershipByCategory(category);
      } else {
        leadership = await storage.getAllLeadership();
      }
      
      res.json(leadership);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch leadership" });
    }
  });

  app.get("/api/leadership/:id", async (req, res) => {
    try {
      const leadership = await storage.getLeadershipById(req.params.id);
      if (!leadership) {
        return res.status(404).json({ message: "Leadership member not found" });
      }
      res.json(leadership);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch leadership member" });
    }
  });

  app.post("/api/leadership", async (req, res) => {
    try {
      const validatedData = insertLeadershipSchema.parse(req.body);
      const leadership = await storage.createLeadership(validatedData);
      res.status(201).json(leadership);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid leadership data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create leadership member" });
      }
    }
  });

  app.patch("/api/leadership/:id", async (req, res) => {
    try {
      const validatedData = insertLeadershipSchema.partial().parse(req.body);
      const leadership = await storage.updateLeadership(req.params.id, validatedData);
      if (!leadership) {
        return res.status(404).json({ message: "Leadership member not found" });
      }
      res.json(leadership);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid leadership data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to update leadership member" });
      }
    }
  });

  app.delete("/api/leadership/:id", async (req, res) => {
    try {
      const deleted = await storage.deleteLeadership(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Leadership member not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete leadership member" });
    }
  });

  // Club info routes
  app.get("/api/club-info", async (req, res) => {
    try {
      const clubInfo = await storage.getClubInfo();
      if (!clubInfo) {
        return res.status(404).json({ message: "Club info not found" });
      }
      res.json(clubInfo);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch club info" });
    }
  });

  app.patch("/api/club-info", async (req, res) => {
    try {
      const validatedData = insertClubInfoSchema.partial().parse(req.body);
      const clubInfo = await storage.updateClubInfo(validatedData);
      res.json(clubInfo);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid club info data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to update club info" });
      }
    }
  });

  // Seed endpoint for initial data
  app.post("/api/seed", async (req, res) => {
    try {
      // Clear existing data if using memory storage
      const isMemoryStorage = storage.constructor.name === 'MemStorage';
      
      // Seed Club Info
      await storage.updateClubInfo({
        totalMembers: 150,
        eventsHosted: 25,
        projectsBuilt: 40,
        yearsActive: 3,
      });

      // Seed Events
      const sampleEvents = [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
      ];

      for (const event of sampleEvents) {
        await storage.createEvent(event);
      }

      // Seed Leadership
      const sampleLeadership = [
        // Club Leadership
        {
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
        },
        {
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
        },
        {
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
        },
        // Faculty Advisor
        {
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
        },
        // Group Leads
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
      ];

      for (const leader of sampleLeadership) {
        await storage.createLeadership(leader);
      }

      res.json({ message: "Database seeded successfully", storage: storage.constructor.name });
    } catch (error) {
      console.error('Seeding error:', error);
      res.status(500).json({ message: "Failed to seed database", error: error instanceof Error ? error.message : String(error) });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
