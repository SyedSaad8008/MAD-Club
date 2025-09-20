# Mobile App Development Club Website

## Overview

This is a full-stack web application for a Mobile App Development (MAD) Club website. The application serves as a comprehensive platform to showcase club activities, events, leadership team, and provide information about the organization. It features a modern React frontend with TypeScript, a Node.js/Express backend, and PostgreSQL database integration through Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript and follows a component-based architecture:
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui for consistent design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for fast development and optimized production builds

The application uses a clean separation of concerns with dedicated directories for components, pages, hooks, and utilities. The UI follows a design system approach with reusable components and consistent styling patterns.

### Backend Architecture
The backend follows a RESTful API design with Express.js:
- **Runtime**: Node.js with ES modules
- **Framework**: Express.js for HTTP server and API endpoints
- **API Design**: REST endpoints for events, leadership, and club information
- **Error Handling**: Centralized error handling middleware
- **Logging**: Custom request/response logging for API endpoints
- **Development**: Hot reloading with Vite integration in development mode

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless hosting
- **Schema**: Well-defined table schemas for events, leadership, and club information
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Validation**: Zod schemas for runtime type validation and API request/response validation

### Data Models
The application manages three main entities:
1. **Events**: Workshop and hackathon information with status tracking
2. **Leadership**: Team member profiles with roles and social links
3. **Club Info**: General statistics and metrics about the club

### Development Tools
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier (implied through shadcn/ui setup)
- **Development Experience**: Hot reloading, error overlays, and development banners for Replit environment
- **Build Process**: Separate client and server builds with optimized production output

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Hookform Resolvers for form handling

### UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent icon system
- **Utilities**: Class Variance Authority (CVA) and clsx for conditional styling

### Database and Backend
- **Database**: Neon Database (PostgreSQL serverless)
- **ORM**: Drizzle ORM with Zod integration for schema validation
- **Session Storage**: PostgreSQL session store with connect-pg-simple
- **Date Handling**: date-fns for date manipulation

### Development and Build Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full TypeScript support across client and server
- **Development**: Replit-specific plugins for enhanced development experience
- **Runtime**: tsx for TypeScript execution in development

### Third-Party Services
The application is designed to integrate with:
- **Neon Database**: Serverless PostgreSQL hosting
- **Image Hosting**: Unsplash for placeholder images (can be replaced with custom hosting)
- **Font Services**: Google Fonts for typography (Inter, Poppins)

The architecture supports easy deployment to various platforms and can be extended with additional features like authentication, payment processing, or content management systems.