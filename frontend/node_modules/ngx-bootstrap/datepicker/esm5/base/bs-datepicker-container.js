/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
BsDatepickerAbstractComponent = /** @class */ (function () {
    function BsDatepickerAbstractComponent() {
        this.customRanges = [];
        this.chosenRange = [];
    }
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMinDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMaxDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDaysDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDatesDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesEnabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDatesEnabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "dateCustomClasses", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDateCustomClasses(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "dateTooltipTexts", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDateTooltipTexts(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.setViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.dayHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.weekHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} dates
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.setRangeOnCalendar = /**
     * @param {?} dates
     * @return {?}
     */
    function (dates) { };
    /**
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.setToday = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.clearDate = /**
     * @return {?}
     */
    function () { };
    /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype._stopPropagation = /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    return BsDatepickerAbstractComponent;
}());
/**
 * @abstract
 */
export { BsDatepickerAbstractComponent };
if (false) {
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.containerClass;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.isOtherMonthsActive;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.showTodayBtn;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.todayBtnLbl;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.todayPos;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.showClearBtn;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.clearBtnLbl;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.clearPos;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype._effects;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.customRanges;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.customRangeBtnLbl;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.chosenRange;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.viewMode;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.daysCalendar;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.monthsCalendar;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.yearsCalendar;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJiYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFvQkE7Ozs7SUFBQTtRQVdFLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUVuQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQWtFM0IsQ0FBQztJQWhFQyxzQkFBSSxrREFBTzs7Ozs7UUFBWCxVQUFZLEtBQVc7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBTzs7Ozs7UUFBWCxVQUFZLEtBQVc7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx1REFBWTs7Ozs7UUFBaEIsVUFBaUIsS0FBZTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHdEQUFhOzs7OztRQUFqQixVQUFrQixLQUFhO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1REFBWTs7Ozs7UUFBaEIsVUFBaUIsS0FBYTtZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFEQUFVOzs7OztRQUFkLFVBQWUsS0FBYztZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDREQUFpQjs7Ozs7UUFBckIsVUFBc0IsS0FBb0M7WUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJEQUFnQjs7Ozs7UUFBcEIsVUFBcUIsS0FBa0M7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTs7Ozs7SUFRRCxtREFBVzs7OztJQUFYLFVBQVksS0FBMkIsSUFBUyxDQUFDOzs7OztJQUVqRCxrREFBVTs7OztJQUFWLFVBQVcsS0FBd0IsSUFBUyxDQUFDOzs7OztJQUU3Qyx1REFBZTs7OztJQUFmLFVBQWdCLEtBQXFCLElBQVMsQ0FBQzs7Ozs7SUFFL0Msd0RBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQW9CLElBQVMsQ0FBQzs7Ozs7SUFFL0MseURBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQXFCLElBQVMsQ0FBQzs7Ozs7SUFFakQsd0RBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQXFCLElBQVMsQ0FBQzs7Ozs7SUFFaEQsd0RBQWdCOzs7O0lBQWhCLFVBQWlCLEdBQWlCLElBQVMsQ0FBQzs7Ozs7SUFFNUMsMERBQWtCOzs7O0lBQWxCLFVBQW1CLEtBQTRCLElBQVMsQ0FBQzs7Ozs7SUFFekQseURBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQTRCLElBQVMsQ0FBQzs7Ozs7SUFFeEQsMERBQWtCOzs7O0lBQWxCLFVBQW1CLEtBQW9CLElBQVMsQ0FBQzs7OztJQUVqRCxnREFBUTs7O0lBQVIsY0FBa0IsQ0FBQzs7OztJQUVuQixpREFBUzs7O0lBQVQsY0FBbUIsQ0FBQztJQUVsQixzQ0FBc0M7Ozs7OztJQUN4Qyx3REFBZ0I7Ozs7O0lBQWhCLFVBQWlCLEtBQVU7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDSCxvQ0FBQztBQUFELENBQUMsQUEvRUQsSUErRUM7Ozs7Ozs7SUE5RUMsdURBQXVCOztJQUN2Qiw0REFBNkI7O0lBQzdCLHFEQUFzQjs7SUFDdEIsb0RBQW9COztJQUNwQixpREFBaUI7O0lBQ2pCLHFEQUFzQjs7SUFDdEIsb0RBQW9COztJQUNwQixpREFBaUI7O0lBRWpCLGlEQUE4Qjs7SUFDOUIscURBQW1DOztJQUNuQywwREFBMEI7O0lBQzFCLG9EQUF5Qjs7SUFnQ3pCLGlEQUEyQzs7SUFDM0MscURBQWtEOztJQUNsRCx1REFBc0Q7O0lBQ3RELHNEQUFvRDs7SUFDcEQsZ0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZGF0ZXBpY2tlciBjb250YWluZXIgY29tcG9uZW50XG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1lbXB0eSAqL1xuaW1wb3J0IHsgQnNDdXN0b21EYXRlcyB9IGZyb20gJy4uL3RoZW1lcy9icy9icy1jdXN0b20tZGF0ZXMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25FdmVudCxcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsLFxuICBDZWxsSG92ZXJFdmVudCxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3NlcyxcbiAgRGF0ZXBpY2tlckRhdGVUb29sdGlwVGV4dCxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxuICBXZWVrVmlld01vZGVsLFxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB7XG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG4gIGlzT3RoZXJNb250aHNBY3RpdmU6IGJvb2xlYW47XG4gIHNob3dUb2RheUJ0bjogYm9vbGVhbjtcbiAgdG9kYXlCdG5MYmw6IHN0cmluZztcbiAgdG9kYXlQb3M6IHN0cmluZztcbiAgc2hvd0NsZWFyQnRuOiBib29sZWFuO1xuICBjbGVhckJ0bkxibDogc3RyaW5nO1xuICBjbGVhclBvczogc3RyaW5nO1xuXG4gIF9lZmZlY3RzOiBCc0RhdGVwaWNrZXJFZmZlY3RzO1xuICBjdXN0b21SYW5nZXM6IEJzQ3VzdG9tRGF0ZXNbXSA9IFtdO1xuICBjdXN0b21SYW5nZUJ0bkxibDogc3RyaW5nO1xuICBjaG9zZW5SYW5nZTogRGF0ZVtdID0gW107XG5cbiAgc2V0IG1pbkRhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldE1pbkRhdGUodmFsdWUpO1xuICB9XG5cbiAgc2V0IG1heERhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldE1heERhdGUodmFsdWUpO1xuICB9XG4gIHNldCBkYXlzRGlzYWJsZWQodmFsdWU6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXREYXlzRGlzYWJsZWQodmFsdWUpO1xuICB9XG4gIHNldCBkYXRlc0Rpc2FibGVkKHZhbHVlOiBEYXRlW10pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERhdGVzRGlzYWJsZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0IGRhdGVzRW5hYmxlZCh2YWx1ZTogRGF0ZVtdKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXREYXRlc0VuYWJsZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERpc2FibGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldCBkYXRlQ3VzdG9tQ2xhc3Nlcyh2YWx1ZTogRGF0ZXBpY2tlckRhdGVDdXN0b21DbGFzc2VzW10pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERhdGVDdXN0b21DbGFzc2VzKHZhbHVlKTtcbiAgfVxuXG4gIHNldCBkYXRlVG9vbHRpcFRleHRzKHZhbHVlOiBEYXRlcGlja2VyRGF0ZVRvb2x0aXBUZXh0W10pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERhdGVUb29sdGlwVGV4dHModmFsdWUpO1xuICB9XG5cbiAgdmlld01vZGU6IE9ic2VydmFibGU8QnNEYXRlcGlja2VyVmlld01vZGU+O1xuICBkYXlzQ2FsZW5kYXI6IE9ic2VydmFibGU8RGF5c0NhbGVuZGFyVmlld01vZGVsW10+O1xuICBtb250aHNDYWxlbmRhcjogT2JzZXJ2YWJsZTxNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgeWVhcnNDYWxlbmRhcjogT2JzZXJ2YWJsZTxZZWFyc0NhbGVuZGFyVmlld01vZGVsW10+O1xuICBvcHRpb25zOiBPYnNlcnZhYmxlPERhdGVwaWNrZXJSZW5kZXJPcHRpb25zPjtcblxuICBzZXRWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHt9XG5cbiAgbmF2aWdhdGVUbyhldmVudDogQnNOYXZpZ2F0aW9uRXZlbnQpOiB2b2lkIHt9XG5cbiAgZGF5SG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cblxuICB3ZWVrSG92ZXJIYW5kbGVyKGV2ZW50OiBXZWVrVmlld01vZGVsKTogdm9pZCB7fVxuXG4gIG1vbnRoSG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cblxuICB5ZWFySG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cblxuICBkYXlTZWxlY3RIYW5kbGVyKGRheTogRGF5Vmlld01vZGVsKTogdm9pZCB7fVxuXG4gIG1vbnRoU2VsZWN0SGFuZGxlcihldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCB7fVxuXG4gIHllYXJTZWxlY3RIYW5kbGVyKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkIHt9XG5cbiAgc2V0UmFuZ2VPbkNhbGVuZGFyKGRhdGVzOiBCc0N1c3RvbURhdGVzKTogdm9pZCB7fVxuXG4gIHNldFRvZGF5KCk6IHZvaWQge31cblxuICBjbGVhckRhdGUoKTogdm9pZCB7fVxuXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cbiAgX3N0b3BQcm9wYWdhdGlvbihldmVudDogYW55KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==