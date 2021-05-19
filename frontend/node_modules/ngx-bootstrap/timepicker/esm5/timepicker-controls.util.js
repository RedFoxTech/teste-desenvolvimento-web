/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { changeTime } from './timepicker.utils';
/**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */
export function canChangeValue(state, event) {
    if (state.readonlyInput || state.disabled) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
export function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
export function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
export function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
/**
 * @param {?} state
 * @return {?}
 */
export function getControlsValue(state) {
    var hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, readonlyInput = state.readonlyInput, disabled = state.disabled, mousewheel = state.mousewheel, arrowkeys = state.arrowkeys, showSpinners = state.showSpinners, showMeridian = state.showMeridian, showSeconds = state.showSeconds, meridians = state.meridians, min = state.min, max = state.max;
    return {
        hourStep: hourStep,
        minuteStep: minuteStep,
        secondsStep: secondsStep,
        readonlyInput: readonlyInput,
        disabled: disabled,
        mousewheel: mousewheel,
        arrowkeys: arrowkeys,
        showSpinners: showSpinners,
        showMeridian: showMeridian,
        showSeconds: showSeconds,
        meridians: meridians,
        min: min,
        max: max
    };
}
/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */
export function timepickerControls(value, state) {
    /** @type {?} */
    var hoursPerDay = 24;
    /** @type {?} */
    var hoursPerDayHalf = 12;
    var min = state.min, max = state.max, hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, showSeconds = state.showSeconds;
    /** @type {?} */
    var res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        /** @type {?} */
        var _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour && (value.getHours() + hourStep) < hoursPerDay;
        if (!res.canIncrementHours) {
            /** @type {?} */
            var _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            /** @type {?} */
            var _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
        if (value.getHours() < hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
        }
    }
    if (min) {
        /** @type {?} */
        var _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            /** @type {?} */
            var _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            /** @type {?} */
            var _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
        if (value.getHours() >= hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
        }
    }
    return res;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1jb250cm9scy51dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyLyIsInNvdXJjZXMiOlsidGltZXBpY2tlci1jb250cm9scy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztBQU9oRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixLQUErQixFQUMvQixLQUF1QjtJQUV2QixJQUFJLEtBQUssQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUN6QyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLEVBQUU7UUFDVCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNqRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDOUMsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUM1QixLQUFzQixFQUN0QixRQUE0QjtJQUU1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtRQUNmLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1FBQ2pELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1FBQ2pELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7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O1NBQzlDO1FBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksZUFBZSxFQUFFO1lBQ3ZDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDN0U7S0FDRjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoYW5nZVRpbWUgfSBmcm9tICcuL3RpbWVwaWNrZXIudXRpbHMnO1xuaW1wb3J0IHtcbiAgVGltZUNoYW5nZUV2ZW50LFxuICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXG4gIFRpbWVwaWNrZXJDb250cm9sc1xufSBmcm9tICcuL3RpbWVwaWNrZXIubW9kZWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkNoYW5nZVZhbHVlKFxuICBzdGF0ZTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxuICBldmVudD86IFRpbWVDaGFuZ2VFdmVudFxuKTogYm9vbGVhbiB7XG4gIGlmIChzdGF0ZS5yZWFkb25seUlucHV0IHx8IHN0YXRlLmRpc2FibGVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gJ3doZWVsJyAmJiAhc3RhdGUubW91c2V3aGVlbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChldmVudC5zb3VyY2UgPT09ICdrZXknICYmICFzdGF0ZS5hcnJvd2tleXMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkNoYW5nZUhvdXJzKFxuICBldmVudDogVGltZUNoYW5nZUV2ZW50LFxuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzXG4pOiBib29sZWFuIHtcbiAgaWYgKCFldmVudC5zdGVwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGV2ZW50LnN0ZXAgPiAwICYmICFjb250cm9scy5jYW5JbmNyZW1lbnRIb3Vycykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChldmVudC5zdGVwIDwgMCAmJiAhY29udHJvbHMuY2FuRGVjcmVtZW50SG91cnMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkNoYW5nZU1pbnV0ZXMoXG4gIGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQsXG4gIGNvbnRyb2xzOiBUaW1lcGlja2VyQ29udHJvbHNcbik6IGJvb2xlYW4ge1xuICBpZiAoIWV2ZW50LnN0ZXApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGV2ZW50LnN0ZXAgPiAwICYmICFjb250cm9scy5jYW5JbmNyZW1lbnRNaW51dGVzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChldmVudC5zdGVwIDwgMCAmJiAhY29udHJvbHMuY2FuRGVjcmVtZW50TWludXRlcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuQ2hhbmdlU2Vjb25kcyhcbiAgZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCxcbiAgY29udHJvbHM6IFRpbWVwaWNrZXJDb250cm9sc1xuKTogYm9vbGVhbiB7XG4gIGlmICghZXZlbnQuc3RlcCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZXZlbnQuc3RlcCA+IDAgJiYgIWNvbnRyb2xzLmNhbkluY3JlbWVudFNlY29uZHMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGV2ZW50LnN0ZXAgPCAwICYmICFjb250cm9scy5jYW5EZWNyZW1lbnRTZWNvbmRzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250cm9sc1ZhbHVlKFxuICBzdGF0ZTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlXG4pOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUge1xuICBjb25zdCB7XG4gICAgaG91clN0ZXAsXG4gICAgbWludXRlU3RlcCxcbiAgICBzZWNvbmRzU3RlcCxcbiAgICByZWFkb25seUlucHV0LFxuICAgIGRpc2FibGVkLFxuICAgIG1vdXNld2hlZWwsXG4gICAgYXJyb3drZXlzLFxuICAgIHNob3dTcGlubmVycyxcbiAgICBzaG93TWVyaWRpYW4sXG4gICAgc2hvd1NlY29uZHMsXG4gICAgbWVyaWRpYW5zLFxuICAgIG1pbixcbiAgICBtYXhcbiAgfSA9IHN0YXRlO1xuXG4gIHJldHVybiB7XG4gICAgaG91clN0ZXAsXG4gICAgbWludXRlU3RlcCxcbiAgICBzZWNvbmRzU3RlcCxcbiAgICByZWFkb25seUlucHV0LFxuICAgIGRpc2FibGVkLFxuICAgIG1vdXNld2hlZWwsXG4gICAgYXJyb3drZXlzLFxuICAgIHNob3dTcGlubmVycyxcbiAgICBzaG93TWVyaWRpYW4sXG4gICAgc2hvd1NlY29uZHMsXG4gICAgbWVyaWRpYW5zLFxuICAgIG1pbixcbiAgICBtYXhcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVwaWNrZXJDb250cm9scyhcbiAgdmFsdWU6IERhdGUsXG4gIHN0YXRlOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGVcbik6IFRpbWVwaWNrZXJDb250cm9scyB7XG4gIGNvbnN0IGhvdXJzUGVyRGF5ID0gMjQ7XG4gIGNvbnN0IGhvdXJzUGVyRGF5SGFsZiA9IDEyO1xuICBjb25zdCB7IG1pbiwgbWF4LCBob3VyU3RlcCwgbWludXRlU3RlcCwgc2Vjb25kc1N0ZXAsIHNob3dTZWNvbmRzIH0gPSBzdGF0ZTtcbiAgY29uc3QgcmVzOiBUaW1lcGlja2VyQ29udHJvbHMgPSB7XG4gICAgY2FuSW5jcmVtZW50SG91cnM6IHRydWUsXG4gICAgY2FuSW5jcmVtZW50TWludXRlczogdHJ1ZSxcbiAgICBjYW5JbmNyZW1lbnRTZWNvbmRzOiB0cnVlLFxuXG4gICAgY2FuRGVjcmVtZW50SG91cnM6IHRydWUsXG4gICAgY2FuRGVjcmVtZW50TWludXRlczogdHJ1ZSxcbiAgICBjYW5EZWNyZW1lbnRTZWNvbmRzOiB0cnVlLFxuXG4gICAgY2FuVG9nZ2xlTWVyaWRpYW46IHRydWVcbiAgfTtcblxuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIGNvbXBhcmUgZGF0ZXNcbiAgaWYgKG1heCkge1xuICAgIGNvbnN0IF9uZXdIb3VyID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiBob3VyU3RlcCB9KTtcbiAgICByZXMuY2FuSW5jcmVtZW50SG91cnMgPSBtYXggPiBfbmV3SG91ciAmJiAodmFsdWUuZ2V0SG91cnMoKSArIGhvdXJTdGVwKSA8IGhvdXJzUGVyRGF5O1xuXG4gICAgaWYgKCFyZXMuY2FuSW5jcmVtZW50SG91cnMpIHtcbiAgICAgIGNvbnN0IF9uZXdNaW51dGVzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBtaW51dGU6IG1pbnV0ZVN0ZXAgfSk7XG4gICAgICByZXMuY2FuSW5jcmVtZW50TWludXRlcyA9IHNob3dTZWNvbmRzXG4gICAgICAgID8gbWF4ID4gX25ld01pbnV0ZXNcbiAgICAgICAgOiBtYXggPj0gX25ld01pbnV0ZXM7XG4gICAgfVxuXG4gICAgaWYgKCFyZXMuY2FuSW5jcmVtZW50TWludXRlcykge1xuICAgICAgY29uc3QgX25ld1NlY29uZHMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IHNlY29uZHM6IHNlY29uZHNTdGVwIH0pO1xuICAgICAgcmVzLmNhbkluY3JlbWVudFNlY29uZHMgPSBtYXggPj0gX25ld1NlY29uZHM7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmdldEhvdXJzKCkgPCBob3Vyc1BlckRheUhhbGYpIHtcbiAgICAgIHJlcy5jYW5Ub2dnbGVNZXJpZGlhbiA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogaG91cnNQZXJEYXlIYWxmIH0pIDwgbWF4O1xuICAgIH1cbiAgfVxuXG4gIGlmIChtaW4pIHtcbiAgICBjb25zdCBfbmV3SG91ciA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogLWhvdXJTdGVwIH0pO1xuICAgIHJlcy5jYW5EZWNyZW1lbnRIb3VycyA9IG1pbiA8IF9uZXdIb3VyO1xuXG4gICAgaWYgKCFyZXMuY2FuRGVjcmVtZW50SG91cnMpIHtcbiAgICAgIGNvbnN0IF9uZXdNaW51dGVzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBtaW51dGU6IC1taW51dGVTdGVwIH0pO1xuICAgICAgcmVzLmNhbkRlY3JlbWVudE1pbnV0ZXMgPSBzaG93U2Vjb25kc1xuICAgICAgICA/IG1pbiA8IF9uZXdNaW51dGVzXG4gICAgICAgIDogbWluIDw9IF9uZXdNaW51dGVzO1xuICAgIH1cblxuICAgIGlmICghcmVzLmNhbkRlY3JlbWVudE1pbnV0ZXMpIHtcbiAgICAgIGNvbnN0IF9uZXdTZWNvbmRzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBzZWNvbmRzOiAtc2Vjb25kc1N0ZXAgfSk7XG4gICAgICByZXMuY2FuRGVjcmVtZW50U2Vjb25kcyA9IG1pbiA8PSBfbmV3U2Vjb25kcztcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuZ2V0SG91cnMoKSA+PSBob3Vyc1BlckRheUhhbGYpIHtcbiAgICAgIHJlcy5jYW5Ub2dnbGVNZXJpZGlhbiA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogLWhvdXJzUGVyRGF5SGFsZiB9KSA+IG1pbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuIl19