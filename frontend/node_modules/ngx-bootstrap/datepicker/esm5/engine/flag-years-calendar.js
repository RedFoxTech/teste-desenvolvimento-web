/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isSameYear, shiftDate } from 'ngx-bootstrap/chronos';
import { isYearDisabled } from '../utils/bs-calendar-utils';
/**
 * @record
 */
export function FlagYearsCalendarOptions() { }
if (false) {
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.isDisabled;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.minDate;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.maxDate;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.hoveredYear;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.selectedDate;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.selectedRange;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.displayMonths;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.yearIndex;
}
/**
 * @param {?} yearsCalendar
 * @param {?} options
 * @return {?}
 */
export function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach((/**
     * @param {?} years
     * @param {?} rowIndex
     * @return {?}
     */
    function (years, rowIndex) {
        years.forEach((/**
         * @param {?} year
         * @param {?} yearIndex
         * @return {?}
         */
        function (year, yearIndex) {
            /** @type {?} */
            var isSelected;
            /** @type {?} */
            var isHovered = isSameYear(year.date, options.hoveredYear);
            /** @type {?} */
            var isDisabled = options.isDisabled ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            if (!options.selectedDate && options.selectedRange) {
                isSelected = isSameYear(year.date, options.selectedRange[0]);
                if (!isSelected) {
                    isSelected = isSameYear(year.date, options.selectedRange[1]);
                }
            }
            else {
                isSelected = isSameYear(year.date, options.selectedDate);
            }
            /** @type {?} */
            var newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled, isSelected: isSelected });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled ||
                year.isSelected !== newMonth.isSelected) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        }));
    }));
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = isYearDisabled(shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    /** @type {?} */
    var i = yearsCalendar.years.length - 1;
    /** @type {?} */
    var j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy15ZWFycy1jYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImVuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUU1RCw4Q0FTQzs7O0lBUkMsOENBQW9COztJQUNwQiwyQ0FBYzs7SUFDZCwyQ0FBYzs7SUFDZCwrQ0FBa0I7O0lBQ2xCLGdEQUFtQjs7SUFDbkIsaURBQXNCOztJQUN0QixpREFBc0I7O0lBQ3RCLDZDQUFrQjs7Ozs7OztBQUdwQixNQUFNLFVBQVUsaUJBQWlCLENBQy9CLGFBQXFDLEVBQ3JDLE9BQWlDO0lBRWpDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTzs7Ozs7SUFDekIsVUFBQyxLQUE4QixFQUFFLFFBQWdCO1FBQy9DLEtBQUssQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsSUFBMkIsRUFBRSxTQUFpQjs7Z0JBQ3ZELFVBQW1COztnQkFDakIsU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUM7O2dCQUN0RCxVQUFVLEdBQ2QsT0FBTyxDQUFDLFVBQVU7Z0JBQ2xCLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUU3RCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO2dCQUNsRCxVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNmLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzlEO2FBQ0Y7aUJBQU07Z0JBQ0wsVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMxRDs7Z0JBRUssUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUM7WUFDbkYsSUFDRSxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxTQUFTO2dCQUNyQyxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxVQUFVO2dCQUN2QyxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxVQUFVLEVBQ3ZDO2dCQUNBLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQ3JEO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDLEVBQ0YsQ0FBQztJQUVGLHVDQUF1QztJQUN2QyxhQUFhLENBQUMsYUFBYTtRQUN6QixPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdkUsYUFBYSxDQUFDLGNBQWM7UUFDMUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYTtZQUN6QyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBRWxELGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQzdDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3ZELE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQzs7UUFDSSxDQUFDLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7UUFDbEMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDM0MsYUFBYSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FDOUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQ3RELE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztJQUVGLE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1NhbWVZZWFyLCBzaGlmdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgWWVhcnNDYWxlbmRhclZpZXdNb2RlbCwgQ2FsZW5kYXJDZWxsVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IGlzWWVhckRpc2FibGVkIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdZZWFyc0NhbGVuZGFyT3B0aW9ucyB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIG1pbkRhdGU6IERhdGU7XG4gIG1heERhdGU6IERhdGU7XG4gIGhvdmVyZWRZZWFyOiBEYXRlO1xuICBzZWxlY3RlZERhdGU6IERhdGU7XG4gIHNlbGVjdGVkUmFuZ2U6IERhdGVbXTtcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xuICB5ZWFySW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdZZWFyc0NhbGVuZGFyKFxuICB5ZWFyc0NhbGVuZGFyOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsLFxuICBvcHRpb25zOiBGbGFnWWVhcnNDYWxlbmRhck9wdGlvbnNcbik6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwge1xuICB5ZWFyc0NhbGVuZGFyLnllYXJzLmZvckVhY2goXG4gICAgKHllYXJzOiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXSwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgeWVhcnMuZm9yRWFjaCgoeWVhcjogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCB5ZWFySW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBsZXQgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgICAgICAgY29uc3QgaXNIb3ZlcmVkID0gaXNTYW1lWWVhcih5ZWFyLmRhdGUsIG9wdGlvbnMuaG92ZXJlZFllYXIpO1xuICAgICAgICBjb25zdCBpc0Rpc2FibGVkID1cbiAgICAgICAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcbiAgICAgICAgICBpc1llYXJEaXNhYmxlZCh5ZWFyLmRhdGUsIG9wdGlvbnMubWluRGF0ZSwgb3B0aW9ucy5tYXhEYXRlKTtcblxuICAgICAgICBpZiAoIW9wdGlvbnMuc2VsZWN0ZWREYXRlICYmIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZSkge1xuICAgICAgICAgIGlzU2VsZWN0ZWQgPSBpc1NhbWVZZWFyKHllYXIuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZFJhbmdlWzBdKTtcbiAgICAgICAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSBpc1NhbWVZZWFyKHllYXIuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZFJhbmdlWzFdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNTZWxlY3RlZCA9IGlzU2FtZVllYXIoeWVhci5kYXRlLCBvcHRpb25zLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdNb250aCA9IE9iamVjdC5hc3NpZ24oLyp7fSwqLyB5ZWFyLCB7IGlzSG92ZXJlZCwgaXNEaXNhYmxlZCwgaXNTZWxlY3RlZCB9KTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHllYXIuaXNIb3ZlcmVkICE9PSBuZXdNb250aC5pc0hvdmVyZWQgfHxcbiAgICAgICAgICB5ZWFyLmlzRGlzYWJsZWQgIT09IG5ld01vbnRoLmlzRGlzYWJsZWQgfHxcbiAgICAgICAgICB5ZWFyLmlzU2VsZWN0ZWQgIT09IG5ld01vbnRoLmlzU2VsZWN0ZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgeWVhcnNDYWxlbmRhci55ZWFyc1tyb3dJbmRleF1beWVhckluZGV4XSA9IG5ld01vbnRoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG5cbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciBsaW5rZWQgY2FsZW5kYXJzXG4gIHllYXJzQ2FsZW5kYXIuaGlkZUxlZnRBcnJvdyA9XG4gICAgb3B0aW9ucy55ZWFySW5kZXggPiAwICYmIG9wdGlvbnMueWVhckluZGV4ICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG4gIHllYXJzQ2FsZW5kYXIuaGlkZVJpZ2h0QXJyb3cgPVxuICAgIG9wdGlvbnMueWVhckluZGV4IDwgb3B0aW9ucy5kaXNwbGF5TW9udGhzICYmXG4gICAgb3B0aW9ucy55ZWFySW5kZXggKyAxICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XG5cbiAgeWVhcnNDYWxlbmRhci5kaXNhYmxlTGVmdEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKHllYXJzQ2FsZW5kYXIueWVhcnNbMF1bMF0uZGF0ZSwgeyB5ZWFyOiAtMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG4gIGNvbnN0IGkgPSB5ZWFyc0NhbGVuZGFyLnllYXJzLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGogPSB5ZWFyc0NhbGVuZGFyLnllYXJzW2ldLmxlbmd0aCAtIDE7XG4gIHllYXJzQ2FsZW5kYXIuZGlzYWJsZVJpZ2h0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcbiAgICBzaGlmdERhdGUoeWVhcnNDYWxlbmRhci55ZWFyc1tpXVtqXS5kYXRlLCB7IHllYXI6IDEgfSksXG4gICAgb3B0aW9ucy5taW5EYXRlLFxuICAgIG9wdGlvbnMubWF4RGF0ZVxuICApO1xuXG4gIHJldHVybiB5ZWFyc0NhbGVuZGFyO1xufVxuIl19