import * as ImageManipulator from "expo-image-manipulator";

export class ImageResizerService {
  static async resizeImage(uri: string) {
    try {
      const result = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 500, height: 500 } }],
        {
          compress: 0.7,
          format: ImageManipulator.SaveFormat.JPEG,
        }
      );

      return result.uri;
    } catch (error) {
      throw new Error(`Error resizing images: ${(error as Error).message}`);
    }
  }
}
