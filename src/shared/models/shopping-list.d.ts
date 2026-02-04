declare namespace ShoppingList {
  type ShoppingListItemSource = "recipe" | "manual";

  type ShoppingListItem = {
    itemDefinitionId: string;
    nameSnapshot: string;
    quantity: number;
    unit: string;
    checked: boolean;
    source: ShoppingListItemSource;
    recipeId?: string;
    mealKey?: string;
  };

  type ShoppingList = {
    id: string;
    userId: string;
    weekId: string;
    items: ShoppingListItem[];
    createdAt?: { nanoseconds: number; seconds: number };
    updatedAt?: { nanoseconds: number; seconds: number };
  };
}
