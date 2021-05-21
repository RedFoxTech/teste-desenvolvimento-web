/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Provides default configuration values for timepicker
 */
var TimepickerConfig = /** @class */ (function () {
    function TimepickerConfig() {
        /**
         * hours change step
         */
        this.hourStep = 1;
        /**
         * minutes change step
         */
        this.minuteStep = 5;
        /**
         * seconds changes step
         */
        this.secondsStep = 10;
        /**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */
        this.showMeridian = true;
        /**
         * meridian labels based on locale
         */
        this.meridians = ['AM', 'PM'];
        /**
         * if true hours and minutes fields will be readonly
         */
        this.readonlyInput = false;
        /**
         * if true hours and minutes fields will be disabled
         */
        this.disabled = false;
        /**
         * if true scroll inside hours and minutes inputs will change time
         */
        this.mousewheel = true;
        /**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */
        this.arrowkeys = true;
        /**
         * if true spinner arrows above and below the inputs will be shown
         */
        this.showSpinners = true;
        /**
         * show seconds in timepicker
         */
        this.showSeconds = false;
        /**
         * show minutes in timepicker
         */
        this.showMinutes = true;
        /**
         * placeholder for hours field in timepicker
         */
        this.hoursPlaceholder = 'HH';
        /**
         * placeholder for minutes field in timepicker
         */
        this.minutesPlaceholder = 'MM';
        /**
         * placeholder for seconds field in timepicker
         */
        this.secondsPlaceholder = 'SS';
        /**
         * hours aria label
         */
        this.ariaLabelHours = 'hours';
        /**
         * minutes aria label
         */
        this.ariaLabelMinutes = 'minutes';
        /**
         * seconds aria label
         */
        this.ariaLabelSeconds = 'seconds';
    }
    TimepickerConfig.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ TimepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function TimepickerConfig_Factory() { return new TimepickerConfig(); }, token: TimepickerConfig, providedIn: "root" });
    return TimepickerConfig;
}());
export { TimepickerConfig };
if (false) {
    /**
     * hours change step
     * @type {?}
     */
    TimepickerConfig.prototype.hourStep;
    /**
     * minutes change step
     * @type {?}
     */
    TimepickerConfig.prototype.minuteStep;
    /**
     * seconds changes step
     * @type {?}
     */
    TimepickerConfig.prototype.secondsStep;
    /**
     * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
     * @type {?}
     */
    TimepickerConfig.prototype.showMeridian;
    /**
     * meridian labels based on locale
     * @type {?}
     */
    TimepickerConfig.prototype.meridians;
    /**
     * if true hours and minutes fields will be readonly
     * @type {?}
     */
    TimepickerConfig.prototype.readonlyInput;
    /**
     * if true hours and minutes fields will be disabled
     * @type {?}
     */
    TimepickerConfig.prototype.disabled;
    /**
     * if true scroll inside hours and minutes inputs will change time
     * @type {?}
     */
    TimepickerConfig.prototype.mousewheel;
    /**
     * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
     * @type {?}
     */
    TimepickerConfig.prototype.arrowkeys;
    /**
     * if true spinner arrows above and below the inputs will be shown
     * @type {?}
     */
    TimepickerConfig.prototype.showSpinners;
    /**
     * show seconds in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.showSeconds;
    /**
     * show minutes in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.showMinutes;
    /**
     * minimum time user can select
     * @type {?}
     */
    TimepickerConfig.prototype.min;
    /**
     * maximum time user can select
     * @type {?}
     */
    TimepickerConfig.prototype.max;
    /**
     * placeholder for hours field in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.hoursPlaceholder;
    /**
     * placeholder for minutes field in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.minutesPlaceholder;
    /**
     * placeholder for seconds field in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.secondsPlaceholder;
    /**
     * hours aria label
     * @type {?}
     */
    TimepickerConfig.prototype.ariaLabelHours;
    /**
     * minutes aria label
     * @type {?}
     */
    TimepickerConfig.prototype.ariaLabelMinutes;
    /**
     * seconds aria label
     * @type {?}
     */
    TimepickerConfig.prototype.ariaLabelSeconds;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvIiwic291cmNlcyI6WyJ0aW1lcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFHM0M7SUFBQTs7OztRQUtFLGFBQVEsR0FBRyxDQUFDLENBQUM7Ozs7UUFFYixlQUFVLEdBQUcsQ0FBQyxDQUFDOzs7O1FBRWYsZ0JBQVcsR0FBRyxFQUFFLENBQUM7Ozs7UUFFakIsaUJBQVksR0FBRyxJQUFJLENBQUM7Ozs7UUFFcEIsY0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7O1FBRXpCLGtCQUFhLEdBQUcsS0FBSyxDQUFDOzs7O1FBRXRCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFFakIsZUFBVSxHQUFHLElBQUksQ0FBQzs7OztRQUVsQixjQUFTLEdBQUcsSUFBSSxDQUFDOzs7O1FBRWpCLGlCQUFZLEdBQUcsSUFBSSxDQUFDOzs7O1FBRXBCLGdCQUFXLEdBQUcsS0FBSyxDQUFDOzs7O1FBRXBCLGdCQUFXLEdBQUcsSUFBSSxDQUFDOzs7O1FBTW5CLHFCQUFnQixHQUFHLElBQUksQ0FBQzs7OztRQUV4Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7Ozs7UUFFMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDOzs7O1FBRTFCLG1CQUFjLEdBQUcsT0FBTyxDQUFDOzs7O1FBRXpCLHFCQUFnQixHQUFHLFNBQVMsQ0FBQzs7OztRQUU3QixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7S0FDOUI7O2dCQTVDQSxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7MkJBTEQ7Q0ErQ0MsQUE1Q0QsSUE0Q0M7U0F6Q1ksZ0JBQWdCOzs7Ozs7SUFFM0Isb0NBQWE7Ozs7O0lBRWIsc0NBQWU7Ozs7O0lBRWYsdUNBQWlCOzs7OztJQUVqQix3Q0FBb0I7Ozs7O0lBRXBCLHFDQUF5Qjs7Ozs7SUFFekIseUNBQXNCOzs7OztJQUV0QixvQ0FBaUI7Ozs7O0lBRWpCLHNDQUFrQjs7Ozs7SUFFbEIscUNBQWlCOzs7OztJQUVqQix3Q0FBb0I7Ozs7O0lBRXBCLHVDQUFvQjs7Ozs7SUFFcEIsdUNBQW1COzs7OztJQUVuQiwrQkFBVTs7Ozs7SUFFViwrQkFBVTs7Ozs7SUFFViw0Q0FBd0I7Ozs7O0lBRXhCLDhDQUEwQjs7Ozs7SUFFMUIsOENBQTBCOzs7OztJQUUxQiwwQ0FBeUI7Ozs7O0lBRXpCLDRDQUE2Qjs7Ozs7SUFFN0IsNENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogUHJvdmlkZXMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHZhbHVlcyBmb3IgdGltZXBpY2tlciAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckNvbmZpZyB7XG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xuICBob3VyU3RlcCA9IDE7XG4gIC8qKiBtaW51dGVzIGNoYW5nZSBzdGVwICovXG4gIG1pbnV0ZVN0ZXAgPSA1O1xuICAvKiogc2Vjb25kcyBjaGFuZ2VzIHN0ZXAgKi9cbiAgc2Vjb25kc1N0ZXAgPSAxMDtcbiAgLyoqIGlmIHRydWUgd29ya3MgaW4gMTJIIG1vZGUgYW5kIGRpc3BsYXlzIEFNL1BNLiBJZiBmYWxzZSB3b3JrcyBpbiAyNEggbW9kZSBhbmQgaGlkZXMgQU0vUE0gKi9cbiAgc2hvd01lcmlkaWFuID0gdHJ1ZTtcbiAgLyoqIG1lcmlkaWFuIGxhYmVscyBiYXNlZCBvbiBsb2NhbGUgKi9cbiAgbWVyaWRpYW5zID0gWydBTScsICdQTSddO1xuICAvKiogaWYgdHJ1ZSBob3VycyBhbmQgbWludXRlcyBmaWVsZHMgd2lsbCBiZSByZWFkb25seSAqL1xuICByZWFkb25seUlucHV0ID0gZmFsc2U7XG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIGRpc2FibGVkICovXG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIC8qKiBpZiB0cnVlIHNjcm9sbCBpbnNpZGUgaG91cnMgYW5kIG1pbnV0ZXMgaW5wdXRzIHdpbGwgY2hhbmdlIHRpbWUgKi9cbiAgbW91c2V3aGVlbCA9IHRydWU7XG4gIC8qKiBpZiB0cnVlIHRoZSB2YWx1ZXMgb2YgaG91cnMgYW5kIG1pbnV0ZXMgY2FuIGJlIGNoYW5nZWQgdXNpbmcgdGhlIHVwL2Rvd24gYXJyb3cga2V5cyBvbiB0aGUga2V5Ym9hcmQgKi9cbiAgYXJyb3drZXlzID0gdHJ1ZTtcbiAgLyoqIGlmIHRydWUgc3Bpbm5lciBhcnJvd3MgYWJvdmUgYW5kIGJlbG93IHRoZSBpbnB1dHMgd2lsbCBiZSBzaG93biAqL1xuICBzaG93U3Bpbm5lcnMgPSB0cnVlO1xuICAvKiogc2hvdyBzZWNvbmRzIGluIHRpbWVwaWNrZXIgKi9cbiAgc2hvd1NlY29uZHMgPSBmYWxzZTtcbiAgLyoqIHNob3cgbWludXRlcyBpbiB0aW1lcGlja2VyICovXG4gIHNob3dNaW51dGVzID0gdHJ1ZTtcbiAgLyoqIG1pbmltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cbiAgbWluOiBEYXRlO1xuICAvKiogbWF4aW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xuICBtYXg6IERhdGU7XG4gIC8qKiBwbGFjZWhvbGRlciBmb3IgaG91cnMgZmllbGQgaW4gdGltZXBpY2tlciAqL1xuICBob3Vyc1BsYWNlaG9sZGVyID0gJ0hIJztcbiAgLyoqIHBsYWNlaG9sZGVyIGZvciBtaW51dGVzIGZpZWxkIGluIHRpbWVwaWNrZXIgKi9cbiAgbWludXRlc1BsYWNlaG9sZGVyID0gJ01NJztcbiAgLyoqIHBsYWNlaG9sZGVyIGZvciBzZWNvbmRzIGZpZWxkIGluIHRpbWVwaWNrZXIgKi9cbiAgc2Vjb25kc1BsYWNlaG9sZGVyID0gJ1NTJztcbiAgLyoqIGhvdXJzIGFyaWEgbGFiZWwgKi9cbiAgYXJpYUxhYmVsSG91cnMgPSAnaG91cnMnO1xuICAvKiogbWludXRlcyBhcmlhIGxhYmVsICovXG4gIGFyaWFMYWJlbE1pbnV0ZXMgPSAnbWludXRlcyc7XG4gIC8qKiBzZWNvbmRzIGFyaWEgbGFiZWwgKi9cbiAgYXJpYUxhYmVsU2Vjb25kcyA9ICdzZWNvbmRzJztcbn1cbiJdfQ==