var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var CropOriginal = /** @class */ (function (_super) {
    __extends(CropOriginal, _super);
    function CropOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CropOriginal.prototype.crop = function (pathToImage, options) { return cordova(this, "crop", { "callbackOrder": "reverse" }, arguments); };
    CropOriginal.pluginName = "Crop";
    CropOriginal.plugin = "cordova-plugin-crop";
    CropOriginal.pluginRef = "plugins";
    CropOriginal.repo = "https://github.com/jeduan/cordova-plugin-crop";
    CropOriginal.platforms = ["Android", "iOS"];
    return CropOriginal;
}(IonicNativePlugin));
var Crop = new CropOriginal();
export { Crop };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nyb3AvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBb0M5Qyx3QkFBaUI7Ozs7SUFVekMsbUJBQUksYUFBQyxXQUFtQixFQUFFLE9BQXFCOzs7Ozs7ZUEvQ2pEO0VBcUMwQixpQkFBaUI7U0FBOUIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENyb3BPcHRpb25zIHtcbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICB0YXJnZXRXaWR0aD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBDcm9wXG4gKiBAZGVzY3JpcHRpb24gQ3JvcHMgaW1hZ2VzXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENyb3AgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Nyb3Avbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNyb3A6IENyb3ApIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuY3JvcC5jcm9wKCdwYXRoL3RvL2ltYWdlLmpwZycsIHtxdWFsaXR5OiA3NX0pXG4gKiAgIC50aGVuKFxuICogICAgIG5ld0ltYWdlID0+IGNvbnNvbGUubG9nKCduZXcgaW1hZ2UgcGF0aCBpczogJyArIG5ld0ltYWdlKSxcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBjcm9wcGluZyBpbWFnZScsIGVycm9yKVxuICogICApO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ3JvcE9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDcm9wJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY3JvcCcsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2plZHVhbi9jb3Jkb3ZhLXBsdWdpbi1jcm9wJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyb3AgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcm9wcyBhbiBpbWFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFRvSW1hZ2VcbiAgICogQHBhcmFtIHtDcm9wT3B0aW9uc30gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbmV3IGltYWdlIHBhdGgsIG9yIHJlamVjdHMgaWYgZmFpbGVkIHRvIGNyb3AuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBjcm9wKHBhdGhUb0ltYWdlOiBzdHJpbmcsIG9wdGlvbnM/OiBDcm9wT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=