/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class BsDatepickerActions {
    /**
     * @return {?}
     */
    calculate() {
        return { type: BsDatepickerActions.CALCULATE };
    }
    /**
     * @return {?}
     */
    format() {
        return { type: BsDatepickerActions.FORMAT };
    }
    /**
     * @return {?}
     */
    flag() {
        return { type: BsDatepickerActions.FLAG };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    select(date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    }
    /**
     * @param {?} step
     * @return {?}
     */
    navigateStep(step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    }
    // date range picker
    /**
     * @param {?} value
     * @return {?}
     */
    selectRange(value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    hoverDay(event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    minDate(date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    maxDate(date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    }
    /**
     * @param {?} days
     * @return {?}
     */
    daysDisabled(days) {
        return {
            type: BsDatepickerActions.SET_DAYSDISABLED,
            payload: days
        };
    }
    /**
     * @param {?} dates
     * @return {?}
     */
    datesDisabled(dates) {
        return {
            type: BsDatepickerActions.SET_DATESDISABLED,
            payload: dates
        };
    }
    /**
     * @param {?} dates
     * @return {?}
     */
    datesEnabled(dates) {
        return {
            type: BsDatepickerActions.SET_DATESENABLED,
            payload: dates
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isDisabled(value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDateCustomClasses(value) {
        return {
            type: BsDatepickerActions.SET_DATE_CUSTOM_CLASSES,
            payload: value
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDateTooltipTexts(value) {
        return {
            type: BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS,
            payload: value
        };
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    setLocale(locale) {
        return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
        };
    }
}
BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
BsDatepickerActions.FLAG = '[datepicker] set flags';
BsDatepickerActions.SELECT = '[datepicker] select date';
BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
BsDatepickerActions.HOVER = '[datepicker] hover date';
BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
BsDatepickerActions.SET_DATESENABLED = '[datepicker] set dates enabled';
BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
BsDatepickerActions.SET_DATE_CUSTOM_CLASSES = '[datepicker] set date custom classes';
BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS = '[datepicker] set date tooltip texts';
BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
BsDatepickerActions.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    BsDatepickerActions.CALCULATE;
    /** @type {?} */
    BsDatepickerActions.FORMAT;
    /** @type {?} */
    BsDatepickerActions.FLAG;
    /** @type {?} */
    BsDatepickerActions.SELECT;
    /** @type {?} */
    BsDatepickerActions.NAVIGATE_OFFSET;
    /** @type {?} */
    BsDatepickerActions.NAVIGATE_TO;
    /** @type {?} */
    BsDatepickerActions.SET_OPTIONS;
    /** @type {?} */
    BsDatepickerActions.HOVER;
    /** @type {?} */
    BsDatepickerActions.CHANGE_VIEWMODE;
    /** @type {?} */
    BsDatepickerActions.SET_MIN_DATE;
    /** @type {?} */
    BsDatepickerActions.SET_MAX_DATE;
    /** @type {?} */
    BsDatepickerActions.SET_DAYSDISABLED;
    /** @type {?} */
    BsDatepickerActions.SET_DATESDISABLED;
    /** @type {?} */
    BsDatepickerActions.SET_DATESENABLED;
    /** @type {?} */
    BsDatepickerActions.SET_IS_DISABLED;
    /** @type {?} */
    BsDatepickerActions.SET_DATE_CUSTOM_CLASSES;
    /** @type {?} */
    BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS;
    /** @type {?} */
    BsDatepickerActions.SET_LOCALE;
    /** @type {?} */
    BsDatepickerActions.SELECT_RANGE;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFhM0MsTUFBTSxPQUFPLG1CQUFtQjs7OztJQXVCOUIsU0FBUztRQUNQLE9BQU8sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsT0FBTyxFQUFFLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFVO1FBQ2YsT0FBTztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxNQUFNO1lBQ2hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQTJCO1FBQ3hDLE9BQU87WUFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsZUFBZTtZQUN6QyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUE0QjtRQUNyQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLFdBQVc7WUFDckMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBYztRQUN6QixPQUFPO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLGVBQWU7WUFDekMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFF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QWUsR0FBRyw4QkFBOEIsQ0FBQztBQUNqRCwyQ0FBdUIsR0FBRyxzQ0FBc0MsQ0FBQztBQUNqRSwwQ0FBc0IsR0FBRyxxQ0FBcUMsQ0FBQztBQUMvRCw4QkFBVSxHQUFHLG9DQUFvQyxDQUFDO0FBRWxELGdDQUFZLEdBQUcsc0NBQXNDLENBQUM7O1lBdEJ2RSxVQUFVOzs7O0lBRVQsOEJBQWtFOztJQUNsRSwyQkFBaUU7O0lBQ2pFLHlCQUFnRDs7SUFDaEQsMkJBQW9EOztJQUNwRCxvQ0FBaUU7O0lBQ2pFLGdDQUE4RDs7SUFDOUQsZ0NBQW1FOztJQUNuRSwwQkFBa0Q7O0lBQ2xELG9DQUFrRTs7SUFFbEUsaUNBQTJEOztJQUMzRCxpQ0FBMkQ7O0lBQzNELHFDQUFvRTs7SUFDcEUsc0NBQXNFOztJQUN0RSxxQ0FBb0U7O0lBQ3BFLG9DQUFpRTs7SUFDakUsNENBQWlGOztJQUNqRiwyQ0FBK0U7O0lBQy9FLCtCQUFrRTs7SUFFbEUsaUNBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzVmlld05hdmlnYXRpb25FdmVudCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXMsXG4gIERhdGVwaWNrZXJEYXRlVG9vbHRpcFRleHRcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckFjdGlvbnMge1xuICBzdGF0aWMgcmVhZG9ubHkgQ0FMQ1VMQVRFID0gJ1tkYXRlcGlja2VyXSBjYWxjdWxhdGUgZGF0ZXMgbWF0cml4JztcbiAgc3RhdGljIHJlYWRvbmx5IEZPUk1BVCA9ICdbZGF0ZXBpY2tlcl0gZm9ybWF0IGRhdGVwaWNrZXIgdmFsdWVzJztcbiAgc3RhdGljIHJlYWRvbmx5IEZMQUcgPSAnW2RhdGVwaWNrZXJdIHNldCBmbGFncyc7XG4gIHN0YXRpYyByZWFkb25seSBTRUxFQ1QgPSAnW2RhdGVwaWNrZXJdIHNlbGVjdCBkYXRlJztcbiAgc3RhdGljIHJlYWRvbmx5IE5BVklHQVRFX09GRlNFVCA9ICdbZGF0ZXBpY2tlcl0gc2hpZnQgdmlldyBkYXRlJztcbiAgc3RhdGljIHJlYWRvbmx5IE5BVklHQVRFX1RPID0gJ1tkYXRlcGlja2VyXSBjaGFuZ2UgdmlldyBkYXRlJztcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9PUFRJT05TID0gJ1tkYXRlcGlja2VyXSB1cGRhdGUgcmVuZGVyIG9wdGlvbnMnO1xuICBzdGF0aWMgcmVhZG9ubHkgSE9WRVIgPSAnW2RhdGVwaWNrZXJdIGhvdmVyIGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX1ZJRVdNT0RFID0gJ1tkYXRlcGlja2VyXSBzd2l0Y2ggdmlldyBtb2RlJztcblxuICBzdGF0aWMgcmVhZG9ubHkgU0VUX01JTl9EQVRFID0gJ1tkYXRlcGlja2VyXSBzZXQgbWluIGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX01BWF9EQVRFID0gJ1tkYXRlcGlja2VyXSBzZXQgbWF4IGRhdGUnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX0RBWVNESVNBQkxFRCA9ICdbZGF0ZXBpY2tlcl0gc2V0IGRheXMgZGlzYWJsZWQnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX0RBVEVTRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXRlcyBkaXNhYmxlZCc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfREFURVNFTkFCTEVEID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF0ZXMgZW5hYmxlZCc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfSVNfRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBpcyBkaXNhYmxlZCc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfREFURV9DVVNUT01fQ0xBU1NFUyA9ICdbZGF0ZXBpY2tlcl0gc2V0IGRhdGUgY3VzdG9tIGNsYXNzZXMnO1xuICBzdGF0aWMgcmVhZG9ubHkgU0VUX0RBVEVfVE9PTFRJUF9URVhUUyA9ICdbZGF0ZXBpY2tlcl0gc2V0IGRhdGUgdG9vbHRpcCB0ZXh0cyc7XG4gIHN0YXRpYyByZWFkb25seSBTRVRfTE9DQUxFID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF0ZXBpY2tlciBsb2NhbGUnO1xuXG4gIHN0YXRpYyByZWFkb25seSBTRUxFQ1RfUkFOR0UgPSAnW2RhdGVyYW5nZXBpY2tlcl0gc2VsZWN0IGRhdGVzIHJhbmdlJztcblxuICBjYWxjdWxhdGUoKTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkNBTENVTEFURSB9O1xuICB9XG5cbiAgZm9ybWF0KCk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHsgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5GT1JNQVQgfTtcbiAgfVxuXG4gIGZsYWcoKTogQWN0aW9uIHtcbiAgICByZXR1cm4geyB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkZMQUcgfTtcbiAgfVxuXG4gIHNlbGVjdChkYXRlOiBEYXRlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1QsXG4gICAgICBwYXlsb2FkOiBkYXRlXG4gICAgfTtcbiAgfVxuXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0hBTkdFX1ZJRVdNT0RFLFxuICAgICAgcGF5bG9hZDogZXZlbnRcbiAgICB9O1xuICB9XG5cbiAgbmF2aWdhdGVUbyhldmVudDogQnNWaWV3TmF2aWdhdGlvbkV2ZW50KTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5OQVZJR0FURV9UTyxcbiAgICAgIHBheWxvYWQ6IGV2ZW50XG4gICAgfTtcbiAgfVxuXG4gIG5hdmlnYXRlU3RlcChzdGVwOiBUaW1lVW5pdCk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfT0ZGU0VULFxuICAgICAgcGF5bG9hZDogc3RlcFxuICAgIH07XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnM6IERhdGVwaWNrZXJSZW5kZXJPcHRpb25zKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfT1BUSU9OUyxcbiAgICAgIHBheWxvYWQ6IG9wdGlvbnNcbiAgICB9O1xuICB9XG5cbiAgLy8gZGF0ZSByYW5nZSBwaWNrZXJcbiAgc2VsZWN0UmFuZ2UodmFsdWU6IERhdGVbXSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VMRUNUX1JBTkdFLFxuICAgICAgcGF5bG9hZDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgaG92ZXJEYXkoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5IT1ZFUixcbiAgICAgIHBheWxvYWQ6IGV2ZW50LmlzSG92ZXJlZCA/IGV2ZW50LmNlbGwuZGF0ZSA6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgbWluRGF0ZShkYXRlOiBEYXRlKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUlOX0RBVEUsXG4gICAgICBwYXlsb2FkOiBkYXRlXG4gICAgfTtcbiAgfVxuXG4gIG1heERhdGUoZGF0ZTogRGF0ZSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX01BWF9EQVRFLFxuICAgICAgcGF5bG9hZDogZGF0ZVxuICAgIH07XG4gIH1cblxuICBkYXlzRGlzYWJsZWQoZGF5czogbnVtYmVyW10pOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9EQVlTRElTQUJMRUQsXG4gICAgICBwYXlsb2FkOiBkYXlzXG4gICAgfTtcbiAgfVxuXG4gIGRhdGVzRGlzYWJsZWQoZGF0ZXM6IERhdGVbXSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0RBVEVTRElTQUJMRUQsXG4gICAgICBwYXlsb2FkOiBkYXRlc1xuICAgIH07XG4gIH1cblxuICBkYXRlc0VuYWJsZWQoZGF0ZXM6IERhdGVbXSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0RBVEVTRU5BQkxFRCxcbiAgICAgIHBheWxvYWQ6IGRhdGVzXG4gICAgfTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9JU19ESVNBQkxFRCxcbiAgICAgIHBheWxvYWQ6IHZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIHNldERhdGVDdXN0b21DbGFzc2VzKHZhbHVlOiBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXNbXSk6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0RBVEVfQ1VTVE9NX0NMQVNTRVMsXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH07XG4gIH1cblxuICBzZXREYXRlVG9vbHRpcFRleHRzKHZhbHVlOiBEYXRlcGlja2VyRGF0ZVRvb2x0aXBUZXh0W10pOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9EQVRFX1RPT0xUSVBfVEVYVFMsXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH07XG4gIH1cblxuICBzZXRMb2NhbGUobG9jYWxlOiBzdHJpbmcpOiBBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9MT0NBTEUsXG4gICAgICBwYXlsb2FkOiBsb2NhbGVcbiAgICB9O1xuICB9XG59XG4iXX0=