/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { toInt } from '../utils/type-checks';
/** @type {?} */
var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
/** @type {?} */
var orderingHash = ordering.reduce((/**
 * @param {?} mem
 * @param {?} order
 * @return {?}
 */
function (mem, order) {
    mem[order] = true;
    return mem;
}), {});
/**
 * @param {?} duration
 * @return {?}
 */
export function isDurationValid(duration) {
    /** @type {?} */
    var durationKeys = Object.keys(duration);
    if (durationKeys
        .some((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return (key in orderingHash)
            && duration[key] === null
            || isNaN(duration[key]);
    }))) {
        return false;
    }
    // for (let key in duration) {
    //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
    //     return false;
    //   }
    // }
    /** @type {?} */
    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (duration[ordering[i]]) {
            // only allow non-integers for smallest unit
            if (unitHasDecimal) {
                return false;
            }
            if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi92YWxpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQUt2QyxRQUFRLEdBQXlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUM7O0lBQzNILFlBQVksR0FBRyxRQUFRLENBQUMsTUFBTTs7Ozs7QUFBQyxVQUFDLEdBQStCLEVBQUUsS0FBSztJQUMxRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBRWxCLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxHQUFFLEVBQUUsQ0FBQzs7Ozs7QUFFTixNQUFNLFVBQVUsZUFBZSxDQUFDLFFBQTZCOztRQUNyRCxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDMUMsSUFBSSxZQUFZO1NBQ1gsSUFBSTs7OztJQUFDLFVBQUMsR0FBcUI7UUFDMUIsT0FBTyxDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUM7ZUFDdkIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUk7ZUFDdEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUMsRUFBQyxFQUFFO1FBQ04sT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7OztRQU9HLGNBQWMsR0FBRyxLQUFLO0lBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ3hDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLDRDQUE0QztZQUM1QyxJQUFJLGNBQWMsRUFBRTtnQkFDbEIsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDMUQsY0FBYyxHQUFHLElBQUksQ0FBQzthQUN2QjtTQUNGO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi9jcmVhdGUnO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IG9yZGVyaW5nOiAoa2V5b2YgRGF0ZU9iamVjdClbXSA9IFsneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcycsICdtaWxsaXNlY29uZHMnXTtcbmNvbnN0IG9yZGVyaW5nSGFzaCA9IG9yZGVyaW5nLnJlZHVjZSgobWVtOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSwgb3JkZXIpID0+IHtcbiAgbWVtW29yZGVyXSA9IHRydWU7XG5cbiAgcmV0dXJuIG1lbTtcbn0sIHt9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHVyYXRpb25WYWxpZChkdXJhdGlvbjogUGFydGlhbDxEYXRlT2JqZWN0Pik6IGJvb2xlYW4ge1xuICBjb25zdCBkdXJhdGlvbktleXMgPSBPYmplY3Qua2V5cyhkdXJhdGlvbik7XG4gIGlmIChkdXJhdGlvbktleXNcbiAgICAgIC5zb21lKChrZXk6IGtleW9mIERhdGVPYmplY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIChrZXkgaW4gb3JkZXJpbmdIYXNoKVxuICAgICAgICAgICYmIGR1cmF0aW9uW2tleV0gPT09IG51bGxcbiAgICAgICAgICB8fCBpc05hTihkdXJhdGlvbltrZXldKTtcbiAgICAgIH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGZvciAobGV0IGtleSBpbiBkdXJhdGlvbikge1xuICAvLyAgIGlmICghKGluZGV4T2YuY2FsbChvcmRlcmluZywga2V5KSAhPT0gLTEgJiYgKGR1cmF0aW9uW2tleV0gPT0gbnVsbCB8fCAhaXNOYU4oZHVyYXRpb25ba2V5XSkpKSkge1xuICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGxldCB1bml0SGFzRGVjaW1hbCA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9yZGVyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGR1cmF0aW9uW29yZGVyaW5nW2ldXSkge1xuICAgICAgLy8gb25seSBhbGxvdyBub24taW50ZWdlcnMgZm9yIHNtYWxsZXN0IHVuaXRcbiAgICAgIGlmICh1bml0SGFzRGVjaW1hbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZHVyYXRpb25bb3JkZXJpbmdbaV1dICE9PSB0b0ludChkdXJhdGlvbltvcmRlcmluZ1tpXV0pKSB7XG4gICAgICAgIHVuaXRIYXNEZWNpbWFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoKSB7XG4vLyAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xuLy8gfVxuLy9cbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkKCk6IER1cmF0aW9uIHtcbi8vICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKE5hTik7XG4vLyB9XG4iXX0=