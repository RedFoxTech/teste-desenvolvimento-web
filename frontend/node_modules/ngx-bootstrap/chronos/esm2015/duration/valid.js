/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { toInt } from '../utils/type-checks';
/** @type {?} */
const ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
/** @type {?} */
const orderingHash = ordering.reduce((/**
 * @param {?} mem
 * @param {?} order
 * @return {?}
 */
(mem, order) => {
    mem[order] = true;
    return mem;
}), {});
/**
 * @param {?} duration
 * @return {?}
 */
export function isDurationValid(duration) {
    /** @type {?} */
    const durationKeys = Object.keys(duration);
    if (durationKeys
        .some((/**
     * @param {?} key
     * @return {?}
     */
    (key) => {
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
    let unitHasDecimal = false;
    for (let i = 0; i < ordering.length; ++i) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi92YWxpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDOztNQUt2QyxRQUFRLEdBQXlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUM7O01BQzNILFlBQVksR0FBRyxRQUFRLENBQUMsTUFBTTs7Ozs7QUFBQyxDQUFDLEdBQStCLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDOUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztJQUVsQixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsR0FBRSxFQUFFLENBQUM7Ozs7O0FBRU4sTUFBTSxVQUFVLGVBQWUsQ0FBQyxRQUE2Qjs7VUFDckQsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzFDLElBQUksWUFBWTtTQUNYLElBQUk7Ozs7SUFBQyxDQUFDLEdBQXFCLEVBQUUsRUFBRTtRQUM5QixPQUFPLENBQUMsR0FBRyxJQUFJLFlBQVksQ0FBQztlQUN2QixRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSTtlQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxFQUFDLEVBQUU7UUFDTixPQUFPLEtBQUssQ0FBQztLQUNkOzs7Ozs7O1FBT0csY0FBYyxHQUFHLEtBQUs7SUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDeEMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekIsNENBQTRDO1lBQzVDLElBQUksY0FBYyxFQUFFO2dCQUNsQixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxRCxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1NBQ0Y7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuL2NyZWF0ZSc7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3Qgb3JkZXJpbmc6IChrZXlvZiBEYXRlT2JqZWN0KVtdID0gWyd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJywgJ21pbGxpc2Vjb25kcyddO1xuY29uc3Qgb3JkZXJpbmdIYXNoID0gb3JkZXJpbmcucmVkdWNlKChtZW06IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9LCBvcmRlcikgPT4ge1xuICBtZW1bb3JkZXJdID0gdHJ1ZTtcblxuICByZXR1cm4gbWVtO1xufSwge30pO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEdXJhdGlvblZhbGlkKGR1cmF0aW9uOiBQYXJ0aWFsPERhdGVPYmplY3Q+KTogYm9vbGVhbiB7XG4gIGNvbnN0IGR1cmF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGR1cmF0aW9uKTtcbiAgaWYgKGR1cmF0aW9uS2V5c1xuICAgICAgLnNvbWUoKGtleToga2V5b2YgRGF0ZU9iamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gKGtleSBpbiBvcmRlcmluZ0hhc2gpXG4gICAgICAgICAgJiYgZHVyYXRpb25ba2V5XSA9PT0gbnVsbFxuICAgICAgICAgIHx8IGlzTmFOKGR1cmF0aW9uW2tleV0pO1xuICAgICAgfSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gZm9yIChsZXQga2V5IGluIGR1cmF0aW9uKSB7XG4gIC8vICAgaWYgKCEoaW5kZXhPZi5jYWxsKG9yZGVyaW5nLCBrZXkpICE9PSAtMSAmJiAoZHVyYXRpb25ba2V5XSA9PSBudWxsIHx8ICFpc05hTihkdXJhdGlvbltrZXldKSkpKSB7XG4gIC8vICAgICByZXR1cm4gZmFsc2U7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgbGV0IHVuaXRIYXNEZWNpbWFsID0gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoZHVyYXRpb25bb3JkZXJpbmdbaV1dKSB7XG4gICAgICAvLyBvbmx5IGFsbG93IG5vbi1pbnRlZ2VycyBmb3Igc21hbGxlc3QgdW5pdFxuICAgICAgaWYgKHVuaXRIYXNEZWNpbWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChkdXJhdGlvbltvcmRlcmluZ1tpXV0gIT09IHRvSW50KGR1cmF0aW9uW29yZGVyaW5nW2ldXSkpIHtcbiAgICAgICAgdW5pdEhhc0RlY2ltYWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gaXNWYWxpZCgpIHtcbi8vICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFsaWQoKTogRHVyYXRpb24ge1xuLy8gICByZXR1cm4gY3JlYXRlRHVyYXRpb24oTmFOKTtcbi8vIH1cbiJdfQ==