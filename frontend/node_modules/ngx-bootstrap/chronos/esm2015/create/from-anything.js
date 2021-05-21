/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-line-length
import { isArray, isDate, isNumber, isObject, isObjectEmpty, isString, isUndefined } from '../utils/type-checks';
import { getLocale } from '../locale/locales';
import { createInvalid, isValid } from './valid';
import { configFromStringAndArray } from './from-string-and-array';
import { configFromStringAndFormat } from './from-string-and-format';
import { cloneDate } from './clone';
import { configFromString } from './from-string';
import { configFromArray } from './from-array';
import { configFromObject } from './from-object';
import { checkOverflow } from './check-overflow';
/**
 * @param {?} config
 * @return {?}
 */
function createFromConfig(config) {
    /** @type {?} */
    const res = checkOverflow(prepareConfig(config));
    // todo: remove, in moment.js it's never called cuz of moment constructor
    res._d = new Date(res._d != null ? res._d.getTime() : NaN);
    if (!isValid(Object.assign({}, res, { _isValid: null }))) {
        res._d = new Date(NaN);
    }
    // todo: update offset
    /*if (res._nextDay) {
      // Adding is smart enough around DST
      res._d = add(res._d, 1, 'day');
      res._nextDay = undefined;
    }*/
    return res;
}
/**
 * @param {?} config
 * @return {?}
 */
export function prepareConfig(config) {
    /** @type {?} */
    let input = config._i;
    /** @type {?} */
    const format = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || (format === undefined && input === '')) {
        return createInvalid(config, { nullInput: true });
    }
    if (isString(input)) {
        config._i = input = config._locale.preparse(input, format);
    }
    if (isDate(input)) {
        config._d = cloneDate(input);
        return config;
    }
    // todo: add check for recursion
    if (isArray(format)) {
        configFromStringAndArray(config);
    }
    else if (format) {
        configFromStringAndFormat(config);
    }
    else {
        configFromInput(config);
    }
    if (!isValid(config)) {
        config._d = null;
    }
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
function configFromInput(config) {
    /** @type {?} */
    const input = config._i;
    if (isUndefined(input)) {
        config._d = new Date();
    }
    else if (isDate(input)) {
        config._d = cloneDate(input);
    }
    else if (isString(input)) {
        configFromString(config);
    }
    else if (isArray(input) && input.length) {
        /** @type {?} */
        const _arr = input.slice(0);
        config._a = _arr.map((/**
         * @param {?} obj
         * @return {?}
         */
        obj => isString(obj) ? parseInt(obj, 10) : obj));
        configFromArray(config);
    }
    else if (isObject(input)) {
        configFromObject(config);
    }
    else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    }
    else {
        //   hooks.createFromInputFallback(config);
        return createInvalid(config);
    }
    return config;
}
/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
export function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
    /** @type {?} */
    const config = {};
    /** @type {?} */
    let _input = input;
    // params switch -> skip; test it well
    // if (localeKey === true || localeKey === false) {
    //     strict = localeKey;
    //     localeKey = undefined;
    // }
    // todo: fail fast and return not valid date
    if ((isObject(_input) && isObjectEmpty(_input)) || (isArray(_input) && _input.length === 0)) {
        _input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    // config._isAMomentObject = true;
    config._useUTC = config._isUTC = isUTC;
    config._l = localeKey;
    config._i = _input;
    config._f = format;
    config._strict = strict;
    return createFromConfig(config);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1hbnl0aGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImNyZWF0ZS9mcm9tLWFueXRoaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBR2pELFNBQVMsZ0JBQWdCLENBQUMsTUFBeUI7O1VBQzNDLEdBQUcsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELHlFQUF5RTtJQUN6RSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRCxJQUFJLENBQUMs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eyBpc0FycmF5LCBpc0RhdGUsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNPYmplY3RFbXB0eSwgaXNTdHJpbmcsIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZCwgaXNWYWxpZCB9IGZyb20gJy4vdmFsaWQnO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtYXJyYXknO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWZvcm1hdCc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuL2Nsb25lJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmcgfSBmcm9tICcuL2Zyb20tc3RyaW5nJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21BcnJheSB9IGZyb20gJy4vZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBjb25maWdGcm9tT2JqZWN0IH0gZnJvbSAnLi9mcm9tLW9iamVjdCc7XG5pbXBvcnQgeyBjaGVja092ZXJmbG93IH0gZnJvbSAnLi9jaGVjay1vdmVyZmxvdyc7XG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcblxuZnVuY3Rpb24gY3JlYXRlRnJvbUNvbmZpZyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25zdCByZXMgPSBjaGVja092ZXJmbG93KHByZXBhcmVDb25maWcoY29uZmlnKSk7XG4gIC8vIHRvZG86IHJlbW92ZSwgaW4gbW9tZW50LmpzIGl0J3MgbmV2ZXIgY2FsbGVkIGN1eiBvZiBtb21lbnQgY29uc3RydWN0b3JcbiAgcmVzLl9kID0gbmV3IERhdGUocmVzLl9kICE9IG51bGwgPyByZXMuX2QuZ2V0VGltZSgpIDogTmFOKTtcbiAgaWYgKCFpc1ZhbGlkKE9iamVjdC5hc3NpZ24oe30sIHJlcywge19pc1ZhbGlkOiBudWxsfSkpKSB7XG4gICAgcmVzLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgfVxuICAvLyB0b2RvOiB1cGRhdGUgb2Zmc2V0XG4gIC8qaWYgKHJlcy5fbmV4dERheSkge1xuICAgIC8vIEFkZGluZyBpcyBzbWFydCBlbm91Z2ggYXJvdW5kIERTVFxuICAgIHJlcy5fZCA9IGFkZChyZXMuX2QsIDEsICdkYXknKTtcbiAgICByZXMuX25leHREYXkgPSB1bmRlZmluZWQ7XG4gIH0qL1xuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlQ29uZmlnKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGxldCBpbnB1dCA9IGNvbmZpZy5faTtcbiAgY29uc3QgZm9ybWF0ID0gY29uZmlnLl9mO1xuXG4gIGNvbmZpZy5fbG9jYWxlID0gY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKGNvbmZpZy5fbCk7XG5cbiAgaWYgKGlucHV0ID09PSBudWxsIHx8IChmb3JtYXQgPT09IHVuZGVmaW5lZCAmJiBpbnB1dCA9PT0gJycpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnLCB7IG51bGxJbnB1dDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBjb25maWcuX2kgPSBpbnB1dCA9IGNvbmZpZy5fbG9jYWxlLnByZXBhcnNlKGlucHV0LCBmb3JtYXQpO1xuICB9XG5cbiAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICBjb25maWcuX2QgPSBjbG9uZURhdGUoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIC8vIHRvZG86IGFkZCBjaGVjayBmb3IgcmVjdXJzaW9uXG5cbiAgaWYgKGlzQXJyYXkoZm9ybWF0KSkge1xuICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpO1xuICB9IGVsc2UgaWYgKGZvcm1hdCkge1xuICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWdGcm9tSW5wdXQoY29uZmlnKTtcbiAgfVxuXG4gIGlmICghaXNWYWxpZChjb25maWcpKSB7XG4gICAgY29uZmlnLl9kID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0Zyb21JbnB1dChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25zdCBpbnB1dCA9IGNvbmZpZy5faTtcbiAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSkge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCk7XG4gIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgIGNvbmZpZy5fZCA9IGNsb25lRGF0ZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgY29uZmlnRnJvbVN0cmluZyhjb25maWcpO1xuICB9IGVsc2UgaWYgKGlzQXJyYXk8c3RyaW5nIHwgbnVtYmVyPihpbnB1dCkgJiYgaW5wdXQubGVuZ3RoKSB7XG4gICAgY29uc3QgX2FycjogKHN0cmluZyB8IG51bWJlcilbXSA9IGlucHV0LnNsaWNlKDApO1xuICAgIGNvbmZpZy5fYSA9IF9hcnIubWFwKG9iaiA9PiBpc1N0cmluZyhvYmopID8gcGFyc2VJbnQob2JqLCAxMCkgOiBvYmopO1xuICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xuICAgIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAvLyBmcm9tIG1pbGxpc2Vjb25kc1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcbiAgfSBlbHNlIHtcbiAgICAvLyAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0OiBEYXRlSW5wdXQsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLCBsb2NhbGVLZXk/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4sIGlzVVRDPzogYm9vbGVhbik6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uc3QgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9O1xuICBsZXQgX2lucHV0ID0gaW5wdXQ7XG5cbiAgLy8gcGFyYW1zIHN3aXRjaCAtPiBza2lwOyB0ZXN0IGl0IHdlbGxcbiAgLy8gaWYgKGxvY2FsZUtleSA9PT0gdHJ1ZSB8fCBsb2NhbGVLZXkgPT09IGZhbHNlKSB7XG4gIC8vICAgICBzdHJpY3QgPSBsb2NhbGVLZXk7XG4gIC8vICAgICBsb2NhbGVLZXkgPSB1bmRlZmluZWQ7XG4gIC8vIH1cblxuICAvLyB0b2RvOiBmYWlsIGZhc3QgYW5kIHJldHVybiBub3QgdmFsaWQgZGF0ZVxuICBpZiAoKGlzT2JqZWN0KF9pbnB1dCkgJiYgaXNPYmplY3RFbXB0eShfaW5wdXQpKSB8fCAoaXNBcnJheShfaW5wdXQpICYmIF9pbnB1dC5sZW5ndGggPT09IDApKSB7XG4gICAgX2lucHV0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQyM1xuICAvLyBjb25maWcuX2lzQU1vbWVudE9iamVjdCA9IHRydWU7XG4gIGNvbmZpZy5fdXNlVVRDID0gY29uZmlnLl9pc1VUQyA9IGlzVVRDO1xuICBjb25maWcuX2wgPSBsb2NhbGVLZXk7XG4gIGNvbmZpZy5faSA9IF9pbnB1dDtcbiAgY29uZmlnLl9mID0gZm9ybWF0O1xuICBjb25maWcuX3N0cmljdCA9IHN0cmljdDtcblxuICByZXR1cm4gY3JlYXRlRnJvbUNvbmZpZyhjb25maWcpO1xufVxuIl19