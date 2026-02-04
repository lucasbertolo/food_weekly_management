# Recipe Ingredients Migration

## Overview

Recipe ingredients were extended to support `itemDefinitionId` and `unit` for shopping list automation. Existing recipes remain valid without changes.

## Schema Change

**Before (legacy):**
```ts
{ name: string; quantity: string; }
```

**After (optional fields):**
```ts
{
  name: string;
  quantity: string;
  itemDefinitionId?: string;  // links to ItemDefinition for shopping list
  unit?: string;             // overrides default unit
}
```

## Migration Strategy

1. **No forced migration** – Old ingredients work as-is. They display correctly and can be edited.

2. **New recipes** – When creating recipes, use `itemDefinitionId` when the user selects from ItemDefinition (e.g. autocomplete). This enables automatic shopping list generation when the recipe is added to the weekly plan.

3. **Gradual backfill (optional)** – To link existing ingredients to ItemDefinitions:
   - Build a matching service (normalize `name` and match against `ItemDefinition.normalizedName` or `aliases`)
   - Run a batch script that updates recipes with matched `itemDefinitionId`
   - Use `normalizeRecipeIngredients()` from `@/migrations` before saving

## Utilities

- `isMigratedIngredient(ing)` – Returns true if ingredient has `itemDefinitionId`
- `normalizeIngredient(ing)` – Ensures shape includes optional fields
- `normalizeRecipeIngredients(recipe)` – Normalizes all ingredients in a recipe

## Display Logic

When rendering ingredients, support both formats:

```tsx
// Legacy: "2 Tomate"
// New: "2 kg Tomate" (when unit present)
{ingredient.quantity} {ingredient.unit && `${ingredient.unit} `}{ingredient.name}
```
