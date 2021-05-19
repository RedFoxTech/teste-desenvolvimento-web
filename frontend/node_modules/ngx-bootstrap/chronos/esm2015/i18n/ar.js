/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi
/** @type {?} */
const symbolMap = {
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
    0: '٠'
};
/** @type {?} */
const numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};
/** @type {?} */
const pluralForm = (/**
 * @param {?} num
 * @return {?}
 */
function (num) {
    return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
});
/** @type {?} */
const plurals = {
    s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
/** @type {?} */
const pluralize = (/**
 * @param {?} u
 * @return {?}
 */
function (u) {
    return (/**
     * @param {?} num
     * @param {?} withoutSuffix
     * @return {?}
     */
    function (num, withoutSuffix) {
        /** @type {?} */
        const f = pluralForm(num);
        /** @type {?} */
        let str = plurals[u][pluralForm(num)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return ((/** @type {?} */ (str))).replace(/%d/i, num.toString());
    });
});
/** @type {?} */
const months = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
];
/** @type {?} */
export const arLocale = {
    abbr: 'ar',
    months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'D/\u200FM/\u200FYYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return 'م' === input;
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        }
        else {
            return 'م';
        }
    },
    calendar: {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'بعد %s',
        past: 'منذ %s',
        s: pluralize('s'),
        ss: pluralize('s'),
        m: pluralize('m'),
        mm: pluralize('m'),
        h: pluralize('h'),
        hh: pluralize('h'),
        d: pluralize('d'),
        dd: pluralize('d'),
        M: pluralize('M'),
        MM: pluralize('M'),
        y: pluralize('y'),
        yy: pluralize('y')
    },
    /**
     * @param {?} str
     * @return {?}
     */
    preparse(str) {
        return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (/**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            return numberMap[match];
        })).replace(/،/g, ',');
    },
    /**
     * @param {?} str
     * @return {?}
     */
    postformat(str) {
        return str.replace(/\d/g, (/**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            return symbolMap[match];
        })).replace(/,/g, '،');
    },
    week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2FyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BVU0sU0FBUyxHQUE0QjtJQUN6QyxDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztDQUNQOztNQUNLLFNBQVMsR0FBNEI7SUFDekMsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7Q0FDVDs7TUFDSyxVQUFVOzs7O0FBQUcsVUFBVSxHQUFXO0lBQ3RDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pILENBQUMsQ0FBQTs7TUFDSyxPQUFPLEdBQWdGO0lBQzNGLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7SUFDN0YsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztJQUM5RixDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0lBQ3hGLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7SUFDbEYsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztJQUNqRixDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDO0NBQ3BGOztNQUNLLFNBQVM7Ozs7QUFBRyxVQUFVLENBQVM7SUFDbkM7Ozs7O0lBQU8sVUFBVSxHQUFXLEVBQUUsYUFBc0I7O2NBQzVDLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDOztZQUNyQixHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxHQUFHLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztRQUVELE9BQU8sQ0FBQyxtQkFBQSxHQUFHLEVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQyxFQUFDO0FBQ0osQ0FBQyxDQUFBOztNQUNLLE1BQU0sR0FBYTtJQUN2QixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixPQUFPO0lBQ1AsTUFBTTtJQUNOLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7Q0FDVDs7QUFFRCxNQUFNLE9BQU8sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTTtJQUNOLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFFBQVEsRUFBRSxxREFBcUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFFLGFBQWEsRUFBRSx1Q0FBdUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2pFLFdBQVcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2QyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsc0JBQXNCO1FBQ3pCLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsSUFBSSxFQUFFLHdCQUF3QjtLQUMvQjtJQUNELGFBQWEsRUFBRSxLQUFLOzs7OztJQUNwQixJQUFJLENBQUMsS0FBSztRQUNSLE9BQU8sR0FBRyxLQUFLLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7Ozs7O0lBQ0QsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUM1QixJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQztTQUNaO0lBQ0gsQ0FBQztJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSx1QkFBdUI7UUFDaEMsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNqQixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNsQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNqQixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNsQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNqQixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNsQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNqQixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNsQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNqQixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNsQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNqQixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUNuQjs7Ozs7SUFDRCxRQUFRLENBQUMsR0FBVztRQUNsQixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZTs7OztRQUFFLFVBQVUsS0FBSztZQUNqRCxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsVUFBVSxDQUFDLEdBQVc7UUFDcEIsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUs7Ozs7UUFBRSxVQUFVLEtBQUs7WUFDdkMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLEVBQUUsQ0FBRSxnRUFBZ0U7S0FDMUU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBBcmFiaWMgW2FyXVxuLy8hIGF1dGhvciA6IEFiZGVsIFNhaWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hYmRlbHNhaWRcbi8vISBhdXRob3IgOiBBaG1lZCBFbGtoYXRpYlxuLy8hIGF1dGhvciA6IGZvcmFiaSBodHRwczovL2dpdGh1Yi5jb20vZm9yYWJpXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuY29uc3Qgc3ltYm9sTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgMTogJ9mhJyxcbiAgMjogJ9miJyxcbiAgMzogJ9mjJyxcbiAgNDogJ9mkJyxcbiAgNTogJ9mlJyxcbiAgNjogJ9mmJyxcbiAgNzogJ9mnJyxcbiAgODogJ9moJyxcbiAgOTogJ9mpJyxcbiAgMDogJ9mgJ1xufTtcbmNvbnN0IG51bWJlck1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICfZoSc6ICcxJyxcbiAgJ9miJzogJzInLFxuICAn2aMnOiAnMycsXG4gICfZpCc6ICc0JyxcbiAgJ9mlJzogJzUnLFxuICAn2aYnOiAnNicsXG4gICfZpyc6ICc3JyxcbiAgJ9moJzogJzgnLFxuICAn2aknOiAnOScsXG4gICfZoCc6ICcwJ1xufTtcbmNvbnN0IHBsdXJhbEZvcm0gPSBmdW5jdGlvbiAobnVtOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gbnVtID09PSAwID8gMCA6IG51bSA9PT0gMSA/IDEgOiBudW0gPT09IDIgPyAyIDogbnVtICUgMTAwID49IDMgJiYgbnVtICUgMTAwIDw9IDEwID8gMyA6IG51bSAlIDEwMCA+PSAxMSA/IDQgOiA1O1xufTtcbmNvbnN0IHBsdXJhbHM6IHtba2V5OiBzdHJpbmddOiBbc3RyaW5nLCBzdHJpbmcsIFtzdHJpbmcsIHN0cmluZ10sIHN0cmluZywgc3RyaW5nLCBzdHJpbmddfSA9IHtcbiAgczogWyfYo9mC2YQg2YXZhiDYq9in2YbZitipJywgJ9ir2KfZhtmK2Kkg2YjYp9it2K/YqScsIFsn2KvYp9mG2YrYqtin2YYnLCAn2KvYp9mG2YrYqtmK2YYnXSwgJyVkINir2YjYp9mGJywgJyVkINir2KfZhtmK2KknLCAnJWQg2KvYp9mG2YrYqSddLFxuICBtOiBbJ9ij2YLZhCDZhdmGINiv2YLZitmC2KknLCAn2K/ZgtmK2YLYqSDZiNin2K3Yr9ipJywgWyfYr9mC2YrZgtiq2KfZhicsICfYr9mC2YrZgtiq2YrZhiddLCAnJWQg2K/Zgtin2KbZgicsICclZCDYr9mC2YrZgtipJywgJyVkINiv2YLZitmC2KknXSxcbiAgaDogWyfYo9mC2YQg2YXZhiDYs9in2LnYqScsICfYs9in2LnYqSDZiNin2K3Yr9ipJywgWyfYs9in2LnYqtin2YYnLCAn2LPYp9i52KrZitmGJ10sICclZCDYs9in2LnYp9iqJywgJyVkINiz2KfYudipJywgJyVkINiz2KfYudipJ10sXG4gIGQ6IFsn2KPZgtmEINmF2YYg2YrZiNmFJywgJ9mK2YjZhSDZiNin2K3YrycsIFsn2YrZiNmF2KfZhicsICfZitmI2YXZitmGJ10sICclZCDYo9mK2KfZhScsICclZCDZitmI2YXZi9inJywgJyVkINmK2YjZhSddLFxuICBNOiBbJ9ij2YLZhCDZhdmGINi02YfYsScsICfYtNmH2LEg2YjYp9it2K8nLCBbJ9i02YfYsdin2YYnLCAn2LTZh9ix2YrZhiddLCAnJWQg2KPYtNmH2LEnLCAnJWQg2LTZh9ix2KcnLCAnJWQg2LTZh9ixJ10sXG4gIHk6IFsn2KPZgtmEINmF2YYg2LnYp9mFJywgJ9i52KfZhSDZiNin2K3YrycsIFsn2LnYp9mF2KfZhicsICfYudin2YXZitmGJ10sICclZCDYo9i52YjYp9mFJywgJyVkINi52KfZhdmL2KcnLCAnJWQg2LnYp9mFJ11cbn07XG5jb25zdCBwbHVyYWxpemUgPSBmdW5jdGlvbiAodTogc3RyaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGNvbnN0IGYgPSBwbHVyYWxGb3JtKG51bSk7XG4gICAgbGV0IHN0ciA9IHBsdXJhbHNbdV1bcGx1cmFsRm9ybShudW0pXTtcbiAgICBpZiAoZiA9PT0gMikge1xuICAgICAgc3RyID0gc3RyW3dpdGhvdXRTdWZmaXggPyAwIDogMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIChzdHIgYXMgc3RyaW5nKS5yZXBsYWNlKC8lZC9pLCBudW0udG9TdHJpbmcoKSk7XG4gIH07XG59O1xuY29uc3QgbW9udGhzOiBzdHJpbmdbXSA9IFtcbiAgJ9mK2YbYp9mK2LEnLFxuICAn2YHYqNix2KfZitixJyxcbiAgJ9mF2KfYsdizJyxcbiAgJ9ij2KjYsdmK2YQnLFxuICAn2YXYp9mK2YgnLFxuICAn2YrZiNmG2YrZiCcsXG4gICfZitmI2YTZitmIJyxcbiAgJ9ij2LrYs9i32LMnLFxuICAn2LPYqNiq2YXYqNixJyxcbiAgJ9ij2YPYqtmI2KjYsScsXG4gICfZhtmI2YHZhdio2LEnLFxuICAn2K/Zitiz2YXYqNixJ1xuXTtcblxuZXhwb3J0IGNvbnN0IGFyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnYXInLFxuICBtb250aHMsXG4gIG1vbnRoc1Nob3J0OiBtb250aHMsXG4gIHdlZWtkYXlzOiAn2KfZhNij2K3Yr1/Yp9mE2KXYq9mG2YrZhl/Yp9mE2KvZhNin2KvYp9ihX9in2YTYo9ix2KjYudin2KFf2KfZhNiu2YXZitizX9in2YTYrNmF2LnYqV/Yp9mE2LPYqNiqJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAn2KPYrdivX9il2KvZhtmK2YZf2KvZhNin2KvYp9ihX9ij2LHYqNi52KfYoV/YrtmF2YrYs1/YrNmF2LnYqV/Ys9io2KonLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAn2K1f2YZf2Ktf2LFf2K5f2Kxf2LMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0QvXFx1MjAwRk0vXFx1MjAwRllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL9i1fNmFLyxcbiAgaXNQTShpbnB1dCkge1xuICAgIHJldHVybiAn2YUnID09PSBpbnB1dDtcbiAgfSxcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuICfYtSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAn2YUnO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW9in2YTZitmI2YUg2LnZhtivINin2YTYs9in2LnYqV0gTFQnLFxuICAgIG5leHREYXk6ICdb2LrYr9mL2Kcg2LnZhtivINin2YTYs9in2LnYqV0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBb2LnZhtivINin2YTYs9in2LnYqV0gTFQnLFxuICAgIGxhc3REYXk6ICdb2KPZhdizINi52YbYryDYp9mE2LPYp9i52KldIExUJyxcbiAgICBsYXN0V2VlazogJ2RkZGQgW9i52YbYryDYp9mE2LPYp9i52KldIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ9io2LnYryAlcycsXG4gICAgcGFzdDogJ9mF2YbYsCAlcycsXG4gICAgczogcGx1cmFsaXplKCdzJyksXG4gICAgc3M6IHBsdXJhbGl6ZSgncycpLFxuICAgIG06IHBsdXJhbGl6ZSgnbScpLFxuICAgIG1tOiBwbHVyYWxpemUoJ20nKSxcbiAgICBoOiBwbHVyYWxpemUoJ2gnKSxcbiAgICBoaDogcGx1cmFsaXplKCdoJyksXG4gICAgZDogcGx1cmFsaXplKCdkJyksXG4gICAgZGQ6IHBsdXJhbGl6ZSgnZCcpLFxuICAgIE06IHBsdXJhbGl6ZSgnTScpLFxuICAgIE1NOiBwbHVyYWxpemUoJ00nKSxcbiAgICB5OiBwbHVyYWxpemUoJ3knKSxcbiAgICB5eTogcGx1cmFsaXplKCd5JylcbiAgfSxcbiAgcHJlcGFyc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW9mh2aLZo9mk2aXZptmn2ajZqdmgXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBudW1iZXJNYXBbbWF0Y2hdO1xuICAgIH0pLnJlcGxhY2UoL9iML2csICcsJyk7XG4gIH0sXG4gIHBvc3Rmb3JtYXQoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBzeW1ib2xNYXBbbWF0Y2hdO1xuICAgIH0pLnJlcGxhY2UoLywvZywgJ9iMJyk7XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDYsIC8vIFNhdHVyZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiAxMiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19