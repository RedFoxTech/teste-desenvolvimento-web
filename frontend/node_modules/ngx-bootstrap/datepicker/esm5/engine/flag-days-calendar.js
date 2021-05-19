/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isAfter, isBefore, isDisabledDay, isSameDay, isSameMonth, shiftDate } from 'ngx-bootstrap/chronos';
import { isMonthDisabled, isDisabledDate, isEnabledDate } from '../utils/bs-calendar-utils';
/**
 * @record
 */
export function FlagDaysCalendarOptions() { }
if (false) {
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.isDisabled;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.minDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.maxDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.daysDisabled;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.datesDisabled;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.datesEnabled;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.hoveredDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.selectedDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.selectedRange;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.displayMonths;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.monthIndex;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.dateCustomClasses;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.dateTooltipTexts;
}
/**
 * @param {?} formattedMonth
 * @param {?} options
 * @return {?}
 */
export function flagDaysCalendar(formattedMonth, options) {
    formattedMonth.weeks.forEach((/**
     * @param {?} week
     * @return {?}
     */
    function (week) {
        /* tslint:disable-next-line: cyclomatic-complexity */
        week.days.forEach((/**
         * @param {?} day
         * @param {?} dayIndex
         * @return {?}
         */
        function (day, dayIndex) {
            // datepicker
            /** @type {?} */
            var isOtherMonth = !isSameMonth(day.date, formattedMonth.month);
            /** @type {?} */
            var isHovered = !isOtherMonth && isSameDay(day.date, options.hoveredDate);
            // date range picker
            /** @type {?} */
            var isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[0]);
            /** @type {?} */
            var isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[1]);
            /** @type {?} */
            var isSelected = (!isOtherMonth && isSameDay(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            /** @type {?} */
            var isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            /** @type {?} */
            var isDisabled = options.isDisabled ||
                isBefore(day.date, options.minDate, 'day') ||
                isAfter(day.date, options.maxDate, 'day') ||
                isDisabledDay(day.date, options.daysDisabled) ||
                isDisabledDate(day.date, options.datesDisabled) ||
                isEnabledDate(day.date, options.datesEnabled);
            /** @type {?} */
            var currentDate = new Date();
            /** @type {?} */
            var isToday = !isOtherMonth && isSameDay(day.date, currentDate);
            /** @type {?} */
            var customClasses = options.dateCustomClasses && options.dateCustomClasses
                .map((/**
             * @param {?} dcc
             * @return {?}
             */
            function (dcc) { return isSameDay(day.date, dcc.date) ? dcc.classes : []; }))
                .reduce((/**
             * @param {?} previousValue
             * @param {?} currentValue
             * @return {?}
             */
            function (previousValue, currentValue) { return previousValue.concat(currentValue); }), [])
                .join(' ')
                || '';
            /** @type {?} */
            var tooltipText = options.dateTooltipTexts && options.dateTooltipTexts
                .map((/**
             * @param {?} tt
             * @return {?}
             */
            function (tt) { return isSameDay(day.date, tt.date) ? tt.tooltipText : ''; }))
                .reduce((/**
             * @param {?} previousValue
             * @param {?} currentValue
             * @return {?}
             */
            function (previousValue, currentValue) { return previousValue.concat(currentValue); }), [])
                .join(' ')
                || '';
            // decide update or not
            /** @type {?} */
            var newDay = Object.assign({}, day, {
                isOtherMonth: isOtherMonth,
                isHovered: isHovered,
                isSelected: isSelected,
                isSelectionStart: isSelectionStart,
                isSelectionEnd: isSelectionEnd,
                isInRange: isInRange,
                isDisabled: isDisabled,
                isToday: isToday,
                customClasses: customClasses,
                tooltipText: tooltipText
            });
            if (day.isOtherMonth !== newDay.isOtherMonth ||
                day.isHovered !== newDay.isHovered ||
                day.isSelected !== newDay.isSelected ||
                day.isSelectionStart !== newDay.isSelectionStart ||
                day.isSelectionEnd !== newDay.isSelectionEnd ||
                day.isDisabled !== newDay.isDisabled ||
                day.isInRange !== newDay.isInRange ||
                day.customClasses !== newDay.customClasses ||
                day.tooltipText !== newDay.tooltipText) {
                week.days[dayIndex] = newDay;
            }
        }));
    }));
    // todo: add check for linked calendars
    formattedMonth.hideLeftArrow =
        options.isDisabled ||
            (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
    formattedMonth.hideRightArrow =
        options.isDisabled ||
            (options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths);
    formattedMonth.disableLeftArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
    formattedMonth.disableRightArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
    return formattedMonth;
}
/**
 * @param {?} date
 * @param {?} selectedRange
 * @param {?} hoveredDate
 * @return {?}
 */
function isDateInRange(date, selectedRange, hoveredDate) {
    if (!date || !selectedRange[0]) {
        return false;
    }
    if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
    }
    if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1kYXlzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2ZsYWctZGF5cy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBUUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxRQUFRLEVBQ1IsYUFBYSxFQUNiLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFFNUYsNkNBY0M7OztJQWJDLDZDQUFvQjs7SUFDcEIsMENBQWM7O0lBQ2QsMENBQWM7O0lBQ2QsK0NBQXVCOztJQUN2QixnREFBc0I7O0lBQ3RCLCtDQUFxQjs7SUFDckIsOENBQWtCOztJQUNsQiwrQ0FBbUI7O0lBQ25CLGdEQUFzQjs7SUFDdEIsZ0RBQXNCOztJQUN0Qiw2Q0FBbUI7O0lBQ25CLG9EQUFpRDs7SUFDakQsbURBQThDOzs7Ozs7O0FBR2hELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsY0FBcUMsRUFDckMsT0FBZ0M7SUFFaEMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQyxJQUFtQjtRQUMvQyxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7OztRQUFDLFVBQUMsR0FBaUIsRUFBRSxRQUFnQjs7O2dCQUU5QyxZQUFZLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDOztnQkFFM0QsU0FBUyxHQUNiLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUM7OztnQkFFckQsZ0JBQWdCLEdBQ3BCLENBQUMsWUFBWTtnQkFDYixPQUFPLENBQUMsYUFBYTtnQkFD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QUMsRUFBRSxDQUFDLEVBQzlDLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztJQUNGLGNBQWMsQ0FBQyxpQkFBaUIsR0FBRyxlQUFlLENBQ2hELFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQzdDLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztJQUVGLE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUM7Ozs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FDcEIsSUFBVSxFQUNWLGFBQXFCLEVBQ3JCLFdBQWlCO0lBRWpCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDOUIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVEO0lBRUQsSUFBSSxXQUFXLEVBQUU7UUFDZixPQUFPLElBQUksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLFdBQVcsQ0FBQztLQUN2RDtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgRGF5Vmlld01vZGVsLFxuICBXZWVrVmlld01vZGVsLFxuICBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXMsXG4gIERhdGVwaWNrZXJEYXRlVG9vbHRpcFRleHRcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuaW1wb3J0IHtcbiAgaXNBZnRlcixcbiAgaXNCZWZvcmUsXG4gIGlzRGlzYWJsZWREYXksXG4gIGlzU2FtZURheSxcbiAgaXNTYW1lTW9udGgsXG4gIHNoaWZ0RGF0ZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuXG5pbXBvcnQgeyBpc01vbnRoRGlzYWJsZWQsIGlzRGlzYWJsZWREYXRlLCBpc0VuYWJsZWREYXRlIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdEYXlzQ2FsZW5kYXJPcHRpb25zIHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgbWluRGF0ZTogRGF0ZTtcbiAgbWF4RGF0ZTogRGF0ZTtcbiAgZGF5c0Rpc2FibGVkOiBudW1iZXJbXTtcbiAgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdO1xuICBkYXRlc0VuYWJsZWQ6IERhdGVbXTtcbiAgaG92ZXJlZERhdGU6IERhdGU7XG4gIHNlbGVjdGVkRGF0ZTogRGF0ZTtcbiAgc2VsZWN0ZWRSYW5nZTogRGF0ZVtdO1xuICBkaXNwbGF5TW9udGhzOiBudW1iZXI7XG4gIG1vbnRoSW5kZXg6IG51bWJlcjtcbiAgZGF0ZUN1c3RvbUNsYXNzZXM6IERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3Nlc1tdO1xuICBkYXRlVG9vbHRpcFRleHRzOiBEYXRlcGlja2VyRGF0ZVRvb2x0aXBUZXh0W107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGFnRGF5c0NhbGVuZGFyKFxuICBmb3JtYXR0ZWRNb250aDogRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBvcHRpb25zOiBGbGFnRGF5c0NhbGVuZGFyT3B0aW9uc1xuKTogRGF5c0NhbGVuZGFyVmlld01vZGVsIHtcbiAgZm9ybWF0dGVkTW9udGgud2Vla3MuZm9yRWFjaCgod2VlazogV2Vla1ZpZXdNb2RlbCkgPT4ge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY3ljbG9tYXRpYy1jb21wbGV4aXR5ICovXG4gICAgd2Vlay5kYXlzLmZvckVhY2goKGRheTogRGF5Vmlld01vZGVsLCBkYXlJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAvLyBkYXRlcGlja2VyXG4gICAgICBjb25zdCBpc090aGVyTW9udGggPSAhaXNTYW1lTW9udGgoZGF5LmRhdGUsIGZvcm1hdHRlZE1vbnRoLm1vbnRoKTtcblxuICAgICAgY29uc3QgaXNIb3ZlcmVkID1cbiAgICAgICAgIWlzT3RoZXJNb250aCAmJiBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuaG92ZXJlZERhdGUpO1xuICAgICAgLy8gZGF0ZSByYW5nZSBwaWNrZXJcbiAgICAgIGNvbnN0IGlzU2VsZWN0aW9uU3RhcnQgPVxuICAgICAgICAhaXNPdGhlck1vbnRoICYmXG4gICAgICAgIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZSAmJlxuICAgICAgICBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZVswXSk7XG4gICAgICBjb25zdCBpc1NlbGVjdGlvbkVuZCA9XG4gICAgICAgICFpc090aGVyTW9udGggJiZcbiAgICAgICAgb3B0aW9ucy5zZWxlY3RlZFJhbmdlICYmXG4gICAgICAgIGlzU2FtZURheShkYXkuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZFJhbmdlWzFdKTtcblxuICAgICAgY29uc3QgaXNTZWxlY3RlZCA9XG4gICAgICAgICghaXNPdGhlck1vbnRoICYmIGlzU2FtZURheShkYXkuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZERhdGUpKSB8fFxuICAgICAgICBpc1NlbGVjdGlvblN0YXJ0IHx8XG4gICAgICAgIGlzU2VsZWN0aW9uRW5kO1xuXG4gICAgICBjb25zdCBpc0luUmFuZ2UgPVxuICAgICAgICAhaXNPdGhlck1vbnRoICYmXG4gICAgICAgIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZSAmJlxuICAgICAgICBpc0RhdGVJblJhbmdlKGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkUmFuZ2UsIG9wdGlvbnMuaG92ZXJlZERhdGUpO1xuXG4gICAgICBjb25zdCBpc0Rpc2FibGVkID1cbiAgICAgICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XG4gICAgICAgIGlzQmVmb3JlKGRheS5kYXRlLCBvcHRpb25zLm1pbkRhdGUsICdkYXknKSB8fFxuICAgICAgICBpc0FmdGVyKGRheS5kYXRlLCBvcHRpb25zLm1heERhdGUsICdkYXknKSB8fFxuICAgICAgICBpc0Rpc2FibGVkRGF5KGRheS5kYXRlLCBvcHRpb25zLmRheXNEaXNhYmxlZCkgfHxcbiAgICAgICAgaXNEaXNhYmxlZERhdGUoZGF5LmRhdGUsIG9wdGlvbnMuZGF0ZXNEaXNhYmxlZCkgfHxcbiAgICAgICAgaXNFbmFibGVkRGF0ZShkYXkuZGF0ZSwgb3B0aW9ucy5kYXRlc0VuYWJsZWQpO1xuXG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBpc1RvZGF5ID0gIWlzT3RoZXJNb250aCAmJiBpc1NhbWVEYXkoZGF5LmRhdGUsIGN1cnJlbnREYXRlKTtcblxuICAgICAgY29uc3QgY3VzdG9tQ2xhc3NlcyA9IG9wdGlvbnMuZGF0ZUN1c3RvbUNsYXNzZXMgJiYgb3B0aW9ucy5kYXRlQ3VzdG9tQ2xhc3Nlc1xuICAgICAgICAubWFwKGRjYyA9PiBpc1NhbWVEYXkoZGF5LmRhdGUsIGRjYy5kYXRlKSA/IGRjYy5jbGFzc2VzIDogW10pXG4gICAgICAgIC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4gcHJldmlvdXNWYWx1ZS5jb25jYXQoY3VycmVudFZhbHVlKSwgW10pXG4gICAgICAgIC5qb2luKCcgJylcbiAgICAgICAgfHwgJyc7XG5cbiAgICAgIGNvbnN0IHRvb2x0aXBUZXh0ID0gb3B0aW9ucy5kYXRlVG9vbHRpcFRleHRzICYmIG9wdGlvbnMuZGF0ZVRvb2x0aXBUZXh0c1xuICAgICAgICAgIC5tYXAodHQgPT4gaXNTYW1lRGF5KGRheS5kYXRlLCB0dC5kYXRlKSA/IHR0LnRvb2x0aXBUZXh0IDogJycpXG4gICAgICAgICAgLnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiBwcmV2aW91c1ZhbHVlLmNvbmNhdChjdXJyZW50VmFsdWUpLCBbXSlcbiAgICAgICAgICAuam9pbignICcpXG4gICAgICAgIHx8ICcnO1xuXG4gICAgICAvLyBkZWNpZGUgdXBkYXRlIG9yIG5vdFxuICAgICAgY29uc3QgbmV3RGF5ID0gT2JqZWN0LmFzc2lnbih7fSwgZGF5LCB7XG4gICAgICAgIGlzT3RoZXJNb250aCxcbiAgICAgICAgaXNIb3ZlcmVkLFxuICAgICAgICBpc1NlbGVjdGVkLFxuICAgICAgICBpc1NlbGVjdGlvblN0YXJ0LFxuICAgICAgICBpc1NlbGVjdGlvbkVuZCxcbiAgICAgICAgaXNJblJhbmdlLFxuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICBpc1RvZGF5LFxuICAgICAgICBjdXN0b21DbGFzc2VzLFxuICAgICAgICB0b29sdGlwVGV4dFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgZGF5LmlzT3RoZXJNb250aCAhPT0gbmV3RGF5LmlzT3RoZXJNb250aCB8fFxuICAgICAgICBkYXkuaXNIb3ZlcmVkICE9PSBuZXdEYXkuaXNIb3ZlcmVkIHx8XG4gICAgICAgIGRheS5pc1NlbGVjdGVkICE9PSBuZXdEYXkuaXNTZWxlY3RlZCB8fFxuICAgICAgICBkYXkuaXNTZWxlY3Rpb25TdGFydCAhPT0gbmV3RGF5LmlzU2VsZWN0aW9uU3RhcnQgfHxcbiAgICAgICAgZGF5LmlzU2VsZWN0aW9uRW5kICE9PSBuZXdEYXkuaXNTZWxlY3Rpb25FbmQgfHxcbiAgICAgICAgZGF5LmlzRGlzYWJsZWQgIT09IG5ld0RheS5pc0Rpc2FibGVkIHx8XG4gICAgICAgIGRheS5pc0luUmFuZ2UgIT09IG5ld0RheS5pc0luUmFuZ2UgfHxcbiAgICAgICAgZGF5LmN1c3RvbUNsYXNzZXMgIT09IG5ld0RheS5jdXN0b21DbGFzc2VzIHx8XG4gICAgICAgIGRheS50b29sdGlwVGV4dCAhPT0gbmV3RGF5LnRvb2x0aXBUZXh0XG4gICAgICApIHtcbiAgICAgICAgd2Vlay5kYXlzW2RheUluZGV4XSA9IG5ld0RheTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciBsaW5rZWQgY2FsZW5kYXJzXG4gIGZvcm1hdHRlZE1vbnRoLmhpZGVMZWZ0QXJyb3cgPVxuICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgIChvcHRpb25zLm1vbnRoSW5kZXggPiAwICYmIG9wdGlvbnMubW9udGhJbmRleCAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzKTtcbiAgZm9ybWF0dGVkTW9udGguaGlkZVJpZ2h0QXJyb3cgPVxuICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgIChvcHRpb25zLm1vbnRoSW5kZXggPCBvcHRpb25zLmRpc3BsYXlNb250aHMgJiZcbiAgICAgIG9wdGlvbnMubW9udGhJbmRleCArIDEgIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocyk7XG5cbiAgZm9ybWF0dGVkTW9udGguZGlzYWJsZUxlZnRBcnJvdyA9IGlzTW9udGhEaXNhYmxlZChcbiAgICBzaGlmdERhdGUoZm9ybWF0dGVkTW9udGgubW9udGgsIHsgbW9udGg6IC0xIH0pLFxuICAgIG9wdGlvbnMubWluRGF0ZSxcbiAgICBvcHRpb25zLm1heERhdGVcbiAgKTtcbiAgZm9ybWF0dGVkTW9udGguZGlzYWJsZVJpZ2h0QXJyb3cgPSBpc01vbnRoRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKGZvcm1hdHRlZE1vbnRoLm1vbnRoLCB7IG1vbnRoOiAxIH0pLFxuICAgIG9wdGlvbnMubWluRGF0ZSxcbiAgICBvcHRpb25zLm1heERhdGVcbiAgKTtcblxuICByZXR1cm4gZm9ybWF0dGVkTW9udGg7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UoXG4gIGRhdGU6IERhdGUsXG4gIHNlbGVjdGVkUmFuZ2U6IERhdGVbXSxcbiAgaG92ZXJlZERhdGU6IERhdGVcbik6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUgfHwgIXNlbGVjdGVkUmFuZ2VbMF0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc2VsZWN0ZWRSYW5nZVsxXSkge1xuICAgIHJldHVybiBkYXRlID4gc2VsZWN0ZWRSYW5nZVswXSAmJiBkYXRlIDw9IHNlbGVjdGVkUmFuZ2VbMV07XG4gIH1cblxuICBpZiAoaG92ZXJlZERhdGUpIHtcbiAgICByZXR1cm4gZGF0ZSA+IHNlbGVjdGVkUmFuZ2VbMF0gJiYgZGF0ZSA8PSBob3ZlcmVkRGF0ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiJdfQ==