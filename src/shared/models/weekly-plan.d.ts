declare namespace WeeklyPlan {
  type MealSlot = {
    recipeId?: string;
    customText?: string;
  };

  type DayMeals = {
    lunch?: MealSlot;
    dinner?: MealSlot;
    breakfast?: MealSlot;
    snack?: MealSlot;
  };

  type Meals = {
    [day: string]: DayMeals;
  };

  type WeeklyPlan = {
    id: string;
    userId: string;
    weekStartDate: string;
    meals: Meals;
    createdAt?: { nanoseconds: number; seconds: number };
    updatedAt?: { nanoseconds: number; seconds: number };
  };
}
