/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Default values provider for typeahead
 */
export class TypeaheadConfig {
    constructor() {
        /**
         * sets use adaptive position
         */
        this.adaptivePosition = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * used to hide results on blur
         */
        this.hideResultsOnBlur = true;
        /**
         * if true, typeahead will cancel async request on blur
         */
        this.cancelRequestOnFocusLost = false;
        /**
         * used to choose the first item in typeahead container
         */
        this.selectFirstItem = true;
        /**
         * used to active/inactive the first item in typeahead container
         */
        this.isFirstItemActive = true;
        /**
         * used to choose set minimal no of characters that needs to
         * be entered before typeahead kicks-in
         */
        this.minLength = 1;
    }
}
TypeaheadConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ TypeaheadConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function TypeaheadConfig_Factory() { return new TypeaheadConfig(); }, token: TypeaheadConfig, providedIn: "root" });
if (false) {
    /**
     * sets use adaptive position
     * @type {?}
     */
    TypeaheadConfig.prototype.adaptivePosition;
    /**
     * turn on/off animation
     * @type {?}
     */
    TypeaheadConfig.prototype.isAnimated;
    /**
     * used to hide results on blur
     * @type {?}
     */
    TypeaheadConfig.prototype.hideResultsOnBlur;
    /**
     * if true, typeahead will cancel async request on blur
     * @type {?}
     */
    TypeaheadConfig.prototype.cancelRequestOnFocusLost;
    /**
     * used to choose the first item in typeahead container
     * @type {?}
     */
    TypeaheadConfig.prototype.selectFirstItem;
    /**
     * used to active/inactive the first item in typeahead container
     * @type {?}
     */
    TypeaheadConfig.prototype.isFirstItemActive;
    /**
     * used to choose set minimal no of characters that needs to
     * be entered before typeahead kicks-in
     * @type {?}
     */
    TypeaheadConfig.prototype.minLength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkLyIsInNvdXJjZXMiOlsidHlwZWFoZWFkLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNM0MsTUFBTSxPQUFPLGVBQWU7SUFINUI7Ozs7UUFLRSxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7Ozs7UUFFekIsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQUVuQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7Ozs7UUFFekIsNkJBQXdCLEdBQUcsS0FBSyxDQUFDOzs7O1FBRWpDLG9CQUFlLEdBQUcsSUFBSSxDQUFDOzs7O1FBRXZCLHNCQUFpQixHQUFHLElBQUksQ0FBQzs7Ozs7UUFJekIsY0FBUyxHQUFHLENBQUMsQ0FBQztLQUNmOzs7WUFwQkEsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7OztJQUdDLDJDQUF5Qjs7Ozs7SUFFekIscUNBQW1COzs7OztJQUVuQiw0Q0FBeUI7Ozs7O0lBRXpCLG1EQUFpQzs7Ozs7SUFFakMsMENBQXVCOzs7OztJQUV2Qiw0Q0FBeUI7Ozs7OztJQUl6QixvQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIERlZmF1bHQgdmFsdWVzIHByb3ZpZGVyIGZvciB0eXBlYWhlYWQgKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZENvbmZpZyB7XG4gIC8qKiBzZXRzIHVzZSBhZGFwdGl2ZSBwb3NpdGlvbiAqL1xuICBhZGFwdGl2ZVBvc2l0aW9uID0gZmFsc2U7XG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cbiAgaXNBbmltYXRlZCA9IGZhbHNlO1xuICAvKiogdXNlZCB0byBoaWRlIHJlc3VsdHMgb24gYmx1ciAqL1xuICBoaWRlUmVzdWx0c09uQmx1ciA9IHRydWU7XG4gIC8qKiBpZiB0cnVlLCB0eXBlYWhlYWQgd2lsbCBjYW5jZWwgYXN5bmMgcmVxdWVzdCBvbiBibHVyICovXG4gIGNhbmNlbFJlcXVlc3RPbkZvY3VzTG9zdCA9IGZhbHNlO1xuICAvKiogdXNlZCB0byBjaG9vc2UgdGhlIGZpcnN0IGl0ZW0gaW4gdHlwZWFoZWFkIGNvbnRhaW5lciAqL1xuICBzZWxlY3RGaXJzdEl0ZW0gPSB0cnVlO1xuICAvKiogdXNlZCB0byBhY3RpdmUvaW5hY3RpdmUgdGhlIGZpcnN0IGl0ZW0gaW4gdHlwZWFoZWFkIGNvbnRhaW5lciAqL1xuICBpc0ZpcnN0SXRlbUFjdGl2ZSA9IHRydWU7XG4gIC8qKiB1c2VkIHRvIGNob29zZSBzZXQgbWluaW1hbCBubyBvZiBjaGFyYWN0ZXJzIHRoYXQgbmVlZHMgdG9cbiAgICogYmUgZW50ZXJlZCBiZWZvcmUgdHlwZWFoZWFkIGtpY2tzLWluXG4gICAqL1xuICBtaW5MZW5ndGggPSAxO1xufVxuIl19