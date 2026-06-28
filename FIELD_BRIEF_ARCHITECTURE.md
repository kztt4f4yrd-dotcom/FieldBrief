# FieldBrief Architecture

## Purpose

This document defines how FieldBrief is organized and how future features should be built.

The goal is simple:

Keep the codebase clean, scalable, and easy to understand as FieldBrief grows.

---

# Core Rule

Each part of the app has one job.

- `app/` handles routes and pages.
- `components/` handles UI.
- `lib/db/` handles database queries.
- `lib/services/` handles business logic.
- `lib/types/` handles TypeScript types.
- `lib/constants/` handles shared labels and default values.
- `lib/utils/` handles small reusable helper functions.

Pages should stay small.

Components should not query the database.

Database files should not render UI.

Services should organize business logic.

---

# Folder Structure

```text
app/
  page.tsx
  admin/
  search/
  sources/
  updates/

components/
  cards/
  layout/
  search/
  sections/
  ui/

lib/
  constants/
  db/
  services/
  types/
  utils/
  supabase.ts
  database.ts