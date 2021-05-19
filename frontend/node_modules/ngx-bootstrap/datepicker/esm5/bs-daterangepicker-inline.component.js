/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { filter } from 'rxjs/operators';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { BsDaterangepickerInlineConfig } from './bs-daterangepicker-inline.config';
import { BsDaterangepickerInlineContainerComponent } from './themes/bs/bs-daterangepicker-inline-container.component';
var BsDaterangepickerInlineDirective = /** @class */ (function () {
    function BsDaterangepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    Object.defineProperty(BsDaterangepickerInlineDirective.prototype, "bsValue", {
        /**
         * Initial value of datepicker
         */
        set: /**
         * Initial value of datepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setConfig();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._datepickerRef.instance.value = value;
        })));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .pipe(filter((/**
         * @param {?} range
         * @return {?}
         */
        function (range) { return range && range[0] && !!range[1]; })))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.bsValue = value;
        })));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
            this.setConfig();
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
            this.setConfig();
        }
        if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            this.setConfig();
        }
        if (changes.daysDisabled) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
            this.setConfig();
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
            this.setConfig();
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            this.setConfig();
        }
    };
    /**
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.setConfig = /**
     * Set config for datepicker
     * @return {?}
     */
    function () {
        if (this._datepicker) {
            this._datepicker.hide();
        }
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            ranges: this.bsConfig && this.bsConfig.ranges,
            maxDateRange: this.bsConfig && this.bsConfig.maxDateRange
        });
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
    };
    /**
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDaterangepickerInlineDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'bs-daterangepicker-inline',
                    exportAs: 'bsDaterangepickerInline'
                },] }
    ];
    /** @nocollapse */
    BsDaterangepickerInlineDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerInlineConfig },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: ComponentLoaderFactory }
    ]; };
    BsDaterangepickerInlineDirective.propDecorators = {
        bsValue: [{ type: Input }],
        bsConfig: [{ type: Input }],
        isDisabled: [{ type: Input }],
        minDate: [{ type: Input }],
        maxDate: [{ type: Input }],
        dateCustomClasses: [{ type: Input }],
        daysDisabled: [{ type: Input }],
        datesDisabled: [{ type: Input }],
        datesEnabled: [{ type: Input }],
        bsValueChange: [{ type: Output }]
    };
    return BsDaterangepickerInlineDirective;
}());
export { BsDaterangepickerInlineDirective };
if (false) {
    /** @type {?} */
    BsDaterangepickerInlineDirective.prototype._bsValue;
    /**
     * Config object for datepicker
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.bsConfig;
    /**
     * Indicates whether datepicker is enabled or not
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.isDisabled;
    /**
     * Minimum date which is available for selection
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.minDate;
    /**
     * Maximum date which is available for selection
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.maxDate;
    /**
     * Date custom classes
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.dateCustomClasses;
    /**
     * Disable specific days, e.g. [0,6] will disable all Saturdays and Sundays
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.daysDisabled;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.datesDisabled;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.datesEnabled;
    /**
     * Emits when daterangepicker value has been changed
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.bsValueChange;
    /**
     * @type {?}
     * @protected
     */
    BsDaterangepickerInlineDirective.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInlineDirective.prototype._datepicker;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInlineDirective.prototype._datepickerRef;
    /** @type {?} */
    BsDaterangepickerInlineDirective.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInlineDirective.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLWlubGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcmFuZ2VwaWNrZXItaW5saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNTLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFDckMsTUFBTSxFQUFFLFNBQVMsRUFBaUIsZ0JBQWdCLEVBQ3RFLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd6RixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFHdEg7SUE0REksMENBQ1MsT0FBc0MsRUFDckMsV0FBdUIsRUFDL0IsU0FBb0IsRUFDcEIsaUJBQW1DLEVBQ25DLEdBQTJCO1FBSnBCLFlBQU8sR0FBUCxPQUFPLENBQStCO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZOzs7O1FBVHZCLGtCQUFhLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsVUFBSyxHQUFtQixFQUFFLENBQUM7UUFZbkMscUNBQXFDO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQ2pDLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsU0FBUyxDQUNWLENBQUM7SUFDSixDQUFDO0lBakVELHNCQUNJLHFEQUFPO1FB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Y0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ25DLE9BQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDO2FBQzlELE1BQU0sQ0FBQyx5Q0FBeUMsQ0FBQzthQUNqRCxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNwQixJQUFJLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7SUFFRCxzREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQXpLSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLHlCQUF5QjtpQkFDdEM7Ozs7Z0JBUFEsNkJBQTZCO2dCQVZYLFVBQVU7Z0JBQ1IsU0FBUztnQkFBaUIsZ0JBQWdCO2dCQUc3QyxzQkFBc0I7OzswQkFtQjNDLEtBQUs7MkJBWUwsS0FBSzs2QkFJTCxLQUFLOzBCQUlMLEtBQUs7MEJBSUwsS0FBSztvQ0FJTCxLQUFLOytCQUlMLEtBQUs7Z0NBSUwsS0FBSzsrQkFJTCxLQUFLO2dDQUlMLE1BQU07O0lBcUhYLHVDQUFDO0NBQUEsQUExS0QsSUEwS0M7U0F0S1ksZ0NBQWdDOzs7SUFDekMsb0RBQWlCOzs7OztJQWdCakIsb0RBQTBEOzs7OztJQUkxRCxzREFBNkI7Ozs7O0lBSTdCLG1EQUF1Qjs7Ozs7SUFJdkIsbURBQXVCOzs7OztJQUl2Qiw2REFBMEQ7Ozs7O0lBSTFELHdEQUFpQzs7Ozs7SUFJakMseURBQStCOzs7OztJQUkvQix3REFBOEI7Ozs7O0lBSTlCLHlEQUFtRTs7Ozs7SUFFbkUsaURBQXFDOzs7OztJQUVyQyx1REFBZ0Y7Ozs7O0lBQ2hGLDBEQUFnRjs7SUFHOUUsbURBQTZDOzs7OztJQUM3Qyx1REFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXItaW5saW5lLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVyYW5nZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXMgfSBmcm9tICcuL21vZGVscyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnYnMtZGF0ZXJhbmdlcGlja2VyLWlubGluZScsXG4gICAgZXhwb3J0QXM6ICdic0RhdGVyYW5nZXBpY2tlcklubGluZSdcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJJbmxpbmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgICBfYnNWYWx1ZTogRGF0ZVtdO1xuICAgIC8qKlxuICAgICAqIEluaXRpYWwgdmFsdWUgb2YgZGF0ZXBpY2tlclxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IGJzVmFsdWUodmFsdWU6IERhdGVbXSkge1xuICAgICAgaWYgKHRoaXMuX2JzVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2JzVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25maWcgb2JqZWN0IGZvciBkYXRlcGlja2VyXG4gICAgICovXG4gICAgQElucHV0KCkgYnNDb25maWc6IFBhcnRpYWw8QnNEYXRlcmFuZ2VwaWNrZXJJbmxpbmVDb25maWc+O1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGRhdGVwaWNrZXIgaXMgZW5hYmxlZCBvciBub3RcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE1pbmltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxuICAgICAqL1xuICAgIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gICAgLyoqXG4gICAgICogTWF4aW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAgICovXG4gICAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBEYXRlIGN1c3RvbSBjbGFzc2VzXG4gICAgICovXG4gICAgQElucHV0KCkgZGF0ZUN1c3RvbUNsYXNzZXM6IERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3Nlc1tdO1xuICAgIC8qKlxuICAgICAqIERpc2FibGUgc3BlY2lmaWMgZGF5cywgZS5nLiBbMCw2XSB3aWxsIGRpc2FibGUgYWxsIFNhdHVyZGF5cyBhbmQgU3VuZGF5c1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGRheXNEaXNhYmxlZD86IG51bWJlcltdO1xuICAgIC8qKlxuICAgICAqIERpc2FibGUgc3BlY2lmaWMgZGF0ZXNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkYXRlc0Rpc2FibGVkOiBEYXRlW107XG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXRlc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGRhdGVzRW5hYmxlZDogRGF0ZVtdO1xuICAgIC8qKlxuICAgICAqIEVtaXRzIHdoZW4gZGF0ZXJhbmdlcGlja2VyIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgYnNWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwcm90ZWN0ZWQgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBwcml2YXRlIF9kYXRlcGlja2VyOiBDb21wb25lbnRMb2FkZXI8QnNEYXRlcmFuZ2VwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQ+O1xuICAgIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBfY29uZmlnOiBCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbmZpZyxcbiAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5XG4gICAgKSB7XG4gICAgICAvLyB0b2RvOiBhc3NpZ24gb25seSBzdWJzZXQgb2YgZmllbGRzXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuX2NvbmZpZyk7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyID0gY2lzLmNyZWF0ZUxvYWRlcjxCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICAgIF9lbGVtZW50UmVmLFxuICAgICAgICBfdmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgX3JlbmRlcmVyXG4gICAgICApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldENvbmZpZygpO1xuXG4gICAgICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIGV4dGVybmFsIHNvdXJjZSAobW9kZWwgLT4gdmlldylcbiAgICAgICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlW10pID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIHBpY2tlciAodmlldyAtPiBtb2RlbClcbiAgICAgICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWVDaGFuZ2VcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGZpbHRlcigocmFuZ2U6IERhdGVbXSkgPT4gcmFuZ2UgJiYgcmFuZ2VbMF0gJiYgISFyYW5nZVsxXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlW10pID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5ic1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRlcGlja2VyUmVmIHx8ICF0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMubWluRGF0ZSkge1xuICAgICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcbiAgICAgICAgICB0aGlzLnNldENvbmZpZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xuICAgICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICAgICAgICB0aGlzLnNldENvbmZpZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuZGF0ZXNFbmFibGVkKSB7XG4gICAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXRlc0VuYWJsZWQgPSB0aGlzLmRhdGVzRW5hYmxlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLmRhdGVzRGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVzRGlzYWJsZWQgPSB0aGlzLmRhdGVzRGlzYWJsZWQ7XG4gICAgICAgICAgdGhpcy5zZXRDb25maWcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLmRheXNEaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF5c0Rpc2FibGVkID0gdGhpcy5kYXlzRGlzYWJsZWQ7XG4gICAgICAgICAgdGhpcy5zZXRDb25maWcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XG4gICAgICAgICAgdGhpcy5zZXRDb25maWcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLmRhdGVDdXN0b21DbGFzc2VzKSB7XG4gICAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXRlQ3VzdG9tQ2xhc3NlcyA9IHRoaXMuZGF0ZUN1c3RvbUNsYXNzZXM7XG4gICAgICAgICAgdGhpcy5zZXRDb25maWcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjb25maWcgZm9yIGRhdGVwaWNrZXJcbiAgICAgKi9cbiAgICBzZXRDb25maWcoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5fZGF0ZXBpY2tlcikge1xuICAgICAgICB0aGlzLl9kYXRlcGlja2VyLmhpZGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB0aGlzLmJzQ29uZmlnLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLl9ic1ZhbHVlLFxuICAgICAgICBpc0Rpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXG4gICAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWluRGF0ZSxcbiAgICAgICAgbWF4RGF0ZTogdGhpcy5tYXhEYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5tYXhEYXRlLFxuICAgICAgICBkYXlzRGlzYWJsZWQ6IHRoaXMuZGF5c0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXlzRGlzYWJsZWQsXG4gICAgICAgIGRhdGVDdXN0b21DbGFzc2VzOiB0aGlzLmRhdGVDdXN0b21DbGFzc2VzIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXRlQ3VzdG9tQ2xhc3NlcyxcbiAgICAgICAgZGF0ZXNEaXNhYmxlZDogdGhpcy5kYXRlc0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXRlc0Rpc2FibGVkLFxuICAgICAgICBkYXRlc0VuYWJsZWQ6IHRoaXMuZGF0ZXNFbmFibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXRlc0VuYWJsZWQsXG4gICAgICAgIHJhbmdlczogdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLnJhbmdlcyxcbiAgICAgICAgbWF4RGF0ZVJhbmdlOiB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWF4RGF0ZVJhbmdlXG4gICAgICB9KTtcblxuXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmID0gdGhpcy5fZGF0ZXBpY2tlclxuICAgICAgICAucHJvdmlkZSh7cHJvdmlkZTogQnNEYXRlcGlja2VyQ29uZmlnLCB1c2VWYWx1ZTogdGhpcy5fY29uZmlnfSlcbiAgICAgICAgLmF0dGFjaChCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudClcbiAgICAgICAgLnRvKHRoaXMuX2VsZW1lbnRSZWYpXG4gICAgICAgIC5zaG93KCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogYW55IHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xuICAgIH1cbn1cbiJdfQ==