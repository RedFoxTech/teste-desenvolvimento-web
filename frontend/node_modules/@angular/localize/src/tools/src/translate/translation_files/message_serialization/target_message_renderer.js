(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/translation_files/message_serialization/target_message_renderer", ["require", "exports", "@angular/localize"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TargetMessageRenderer = void 0;
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var localize_1 = require("@angular/localize");
    /**
     * A message renderer that outputs `ɵParsedTranslation` objects.
     */
    var TargetMessageRenderer = /** @class */ (function () {
        function TargetMessageRenderer() {
            this.current = { messageParts: [], placeholderNames: [], text: '' };
            this.icuDepth = 0;
        }
        Object.defineProperty(TargetMessageRenderer.prototype, "message", {
            get: function () {
                var _a = this.current, messageParts = _a.messageParts, placeholderNames = _a.placeholderNames;
                return localize_1.ɵmakeParsedTranslation(messageParts, placeholderNames);
            },
            enumerable: false,
            configurable: true
        });
        TargetMessageRenderer.prototype.startRender = function () { };
        TargetMessageRenderer.prototype.endRender = function () {
            this.storeMessagePart();
        };
        TargetMessageRenderer.prototype.text = function (text) {
            this.current.text += text;
        };
        TargetMessageRenderer.prototype.placeholder = function (name, body) {
            this.renderPlaceholder(name);
        };
        TargetMessageRenderer.prototype.startPlaceholder = function (name) {
            this.renderPlaceholder(name);
        };
        TargetMessageRenderer.prototype.closePlaceholder = function (name) {
            this.renderPlaceholder(name);
        };
        TargetMessageRenderer.prototype.startContainer = function () { };
        TargetMessageRenderer.prototype.closeContainer = function () { };
        TargetMessageRenderer.prototype.startIcu = function () {
            this.icuDepth++;
            this.text('{');
        };
        TargetMessageRenderer.prototype.endIcu = function () {
            this.icuDepth--;
            this.text('}');
        };
        TargetMessageRenderer.prototype.normalizePlaceholderName = function (name) {
            return name.replace(/-/g, '_');
        };
        TargetMessageRenderer.prototype.renderPlaceholder = function (name) {
            name = this.normalizePlaceholderName(name);
            if (this.icuDepth > 0) {
                this.text("{" + name + "}");
            }
            else {
                this.storeMessagePart();
                this.current.placeholderNames.push(name);
            }
        };
        TargetMessageRenderer.prototype.storeMessagePart = function () {
            this.current.messageParts.push(this.current.text);
            this.current.text = '';
        };
        return TargetMessageRenderer;
    }());
    exports.TargetMessageRenderer = TargetMessageRenderer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0X21lc3NhZ2VfcmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL3RyYW5zbGF0ZS90cmFuc2xhdGlvbl9maWxlcy9tZXNzYWdlX3NlcmlhbGl6YXRpb24vdGFyZ2V0X21lc3NhZ2VfcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUE7Ozs7OztPQU1HO0lBQ0gsOENBQTZFO0lBSTdFOztPQUVHO0lBQ0g7UUFBQTtZQUNVLFlBQU8sR0FBZ0IsRUFBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7WUFDMUUsYUFBUSxHQUFHLENBQUMsQ0FBQztRQWdEdkIsQ0FBQztRQTlDQyxzQkFBSSwwQ0FBTztpQkFBWDtnQkFDUSxJQUFBLEtBQW1DLElBQUksQ0FBQyxPQUFPLEVBQTlDLFlBQVksa0JBQUEsRUFBRSxnQkFBZ0Isc0JBQWdCLENBQUM7Z0JBQ3RELE9BQU8saUNBQXNCLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDaEUsQ0FBQzs7O1dBQUE7UUFDRCwyQ0FBVyxHQUFYLGNBQXFCLENBQUM7UUFDdEIseUNBQVMsR0FBVDtZQUNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFDRCxvQ0FBSSxHQUFKLFVBQUssSUFBWTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUM1QixDQUFDO1FBQ0QsMkNBQVcsR0FBWCxVQUFZLElBQVksRUFBRSxJQUFzQjtZQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNELGdEQUFnQixHQUFoQixVQUFpQixJQUFZO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0QsZ0RBQWdCLEdBQWhCLFVBQWlCLElBQVk7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDRCw4Q0FBYyxHQUFkLGNBQXdCLENBQUM7UUFDekIsOENBQWMsR0FBZCxjQUF3QixDQUFDO1FBQ3pCLHdDQUFRLEdBQVI7WUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDO1FBQ0Qsc0NBQU0sR0FBTjtZQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7UUFDTyx3REFBd0IsR0FBaEMsVUFBaUMsSUFBWTtZQUMzQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFDTyxpREFBaUIsR0FBekIsVUFBMEIsSUFBWTtZQUNwQyxJQUFJLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBSSxJQUFJLE1BQUcsQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQztRQUNILENBQUM7UUFDTyxnREFBZ0IsR0FBeEI7WUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNILDRCQUFDO0lBQUQsQ0FBQyxBQWxERCxJQWtEQztJQWxEWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7ybVtYWtlUGFyc2VkVHJhbnNsYXRpb24sIMm1UGFyc2VkVHJhbnNsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2xvY2FsaXplJztcblxuaW1wb3J0IHtNZXNzYWdlUmVuZGVyZXJ9IGZyb20gJy4vbWVzc2FnZV9yZW5kZXJlcic7XG5cbi8qKlxuICogQSBtZXNzYWdlIHJlbmRlcmVyIHRoYXQgb3V0cHV0cyBgybVQYXJzZWRUcmFuc2xhdGlvbmAgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhcmdldE1lc3NhZ2VSZW5kZXJlciBpbXBsZW1lbnRzIE1lc3NhZ2VSZW5kZXJlcjzJtVBhcnNlZFRyYW5zbGF0aW9uPiB7XG4gIHByaXZhdGUgY3VycmVudDogTWVzc2FnZUluZm8gPSB7bWVzc2FnZVBhcnRzOiBbXSwgcGxhY2Vob2xkZXJOYW1lczogW10sIHRleHQ6ICcnfTtcbiAgcHJpdmF0ZSBpY3VEZXB0aCA9IDA7XG5cbiAgZ2V0IG1lc3NhZ2UoKTogybVQYXJzZWRUcmFuc2xhdGlvbiB7XG4gICAgY29uc3Qge21lc3NhZ2VQYXJ0cywgcGxhY2Vob2xkZXJOYW1lc30gPSB0aGlzLmN1cnJlbnQ7XG4gICAgcmV0dXJuIMm1bWFrZVBhcnNlZFRyYW5zbGF0aW9uKG1lc3NhZ2VQYXJ0cywgcGxhY2Vob2xkZXJOYW1lcyk7XG4gIH1cbiAgc3RhcnRSZW5kZXIoKTogdm9pZCB7fVxuICBlbmRSZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZU1lc3NhZ2VQYXJ0KCk7XG4gIH1cbiAgdGV4dCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnQudGV4dCArPSB0ZXh0O1xuICB9XG4gIHBsYWNlaG9sZGVyKG5hbWU6IHN0cmluZywgYm9keTogc3RyaW5nfHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyUGxhY2Vob2xkZXIobmFtZSk7XG4gIH1cbiAgc3RhcnRQbGFjZWhvbGRlcihuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlclBsYWNlaG9sZGVyKG5hbWUpO1xuICB9XG4gIGNsb3NlUGxhY2Vob2xkZXIobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJQbGFjZWhvbGRlcihuYW1lKTtcbiAgfVxuICBzdGFydENvbnRhaW5lcigpOiB2b2lkIHt9XG4gIGNsb3NlQ29udGFpbmVyKCk6IHZvaWQge31cbiAgc3RhcnRJY3UoKTogdm9pZCB7XG4gICAgdGhpcy5pY3VEZXB0aCsrO1xuICAgIHRoaXMudGV4dCgneycpO1xuICB9XG4gIGVuZEljdSgpOiB2b2lkIHtcbiAgICB0aGlzLmljdURlcHRoLS07XG4gICAgdGhpcy50ZXh0KCd9Jyk7XG4gIH1cbiAgcHJpdmF0ZSBub3JtYWxpemVQbGFjZWhvbGRlck5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvLS9nLCAnXycpO1xuICB9XG4gIHByaXZhdGUgcmVuZGVyUGxhY2Vob2xkZXIobmFtZTogc3RyaW5nKSB7XG4gICAgbmFtZSA9IHRoaXMubm9ybWFsaXplUGxhY2Vob2xkZXJOYW1lKG5hbWUpO1xuICAgIGlmICh0aGlzLmljdURlcHRoID4gMCkge1xuICAgICAgdGhpcy50ZXh0KGB7JHtuYW1lfX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZU1lc3NhZ2VQYXJ0KCk7XG4gICAgICB0aGlzLmN1cnJlbnQucGxhY2Vob2xkZXJOYW1lcy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHN0b3JlTWVzc2FnZVBhcnQoKSB7XG4gICAgdGhpcy5jdXJyZW50Lm1lc3NhZ2VQYXJ0cy5wdXNoKHRoaXMuY3VycmVudC50ZXh0KTtcbiAgICB0aGlzLmN1cnJlbnQudGV4dCA9ICcnO1xuICB9XG59XG5cbmludGVyZmFjZSBNZXNzYWdlSW5mbyB7XG4gIG1lc3NhZ2VQYXJ0czogc3RyaW5nW107XG4gIHBsYWNlaG9sZGVyTmFtZXM6IHN0cmluZ1tdO1xuICB0ZXh0OiBzdHJpbmc7XG59XG4iXX0=