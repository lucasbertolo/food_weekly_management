# Migrations

This folder contains data migration utilities for schema changes. Each migration is scoped to a specific domain and can be run incrementally.

## Available migrations

### Recipe ingredients (v1)

- **File:** `recipe-ingredients.ts`
- **Purpose:** Extend `Recipe.Ingredient` with optional `itemDefinitionId` and `unit` for shopping list automation.
- **Status:** Backward compatible – no forced migration required.

**Exports:**
- `isMigratedIngredient(ing)` – Returns true if ingredient has `itemDefinitionId`
- `normalizeIngredient(ing)` – Ensures shape includes optional fields
- `normalizeRecipeIngredients(recipe)` – Normalizes all ingredients in a recipe

## Adding new migrations

1. Create a new file: `src/migrations/<domain>-<description>.ts`
2. Export utilities that normalize or upgrade data
3. Re-export from `src/migrations/index.ts`
4. Document in this README

## Usage

```ts
import {
  normalizeRecipeIngredients,
  isMigratedIngredient,
} from "@/migrations";
```
