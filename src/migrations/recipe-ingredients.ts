/**
 * Recipe ingredients migration (v1)
 *
 * Migration path: Existing recipes have ingredients with { name, quantity }.
 * New schema adds optional itemDefinitionId and unit for shopping list automation.
 *
 * - Legacy ingredients (no itemDefinitionId): Still valid, display as-is. Won't
 *   auto-populate shopping list when recipe is added to weekly plan.
 * - Migrated ingredients: Can have itemDefinitionId for matching and unit override.
 *
 * No breaking changes: Old data works without modification. New recipes should
 * use itemDefinitionId when available (e.g. from ItemDefinition lookup/autocomplete).
 */

/** Check if ingredient has the new schema (linked to ItemDefinition) */
export function isMigratedIngredient(
  ing: Recipes.Ingredient
): ing is Recipes.Ingredient & { itemDefinitionId: string } {
  return !!ing.itemDefinitionId;
}

/** Normalize ingredient to new schema - adds optional fields if missing */
export function normalizeIngredient(
  ing: Recipes.Ingredient
): Recipes.Ingredient {
  return {
    ...ing,
    ...(ing.itemDefinitionId === undefined && { itemDefinitionId: undefined }),
    ...(ing.unit === undefined && { unit: undefined }),
  };
}

/**
 * Normalize all ingredients in a recipe. Safe to run on any recipe.
 * Use before saving if you want to ensure consistent shape.
 */
export function normalizeRecipeIngredients(
  recipe: Recipes.Recipe
): Recipes.Recipe {
  if (!recipe.ingredients?.length) return recipe;
  return {
    ...recipe,
    ingredients: recipe.ingredients.map(normalizeIngredient),
  };
}
