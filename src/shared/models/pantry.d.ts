declare namespace Pantry {
  type PantryLocation = "pantry" | "fridge" | "freezer";

  type PantryItemStatus = "active" | "consumed" | "expired";

  type PantryItem = {
    id: string;
    userId: string;
    itemDefinitionId: string;
    nameSnapshot: string;
    quantity: number;
    unit: string;
    location: PantryLocation;
    expirationDate?: string;
    purchasedAt?: string;
    notes?: string;
    status: PantryItemStatus;
    createdAt?: { nanoseconds: number; seconds: number };
    updatedAt?: { nanoseconds: number; seconds: number };
  };

  type ExpirationAlert = {
    id: string;
    userId: string;
    pantryItemId: string;
    notifyAt: string;
    notified: boolean;
    createdAt?: { nanoseconds: number; seconds: number };
  };
}
