import { cleanData } from "@/shared/utils";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { FirebaseStorageService } from "../storage";

const USERS_COLLECTION = "users";
const RECIPES_COLLECTION = "recipes";

type TimestampDate = {
  nanoseconds?: number;
  seconds?: number;
};

export class FirebaseFirestoreService implements Recipes.Actions {
  async addRecipe({ recipe }: Recipes.Add) {
    try {
      const urls = await FirebaseStorageService.uploadPhotos(
        recipe.userId,
        recipe.photos ?? []
      );

      const model = cleanData(recipe);

      const recipesRef = collection(
        db,
        USERS_COLLECTION,
        recipe.userId,
        RECIPES_COLLECTION
      );

      await addDoc(recipesRef, {
        ...model,
        photos: urls,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteRecipe(userId: string, recipeId: string) {
    try {
      const recipeDocRef = doc(
        db,
        USERS_COLLECTION,
        userId,
        RECIPES_COLLECTION,
        recipeId
      );
      const recipeDoc = await getDoc(recipeDocRef);

      if (!recipeDoc.exists())
        throw new Error("Receita não existente, tente novamente");

      const recipeData = recipeDoc.data();

      if (recipeData?.photos) {
        const deletePromises = recipeData.photos.map(
          async (photoUrl: string) => {
            await FirebaseStorageService.deletePhoto(photoUrl);
          }
        );

        await Promise.all(deletePromises);
      }

      await deleteDoc(recipeDocRef);
    } catch (error) {
      throw error;
    }
  }

  async editRecipe(userId: string, recipe: Recipes.Recipe) {}

  async getRecipes(userId: string) {
    try {
      const recipesRef = collection(
        db,
        USERS_COLLECTION,
        userId,
        RECIPES_COLLECTION
      );
      const q = query(recipesRef, orderBy("createdAt", "desc"));
      const recipesSnapshot = await getDocs(q);

      const recipes = recipesSnapshot.docs.map((doc) => ({
        ...(doc.data() as Recipes.Recipe),
        id: doc.id,
      }));

      return recipes;
    } catch (error) {
      throw error;
    }
  }

  async getRecipeById(userId: string, recipeId: string) {
    try {
      const recipeDocRef = doc(
        db,
        USERS_COLLECTION,
        userId,
        RECIPES_COLLECTION,
        recipeId
      );
      const recipeDoc = await getDoc(recipeDocRef);

      if (recipeDoc.exists()) {
        return recipeDoc.data() as Recipes.Recipe;
      }

      return null;
    } catch (error) {
      throw error;
    }
  }

  static getDate({ nanoseconds, seconds }: TimestampDate) {
    if (!seconds || !nanoseconds) return {};

    const fireBaseTime = new Date(seconds * 1000 + nanoseconds / 1000000);
    const date = fireBaseTime.toDateString();
    const atTime = fireBaseTime.toLocaleTimeString();

    return { date, atTime };
  }

  async getTags(userId: string) {
    try {
      const recipesRef = collection(
        db,
        USERS_COLLECTION,
        userId,
        RECIPES_COLLECTION
      );
      const recipesSnapshot = await getDocs(recipesRef);

      const tags = recipesSnapshot.docs.map((doc) => doc.data().tags);

      const uniqueTags = [...new Set(tags.flat())];

      return uniqueTags;
    } catch {
      return [];
    }
  }
}
