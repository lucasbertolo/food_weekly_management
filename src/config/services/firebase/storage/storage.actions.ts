import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import uuid from "react-native-uuid";
import { ImageResizerService } from "../../image-resizer";
import { storage } from "../firebase-config";

export class FirebaseStorageService {
  static async uploadPhotos(userId: string, photos: string[]) {
    try {
      const urls = [];

      for (const photo of photos) {
        const resizedImage = await ImageResizerService.resizeImage(photo);

        const storageRef = ref(storage, `recipes/${userId}/${uuid.v4()}`);

        const response = await fetch(resizedImage);
        const blob = await response.blob();

        await uploadBytes(storageRef, blob);

        const photoURL = await getDownloadURL(storageRef);

        urls.push(photoURL);
      }

      return urls;
    } catch (error) {
      throw new Error(`Error sending images: ${(error as Error).message}`);
    }
  }

  static async deletePhoto(photoUrl: string) {
    try {
      const storageRef = ref(storage, photoUrl);
      await deleteObject(storageRef);
    } catch (error) {
      throw new Error(`Error deleting image: ${(error as Error).message}`);
    }
  }
}
