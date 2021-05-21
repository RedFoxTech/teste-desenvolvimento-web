/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
import { latinMap } from './latin-map';
/**
 * @param {?} str
 * @return {?}
 */
export function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, (/**
     * @param {?} a
     * @return {?}
     */
    function (a) {
        return latinMap[a] || a;
    }));
}
/**
 * @param {?} queryToEscape
 * @return {?}
 */
export function escapeRegexp(queryToEscape) {
    // Regex: capture the whole query string and replace it with the string
    // that will be used to match the results, for example if the capture is
    // 'a' the result will be \a
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/* tslint:disable */
/**
 * @param {?} str
 * @param {?=} wordRegexDelimiters
 * @param {?=} phraseRegexDelimiters
 * @param {?=} delimitersForMultipleSearch
 * @return {?}
 */
export function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters, delimitersForMultipleSearch) {
    if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
    if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
    /** @type {?} */
    var result = [];
    if (!delimitersForMultipleSearch) {
        result = tokenizeWordsAndPhrases(str, wordRegexDelimiters, phraseRegexDelimiters);
    }
    else {
        /** @type {?} */
        var multipleSearchRegexStr = "([" + delimitersForMultipleSearch + "]+)";
        /** @type {?} */
        var delimitedTokens = str.split(new RegExp(multipleSearchRegexStr, 'g'));
        /** @type {?} */
        var lastToken = delimitedTokens[delimitedTokens.length - 1];
        if (lastToken > '') {
            if (wordRegexDelimiters && phraseRegexDelimiters) {
                result = tokenizeWordsAndPhrases(lastToken, wordRegexDelimiters, phraseRegexDelimiters);
            }
            else {
                result.push(lastToken);
            }
        }
    }
    return result;
}
/**
 * @param {?} str
 * @param {?} wordRegexDelimiters
 * @param {?} phraseRegexDelimiters
 * @return {?}
 */
function tokenizeWordsAndPhrases(str, wordRegexDelimiters, phraseRegexDelimiters) {
    /** @type {?} */
    var result = [];
    /* tslint:enable */
    /** @type {?} */
    var regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
        ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
    /** @type {?} */
    var preTokenized = str.split(new RegExp(regexStr, 'g'));
    /** @type {?} */
    var preTokenizedLength = preTokenized.length;
    /** @type {?} */
    var token;
    /** @type {?} */
    var replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
    for (var i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} object
 * @param {?} option
 * @return {?}
 */
export function getValueFromObject(object, option) {
    var e_1, _a;
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        /** @type {?} */
        var functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    /** @type {?} */
    var properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    /** @type {?} */
    var propertiesArray = properties.split('.');
    try {
        for (var propertiesArray_1 = __values(propertiesArray), propertiesArray_1_1 = propertiesArray_1.next(); !propertiesArray_1_1.done; propertiesArray_1_1 = propertiesArray_1.next()) {
            var property = propertiesArray_1_1.value;
            if (property in object) {
                // tslint:disable-next-line
                object = object[property];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (propertiesArray_1_1 && !propertiesArray_1_1.done && (_a = propertiesArray_1.return)) _a.call(propertiesArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (!object) {
        return '';
    }
    return object.toString();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvIiwic291cmNlcyI6WyJ0eXBlYWhlYWQtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUV2QyxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQVc7SUFDbEMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsb0JBQW9COzs7O0lBQUUsVUFBVSxDQUFTO1FBQzFELE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxhQUFxQjtJQUNoRCx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDRCQUE0QjtJQUM1QixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakUsQ0FBQzs7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFXLEVBQ2xDLG1CQUF5QixFQUN6QixxQkFBMEIsRUFBRSwyQkFBb0M7SUFEaEUsb0NBQUEsRUFBQSx5QkFBeUI7SUFDekIsc0NBQUEsRUFBQSwwQkFBMEI7O1FBRXRCLE1BQU0sR0FBYSxFQUFFO0lBQ3pCLElBQUksQ0FBQywyQkFBMkIsRUFBRTtRQUNoQyxNQUFNLEdBQUcsdUJBQXVCLENBQUMsR0FBRyxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDLENBQUM7S0FDbkY7U0FBTTs7WUFDQyxzQkFBc0IsR0FBRyxPQUFLLDJCQUEyQixRQUFLOztZQUM5RCxlQUFlLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQzs7WUFDcEUsU0FBUyxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM3RCxJQUFJLFNBQVMsR0FBRyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxtQkFBbUIsSUFBSSxxQkFBcUIsRUFBRTtnQkFDaEQsTUFBTSxHQUFHLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO2FBQ3pGO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDeEI7U0FDRjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQUVELFNBQVMsdUJBQXVCLENBQUMsR0FBVyxFQUFFLG1CQUEyQixFQUFFLHFCQUE2Qjs7UUFDaEcsTUFBTSxHQUFhLEVBQUU7OztRQUVyQixRQUFRLEdBQUcsU0FBTyxxQkFBcUIsYUFBUSxxQkFBcUIsUUFBSztTQUMvRSxTQUFPLHFCQUFxQixjQUFTLG1CQUFtQixRQUFLLENBQUE7O1FBQ3ZELFlBQVksR0FBYSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQzs7UUFDN0Qsa0JBQWtCLEdBQVcsWUFBWSxDQUFDLE1BQU07O1FBQ2xELEtBQWE7O1FBQ1gsdUJBQXVCLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBSSxxQkFBcUIsT0FBSSxFQUFFLEdBQUcsQ0FBQztJQUU5RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM5QyxLQUFLLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxLQUFLLG1CQUFtQixFQUFFO1lBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO0tBQ0Y7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7O0FBR0QsTUFBTSxVQUFVLGtCQUFrQixDQUFDLE1BQVcsRUFBRSxNQUFjOztJQUM1RCxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUN6QyxPQUFPLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMxQjtJQUVELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTs7WUFDbkIsWUFBWSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXZELE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDMUM7O1FBRUssVUFBVSxHQUFXLE1BQU07U0FDOUIsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7U0FDNUIsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7O1FBQ2YsZUFBZSxHQUFhLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztRQUV2RCxLQUF1QixJQUFBLG9CQUFBLFNBQUEsZUFBZSxDQUFBLGdEQUFBLDZFQUFFO1lBQW5DLElBQU0sUUFBUSw0QkFBQTtZQUNqQixJQUFJLFFBQVEsSUFBSSxNQUFNLEVBQUU7Z0JBQ3RCLDJCQUEyQjtnQkFDM0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMzQjtTQUNGOzs7Ozs7Ozs7SUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQUMsT0FBTyxFQUFFLENBQUM7S0FBRTtJQUUxQixPQUFPLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF0aW5NYXAgfSBmcm9tICcuL2xhdGluLW1hcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXRpbml6ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghc3RyKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXkEtWmEtejAtOVxcW1xcXSBdL2csIGZ1bmN0aW9uIChhOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBsYXRpbk1hcFthXSB8fCBhO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ2V4cChxdWVyeVRvRXNjYXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBSZWdleDogY2FwdHVyZSB0aGUgd2hvbGUgcXVlcnkgc3RyaW5nIGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIHN0cmluZ1xuICAvLyB0aGF0IHdpbGwgYmUgdXNlZCB0byBtYXRjaCB0aGUgcmVzdWx0cywgZm9yIGV4YW1wbGUgaWYgdGhlIGNhcHR1cmUgaXNcbiAgLy8gJ2EnIHRoZSByZXN1bHQgd2lsbCBiZSBcXGFcbiAgcmV0dXJuIHF1ZXJ5VG9Fc2NhcGUucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcbn1cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShzdHI6IHN0cmluZyxcbiAgd29yZFJlZ2V4RGVsaW1pdGVycyA9ICcgJyxcbiAgcGhyYXNlUmVnZXhEZWxpbWl0ZXJzID0gJycsIGRlbGltaXRlcnNGb3JNdWx0aXBsZVNlYXJjaD86IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuXG4gIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGlmICghZGVsaW1pdGVyc0Zvck11bHRpcGxlU2VhcmNoKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5pemVXb3Jkc0FuZFBocmFzZXMoc3RyLCB3b3JkUmVnZXhEZWxpbWl0ZXJzLCBwaHJhc2VSZWdleERlbGltaXRlcnMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG11bHRpcGxlU2VhcmNoUmVnZXhTdHIgPSBgKFske2RlbGltaXRlcnNGb3JNdWx0aXBsZVNlYXJjaH1dKylgO1xuICAgIGNvbnN0IGRlbGltaXRlZFRva2VucyA9IHN0ci5zcGxpdChuZXcgUmVnRXhwKG11bHRpcGxlU2VhcmNoUmVnZXhTdHIsICdnJykpO1xuICAgIGNvbnN0IGxhc3RUb2tlbiA9IGRlbGltaXRlZFRva2Vuc1tkZWxpbWl0ZWRUb2tlbnMubGVuZ3RoIC0gMV07XG4gICAgaWYgKGxhc3RUb2tlbiA+ICcnKSB7XG4gICAgICBpZiAod29yZFJlZ2V4RGVsaW1pdGVycyAmJiBwaHJhc2VSZWdleERlbGltaXRlcnMpIHtcbiAgICAgICAgcmVzdWx0ID0gdG9rZW5pemVXb3Jkc0FuZFBocmFzZXMobGFzdFRva2VuLCB3b3JkUmVnZXhEZWxpbWl0ZXJzLCBwaHJhc2VSZWdleERlbGltaXRlcnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2gobGFzdFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB0b2tlbml6ZVdvcmRzQW5kUGhyYXNlcyhzdHI6IHN0cmluZywgd29yZFJlZ2V4RGVsaW1pdGVyczogc3RyaW5nLCBwaHJhc2VSZWdleERlbGltaXRlcnM6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIC8qIHRzbGludDplbmFibGUgKi9cbiAgY29uc3QgcmVnZXhTdHIgPSBgKD86WyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0pKFteJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSspYCArXG4gIGAoPzpbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSl8KFteJHt3b3JkUmVnZXhEZWxpbWl0ZXJzfV0rKWA7XG4gIGNvbnN0IHByZVRva2VuaXplZDogc3RyaW5nW10gPSBzdHIuc3BsaXQobmV3IFJlZ0V4cChyZWdleFN0ciwgJ2cnKSk7XG4gIGNvbnN0IHByZVRva2VuaXplZExlbmd0aDogbnVtYmVyID0gcHJlVG9rZW5pemVkLmxlbmd0aDtcbiAgbGV0IHRva2VuOiBzdHJpbmc7XG4gIGNvbnN0IHJlcGxhY2VQaHJhc2VEZWxpbWl0ZXJzID0gbmV3IFJlZ0V4cChgWyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0rYCwgJ2cnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZVRva2VuaXplZExlbmd0aDsgaSArPSAxKSB7XG4gICAgdG9rZW4gPSBwcmVUb2tlbml6ZWRbaV07XG4gICAgaWYgKHRva2VuICYmIHRva2VuLmxlbmd0aCAmJiB0b2tlbiAhPT0gd29yZFJlZ2V4RGVsaW1pdGVycykge1xuICAgICAgcmVzdWx0LnB1c2godG9rZW4ucmVwbGFjZShyZXBsYWNlUGhyYXNlRGVsaW1pdGVycywgJycpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGcm9tT2JqZWN0KG9iamVjdDogYW55LCBvcHRpb246IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghb3B0aW9uIHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9iamVjdC50b1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdGlvbi5lbmRzV2l0aCgnKCknKSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uTmFtZSA9IG9wdGlvbi5zbGljZSgwLCBvcHRpb24ubGVuZ3RoIC0gMik7XG5cbiAgICByZXR1cm4gb2JqZWN0W2Z1bmN0aW9uTmFtZV0oKS50b1N0cmluZygpO1xuICB9XG5cbiAgY29uc3QgcHJvcGVydGllczogc3RyaW5nID0gb3B0aW9uXG4gICAgLnJlcGxhY2UoL1xcWyhcXHcrKVxcXS9nLCAnLiQxJylcbiAgICAucmVwbGFjZSgvXlxcLi8sICcnKTtcbiAgY29uc3QgcHJvcGVydGllc0FycmF5OiBzdHJpbmdbXSA9IHByb3BlcnRpZXMuc3BsaXQoJy4nKTtcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXNBcnJheSkge1xuICAgIGlmIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgb2JqZWN0ID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cbiAgaWYgKCFvYmplY3QpIHtyZXR1cm4gJyc7IH1cblxuICByZXR1cm4gb2JqZWN0LnRvU3RyaW5nKCk7XG59XG4iXX0=