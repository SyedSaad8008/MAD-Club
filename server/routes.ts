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

  const httpServer = createServer(app);
  return httpServer;
}
