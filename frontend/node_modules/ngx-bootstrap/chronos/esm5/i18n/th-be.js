/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// moment.js locale configuration
// locale : Thai-Buddhist Era [th-be]
// author : Watcharapol Sanitwong : https://github.com/tumit
/** @type {?} */
export var thBeLocale = {
    abbr: 'th-be',
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY เวลา H:mm',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === 'หลังเที่ยง';
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ก่อนเที่ยง';
        }
        else {
            return 'หลังเที่ยง';
        }
    },
    calendar: {
        sameDay: '[วันนี้ เวลา] LT',
        nextDay: '[พรุ่งนี้ เวลา] LT',
        nextWeek: 'dddd[หน้า เวลา] LT',
        lastDay: '[เมื่อวานนี้ เวลา] LT',
        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'อีก %s',
        past: '%sที่แล้ว',
        s: 'ไม่กี่วินาที',
        ss: '%d วินาที',
        m: '1 นาที',
        mm: '%d นาที',
        h: '1 ชั่วโมง',
        hh: '%d ชั่วโมง',
        d: '1 วัน',
        dd: '%d วัน',
        M: '1 เดือน',
        MM: '%d เดือน',
        y: '1 ปี',
        yy: '%d ปี'
    },
    preparse: /**
     * @param {?} str
     * @param {?=} format
     * @return {?}
     */
    function (str, format) {
        /** @type {?} */
        var _format = thBeLocale.longDateFormat[format]
            ? thBeLocale.longDateFormat[format]
            : format;
        // endsWith('YYYY')
        if (_format.indexOf('YYYY', _format.length - 'YYYY'.length) !== -1) {
            /** @type {?} */
            var ddMM = str.substr(0, str.length - 4);
            /** @type {?} */
            var yyyy = parseInt(str.substr(str.length - 4), 10) - 543;
            return ddMM + yyyy;
        }
        return str;
    },
    getFullYear: /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, isUTC) {
        if (isUTC === void 0) { isUTC = false; }
        return 543 + (isUTC ? date.getUTCFullYear() : date.getFullYear());
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtYmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3RoLWJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sS0FBTyxVQUFVLEdBQWU7SUFDcEMsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUUsbUdBQW1HLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN0SCxXQUFXLEVBQUUsZ0VBQWdFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSxnREFBZ0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3JFLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xELFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixJQUFJLEVBQUUsa0NBQWtDO0tBQ3pDO0lBQ0QsYUFBYSxFQUFFLHVCQUF1QjtJQUN0QyxJQUFJOzs7O2NBQUMsS0FBSztRQUNSLE9BQU8sS0FBSyxLQUFLLFlBQVksQ0FBQztJQUNoQyxDQUFDO0lBQ0QsUUFBUTs7Ozs7O2NBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQzVCLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxPQUFPLFlBQVksQ0FBQztTQUNyQjtJQUNILENBQUM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxXQUFXO1FBQ2pCLENBQUMsRUFBRSxjQUFjO1FBQ2pCLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLE9BQU87UUFDVixFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsTUFBTTtRQUNULEVBQUUsRUFBRSxPQUFPO0tBQ1o7SUFFRCxRQUFROzs7OztJQUFSLFVBQVMsR0FBVyxFQUFFLE1BQWU7O1lBRTdCLE9BQU8sR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUMvQyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFDbkMsQ0FBQyxDQUFDLE1BQU07UUFFVixtQkFBbUI7UUFDbkIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRzs7Z0JBQzdELElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ3BDLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUc7WUFDM0QsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVzs7Ozs7SUFBWCxVQUFZLElBQVUsRUFBRSxLQUFhO1FBQWIsc0JBQUEsRUFBQSxhQUFhO1FBQ25DLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuLy8gbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyBsb2NhbGUgOiBUaGFpLUJ1ZGRoaXN0IEVyYSBbdGgtYmVdXG4vLyBhdXRob3IgOiBXYXRjaGFyYXBvbCBTYW5pdHdvbmcgOiBodHRwczovL2dpdGh1Yi5jb20vdHVtaXRcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG5leHBvcnQgY29uc3QgdGhCZUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3RoLWJlJyxcbiAgbW9udGhzOiAn4Lih4LiB4Lij4Liy4LiE4LihX+C4geC4uOC4oeC4oOC4suC4nuC4seC4meC4mOC5jF/guKHguLXguJnguLLguITguKFf4LmA4Lih4Lip4Liy4Lii4LiZX+C4nuC4pOC4qeC4oOC4suC4hOC4oV/guKHguLTguJbguLjguJnguLLguKLguJlf4LiB4Lij4LiB4LiO4Liy4LiE4LihX+C4quC4tOC4h+C4q+C4suC4hOC4oV/guIHguLHguJnguKLguLLguKLguJlf4LiV4Li44Lil4Liy4LiE4LihX+C4nuC4pOC4qOC4iOC4tOC4geC4suC4ouC4mV/guJjguLHguJnguKfguLLguITguKEnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAn4LihLuC4hC5f4LiBLuC4ni5f4Lih4Li1LuC4hC5f4LmA4LihLuC4oi5f4LieLuC4hC5f4Lih4Li0LuC4oi5f4LiBLuC4hC5f4LiqLuC4hC5f4LiBLuC4oi5f4LiVLuC4hC5f4LieLuC4oi5f4LiYLuC4hC4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAn4Lit4Liy4LiX4Li04LiV4Lii4LmMX+C4iOC4seC4meC4l+C4o+C5jF/guK3guLHguIfguITguLLguKNf4Lie4Li44LiYX+C4nuC4pOC4q+C4seC4quC4muC4lOC4tV/guKjguLjguIHguKPguYxf4LmA4Liq4Liy4Lij4LmMJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAn4Lit4LiyLl/guIguX+C4rS5f4LieLl/guJ7guKQuX+C4qC5f4LiqLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfguK3guLIuX+C4iC5f4LitLl/guJ4uX+C4nuC4pC5f4LioLl/guKouJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkg4LmA4Lin4Lil4LiyIEg6bW0nLFxuICAgIExMTEw6ICfguKfguLHguJlkZGRk4LiX4Li14LmIIEQgTU1NTSBZWVlZIOC5gOC4p+C4peC4siBIOm1tJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAv4LiB4LmI4Lit4LiZ4LmA4LiX4Li14LmI4Lii4LiHfOC4q+C4peC4seC4h+C5gOC4l+C4teC5iOC4ouC4hy8sXG4gIGlzUE0oaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT09ICfguKvguKXguLHguIfguYDguJfguLXguYjguKLguIcnO1xuICB9LFxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ+C4geC5iOC4reC4meC5gOC4l+C4teC5iOC4ouC4hyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn4Lir4Lil4Lix4LiH4LmA4LiX4Li14LmI4Lii4LiHJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vguKfguLHguJnguJnguLXguYkg4LmA4Lin4Lil4LiyXSBMVCcsXG4gICAgbmV4dERheTogJ1vguJ7guKPguLjguYjguIfguJnguLXguYkg4LmA4Lin4Lil4LiyXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkW+C4q+C4meC5ieC4siDguYDguKfguKXguLJdIExUJyxcbiAgICBsYXN0RGF5OiAnW+C5gOC4oeC4t+C5iOC4reC4p+C4suC4meC4meC4teC5iSDguYDguKfguKXguLJdIExUJyxcbiAgICBsYXN0V2VlazogJ1vguKfguLHguJldZGRkZFvguJfguLXguYjguYHguKXguYnguKcg4LmA4Lin4Lil4LiyXSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICfguK3guLXguIEgJXMnLFxuICAgIHBhc3Q6ICclc+C4l+C4teC5iOC5geC4peC5ieC4pycsXG4gICAgczogJ+C5hOC4oeC5iOC4geC4teC5iOC4p+C4tOC4meC4suC4l+C4tScsXG4gICAgc3M6ICclZCDguKfguLTguJnguLLguJfguLUnLFxuICAgIG06ICcxIOC4meC4suC4l+C4tScsXG4gICAgbW06ICclZCDguJnguLLguJfguLUnLFxuICAgIGg6ICcxIOC4iuC4seC5iOC4p+C5guC4oeC4hycsXG4gICAgaGg6ICclZCDguIrguLHguYjguKfguYLguKHguIcnLFxuICAgIGQ6ICcxIOC4p+C4seC4mScsXG4gICAgZGQ6ICclZCDguKfguLHguJknLFxuICAgIE06ICcxIOC5gOC4lOC4t+C4reC4mScsXG4gICAgTU06ICclZCDguYDguJTguLfguK3guJknLFxuICAgIHk6ICcxIOC4m+C4tScsXG4gICAgeXk6ICclZCDguJvguLUnXG4gIH0sXG5cbiAgcHJlcGFyc2Uoc3RyOiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICBjb25zdCBfZm9ybWF0ID0gdGhCZUxvY2FsZS5sb25nRGF0ZUZvcm1hdFtmb3JtYXRdXG4gICAgICA/IHRoQmVMb2NhbGUubG9uZ0RhdGVGb3JtYXRbZm9ybWF0XVxuICAgICAgOiBmb3JtYXQ7XG5cbiAgICAvLyBlbmRzV2l0aCgnWVlZWScpXG4gICAgaWYgKF9mb3JtYXQuaW5kZXhPZignWVlZWScsIF9mb3JtYXQubGVuZ3RoIC0gJ1lZWVknLmxlbmd0aCkgIT09IC0xICkge1xuICAgICAgY29uc3QgZGRNTSA9IHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAtIDQpO1xuICAgICAgY29uc3QgeXl5eSA9IHBhcnNlSW50KHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIDQpLCAxMCkgLSA1NDM7XG4gICAgICByZXR1cm4gZGRNTSArIHl5eXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfSxcblxuICBnZXRGdWxsWWVhcihkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gNTQzICsgKGlzVVRDID8gZGF0ZS5nZXRVVENGdWxsWWVhcigpIDogZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgfVxufTtcbiJdfQ==