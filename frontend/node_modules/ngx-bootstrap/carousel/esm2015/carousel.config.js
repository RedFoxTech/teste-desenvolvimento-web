/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CarouselConfig {
    constructor() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
}
CarouselConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ CarouselConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function CarouselConfig_Factory() { return new CarouselConfig(); }, token: CarouselConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    CarouselConfig.prototype.interval;
    /** @type {?} */
    CarouselConfig.prototype.noPause;
    /** @type {?} */
    CarouselConfig.prototype.noWrap;
    /** @type {?} */
    CarouselConfig.prototype.showIndicators;
    /** @type {?} */
    CarouselConfig.prototype.pauseOnFocus;
    /** @type {?} */
    CarouselConfig.prototype.indicatorsByChunk;
    /** @type {?} */
    CarouselConfig.prototype.itemsPerSlide;
    /** @type {?} */
    CarouselConfig.prototype.singleSlideOffset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGNBQWM7SUFIM0I7O1FBS0UsYUFBUSxHQUFHLElBQUksQ0FBQzs7UUFHaEIsWUFBTyxHQUFHLEtBQUssQ0FBQzs7UUFHaEIsV0FBTSxHQUFHLEtBQUssQ0FBQzs7UUFHZixtQkFBYyxHQUFHLElBQUksQ0FBQzs7UUFHdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7O1FBR3JCLHNCQUFpQixHQUFHLEtBQUssQ0FBQzs7UUFHMUIsa0JBQWEsR0FBRyxDQUFDLENBQUM7OztRQUlsQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7S0FDM0I7OztZQTVCQSxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBR0Msa0NBQWdCOztJQUdoQixpQ0FBZ0I7O0lBR2hCLGdDQUFlOztJQUdmLHdDQUFzQjs7SUFHdEIsc0NBQXFCOztJQUdyQiwyQ0FBMEI7O0lBRzFCLHVDQUFrQjs7SUFJbEIsMkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbmZpZyB7XG4gIC8qIERlZmF1bHQgaW50ZXJ2YWwgb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXMgKi9cbiAgaW50ZXJ2YWwgPSA1MDAwO1xuXG4gIC8qIElzIGxvb3Agb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXMgY2FuIGJlIHBhdXNlZCAqL1xuICBub1BhdXNlID0gZmFsc2U7XG5cbiAgLyogSXMgc2xpZGVzIGNhbiB3cmFwIGZyb20gdGhlIGxhc3QgdG8gdGhlIGZpcnN0IHNsaWRlICovXG4gIG5vV3JhcCA9IGZhbHNlO1xuXG4gIC8qIFNob3cgY2Fyb3VzZWwtaW5kaWNhdG9ycyAqL1xuICBzaG93SW5kaWNhdG9ycyA9IHRydWU7XG5cbiAgLyogU2xpZGVzIGNhbiBiZSBwYXVzZWQgb24gZm9jdXMgKi9cbiAgcGF1c2VPbkZvY3VzID0gZmFsc2U7XG5cbiAgLyogSWYgYHRydWVgIC0gY2Fyb3VzZWwgaW5kaWNhdG9ycyBpbmRpY2F0ZSBzbGlkZXMgY2h1bmtzIHdvcmtzIE9OTFkgaWYgc2luZ2xlU2xpZGVPZmZzZXQgPSBGQUxTRSAqL1xuICBpbmRpY2F0b3JzQnlDaHVuayA9IGZhbHNlO1xuXG4gIC8qIElmIHZhbHVlIG1vcmUgdGhlbiAxIOKAlCBjYXJvdXNlbCB3b3JrcyBpbiBtdWx0aWxpc3QgbW9kZSAqL1xuICBpdGVtc1BlclNsaWRlID0gMTtcblxuICAvKiBJZiBgdHJ1ZWAg4oCUIGNhcm91c2VsIHNoaWZ0cyBieSBvbmUgZWxlbWVudC4gQnkgZGVmYXVsdCBjYXJvdXNlbCBzaGlmdHMgYnkgbnVtYmVyXG4gICAgb2YgdmlzaWJsZSBlbGVtZW50cyAoaXRlbXNQZXJTbGlkZSBmaWVsZCkgKi9cbiAgc2luZ2xlU2xpZGVPZmZzZXQgPSBmYWxzZTtcbn1cbiJdfQ==