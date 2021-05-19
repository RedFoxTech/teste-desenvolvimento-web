/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * **************
 * @record
 */
export function NavigationViewModel() { }
if (false) {
    /** @type {?} */
    NavigationViewModel.prototype.monthTitle;
    /** @type {?} */
    NavigationViewModel.prototype.yearTitle;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.hideLeftArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.hideRightArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.disableLeftArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.disableRightArrow;
}
/**
 * @record
 */
export function CalendarCellViewModel() { }
if (false) {
    /** @type {?} */
    CalendarCellViewModel.prototype.date;
    /** @type {?} */
    CalendarCellViewModel.prototype.label;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isDisabled;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isHovered;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isSelected;
}
/**
 * **************
 * @record
 */
export function DayViewModel() { }
if (false) {
    /** @type {?|undefined} */
    DayViewModel.prototype.isOtherMonthHovered;
    /** @type {?|undefined} */
    DayViewModel.prototype.isOtherMonth;
    /** @type {?|undefined} */
    DayViewModel.prototype.isInRange;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelectionStart;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelectionEnd;
    /** @type {?|undefined} */
    DayViewModel.prototype.isToday;
    /** @type {?|undefined} */
    DayViewModel.prototype.customClasses;
    /** @type {?|undefined} */
    DayViewModel.prototype.tooltipText;
    /** @type {?|undefined} */
    DayViewModel.prototype.monthIndex;
    /** @type {?|undefined} */
    DayViewModel.prototype.weekIndex;
    /** @type {?|undefined} */
    DayViewModel.prototype.dayIndex;
}
/**
 * @record
 */
export function WeekViewModel() { }
if (false) {
    /** @type {?} */
    WeekViewModel.prototype.days;
    /** @type {?|undefined} */
    WeekViewModel.prototype.isHovered;
}
/**
 * @record
 */
export function DaysCalendarViewModel() { }
if (false) {
    /** @type {?} */
    DaysCalendarViewModel.prototype.weeks;
    /** @type {?} */
    DaysCalendarViewModel.prototype.month;
    /** @type {?} */
    DaysCalendarViewModel.prototype.weekNumbers;
    /** @type {?} */
    DaysCalendarViewModel.prototype.weekdays;
}
/**
 * **************
 * @record
 */
export function MonthsCalendarViewModel() { }
if (false) {
    /** @type {?} */
    MonthsCalendarViewModel.prototype.months;
}
/**
 * **************
 * @record
 */
export function YearsCalendarViewModel() { }
if (false) {
    /** @type {?} */
    YearsCalendarViewModel.prototype.years;
}
/**
 * **************
 * @record
 */
export function DaysCalendarModel() { }
if (false) {
    /** @type {?} */
    DaysCalendarModel.prototype.daysMatrix;
    /** @type {?} */
    DaysCalendarModel.prototype.month;
}
/**
 * **************
 * @record
 */
export function MonthViewOptions() { }
if (false) {
    /** @type {?|undefined} */
    MonthViewOptions.prototype.width;
    /** @type {?|undefined} */
    MonthViewOptions.prototype.height;
    /** @type {?|undefined} */
    MonthViewOptions.prototype.firstDayOfWeek;
}
/**
 * **************
 * @record
 */
export function DatepickerFormatOptions() { }
if (false) {
    /** @type {?} */
    DatepickerFormatOptions.prototype.locale;
    /** @type {?} */
    DatepickerFormatOptions.prototype.monthTitle;
    /** @type {?} */
    DatepickerFormatOptions.prototype.yearTitle;
    /** @type {?} */
    DatepickerFormatOptions.prototype.dayLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.monthLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.yearLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.weekNumbers;
}
/**
 * @record
 */
export function DatepickerRenderOptions() { }
if (false) {
    /** @type {?|undefined} */
    DatepickerRenderOptions.prototype.showWeekNumbers;
    /** @type {?|undefined} */
    DatepickerRenderOptions.prototype.displayMonths;
}
/**
 * @record
 */
export function DatepickerDateCustomClasses() { }
if (false) {
    /** @type {?} */
    DatepickerDateCustomClasses.prototype.date;
    /** @type {?} */
    DatepickerDateCustomClasses.prototype.classes;
}
/**
 * @record
 */
export function DatepickerDateTooltipText() { }
if (false) {
    /** @type {?} */
    DatepickerDateTooltipText.prototype.date;
    /** @type {?} */
    DatepickerDateTooltipText.prototype.tooltipText;
}
/** @enum {number} */
var BsNavigationDirection = {
    UP: 0,
    DOWN: 1,
};
export { BsNavigationDirection };
BsNavigationDirection[BsNavigationDirection.UP] = 'UP';
BsNavigationDirection[BsNavigationDirection.DOWN] = 'DOWN';
/**
 * @record
 */
export function BsNavigationEvent() { }
if (false) {
    /** @type {?|undefined} */
    BsNavigationEvent.prototype.direction;
    /** @type {?|undefined} */
    BsNavigationEvent.prototype.step;
}
/**
 * @record
 */
export function BsViewNavigationEvent() { }
if (false) {
    /** @type {?|undefined} */
    BsViewNavigationEvent.prototype.unit;
    /** @type {?} */
    BsViewNavigationEvent.prototype.viewMode;
}
/**
 * @record
 */
export function CellHoverEvent() { }
if (false) {
    /** @type {?} */
    CellHoverEvent.prototype.cell;
    /** @type {?} */
    CellHoverEvent.prototype.isHovered;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJtb2RlbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSx5Q0FPQzs7O0lBTkMseUNBQW1COztJQUNuQix3Q0FBa0I7O0lBQ2xCLDRDQUF3Qjs7SUFDeEIsNkNBQXlCOztJQUN6QiwrQ0FBMkI7O0lBQzNCLGdEQUE0Qjs7Ozs7QUFHOUIsMkNBTUM7OztJQUxDLHFDQUFXOztJQUNYLHNDQUFjOztJQUNkLDJDQUFxQjs7SUFDckIsMENBQW9COztJQUNwQiwyQ0FBcUI7Ozs7OztBQUt2QixrQ0FhQzs7O0lBWkMsMkNBQThCOztJQUM5QixvQ0FBdUI7O0lBQ3ZCLGlDQUFvQjs7SUFDcEIsd0NBQTJCOztJQUMzQixzQ0FBeUI7O0lBQ3pCLCtCQUFrQjs7SUFDbEIscUNBQXVCOztJQUN2QixtQ0FBcUI7O0lBRXJCLGtDQUFvQjs7SUFDcEIsaUNBQW1COztJQUNuQixnQ0FBa0I7Ozs7O0FBR3BCLG1DQUdDOzs7SUFGQyw2QkFBcUI7O0lBQ3JCLGtDQUFvQjs7Ozs7QUFJdEIsMkNBTUM7OztJQUxDLHNDQUF1Qjs7SUFFdkIsc0NBQVk7O0lBQ1osNENBQXNCOztJQUN0Qix5Q0FBbUI7Ozs7OztBQUtyQiw2Q0FFQzs7O0lBREMseUNBQWtDOzs7Ozs7QUFLcEMsNENBRUM7OztJQURDLHVDQUFpQzs7Ozs7O0FBU25DLHVDQUdDOzs7SUFGQyx1Q0FBcUI7O0lBQ3JCLGtDQUFZOzs7Ozs7QUFLZCxzQ0FJQzs7O0lBSEMsaUNBQWU7O0lBQ2Ysa0NBQWdCOztJQUNoQiwwQ0FBd0I7Ozs7OztBQUsxQiw2Q0FXQzs7O0lBVkMseUNBQWU7O0lBRWYsNkNBQW1COztJQUNuQiw0Q0FBa0I7O0lBRWxCLDJDQUFpQjs7SUFDakIsNkNBQW1COztJQUNuQiw0Q0FBa0I7O0lBRWxCLDhDQUFvQjs7Ozs7QUFHdEIsNkNBR0M7OztJQUZDLGtEQUEwQjs7SUFDMUIsZ0RBQXVCOzs7OztBQUd6QixpREFHQzs7O0lBRkMsMkNBQVc7O0lBQ1gsOENBQWtCOzs7OztBQUdwQiwrQ0FHQzs7O0lBRkMseUNBQVc7O0lBQ1gsZ0RBQW9COzs7O0lBT3BCLEtBQUU7SUFDRixPQUFJOzs7Ozs7OztBQUlOLHVDQUdDOzs7SUFGQyxzQ0FBa0M7O0lBQ2xDLGlDQUFnQjs7Ozs7QUFHbEIsMkNBR0M7OztJQUZDLHFDQUFnQjs7SUFDaEIseUNBQStCOzs7OztBQUdqQyxvQ0FHQzs7O0lBRkMsOEJBQTRCOztJQUM1QixtQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmV4cG9ydCB0eXBlIEJzRGF0ZXBpY2tlclZpZXdNb2RlID0gJ2RheScgfCAnbW9udGgnIHwgJ3llYXInO1xuXG4vKiogKioqKioqKioqKioqKioqICovXG4vLyBuYXZpZ2F0aW9uIGJhciBzZXR0aW5nc1xuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0aW9uVmlld01vZGVsIHtcbiAgbW9udGhUaXRsZTogc3RyaW5nO1xuICB5ZWFyVGl0bGU6IHN0cmluZztcbiAgaGlkZUxlZnRBcnJvdz86IGJvb2xlYW47XG4gIGhpZGVSaWdodEFycm93PzogYm9vbGVhbjtcbiAgZGlzYWJsZUxlZnRBcnJvdz86IGJvb2xlYW47XG4gIGRpc2FibGVSaWdodEFycm93PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhckNlbGxWaWV3TW9kZWwge1xuICBkYXRlOiBEYXRlO1xuICBsYWJlbDogc3RyaW5nO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgaXNIb3ZlcmVkPzogYm9vbGVhbjtcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIGRheXMgbWF0cml4OiBkYXkgY2VsbCB2aWV3IG1vZGVsXG5leHBvcnQgaW50ZXJmYWNlIERheVZpZXdNb2RlbCBleHRlbmRzIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCB7XG4gIGlzT3RoZXJNb250aEhvdmVyZWQ/OiBib29sZWFuO1xuICBpc090aGVyTW9udGg/OiBib29sZWFuO1xuICBpc0luUmFuZ2U/OiBib29sZWFuO1xuICBpc1NlbGVjdGlvblN0YXJ0PzogYm9vbGVhbjtcbiAgaXNTZWxlY3Rpb25FbmQ/OiBib29sZWFuO1xuICBpc1RvZGF5PzogYm9vbGVhbjtcbiAgY3VzdG9tQ2xhc3Nlcz86IHN0cmluZztcbiAgdG9vbHRpcFRleHQ/OiBzdHJpbmc7XG4gIC8vIGRheSBpbmRleFxuICBtb250aEluZGV4PzogbnVtYmVyO1xuICB3ZWVrSW5kZXg/OiBudW1iZXI7XG4gIGRheUluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtWaWV3TW9kZWwge1xuICBkYXlzOiBEYXlWaWV3TW9kZWxbXTtcbiAgaXNIb3ZlcmVkPzogYm9vbGVhbjtcbn1cblxuLy8gdG9kbzogc3BsaXQgbmF2aWdhdGlvbiBzZXR0aW5nc1xuZXhwb3J0IGludGVyZmFjZSBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwgZXh0ZW5kcyBOYXZpZ2F0aW9uVmlld01vZGVsIHtcbiAgd2Vla3M6IFdlZWtWaWV3TW9kZWxbXTtcbiAgLy8gYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICBtb250aDogRGF0ZTtcbiAgd2Vla051bWJlcnM6IHN0cmluZ1tdO1xuICB3ZWVrZGF5czogc3RyaW5nW107XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIG1vbnRocyBjYWxlbmRhclxuZXhwb3J0IGludGVyZmFjZSBNb250aHNDYWxlbmRhclZpZXdNb2RlbCBleHRlbmRzIE5hdmlnYXRpb25WaWV3TW9kZWwge1xuICBtb250aHM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdW107XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIHllYXJzIGNhbGVuZGFyXG5leHBvcnQgaW50ZXJmYWNlIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwgZXh0ZW5kcyBOYXZpZ2F0aW9uVmlld01vZGVsIHtcbiAgeWVhcnM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdW107XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cblxuLy8gbWF0aCBtb2RlbFxuLyoqICoqKioqKioqKioqKioqKiAqL1xuXG4vLyBkYXlzIERhdGUncyBhcnJheVxuZXhwb3J0IGludGVyZmFjZSBEYXlzQ2FsZW5kYXJNb2RlbCB7XG4gIGRheXNNYXRyaXg6IERhdGVbXVtdO1xuICBtb250aDogRGF0ZTtcbn1cblxuLyoqICoqKioqKioqKioqKioqKiAqL1xuLy8gc29tZSBmdW5jIG9wdGlvbnNcbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhWaWV3T3B0aW9ucyB7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyO1xufVxuXG4vKiogKioqKioqKioqKioqKioqICovXG4vLyByZW5kZXJpbmcgb3B0aW9uc1xuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyB7XG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIG1vbnRoVGl0bGU6IHN0cmluZztcbiAgeWVhclRpdGxlOiBzdHJpbmc7XG5cbiAgZGF5TGFiZWw6IHN0cmluZztcbiAgbW9udGhMYWJlbDogc3RyaW5nO1xuICB5ZWFyTGFiZWw6IHN0cmluZztcblxuICB3ZWVrTnVtYmVyczogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zIHtcbiAgc2hvd1dlZWtOdW1iZXJzPzogYm9vbGVhbjtcbiAgZGlzcGxheU1vbnRocz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXMge1xuICBkYXRlOiBEYXRlO1xuICBjbGFzc2VzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyRGF0ZVRvb2x0aXBUZXh0IHtcbiAgZGF0ZTogRGF0ZTtcbiAgdG9vbHRpcFRleHQ6IHN0cmluZztcbn1cblxuLyoqICoqKioqKioqKioqKioqKiAqL1xuLy8gZXZlbnRzXG4vKiogKioqKioqKioqKioqKioqICovXG5leHBvcnQgZW51bSBCc05hdmlnYXRpb25EaXJlY3Rpb24ge1xuICBVUCxcbiAgRE9XTlxufVxuXG4vLyB1c2VkIGZvciBuYXZpZ2F0aW9uIGV2ZW50cywgdG8gY2hhbmdlIHZpZXcgZGF0ZSBpbiBzdGF0ZVxuZXhwb3J0IGludGVyZmFjZSBCc05hdmlnYXRpb25FdmVudCB7XG4gIGRpcmVjdGlvbj86IEJzTmF2aWdhdGlvbkRpcmVjdGlvbjtcbiAgc3RlcD86IFRpbWVVbml0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJzVmlld05hdmlnYXRpb25FdmVudCB7XG4gIHVuaXQ/OiBUaW1lVW5pdDtcbiAgdmlld01vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENlbGxIb3ZlckV2ZW50IHtcbiAgY2VsbDogQ2FsZW5kYXJDZWxsVmlld01vZGVsO1xuICBpc0hvdmVyZWQ6IGJvb2xlYW47XG59XG4iXX0=