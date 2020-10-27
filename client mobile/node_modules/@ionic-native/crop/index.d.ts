import { IonicNativePlugin } from '@ionic-native/core';
export interface CropOptions {
    quality?: number;
    targetHeight?: number;
    targetWidth?: number;
}
/**
 * @name Crop
 * @description Crops images
 * @usage
 * ```typescript
 * import { Crop } from '@ionic-native/crop/ngx';
 *
 * constructor(private crop: Crop) { }
 *
 * ...
 *
 * this.crop.crop('path/to/image.jpg', {quality: 75})
 *   .then(
 *     newImage => console.log('new image path is: ' + newImage),
 *     error => console.error('Error cropping image', error)
 *   );
 * ```
 * @interfaces
 * CropOptions
 */
export declare class CropOriginal extends IonicNativePlugin {
    /**
     * Crops an image
     * @param {string} pathToImage
     * @param {CropOptions} [options]
     * @returns {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
     */
    crop(pathToImage: string, options?: CropOptions): Promise<string>;
}

export declare const Crop: CropOriginal;