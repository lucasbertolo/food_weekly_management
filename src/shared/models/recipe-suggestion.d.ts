declare namespace RecipeSuggestion {
  type RecipeSuggestionRequest = {
    id: string;
    userId: string;
    itemDefinitionIds: string[];
    pantryItemIds?: string[];
    maxResults?: number;
    createdAt: { nanoseconds: number; seconds: number } | string;
  };
}
