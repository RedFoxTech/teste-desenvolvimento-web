(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/serialize_translation_message", ["require", "exports", "@angular/localize/src/tools/src/translate/translation_files/message_serialization/message_serializer", "@angular/localize/src/tools/src/translate/translation_files/message_serialization/target_message_renderer", "@angular/localize/src/tools/src/translate/translation_files/translation_parsers/translation_utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serializeTranslationMessage = void 0;
    var message_serializer_1 = require("@angular/localize/src/tools/src/translate/translation_files/message_serialization/message_serializer");
    var target_message_renderer_1 = require("@angular/localize/src/tools/src/translate/translation_files/message_serialization/target_message_renderer");
    var translation_utils_1 = require("@angular/localize/src/tools/src/translate/translation_files/translation_parsers/translation_utils");
    /**
     * Serialize the given `element` into a parsed translation using the given `serializer`.
     */
    function serializeTranslationMessage(element, config) {
        var _a = translation_utils_1.parseInnerRange(element), rootNodes = _a.rootNodes, parseErrors = _a.errors;
        try {
            var serializer = new message_serializer_1.MessageSerializer(new target_message_renderer_1.TargetMessageRenderer(), config);
            var translation = serializer.serialize(rootNodes);
            return { translation: translation, parseErrors: parseErrors, serializeErrors: [] };
        }
        catch (e) {
            return { translation: null, parseErrors: parseErrors, serializeErrors: [e] };
        }
    }
    exports.serializeTranslationMessage = serializeTranslationMessage;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplX3RyYW5zbGF0aW9uX21lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL3RyYW5zbGF0ZS90cmFuc2xhdGlvbl9maWxlcy90cmFuc2xhdGlvbl9wYXJzZXJzL3NlcmlhbGl6ZV90cmFuc2xhdGlvbl9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVVBLDJJQUF1RztJQUN2RyxxSkFBdUY7SUFFdkYsdUlBQW9EO0lBRXBEOztPQUVHO0lBQ0gsU0FBZ0IsMkJBQTJCLENBQUMsT0FBZ0IsRUFBRSxNQUErQjtRQUtyRixJQUFBLEtBQW1DLG1DQUFlLENBQUMsT0FBTyxDQUFDLEVBQTFELFNBQVMsZUFBQSxFQUFVLFdBQVcsWUFBNEIsQ0FBQztRQUNsRSxJQUFJO1lBQ0YsSUFBTSxVQUFVLEdBQUcsSUFBSSxzQ0FBaUIsQ0FBQyxJQUFJLCtDQUFxQixFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUUsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUMsV0FBVyxhQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBQyxDQUFDO1NBQ3hEO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLGFBQUEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQztJQWJELGtFQWFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0VsZW1lbnQsIFBhcnNlRXJyb3J9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCB7ybVQYXJzZWRUcmFuc2xhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvbG9jYWxpemUnO1xuXG5pbXBvcnQge01lc3NhZ2VTZXJpYWxpemVyLCBNZXNzYWdlU2VyaWFsaXplckNvbmZpZ30gZnJvbSAnLi4vbWVzc2FnZV9zZXJpYWxpemF0aW9uL21lc3NhZ2Vfc2VyaWFsaXplcic7XG5pbXBvcnQge1RhcmdldE1lc3NhZ2VSZW5kZXJlcn0gZnJvbSAnLi4vbWVzc2FnZV9zZXJpYWxpemF0aW9uL3RhcmdldF9tZXNzYWdlX3JlbmRlcmVyJztcblxuaW1wb3J0IHtwYXJzZUlubmVyUmFuZ2V9IGZyb20gJy4vdHJhbnNsYXRpb25fdXRpbHMnO1xuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgZ2l2ZW4gYGVsZW1lbnRgIGludG8gYSBwYXJzZWQgdHJhbnNsYXRpb24gdXNpbmcgdGhlIGdpdmVuIGBzZXJpYWxpemVyYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZVRyYW5zbGF0aW9uTWVzc2FnZShlbGVtZW50OiBFbGVtZW50LCBjb25maWc6IE1lc3NhZ2VTZXJpYWxpemVyQ29uZmlnKToge1xuICB0cmFuc2xhdGlvbjogybVQYXJzZWRUcmFuc2xhdGlvbnxudWxsLFxuICBwYXJzZUVycm9yczogUGFyc2VFcnJvcltdLFxuICBzZXJpYWxpemVFcnJvcnM6IFBhcnNlRXJyb3JbXVxufSB7XG4gIGNvbnN0IHtyb290Tm9kZXMsIGVycm9yczogcGFyc2VFcnJvcnN9ID0gcGFyc2VJbm5lclJhbmdlKGVsZW1lbnQpO1xuICB0cnkge1xuICAgIGNvbnN0IHNlcmlhbGl6ZXIgPSBuZXcgTWVzc2FnZVNlcmlhbGl6ZXIobmV3IFRhcmdldE1lc3NhZ2VSZW5kZXJlcigpLCBjb25maWcpO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gc2VyaWFsaXplci5zZXJpYWxpemUocm9vdE5vZGVzKTtcbiAgICByZXR1cm4ge3RyYW5zbGF0aW9uLCBwYXJzZUVycm9ycywgc2VyaWFsaXplRXJyb3JzOiBbXX07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4ge3RyYW5zbGF0aW9uOiBudWxsLCBwYXJzZUVycm9ycywgc2VyaWFsaXplRXJyb3JzOiBbZV19O1xuICB9XG59XG4iXX0=