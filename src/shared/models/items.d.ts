declare namespace Items {
  type ItemCategory = "hortifruti" | "mercado" | "acougue";

  type ItemUnit =
    | "unidade"
    | "kg"
    | "g"
    | "l"
    | "ml"
    | "colher_sopa"
    | "colher_cha"
    | "xicara"
    | "pacote"
    | "lata"
    | "outro";

  type ItemDefinition = {
    id: string;
    normalizedName: string;
    displayName: string;
    aliases: string[];
    defaultUnit: ItemUnit;
    category: ItemCategory;
    createdAt?: { nanoseconds: number; seconds: number };
    updatedAt?: { nanoseconds: number; seconds: number };
  };
}
