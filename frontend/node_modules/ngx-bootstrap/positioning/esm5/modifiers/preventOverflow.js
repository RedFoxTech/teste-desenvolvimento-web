/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { getBoundaries, isModifierEnabled } from '../utils';
/**
 * @param {?} data
 * @return {?}
 */
export function preventOverflow(data) {
    if (!isModifierEnabled(data.options, 'preventOverflow')) {
        return data;
    }
    // NOTE: DOM access here
    // resets the targetOffsets's position so that the document size can be calculated excluding
    // the size of the targetOffsets element itself
    /** @type {?} */
    var transformProp = 'transform';
    /** @type {?} */
    var targetStyles = data.instance.target.style;
    // assignment to help minification
    var _a = targetStyles, top = _a.top, left = _a.left, _b = transformProp, transform = _a[_b];
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    /** @type {?} */
    var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    /** @type {?} */
    var order = ['left', 'right', 'top', 'bottom'];
    /** @type {?} */
    var check = {
        primary: /**
         * @param {?} placement
         * @return {?}
         */
        function (placement) {
            var _a;
            /** @type {?} */
            var value = ((/** @type {?} */ (data))).offsets.target[placement];
            if (((/** @type {?} */ (data))).offsets.target[placement] < boundaries[placement] &&
                !false // options.escapeWithReference
            ) {
                value = Math.max(((/** @type {?} */ (data))).offsets.target[placement], boundaries[placement]);
            }
            return _a = {}, _a[placement] = value, _a;
        },
        secondary: /**
         * @param {?} placement
         * @return {?}
         */
        function (placement) {
            var _a;
            /** @type {?} */
            var mainSide = placement === 'right' ? 'left' : 'top';
            /** @type {?} */
            var value = data.offsets.target[mainSide];
            if (((/** @type {?} */ (data))).offsets.target[placement] > boundaries[placement] &&
                !false // escapeWithReference
            ) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                    (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }
            return _a = {}, _a[mainSide] = value, _a;
        }
    };
    /** @type {?} */
    var side;
    order.forEach((/**
     * @param {?} placement
     * @return {?}
     */
    function (placement) {
        side = ['left', 'top']
            .indexOf(placement) !== -1
            ? 'primary'
            : 'secondary';
        data.offsets.target = __assign(__assign({}, data.offsets.target), ((/** @type {?} */ (check)))[side](placement));
    }));
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmVudE92ZXJmbG93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbIm1vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDOzs7OztBQUc1RCxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQVU7SUFFeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsRUFBRTtRQUN2RCxPQUFPLElBQUksQ0FBQztLQUNiOzs7OztRQUtLLGFBQWEsR0FBRyxXQUFXOztRQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSzs7SUFDdkMsSUFBMEMsaUJBQVksRUFBdEQsWUFBRyxFQUFFLGNBQUksRUFBRSxrQkFBZSxFQUFmLGtCQUEyQztJQUM5RCxZQUFZLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUN0QixZQUFZLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN2QixZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDOztRQUUzQixVQUFVLEdBQUcsYUFBYSxDQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQ2xCLENBQUMsRUFBRSxVQUFVO0lBQ2IsY0FBYyxFQUNkLEtBQUssQ0FBQyxnQkFBZ0I7S0FDdkI7SUFFRCx3QkFBd0I7SUFDeEIsOEVBQThFO0lBQzlFLFlBQVksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLENBQUM7O1FBRWxDLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQzs7UUFFMUMsS0FBSyxHQUFHO1FBQ1osT0FBTzs7OztRQUFQLFVBQVEsU0FBaUI7OztnQkFDbkIsS0FBSyxHQUFHLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNuRCxJQUNFLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7Z0JBQy9ELENBQUMsS0FBSyxDQUFDLDhCQUE4QjtjQUNyQztnQkFDQSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNsRjtZQUVELGdCQUFTLEdBQUMsU0FBUyxJQUFHLEtBQUssS0FBRztRQUNoQyxDQUFDO1FBQ0QsU0FBUzs7OztRQUFULFVBQVUsU0FBaUI7OztnQkFDbkIsUUFBUSxHQUFHLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSzs7Z0JBQ25ELEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDekMsSUFDRSxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO2dCQUMvRCxDQUFDLEtBQUssQ0FBQyxzQkFBc0I7Y0FDN0I7Z0JBQ0EsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQzdCLFVBQVUsQ0FBQyxTQUFTLENBQUM7b0JBQ3JCLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDakYsQ0FBQzthQUNIO1lBRUQsZ0JBQVMsR0FBQyxRQUFRLElBQUcsS0FBSyxLQUFHO1FBQy9CLENBQUM7S0FDRjs7UUFFRyxJQUFZO0lBRWhCLEtBQUssQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQSxTQUFTO1FBQ3JCLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7YUFDbkIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsU0FBUztZQUNYLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFFaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLHlCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUNuQixDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQ25DLENBQUM7SUFFSixDQUFDLEVBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEJvdW5kYXJpZXMsIGlzTW9kaWZpZXJFbmFibGVkIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YTogRGF0YSkge1xuXG4gIGlmICghaXNNb2RpZmllckVuYWJsZWQoZGF0YS5vcHRpb25zLCAncHJldmVudE92ZXJmbG93JykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXNldHMgdGhlIHRhcmdldE9mZnNldHMncyBwb3NpdGlvbiBzbyB0aGF0IHRoZSBkb2N1bWVudCBzaXplIGNhbiBiZSBjYWxjdWxhdGVkIGV4Y2x1ZGluZ1xuICAvLyB0aGUgc2l6ZSBvZiB0aGUgdGFyZ2V0T2Zmc2V0cyBlbGVtZW50IGl0c2VsZlxuICBjb25zdCB0cmFuc2Zvcm1Qcm9wID0gJ3RyYW5zZm9ybSc7XG4gIGNvbnN0IHRhcmdldFN0eWxlcyA9IGRhdGEuaW5zdGFuY2UudGFyZ2V0LnN0eWxlOyAvLyBhc3NpZ25tZW50IHRvIGhlbHAgbWluaWZpY2F0aW9uXG4gIGNvbnN0IHsgdG9wLCBsZWZ0LCBbdHJhbnNmb3JtUHJvcF06IHRyYW5zZm9ybSB9ID0gdGFyZ2V0U3R5bGVzO1xuICB0YXJnZXRTdHlsZXMudG9wID0gJyc7XG4gIHRhcmdldFN0eWxlcy5sZWZ0ID0gJyc7XG4gIHRhcmdldFN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9ICcnO1xuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKFxuICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxuICAgIGRhdGEuaW5zdGFuY2UuaG9zdCxcbiAgICAwLCAvLyBwYWRkaW5nXG4gICAgJ3Njcm9sbFBhcmVudCcsXG4gICAgZmFsc2UgLy8gcG9zaXRpb25GaXhlZFxuICApO1xuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3R5bGUgcHJvcGVydGllcyBhZnRlciB0aGUgb2Zmc2V0cyBoYXZlIGJlZW4gY29tcHV0ZWRcbiAgdGFyZ2V0U3R5bGVzLnRvcCA9IHRvcDtcbiAgdGFyZ2V0U3R5bGVzLmxlZnQgPSBsZWZ0O1xuICB0YXJnZXRTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XG5cbiAgY29uc3Qgb3JkZXIgPSBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddO1xuXG4gIGNvbnN0IGNoZWNrID0ge1xuICAgIHByaW1hcnkocGxhY2VtZW50OiBzdHJpbmcpIHtcbiAgICAgIGxldCB2YWx1ZSA9IChkYXRhIGFzIGFueSkub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XTtcbiAgICAgIGlmIChcbiAgICAgICAgKGRhdGEgYXMgYW55KS5vZmZzZXRzLnRhcmdldFtwbGFjZW1lbnRdIDwgYm91bmRhcmllc1twbGFjZW1lbnRdICYmXG4gICAgICAgICFmYWxzZSAvLyBvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2VcbiAgICAgICkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KChkYXRhIGFzIGFueSkub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XSwgYm91bmRhcmllc1twbGFjZW1lbnRdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgW3BsYWNlbWVudF06IHZhbHVlIH07XG4gICAgfSxcbiAgICBzZWNvbmRhcnkocGxhY2VtZW50OiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IG1haW5TaWRlID0gcGxhY2VtZW50ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICBsZXQgdmFsdWUgPSBkYXRhLm9mZnNldHMudGFyZ2V0W21haW5TaWRlXTtcbiAgICAgIGlmIChcbiAgICAgICAgKGRhdGEgYXMgYW55KS5vZmZzZXRzLnRhcmdldFtwbGFjZW1lbnRdID4gYm91bmRhcmllc1twbGFjZW1lbnRdICYmXG4gICAgICAgICFmYWxzZSAvLyBlc2NhcGVXaXRoUmVmZXJlbmNlXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihcbiAgICAgICAgICBkYXRhLm9mZnNldHMudGFyZ2V0W21haW5TaWRlXSxcbiAgICAgICAgICBib3VuZGFyaWVzW3BsYWNlbWVudF0gLVxuICAgICAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgPyBkYXRhLm9mZnNldHMudGFyZ2V0LndpZHRoIDogZGF0YS5vZmZzZXRzLnRhcmdldC5oZWlnaHQpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IFttYWluU2lkZV06IHZhbHVlIH07XG4gICAgfVxuICB9O1xuXG4gIGxldCBzaWRlOiBzdHJpbmc7XG5cbiAgb3JkZXIuZm9yRWFjaChwbGFjZW1lbnQgPT4ge1xuICAgIHNpZGUgPSBbJ2xlZnQnLCAndG9wJ11cbiAgICAgIC5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xXG4gICAgICA/ICdwcmltYXJ5J1xuICAgICAgOiAnc2Vjb25kYXJ5JztcblxuICAgIGRhdGEub2Zmc2V0cy50YXJnZXQgPSB7XG4gICAgICAuLi5kYXRhLm9mZnNldHMudGFyZ2V0LFxuICAgICAgLi4uKGNoZWNrIGFzIGFueSlbc2lkZV0ocGxhY2VtZW50KVxuICAgIH07XG5cbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iXX0=