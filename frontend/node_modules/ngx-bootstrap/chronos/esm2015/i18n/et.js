/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Estonian [et]
//! author : Chris Gedrim : https://github.com/a90machado
/** @type {?} */
const processRelativeTime = (/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function (num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    const format = {
        s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
        ss: [num + 'sekundi', num + 'sekundit'],
        m: ['ühe minuti', 'üks minut'],
        mm: [num + ' minuti', num + ' minutit'],
        h: ['ühe tunni', 'tund aega', 'üks tund'],
        hh: [num + ' tunni', num + ' tundi'],
        d: ['ühe päeva', 'üks päev'],
        M: ['kuu aja', 'kuu aega', 'üks kuu'],
        MM: [num + ' kuu', num + ' kuud'],
        y: ['ühe aasta', 'aasta', 'üks aasta'],
        yy: [num + ' aasta', num + ' aastat']
    };
    if (withoutSuffix) {
        return format[key][2] ? format[key][2] : format[key][1];
    }
    return isFuture ? format[key][0] : format[key][1];
});
/** @type {?} */
export const etLocale = {
    abbr: 'et',
    months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
    monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
    weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
    weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
    weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[Täna,] LT',
        nextDay: '[Homme,] LT',
        nextWeek: '[Järgmine] dddd LT',
        lastDay: '[Eile,] LT',
        lastWeek: '[Eelmine] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s pärast',
        past: '%s tagasi',
        s: processRelativeTime,
        ss: processRelativeTime,
        m: processRelativeTime,
        mm: processRelativeTime,
        h: processRelativeTime,
        hh: processRelativeTime,
        d: processRelativeTime,
        dd: '%d päeva',
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztNQVdNLG1CQUFtQjs7Ozs7OztBQUFHLFVBQVUsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCOztVQUNqRyxNQUFNLEdBQUc7UUFDWCxDQUFDLEVBQUcsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztRQUNwRCxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUM7UUFDdkMsQ0FBQyxFQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztRQUMvQixFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUM7UUFDdkMsQ0FBQyxFQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7UUFDMUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLENBQUMsRUFBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7UUFDN0IsQ0FBQyxFQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUM7UUFDdEMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLENBQUMsRUFBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO1FBQ3ZDLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQztLQUN4QztJQUNELElBQUksYUFBYSxFQUFFO1FBQ2YsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLDRGQUE0RixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0csV0FBVyxFQUFFLDREQUE0RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDcEYsUUFBUSxFQUFFLGdFQUFnRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDckYsYUFBYSxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pDLFdBQVcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUksTUFBTTtRQUNaLEdBQUcsRUFBRyxTQUFTO1FBQ2YsQ0FBQyxFQUFLLFlBQVk7UUFDbEIsRUFBRSxFQUFJLGNBQWM7UUFDcEIsR0FBRyxFQUFHLG1CQUFtQjtRQUN6QixJQUFJLEVBQUUseUJBQXlCO0tBQ2hDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFHLFlBQVk7UUFDdEIsT0FBTyxFQUFHLGFBQWE7UUFDdkIsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixPQUFPLEVBQUcsWUFBWTtRQUN0QixRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUc7UUFDYixNQUFNLEVBQUcsV0FBVztRQUNwQixJQUFJLEVBQUssV0FBVztRQUNwQixDQUFDLEVBQVEsbUJBQW1CO1FBQzVCLEVBQUUsRUFBTyxtQkFBbUI7UUFDNUIsQ0FBQyxFQUFRLG1CQUFtQjtRQUM1QixFQUFFLEVBQU8sbUJBQW1CO1FBQzVCLENBQUMsRUFBUSxtQkFBbUI7UUFDNUIsRUFBRSxFQUFPLG1CQUFtQjtRQUM1QixDQUFDLEVBQVEsbUJBQW1CO1FBQzVCLEVBQUUsRUFBTyxVQUFVO1FBQ25CLENBQUMsRUFBUSxtQkFBbUI7UUFDNUIsRUFBRSxFQUFPLG1CQUFtQjtRQUM1QixDQUFDLEVBQVEsbUJBQW1CO1FBQzVCLEVBQUUsRUFBTyxtQkFBbUI7S0FDN0I7SUFDRCxzQkFBc0IsRUFBRyxVQUFVO0lBQ25DLE9BQU8sRUFBRyxLQUFLO0lBQ2YsSUFBSSxFQUFHO1FBQ0gsR0FBRyxFQUFHLENBQUM7O1FBQ1AsR0FBRyxFQUFHLENBQUMsQ0FBRSxnRUFBZ0U7S0FDNUU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogRXN0b25pYW4gW2V0XVxuLy8hIGF1dGhvciA6IENocmlzIEdlZHJpbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hOTBtYWNoYWRvXG5cbmNvbnN0IHByb2Nlc3NSZWxhdGl2ZVRpbWUgPSBmdW5jdGlvbiAobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICBjb25zdCBmb3JtYXQgPSB7XG4gICAgICBzIDogWydtw7VuZSBzZWt1bmRpJywgJ23DtW5pIHNla3VuZCcsICdwYWFyIHNla3VuZGl0J10sXG4gICAgICBzczogW251bSArICdzZWt1bmRpJywgbnVtICsgJ3Nla3VuZGl0J10sXG4gICAgICBtIDogWyfDvGhlIG1pbnV0aScsICfDvGtzIG1pbnV0J10sXG4gICAgICBtbTogW251bSArICcgbWludXRpJywgbnVtICsgJyBtaW51dGl0J10sXG4gICAgICBoIDogWyfDvGhlIHR1bm5pJywgJ3R1bmQgYWVnYScsICfDvGtzIHR1bmQnXSxcbiAgICAgIGhoOiBbbnVtICsgJyB0dW5uaScsIG51bSArICcgdHVuZGknXSxcbiAgICAgIGQgOiBbJ8O8aGUgcMOkZXZhJywgJ8O8a3MgcMOkZXYnXSxcbiAgICAgIE0gOiBbJ2t1dSBhamEnLCAna3V1IGFlZ2EnLCAnw7xrcyBrdXUnXSxcbiAgICAgIE1NOiBbbnVtICsgJyBrdXUnLCBudW0gKyAnIGt1dWQnXSxcbiAgICAgIHkgOiBbJ8O8aGUgYWFzdGEnLCAnYWFzdGEnLCAnw7xrcyBhYXN0YSddLFxuICAgICAgeXk6IFtudW0gKyAnIGFhc3RhJywgbnVtICsgJyBhYXN0YXQnXVxuICB9O1xuICBpZiAod2l0aG91dFN1ZmZpeCkge1xuICAgICAgcmV0dXJuIGZvcm1hdFtrZXldWzJdID8gZm9ybWF0W2tleV1bMl0gOiBmb3JtYXRba2V5XVsxXTtcbiAgfVxuICByZXR1cm4gaXNGdXR1cmUgPyBmb3JtYXRba2V5XVswXSA6IGZvcm1hdFtrZXldWzFdO1xufTtcblxuZXhwb3J0IGNvbnN0IGV0TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZXQnLFxuICBtb250aHM6ICdqYWFudWFyX3ZlZWJydWFyX23DpHJ0c19hcHJpbGxfbWFpX2p1dW5pX2p1dWxpX2F1Z3VzdF9zZXB0ZW1iZXJfb2t0b29iZXJfbm92ZW1iZXJfZGV0c2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2phYW5fdmVlYnJfbcOkcnRzX2Fwcl9tYWlfanV1bmlfanV1bGlfYXVnX3NlcHRfb2t0X25vdl9kZXRzJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ3DDvGhhcMOkZXZfZXNtYXNww6Rldl90ZWlzaXDDpGV2X2tvbG1hcMOkZXZfbmVsamFww6Rldl9yZWVkZV9sYXVww6Rldicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ1BfRV9UX0tfTl9SX0wnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnUF9FX1RfS19OX1JfTCcuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogICAnSDptbScsXG4gICAgTFRTOiAgJ0g6bW06c3MnLFxuICAgIEw6ICAgICdERC5NTS5ZWVlZJyxcbiAgICBMTDogICAnRC4gTU1NTSBZWVlZJyxcbiAgICBMTEw6ICAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBELiBNTU1NIFlZWVkgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAgJ1tUw6RuYSxdIExUJyxcbiAgICBuZXh0RGF5OiAgJ1tIb21tZSxdIExUJyxcbiAgICBuZXh0V2VlazogJ1tKw6RyZ21pbmVdIGRkZGQgTFQnLFxuICAgIGxhc3REYXk6ICAnW0VpbGUsXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbRWVsbWluZV0gZGRkZCBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWUgOiB7XG4gICAgZnV0dXJlIDogJyVzIHDDpHJhc3QnLFxuICAgIHBhc3QgICA6ICclcyB0YWdhc2knLFxuICAgIHMgICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgc3MgICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBtICAgICAgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIG1tICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgaCAgICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBoaCAgICAgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGQgICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgZGQgICAgIDogJyVkIHDDpGV2YScsXG4gICAgTSAgICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBNTSAgICAgOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHkgICAgICA6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgeXkgICAgIDogcHJvY2Vzc1JlbGF0aXZlVGltZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIDogL1xcZHsxLDJ9Li8sXG4gIG9yZGluYWwgOiAnJWQuJyxcbiAgd2VlayA6IHtcbiAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19