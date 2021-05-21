/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
/* tslint:disable:max-file-line-count */
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { from, isObservable } from 'rxjs';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { debounceTime, filter, mergeMap, switchMap, toArray, tap } from 'rxjs/operators';
import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadMatch } from './typeahead-match.class';
import { TypeaheadConfig } from './typeahead.config';
import { getValueFromObject, latinize, tokenize } from './typeahead-utils';
import { TypeaheadOrder } from './typeahead-order.class';
var TypeaheadDirective = /** @class */ (function () {
    function TypeaheadDirective(cis, config, changeDetection, element, ngControl, renderer, viewContainerRef) {
        this.changeDetection = changeDetection;
        this.element = element;
        this.ngControl = ngControl;
        this.renderer = renderer;
        /**
         * minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         */
        this.typeaheadMinLength = void 0;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * should be used only in case of typeahead attribute is Observable of array.
         * If true - loading of options will be async, otherwise - sync.
         * true make sense if options array is large.
         */
        this.typeaheadAsync = void 0;
        /**
         * match latin symbols.
         * If true the word súper would match super and vice versa.
         */
        this.typeaheadLatinize = true;
        /**
         * Can be use to search words by inserting a single white space between each characters
         *  for example 'C a l i f o r n i a' will match 'California'.
         */
        this.typeaheadSingleWords = true;
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         */
        this.typeaheadWordDelimiters = ' ';
        /**
         * Can be used to conduct a search of multiple items and have suggestion not for the
         * whole value of the input but for the value that comes after a delimiter provided via
         * typeaheadMultipleSearchDelimiters attribute. This option can only be used together with
         * typeaheadSingleWords option if typeaheadWordDelimiters and typeaheadPhraseDelimiters
         * are different from typeaheadMultipleSearchDelimiters to avoid conflict in determining
         * when to delimit multiple searches and when a single word.
         */
        this.typeaheadMultipleSearch = void 0;
        /**
         * should be used only in case typeaheadMultipleSearch attribute is true.
         * Sets the multiple search delimiter to know when to start a new search. Defaults to comma.
         * If space needs to be used, then explicitly set typeaheadWordDelimiters to something else than space
         * because space is used by default OR set typeaheadSingleWords attribute to false if you don't need
         * to use it together with multiple search.
         */
        this.typeaheadMultipleSearchDelimiters = ',';
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         */
        this.typeaheadPhraseDelimiters = '\'"';
        /**
         * specifies if typeahead is scrollable
         */
        this.typeaheadScrollable = false;
        /**
         * specifies number of options to show in scroll view
         */
        this.typeaheadOptionsInScrollableView = 5;
        /**
         * fired when an options list was opened and the user clicked Tab
         * If a value equal true, it will be chosen first or active item in the list
         * If value equal false, it will be chosen an active item in the list or nothing
         */
        this.typeaheadSelectFirstItem = true;
        /**
         * makes active first item in a list
         */
        this.typeaheadIsFirstItemActive = true;
        /**
         * fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         */
        this.typeaheadLoading = new EventEmitter();
        /**
         * fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new EventEmitter();
        /**
         * fired when option was selected, return object with data of this option
         */
        this.typeaheadOnSelect = new EventEmitter();
        /**
         * fired when blur event occurs. returns the active item
         */
        this.typeaheadOnBlur = new EventEmitter();
        /**
         * This attribute indicates that the dropdown should be opened upwards
         */
        this.dropup = false;
        this.isOpen = false;
        this.list = 'list';
        this.isActiveItemChanged = false;
        this.isFocused = false;
        this.cancelRequestOnFocusLost = false;
        // tslint:disable-next-line:no-any
        this.keyUpEventEmitter = new EventEmitter();
        this._matches = [];
        this.placement = 'bottom left';
        this._subscriptions = [];
        this._typeahead = cis.createLoader(element, viewContainerRef, renderer)
            .provide({ provide: TypeaheadConfig, useValue: config });
        Object.assign(this, {
            typeaheadHideResultsOnBlur: config.hideResultsOnBlur,
            cancelRequestOnFocusLost: config.cancelRequestOnFocusLost,
            typeaheadSelectFirstItem: config.selectFirstItem,
            typeaheadIsFirstItemActive: config.isFirstItemActive,
            typeaheadMinLength: config.minLength,
            adaptivePosition: config.adaptivePosition,
            isAnimated: config.isAnimated
        });
    }
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined && !(isObservable(this.typeahead))) {
            this.typeaheadAsync = false;
        }
        if (isObservable(this.typeahead)) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
        this.checkDelimitersConflict();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    TypeaheadDirective.prototype.onInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        /** @type {?} */
        var value = e.target.value !== undefined
            ? e.target.value
            : e.target.textContent !== undefined
                ? e.target.textContent
                : e.target.innerText;
        if (value != null && value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TypeaheadDirective.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._container) {
            // esc
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 27 || event.key === 'Escape') {
                this.hide();
                return;
            }
            // up
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 38 || event.key === 'ArrowUp') {
                this.isActiveItemChanged = true;
                this._container.prevActiveMatch();
                return;
            }
            // down
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 40 || event.key === 'ArrowDown') {
                this.isActiveItemChanged = true;
                this._container.nextActiveMatch();
                return;
            }
            // enter
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 13 || event.key === 'Enter') {
                this._container.selectActiveMatch();
                return;
            }
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isFocused = true;
        // add setTimeout to fix issue #5251
        // to get and emit updated value if it's changed on focus
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.typeaheadMinLength === 0) {
                _this.typeaheadLoading.emit(true);
                _this.keyUpEventEmitter.emit(_this.element.nativeElement.value || '');
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.isFocused = false;
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
        if (!this.container && this._matches.length === 0) {
            this.typeaheadOnBlur.emit(new TypeaheadMatch(this.element.nativeElement.value, this.element.nativeElement.value, false));
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TypeaheadDirective.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        /* tslint:disable-next-line: deprecation */
        if (event.keyCode === 9 || event.key === 'Tab') {
            this.onBlur();
        }
        /* tslint:disable-next-line: deprecation */
        if (event.keyCode === 9 || event.key === 'Tab' || event.keyCode === 13 || event.key === 'Enter') {
            event.preventDefault();
            if (this.typeaheadSelectFirstItem) {
                this._container.selectActiveMatch();
                return;
            }
            if (!this.typeaheadSelectFirstItem) {
                this._container.selectActiveMatch(this.isActiveItemChanged);
                this.isActiveItemChanged = false;
                this.hide();
            }
        }
    };
    /**
     * @param {?} match
     * @return {?}
     */
    TypeaheadDirective.prototype.changeModel = /**
     * @param {?} match
     * @return {?}
     */
    function (match) {
        /** @type {?} */
        var valueStr;
        if (this.typeaheadMultipleSearch) {
            /** @type {?} */
            var tokens = this._allEnteredValue.split(new RegExp("([" + this.typeaheadMultipleSearchDelimiters + "]+)"));
            this._allEnteredValue = tokens.slice(0, tokens.length - 1).concat(match.value).join('');
            valueStr = this._allEnteredValue;
        }
        else {
            valueStr = match.value;
        }
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    };
    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._typeahead
            .attach(TypeaheadContainerComponent)
            .to(this.container)
            .position({ attachment: (this.dropup ? 'top' : 'bottom') + " left" })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer.listen('document', 'click', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (_this.typeaheadMinLength === 0 && _this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            if (!_this.typeaheadHideResultsOnBlur || _this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            _this.onOutsideClick();
        }));
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        /** @type {?} */
        var normalizedQuery = (this.typeaheadLatinize
            ? latinize(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.tokenizeQuery(normalizedQuery);
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
        this._container.activeChangeEvent.subscribe((/**
         * @param {?} activeId
         * @return {?}
         */
        function (activeId) {
            _this.activeDescendant = activeId;
            _this.changeDetection.markForCheck();
        }));
        this.isOpen = true;
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
            this.isOpen = false;
            this.changeDetection.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.onOutsideClick = /**
     * @return {?}
     */
    function () {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    TypeaheadDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            // clean up subscriptions
            for (var _b = __values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._typeahead.dispose();
    };
    /**
     * @protected
     * @return {?}
     */
    TypeaheadDirective.prototype.asyncActions = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), tap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._allEnteredValue = value;
        })), switchMap((/**
         * @return {?}
         */
        function () { return _this.typeahead; })))
            .subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        function (matches) {
            _this.finalizeAsyncCall(matches);
        })));
    };
    /**
     * @protected
     * @return {?}
     */
    TypeaheadDirective.prototype.syncActions = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), mergeMap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._allEnteredValue = value;
            /** @type {?} */
            var normalizedQuery = _this.normalizeQuery(value);
            return from(_this.typeahead)
                .pipe(filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return option && _this.testMatch(_this.normalizeOption(option), normalizedQuery);
            })), toArray());
        })))
            .subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        function (matches) {
            _this.finalizeAsyncCall(matches);
        })));
    };
    /**
     * @protected
     * @param {?} option
     * @return {?}
     */
    TypeaheadDirective.prototype.normalizeOption = /**
     * @protected
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var optionValue = getValueFromObject(option, this.typeaheadOptionField);
        /** @type {?} */
        var normalizedOption = this.typeaheadLatinize
            ? latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    };
    /**
     * @protected
     * @param {?} currentQuery
     * @return {?}
     */
    TypeaheadDirective.prototype.tokenizeQuery = /**
     * @protected
     * @param {?} currentQuery
     * @return {?}
     */
    function (currentQuery) {
        /** @type {?} */
        var query = currentQuery;
        if (this.typeaheadMultipleSearch && this.typeaheadSingleWords) {
            if (!this.haveCommonCharacters("" + this.typeaheadPhraseDelimiters + this.typeaheadWordDelimiters, this.typeaheadMultipleSearchDelimiters)) {
                // single words and multiple search delimiters are different, can be used together
                query = tokenize((/** @type {?} */ (query)), this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters, this.typeaheadMultipleSearchDelimiters);
            }
        }
        else if (this.typeaheadSingleWords) {
            query = tokenize((/** @type {?} */ (query)), this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters);
        }
        else {
            // multiple searches
            query = tokenize((/** @type {?} */ (query)), null, null, this.typeaheadMultipleSearchDelimiters);
        }
        return query;
    };
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    TypeaheadDirective.prototype.normalizeQuery = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // If singleWords, break model here to not be doing extra work on each iteration
        /** @type {?} */
        var normalizedQuery = (this.typeaheadLatinize
            ? latinize(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.tokenizeQuery(normalizedQuery);
        return normalizedQuery;
    };
    /**
     * @protected
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    TypeaheadDirective.prototype.testMatch = /**
     * @protected
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    function (match, test) {
        /** @type {?} */
        var spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (var i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    };
    /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    TypeaheadDirective.prototype.finalizeAsyncCall = /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    function (matches) {
        this.prepareMatches(matches || []);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (!this.isFocused && this.cancelRequestOnFocusLost) {
            return;
        }
        if (this._container) {
            // fix: remove usage of ngControl internals
            /** @type {?} */
            var _controlValue = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value) || '';
            // This improves the speed as it won't have to be done for each list item
            /** @type {?} */
            var normalizedQuery = _controlValue.toString().toLowerCase();
            this._container.query = this.tokenizeQuery(normalizedQuery);
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    };
    /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    TypeaheadDirective.prototype.prepareMatches = /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        /** @type {?} */
        var limited = options.slice(0, this.typeaheadOptionsLimit);
        /** @type {?} */
        var sorted = !this.typeaheadOrderBy ? limited : this.orderMatches(limited);
        if (this.typeaheadGroupField) {
            /** @type {?} */
            var matches_1 = [];
            // extract all group names
            /** @type {?} */
            var groups = sorted
                .map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return getValueFromObject(option, _this.typeaheadGroupField);
            }))
                .filter((/**
             * @param {?} v
             * @param {?} i
             * @param {?} a
             * @return {?}
             */
            function (v, i, a) { return a.indexOf(v) === i; }));
            groups.forEach((/**
             * @param {?} group
             * @return {?}
             */
            function (group) {
                // add group header to array of matches
                matches_1.push(new TypeaheadMatch(group, group, true));
                // add each item of group to array of matches
                matches_1 = matches_1.concat(sorted
                    .filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return getValueFromObject(option, _this.typeaheadGroupField) === group;
                }))
                    .map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                })));
            }));
            this._matches = matches_1;
        }
        else {
            this._matches = sorted.map((
            // tslint:disable-next-line:no-any
            // tslint:disable-next-line:no-any
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
            }));
        }
    };
    /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    TypeaheadDirective.prototype.orderMatches = /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (!options.length) {
            return options;
        }
        if (this.typeaheadOrderBy !== null
            && this.typeaheadOrderBy !== undefined
            && typeof this.typeaheadOrderBy === 'object'
            && Object.keys(this.typeaheadOrderBy).length === 0) {
            // tslint:disable-next-line:no-console
            console.error('Field and direction properties for typeaheadOrderBy have to be set according to documentation!');
            return options;
        }
        var _a = this.typeaheadOrderBy, field = _a.field, direction = _a.direction;
        if (!direction || !(direction === 'asc' || direction === 'desc')) {
            // tslint:disable-next-line:no-console
            console.error('typeaheadOrderBy direction has to equal "asc" or "desc". Please follow the documentation.');
            return options;
        }
        if (typeof options[0] === 'string') {
            return direction === 'asc' ? options.sort() : options.sort().reverse();
        }
        if (!field || typeof field !== 'string') {
            // tslint:disable-next-line:no-console
            console.error('typeaheadOrderBy field has to set according to the documentation.');
            return options;
        }
        return options.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            /** @type {?} */
            var stringA = getValueFromObject(a, field);
            /** @type {?} */
            var stringB = getValueFromObject(b, field);
            if (stringA < stringB) {
                return direction === 'asc' ? -1 : 1;
            }
            if (stringA > stringB) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        }));
    };
    /**
     * @protected
     * @return {?}
     */
    TypeaheadDirective.prototype.hasMatches = /**
     * @protected
     * @return {?}
     */
    function () {
        return this._matches.length > 0;
    };
    /**
     * @protected
     * @return {?}
     */
    TypeaheadDirective.prototype.checkDelimitersConflict = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.typeaheadMultipleSearch && this.typeaheadSingleWords
            && (this.haveCommonCharacters("" + this.typeaheadPhraseDelimiters + this.typeaheadWordDelimiters, this.typeaheadMultipleSearchDelimiters))) {
            throw new Error("Delimiters used in typeaheadMultipleSearchDelimiters must be different\n          from delimiters used in typeaheadWordDelimiters (current value: " + this.typeaheadWordDelimiters + ") and\n          typeaheadPhraseDelimiters (current value: " + this.typeaheadPhraseDelimiters + ").\n          Please refer to the documentation");
        }
    };
    /**
     * @protected
     * @param {?} str1
     * @param {?} str2
     * @return {?}
     */
    TypeaheadDirective.prototype.haveCommonCharacters = /**
     * @protected
     * @param {?} str1
     * @param {?} str2
     * @return {?}
     */
    function (str1, str2) {
        for (var i = 0; i < str1.length; i++) {
            if (str1.charAt(i).indexOf(str2) > -1) {
                return true;
            }
        }
        return false;
    };
    TypeaheadDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[typeahead]',
                    exportAs: 'bs-typeahead',
                    host: {
                        '[attr.aria-activedescendant]': 'activeDescendant',
                        '[attr.aria-owns]': 'isOpen ? this._container.popupId : null',
                        '[attr.aria-expanded]': 'isOpen',
                        '[attr.aria-autocomplete]': 'list'
                    }
                },] }
    ];
    /** @nocollapse */
    TypeaheadDirective.ctorParameters = function () { return [
        { type: ComponentLoaderFactory },
        { type: TypeaheadConfig },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgControl },
        { type: Renderer2 },
        { type: ViewContainerRef }
    ]; };
    TypeaheadDirective.propDecorators = {
        typeahead: [{ type: Input }],
        typeaheadMinLength: [{ type: Input }],
        adaptivePosition: [{ type: Input }],
        isAnimated: [{ type: Input }],
        typeaheadWaitMs: [{ type: Input }],
        typeaheadOptionsLimit: [{ type: Input }],
        typeaheadOptionField: [{ type: Input }],
        typeaheadGroupField: [{ type: Input }],
        typeaheadOrderBy: [{ type: Input }],
        typeaheadAsync: [{ type: Input }],
        typeaheadLatinize: [{ type: Input }],
        typeaheadSingleWords: [{ type: Input }],
        typeaheadWordDelimiters: [{ type: Input }],
        typeaheadMultipleSearch: [{ type: Input }],
        typeaheadMultipleSearchDelimiters: [{ type: Input }],
        typeaheadPhraseDelimiters: [{ type: Input }],
        typeaheadItemTemplate: [{ type: Input }],
        optionsListTemplate: [{ type: Input }],
        typeaheadScrollable: [{ type: Input }],
        typeaheadOptionsInScrollableView: [{ type: Input }],
        typeaheadHideResultsOnBlur: [{ type: Input }],
        typeaheadSelectFirstItem: [{ type: Input }],
        typeaheadIsFirstItemActive: [{ type: Input }],
        typeaheadLoading: [{ type: Output }],
        typeaheadNoResults: [{ type: Output }],
        typeaheadOnSelect: [{ type: Output }],
        typeaheadOnBlur: [{ type: Output }],
        container: [{ type: Input }],
        dropup: [{ type: Input }],
        onInput: [{ type: HostListener, args: ['input', ['$event'],] }],
        onChange: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        onFocus: [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['focus',] }],
        onBlur: [{ type: HostListener, args: ['blur',] }],
        onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return TypeaheadDirective;
}());
export { TypeaheadDirective };
if (false) {
    /**
     * options source, can be Array of strings, objects or
     * an Observable for external matching process
     * @type {?}
     */
    TypeaheadDirective.prototype.typeahead;
    /**
     * minimal no of characters that needs to be entered before
     * typeahead kicks-in. When set to 0, typeahead shows on focus with full
     * list of options (limited as normal by typeaheadOptionsLimit)
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadMinLength;
    /**
     * sets use adaptive position
     * @type {?}
     */
    TypeaheadDirective.prototype.adaptivePosition;
    /**
     * turn on/off animation
     * @type {?}
     */
    TypeaheadDirective.prototype.isAnimated;
    /**
     * minimal wait time after last character typed before typeahead kicks-in
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadWaitMs;
    /**
     * maximum length of options items list. The default value is 20
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOptionsLimit;
    /**
     * when options source is an array of objects, the name of field
     * that contains the options value, we use array item as option in case
     * of this field is missing. Supports nested properties and methods.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOptionField;
    /**
     * when options source is an array of objects, the name of field that
     * contains the group value, matches are grouped by this field when set.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadGroupField;
    /**
     * Used to specify a custom order of matches. When options source is an array of objects
     * a field for sorting has to be set up. In case of options source is an array of string,
     * a field for sorting is absent. The ordering direction could be changed to ascending or descending.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOrderBy;
    /**
     * should be used only in case of typeahead attribute is Observable of array.
     * If true - loading of options will be async, otherwise - sync.
     * true make sense if options array is large.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadAsync;
    /**
     * match latin symbols.
     * If true the word súper would match super and vice versa.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadLatinize;
    /**
     * Can be use to search words by inserting a single white space between each characters
     *  for example 'C a l i f o r n i a' will match 'California'.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadSingleWords;
    /**
     * should be used only in case typeaheadSingleWords attribute is true.
     * Sets the word delimiter to break words. Defaults to space.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadWordDelimiters;
    /**
     * Can be used to conduct a search of multiple items and have suggestion not for the
     * whole value of the input but for the value that comes after a delimiter provided via
     * typeaheadMultipleSearchDelimiters attribute. This option can only be used together with
     * typeaheadSingleWords option if typeaheadWordDelimiters and typeaheadPhraseDelimiters
     * are different from typeaheadMultipleSearchDelimiters to avoid conflict in determining
     * when to delimit multiple searches and when a single word.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadMultipleSearch;
    /**
     * should be used only in case typeaheadMultipleSearch attribute is true.
     * Sets the multiple search delimiter to know when to start a new search. Defaults to comma.
     * If space needs to be used, then explicitly set typeaheadWordDelimiters to something else than space
     * because space is used by default OR set typeaheadSingleWords attribute to false if you don't need
     * to use it together with multiple search.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadMultipleSearchDelimiters;
    /**
     * should be used only in case typeaheadSingleWords attribute is true.
     * Sets the word delimiter to match exact phrase.
     * Defaults to simple and double quotes.
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadPhraseDelimiters;
    /**
     * used to specify a custom item template.
     * Template variables exposed are called item and index;
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadItemTemplate;
    /**
     * used to specify a custom options list template.
     * Template variables: matches, itemTemplate, query
     * @type {?}
     */
    TypeaheadDirective.prototype.optionsListTemplate;
    /**
     * specifies if typeahead is scrollable
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadScrollable;
    /**
     * specifies number of options to show in scroll view
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOptionsInScrollableView;
    /**
     * used to hide result on blur
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadHideResultsOnBlur;
    /**
     * fired when an options list was opened and the user clicked Tab
     * If a value equal true, it will be chosen first or active item in the list
     * If value equal false, it will be chosen an active item in the list or nothing
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadSelectFirstItem;
    /**
     * makes active first item in a list
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadIsFirstItemActive;
    /**
     * fired when 'busy' state of this component was changed,
     * fired on async mode only, returns boolean
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadLoading;
    /**
     * fired on every key event and returns true
     * in case of matches are not detected
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadNoResults;
    /**
     * fired when option was selected, return object with data of this option
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOnSelect;
    /**
     * fired when blur event occurs. returns the active item
     * @type {?}
     */
    TypeaheadDirective.prototype.typeaheadOnBlur;
    /**
     * A selector specifying the element the typeahead should be appended to.
     * @type {?}
     */
    TypeaheadDirective.prototype.container;
    /**
     * This attribute indicates that the dropdown should be opened upwards
     * @type {?}
     */
    TypeaheadDirective.prototype.dropup;
    /**
     * if false don't focus the input element the typeahead directive is associated with on selection
     * @type {?}
     */
    TypeaheadDirective.prototype.activeDescendant;
    /** @type {?} */
    TypeaheadDirective.prototype.isOpen;
    /** @type {?} */
    TypeaheadDirective.prototype.list;
    /** @type {?} */
    TypeaheadDirective.prototype._container;
    /** @type {?} */
    TypeaheadDirective.prototype.isActiveItemChanged;
    /** @type {?} */
    TypeaheadDirective.prototype.isFocused;
    /** @type {?} */
    TypeaheadDirective.prototype.cancelRequestOnFocusLost;
    /**
     * @type {?}
     * @protected
     */
    TypeaheadDirective.prototype.keyUpEventEmitter;
    /**
     * @type {?}
     * @protected
     */
    TypeaheadDirective.prototype._matches;
    /**
     * @type {?}
     * @protected
     */
    TypeaheadDirective.prototype.placement;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype._typeahead;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype._subscriptions;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype._outsideClickListener;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype._allEnteredValue;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype.changeDetection;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    TypeaheadDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkLyIsInNvdXJjZXMiOlsidHlwZWFoZWFkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsSUFBSSxFQUFnQixZQUFZLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDcEUsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNekQ7SUF5SkUsNEJBQ0UsR0FBMkIsRUFDM0IsTUFBdUIsRUFDZixlQUFrQyxFQUNsQyxPQUFtQixFQUNuQixTQUFvQixFQUNwQixRQUFtQixFQUMzQixnQkFBa0M7UUFKMUIsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBQ2xDLFlBQU8s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Ozs7OztJQUsxQyw0Q0FBMEM7Ozs7OztJQUkxQywrQ0FBa0M7Ozs7OztJQUlsQyxrREFBcUM7Ozs7OztJQUlyQyxxREFBdUM7Ozs7Ozs7Ozs7SUFRdkMscURBQW1EOzs7Ozs7Ozs7SUFPbkQsK0RBQWlEOzs7Ozs7O0lBS2pELHVEQUEyQzs7Ozs7O0lBSTNDLG1EQUF3RTs7Ozs7O0lBSXhFLGlEQUFzRTs7Ozs7SUFFdEUsaURBQXFDOzs7OztJQUVyQyw4REFBOEM7Ozs7O0lBRTlDLHdEQUE2Qzs7Ozs7OztJQUs3QyxzREFBeUM7Ozs7O0lBRXpDLHdEQUEyQzs7Ozs7O0lBSTNDLDhDQUF5RDs7Ozs7O0lBSXpELGdEQUEyRDs7Ozs7SUFFM0QsK0NBQWlFOzs7OztJQUVqRSw2Q0FBK0Q7Ozs7O0lBSy9ELHVDQUEyQjs7Ozs7SUFHM0Isb0NBQXdCOzs7OztJQWdCeEIsOENBQXlCOztJQUN6QixvQ0FBZTs7SUFDZixrQ0FBYzs7SUFDZCx3Q0FBd0M7O0lBQ3hDLGlEQUE0Qjs7SUFDNUIsdUNBQWtCOztJQUNsQixzREFBaUM7Ozs7O0lBR2pDLCtDQUF1RTs7Ozs7SUFDdkUsc0NBQTBDOzs7OztJQUMxQyx1Q0FBb0M7Ozs7O0lBRXBDLHdDQUFpRTs7Ozs7SUFDakUsNENBQTRDOzs7OztJQUM1QyxtREFBd0M7Ozs7O0lBQ3hDLDhDQUFpQzs7Ozs7SUFLL0IsNkNBQTBDOzs7OztJQUMxQyxxQ0FBMkI7Ozs7O0lBQzNCLHVDQUE0Qjs7Ozs7SUFDNUIsc0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudCAqL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBmcm9tLCBTdWJzY3JpcHRpb24sIGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCBtZXJnZU1hcCwgc3dpdGNoTWFwLCB0b0FycmF5LCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XG5pbXBvcnQgeyBUeXBlYWhlYWRDb25maWcgfSBmcm9tICcuL3R5cGVhaGVhZC5jb25maWcnO1xuaW1wb3J0IHsgZ2V0VmFsdWVGcm9tT2JqZWN0LCBsYXRpbml6ZSwgdG9rZW5pemUgfSBmcm9tICcuL3R5cGVhaGVhZC11dGlscyc7XG5pbXBvcnQgeyBUeXBlYWhlYWRPcmRlciB9IGZyb20gJy4vdHlwZWFoZWFkLW9yZGVyLmNsYXNzJztcbmltcG9ydCB7IFR5cGVhaGVhZE9wdGlvbkl0ZW1Db250ZXh0LCBUeXBlYWhlYWRPcHRpb25MaXN0Q29udGV4dCB9IGZyb20gJy4vbW9kZWxzJztcblxudHlwZSBUeXBlYWhlYWRPcHRpb24gPSBzdHJpbmcgfCB7W2tleSBpbiBzdHJpbmcgfCBudW1iZXJdOiBhbnl9O1xudHlwZSBUeXBlYWhlYWQgPSBUeXBlYWhlYWRPcHRpb25bXSB8IE9ic2VydmFibGU8VHlwZWFoZWFkT3B0aW9uW10+O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdHlwZWFoZWFkXScsXG4gIGV4cG9ydEFzOiAnYnMtdHlwZWFoZWFkJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci5hcmlhLWFjdGl2ZWRlc2NlbmRhbnRdJzogJ2FjdGl2ZURlc2NlbmRhbnQnLFxuICAgICdbYXR0ci5hcmlhLW93bnNdJzogJ2lzT3BlbiA/IHRoaXMuX2NvbnRhaW5lci5wb3B1cElkIDogbnVsbCcsXG4gICAgJ1thdHRyLmFyaWEtZXhwYW5kZWRdJzogJ2lzT3BlbicsXG4gICAgJ1thdHRyLmFyaWEtYXV0b2NvbXBsZXRlXSc6ICdsaXN0J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIG9wdGlvbnMgc291cmNlLCBjYW4gYmUgQXJyYXkgb2Ygc3RyaW5ncywgb2JqZWN0cyBvclxuICAgKiBhbiBPYnNlcnZhYmxlIGZvciBleHRlcm5hbCBtYXRjaGluZyBwcm9jZXNzXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWQ6IFR5cGVhaGVhZDtcbiAgLyoqIG1pbmltYWwgbm8gb2YgY2hhcmFjdGVycyB0aGF0IG5lZWRzIHRvIGJlIGVudGVyZWQgYmVmb3JlXG4gICAqIHR5cGVhaGVhZCBraWNrcy1pbi4gV2hlbiBzZXQgdG8gMCwgdHlwZWFoZWFkIHNob3dzIG9uIGZvY3VzIHdpdGggZnVsbFxuICAgKiBsaXN0IG9mIG9wdGlvbnMgKGxpbWl0ZWQgYXMgbm9ybWFsIGJ5IHR5cGVhaGVhZE9wdGlvbnNMaW1pdClcbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE1pbkxlbmd0aDogbnVtYmVyID0gdm9pZCAwO1xuICAvKiogc2V0cyB1c2UgYWRhcHRpdmUgcG9zaXRpb24gKi9cbiAgQElucHV0KCkgYWRhcHRpdmVQb3NpdGlvbjogYm9vbGVhbjtcbiAgLyoqIHR1cm4gb24vb2ZmIGFuaW1hdGlvbiAqL1xuICBASW5wdXQoKSBpc0FuaW1hdGVkID0gZmFsc2U7XG4gIC8qKiBtaW5pbWFsIHdhaXQgdGltZSBhZnRlciBsYXN0IGNoYXJhY3RlciB0eXBlZCBiZWZvcmUgdHlwZWFoZWFkIGtpY2tzLWluICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFdhaXRNczogbnVtYmVyO1xuICAvKiogbWF4aW11bSBsZW5ndGggb2Ygb3B0aW9ucyBpdGVtcyBsaXN0LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAyMCAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25zTGltaXQ6IG51bWJlcjtcbiAgLyoqIHdoZW4gb3B0aW9ucyBzb3VyY2UgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdGhlIG5hbWUgb2YgZmllbGRcbiAgICogdGhhdCBjb250YWlucyB0aGUgb3B0aW9ucyB2YWx1ZSwgd2UgdXNlIGFycmF5IGl0ZW0gYXMgb3B0aW9uIGluIGNhc2VcbiAgICogb2YgdGhpcyBmaWVsZCBpcyBtaXNzaW5nLiBTdXBwb3J0cyBuZXN0ZWQgcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE9wdGlvbkZpZWxkOiBzdHJpbmc7XG4gIC8qKiB3aGVuIG9wdGlvbnMgc291cmNlIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHRoZSBuYW1lIG9mIGZpZWxkIHRoYXRcbiAgICogY29udGFpbnMgdGhlIGdyb3VwIHZhbHVlLCBtYXRjaGVzIGFyZSBncm91cGVkIGJ5IHRoaXMgZmllbGQgd2hlbiBzZXQuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRHcm91cEZpZWxkOiBzdHJpbmc7XG4gIC8qKiBVc2VkIHRvIHNwZWNpZnkgYSBjdXN0b20gb3JkZXIgb2YgbWF0Y2hlcy4gV2hlbiBvcHRpb25zIHNvdXJjZSBpcyBhbiBhcnJheSBvZiBvYmplY3RzXG4gICAqIGEgZmllbGQgZm9yIHNvcnRpbmcgaGFzIHRvIGJlIHNldCB1cC4gSW4gY2FzZSBvZiBvcHRpb25zIHNvdXJjZSBpcyBhbiBhcnJheSBvZiBzdHJpbmcsXG4gICAqIGEgZmllbGQgZm9yIHNvcnRpbmcgaXMgYWJzZW50LiBUaGUgb3JkZXJpbmcgZGlyZWN0aW9uIGNvdWxkIGJlIGNoYW5nZWQgdG8gYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRPcmRlckJ5OiBUeXBlYWhlYWRPcmRlcjtcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSBvZiB0eXBlYWhlYWQgYXR0cmlidXRlIGlzIE9ic2VydmFibGUgb2YgYXJyYXkuXG4gICAqIElmIHRydWUgLSBsb2FkaW5nIG9mIG9wdGlvbnMgd2lsbCBiZSBhc3luYywgb3RoZXJ3aXNlIC0gc3luYy5cbiAgICogdHJ1ZSBtYWtlIHNlbnNlIGlmIG9wdGlvbnMgYXJyYXkgaXMgbGFyZ2UuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRBc3luYzogYm9vbGVhbiA9IHZvaWQgMDtcbiAgLyoqIG1hdGNoIGxhdGluIHN5bWJvbHMuXG4gICAqIElmIHRydWUgdGhlIHdvcmQgc8O6cGVyIHdvdWxkIG1hdGNoIHN1cGVyIGFuZCB2aWNlIHZlcnNhLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkTGF0aW5pemUgPSB0cnVlO1xuICAvKiogQ2FuIGJlIHVzZSB0byBzZWFyY2ggd29yZHMgYnkgaW5zZXJ0aW5nIGEgc2luZ2xlIHdoaXRlIHNwYWNlIGJldHdlZW4gZWFjaCBjaGFyYWN0ZXJzXG4gICAqICBmb3IgZXhhbXBsZSAnQyBhIGwgaSBmIG8gciBuIGkgYScgd2lsbCBtYXRjaCAnQ2FsaWZvcm5pYScuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRTaW5nbGVXb3JkcyA9IHRydWU7XG4gIC8qKiBzaG91bGQgYmUgdXNlZCBvbmx5IGluIGNhc2UgdHlwZWFoZWFkU2luZ2xlV29yZHMgYXR0cmlidXRlIGlzIHRydWUuXG4gICAqIFNldHMgdGhlIHdvcmQgZGVsaW1pdGVyIHRvIGJyZWFrIHdvcmRzLiBEZWZhdWx0cyB0byBzcGFjZS5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzID0gJyAnO1xuICAvKiogQ2FuIGJlIHVzZWQgdG8gY29uZHVjdCBhIHNlYXJjaCBvZiBtdWx0aXBsZSBpdGVtcyBhbmQgaGF2ZSBzdWdnZXN0aW9uIG5vdCBmb3IgdGhlXG4gICAqIHdob2xlIHZhbHVlIG9mIHRoZSBpbnB1dCBidXQgZm9yIHRoZSB2YWx1ZSB0aGF0IGNvbWVzIGFmdGVyIGEgZGVsaW1pdGVyIHByb3ZpZGVkIHZpYVxuICAgKiB0eXBlYWhlYWRNdWx0aXBsZVNlYXJjaERlbGltaXRlcnMgYXR0cmlidXRlLiBUaGlzIG9wdGlvbiBjYW4gb25seSBiZSB1c2VkIHRvZ2V0aGVyIHdpdGhcbiAgICogdHlwZWFoZWFkU2luZ2xlV29yZHMgb3B0aW9uIGlmIHR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzIGFuZCB0eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXG4gICAqIGFyZSBkaWZmZXJlbnQgZnJvbSB0eXBlYWhlYWRNdWx0aXBsZVNlYXJjaERlbGltaXRlcnMgdG8gYXZvaWQgY29uZmxpY3QgaW4gZGV0ZXJtaW5pbmdcbiAgICogd2hlbiB0byBkZWxpbWl0IG11bHRpcGxlIHNlYXJjaGVzIGFuZCB3aGVuIGEgc2luZ2xlIHdvcmQuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRNdWx0aXBsZVNlYXJjaDogYm9vbGVhbiA9IHZvaWQgMDtcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSB0eXBlYWhlYWRNdWx0aXBsZVNlYXJjaCBhdHRyaWJ1dGUgaXMgdHJ1ZS5cbiAgICogU2V0cyB0aGUgbXVsdGlwbGUgc2VhcmNoIGRlbGltaXRlciB0byBrbm93IHdoZW4gdG8gc3RhcnQgYSBuZXcgc2VhcmNoLiBEZWZhdWx0cyB0byBjb21tYS5cbiAgICogSWYgc3BhY2UgbmVlZHMgdG8gYmUgdXNlZCwgdGhlbiBleHBsaWNpdGx5IHNldCB0eXBlYWhlYWRXb3JkRGVsaW1pdGVycyB0byBzb21ldGhpbmcgZWxzZSB0aGFuIHNwYWNlXG4gICAqIGJlY2F1c2Ugc3BhY2UgaXMgdXNlZCBieSBkZWZhdWx0IE9SIHNldCB0eXBlYWhlYWRTaW5nbGVXb3JkcyBhdHRyaWJ1dGUgdG8gZmFsc2UgaWYgeW91IGRvbid0IG5lZWRcbiAgICogdG8gdXNlIGl0IHRvZ2V0aGVyIHdpdGggbXVsdGlwbGUgc2VhcmNoLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkTXVsdGlwbGVTZWFyY2hEZWxpbWl0ZXJzID0gJywnO1xuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIHR5cGVhaGVhZFNpbmdsZVdvcmRzIGF0dHJpYnV0ZSBpcyB0cnVlLlxuICAgKiBTZXRzIHRoZSB3b3JkIGRlbGltaXRlciB0byBtYXRjaCBleGFjdCBwaHJhc2UuXG4gICAqIERlZmF1bHRzIHRvIHNpbXBsZSBhbmQgZG91YmxlIHF1b3Rlcy5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFBocmFzZURlbGltaXRlcnMgPSAnXFwnXCInO1xuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIGl0ZW0gdGVtcGxhdGUuXG4gICAqIFRlbXBsYXRlIHZhcmlhYmxlcyBleHBvc2VkIGFyZSBjYWxsZWQgaXRlbSBhbmQgaW5kZXg7XG4gICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPFR5cGVhaGVhZE9wdGlvbkl0ZW1Db250ZXh0PjtcbiAgLyoqIHVzZWQgdG8gc3BlY2lmeSBhIGN1c3RvbSBvcHRpb25zIGxpc3QgdGVtcGxhdGUuXG4gICAqIFRlbXBsYXRlIHZhcmlhYmxlczogbWF0Y2hlcywgaXRlbVRlbXBsYXRlLCBxdWVyeVxuICAgKi9cbiAgQElucHV0KCkgb3B0aW9uc0xpc3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8VHlwZWFoZWFkT3B0aW9uTGlzdENvbnRleHQ+O1xuICAvKiogc3BlY2lmaWVzIGlmIHR5cGVhaGVhZCBpcyBzY3JvbGxhYmxlICAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRTY3JvbGxhYmxlID0gZmFsc2U7XG4gIC8qKiBzcGVjaWZpZXMgbnVtYmVyIG9mIG9wdGlvbnMgdG8gc2hvdyBpbiBzY3JvbGwgdmlldyAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgPSA1O1xuICAvKiogdXNlZCB0byBoaWRlIHJlc3VsdCBvbiBibHVyICovXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEhpZGVSZXN1bHRzT25CbHVyOiBib29sZWFuO1xuICAvKiogZmlyZWQgd2hlbiBhbiBvcHRpb25zIGxpc3Qgd2FzIG9wZW5lZCBhbmQgdGhlIHVzZXIgY2xpY2tlZCBUYWJcbiAgICogSWYgYSB2YWx1ZSBlcXVhbCB0cnVlLCBpdCB3aWxsIGJlIGNob3NlbiBmaXJzdCBvciBhY3RpdmUgaXRlbSBpbiB0aGUgbGlzdFxuICAgKiBJZiB2YWx1ZSBlcXVhbCBmYWxzZSwgaXQgd2lsbCBiZSBjaG9zZW4gYW4gYWN0aXZlIGl0ZW0gaW4gdGhlIGxpc3Qgb3Igbm90aGluZ1xuICAgKi9cbiAgQElucHV0KCkgdHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtID0gdHJ1ZTtcbiAgLyoqIG1ha2VzIGFjdGl2ZSBmaXJzdCBpdGVtIGluIGEgbGlzdCAqL1xuICBASW5wdXQoKSB0eXBlYWhlYWRJc0ZpcnN0SXRlbUFjdGl2ZSA9IHRydWU7XG4gIC8qKiBmaXJlZCB3aGVuICdidXN5JyBzdGF0ZSBvZiB0aGlzIGNvbXBvbmVudCB3YXMgY2hhbmdlZCxcbiAgICogZmlyZWQgb24gYXN5bmMgbW9kZSBvbmx5LCByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRMb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAvKiogZmlyZWQgb24gZXZlcnkga2V5IGV2ZW50IGFuZCByZXR1cm5zIHRydWVcbiAgICogaW4gY2FzZSBvZiBtYXRjaGVzIGFyZSBub3QgZGV0ZWN0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWROb1Jlc3VsdHMgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIC8qKiBmaXJlZCB3aGVuIG9wdGlvbiB3YXMgc2VsZWN0ZWQsIHJldHVybiBvYmplY3Qgd2l0aCBkYXRhIG9mIHRoaXMgb3B0aW9uICovXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRPblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8VHlwZWFoZWFkTWF0Y2g+KCk7XG4gIC8qKiBmaXJlZCB3aGVuIGJsdXIgZXZlbnQgb2NjdXJzLiByZXR1cm5zIHRoZSBhY3RpdmUgaXRlbSAqL1xuICBAT3V0cHV0KCkgdHlwZWFoZWFkT25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxUeXBlYWhlYWRNYXRjaD4oKTtcblxuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0eXBlYWhlYWQgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XG5cbiAgLyoqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkIHVwd2FyZHMgKi9cbiAgQElucHV0KCkgZHJvcHVwID0gZmFsc2U7XG5cbiAgLy8gbm90IHlldCBpbXBsZW1lbnRlZFxuICAvKiogaWYgZmFsc2UgcmVzdHJpY3QgbW9kZWwgdmFsdWVzIHRvIHRoZSBvbmVzIHNlbGVjdGVkIGZyb20gdGhlIHBvcHVwIG9ubHkgd2lsbCBiZSBwcm92aWRlZCAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkRWRpdGFibGU6Ym9vbGVhbjtcbiAgLyoqIGlmIGZhbHNlIHRoZSBmaXJzdCBtYXRjaCBhdXRvbWF0aWNhbGx5IHdpbGwgbm90IGJlIGZvY3VzZWQgYXMgeW91IHR5cGUgKi9cbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZEZvY3VzRmlyc3Q6Ym9vbGVhbjtcbiAgLyoqIGZvcm1hdCB0aGUgbmctbW9kZWwgcmVzdWx0IGFmdGVyIHNlbGVjdGlvbiAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkSW5wdXRGb3JtYXR0ZXI6YW55O1xuICAvKiogaWYgdHJ1ZSBhdXRvbWF0aWNhbGx5IHNlbGVjdCBhbiBpdGVtIHdoZW4gdGhlcmUgaXMgb25lIG9wdGlvbiB0aGF0IGV4YWN0bHkgbWF0Y2hlcyB0aGUgdXNlciBpbnB1dCAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkU2VsZWN0T25FeGFjdDpib29sZWFuO1xuICAvKiogIGlmIHRydWUgc2VsZWN0IHRoZSBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgbWF0Y2ggb24gYmx1ciAqL1xuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkU2VsZWN0T25CbHVyOmJvb2xlYW47XG4gIC8qKiAgaWYgZmFsc2UgZG9uJ3QgZm9jdXMgdGhlIGlucHV0IGVsZW1lbnQgdGhlIHR5cGVhaGVhZCBkaXJlY3RpdmUgaXMgYXNzb2NpYXRlZCB3aXRoIG9uIHNlbGVjdGlvbiAqL1xuICAgIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRGb2N1c09uU2VsZWN0OmJvb2xlYW47XG5cbiAgYWN0aXZlRGVzY2VuZGFudDogc3RyaW5nO1xuICBpc09wZW4gPSBmYWxzZTtcbiAgbGlzdCA9ICdsaXN0JztcbiAgX2NvbnRhaW5lcjogVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50O1xuICBpc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gZmFsc2U7XG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xuICBjYW5jZWxSZXF1ZXN0T25Gb2N1c0xvc3QgPSBmYWxzZTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByb3RlY3RlZCBrZXlVcEV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByb3RlY3RlZCBfbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSA9IFtdO1xuICBwcm90ZWN0ZWQgcGxhY2VtZW50ID0gJ2JvdHRvbSBsZWZ0JztcblxuICBwcml2YXRlIF90eXBlYWhlYWQ6IENvbXBvbmVudExvYWRlcjxUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ+O1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF9vdXRzaWRlQ2xpY2tMaXN0ZW5lcjogRnVuY3Rpb247XG4gIHByaXZhdGUgX2FsbEVudGVyZWRWYWx1ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICBjb25maWc6IFR5cGVhaGVhZENvbmZpZyxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7XG5cbiAgICB0aGlzLl90eXBlYWhlYWQgPSBjaXMuY3JlYXRlTG9hZGVyPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD4oXG4gICAgICBlbGVtZW50LFxuICAgICAgdmlld0NvbnRhaW5lclJlZixcbiAgICAgIHJlbmRlcmVyXG4gICAgKVxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBUeXBlYWhlYWRDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsXG4gICAgICB7XG4gICAgICAgIHR5cGVhaGVhZEhpZGVSZXN1bHRzT25CbHVyOiBjb25maWcuaGlkZVJlc3VsdHNPbkJsdXIsXG4gICAgICAgIGNhbmNlbFJlcXVlc3RPbkZvY3VzTG9zdDogY29uZmlnLmNhbmNlbFJlcXVlc3RPbkZvY3VzTG9zdCxcbiAgICAgICAgdHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtOiBjb25maWcuc2VsZWN0Rmlyc3RJdGVtLFxuICAgICAgICB0eXBlYWhlYWRJc0ZpcnN0SXRlbUFjdGl2ZTogY29uZmlnLmlzRmlyc3RJdGVtQWN0aXZlLFxuICAgICAgICB0eXBlYWhlYWRNaW5MZW5ndGg6IGNvbmZpZy5taW5MZW5ndGgsXG4gICAgICAgIGFkYXB0aXZlUG9zaXRpb246IGNvbmZpZy5hZGFwdGl2ZVBvc2l0aW9uLFxuICAgICAgICBpc0FuaW1hdGVkOiBjb25maWcuaXNBbmltYXRlZFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCA9IHRoaXMudHlwZWFoZWFkT3B0aW9uc0xpbWl0IHx8IDIwO1xuXG4gICAgdGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPVxuICAgICAgdGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPT09IHZvaWQgMCA/IDEgOiB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aDtcblxuICAgIHRoaXMudHlwZWFoZWFkV2FpdE1zID0gdGhpcy50eXBlYWhlYWRXYWl0TXMgfHwgMDtcblxuICAgIC8vIGFzeW5jIHNob3VsZCBiZSBmYWxzZSBpbiBjYXNlIG9mIGFycmF5XG4gICAgaWYgKHRoaXMudHlwZWFoZWFkQXN5bmMgPT09IHVuZGVmaW5lZCAmJiAhKGlzT2JzZXJ2YWJsZSh0aGlzLnR5cGVhaGVhZCkpKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZEFzeW5jID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh0aGlzLnR5cGVhaGVhZCkpIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkQXN5bmMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnR5cGVhaGVhZEFzeW5jKSB7XG4gICAgICB0aGlzLmFzeW5jQWN0aW9ucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN5bmNBY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0RlbGltaXRlcnNDb25mbGljdCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9uSW5wdXQoZTogYW55KTogdm9pZCB7XG4gICAgLy8gRm9yIGA8aW5wdXQ+YHMsIHVzZSB0aGUgYHZhbHVlYCBwcm9wZXJ0eS4gRm9yIG90aGVycyB0aGF0IGRvbid0IGhhdmUgYVxuICAgIC8vIGB2YWx1ZWAgKHN1Y2ggYXMgYDxzcGFuIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj5gKSwgdXNlIGVpdGhlclxuICAgIC8vIGB0ZXh0Q29udGVudGAgb3IgYGlubmVyVGV4dGAgKGRlcGVuZGluZyBvbiB3aGljaCBvbmUgaXMgc3VwcG9ydGVkLCBpLmUuXG4gICAgLy8gRmlyZWZveCBvciBJRSkuXG4gICAgY29uc3QgdmFsdWUgPVxuICAgICAgZS50YXJnZXQudmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIDogZS50YXJnZXQudGV4dENvbnRlbnQgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGUudGFyZ2V0LnRleHRDb250ZW50XG4gICAgICAgIDogZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRyaW0oKS5sZW5ndGggPj0gdGhpcy50eXBlYWhlYWRNaW5MZW5ndGgpIHtcbiAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlci5lbWl0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy50eXBlYWhlYWROb1Jlc3VsdHMuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gIG9uQ2hhbmdlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgLy8gZXNjXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHVwXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzggfHwgZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnByZXZBY3RpdmVNYXRjaCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZG93blxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQwIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLm5leHRBY3RpdmVNYXRjaCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZW50ZXJcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnNlbGVjdEFjdGl2ZU1hdGNoKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAvLyBhZGQgc2V0VGltZW91dCB0byBmaXggaXNzdWUgIzUyNTFcbiAgICAvLyB0byBnZXQgYW5kIGVtaXQgdXBkYXRlZCB2YWx1ZSBpZiBpdCdzIGNoYW5nZWQgb24gZm9jdXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdCh0cnVlKTtcbiAgICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlci5lbWl0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyICYmICF0aGlzLl9jb250YWluZXIuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLnR5cGVhaGVhZE9uQmx1ci5lbWl0KHRoaXMuX2NvbnRhaW5lci5hY3RpdmUpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jb250YWluZXIgJiYgdGhpcy5fbWF0Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLnR5cGVhaGVhZE9uQmx1ci5lbWl0KG5ldyBUeXBlYWhlYWRNYXRjaChcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlLFxuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUsXG4gICAgICBmYWxzZSkpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBubyBjb250YWluZXIgLSBubyBwcm9ibGVtc1xuICAgIGlmICghdGhpcy5fY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5IHx8IGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIHRoaXMub25CbHVyKCk7XG4gICAgfVxuXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5IHx8IGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMudHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIuc2VsZWN0QWN0aXZlTWF0Y2godGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU1vZGVsKG1hdGNoOiBUeXBlYWhlYWRNYXRjaCk6IHZvaWQge1xuICAgIGxldCB2YWx1ZVN0cjogc3RyaW5nO1xuICAgIGlmICh0aGlzLnR5cGVhaGVhZE11bHRpcGxlU2VhcmNoKSB7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9hbGxFbnRlcmVkVmFsdWUuc3BsaXQobmV3IFJlZ0V4cChgKFske3RoaXMudHlwZWFoZWFkTXVsdGlwbGVTZWFyY2hEZWxpbWl0ZXJzfV0rKWApKTtcbiAgICAgIHRoaXMuX2FsbEVudGVyZWRWYWx1ZSA9IHRva2Vucy5zbGljZSgwLCB0b2tlbnMubGVuZ3RoIC0gMSkuY29uY2F0KG1hdGNoLnZhbHVlKS5qb2luKCcnKTtcbiAgICAgIHZhbHVlU3RyID0gdGhpcy5fYWxsRW50ZXJlZFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZVN0ciA9IG1hdGNoLnZhbHVlO1xuICAgIH1cbiAgICB0aGlzLm5nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh2YWx1ZVN0cik7XG4gICAgKHRoaXMubmdDb250cm9sLmNvbnRyb2wpLnNldFZhbHVlKHZhbHVlU3RyKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIGdldCBtYXRjaGVzKCk6IFR5cGVhaGVhZE1hdGNoW10ge1xuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLl90eXBlYWhlYWRcbiAgICAgIC5hdHRhY2goVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiBgJHt0aGlzLmRyb3B1cCA/ICd0b3AnIDogJ2JvdHRvbSd9IGxlZnRgfSlcbiAgICAgIC5zaG93KHtcbiAgICAgICAgdHlwZWFoZWFkUmVmOiB0aGlzLFxuICAgICAgICBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LFxuICAgICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgICBkcm9wdXA6IHRoaXMuZHJvcHVwXG4gICAgICB9KTtcblxuICAgIHRoaXMuX291dHNpZGVDbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gMCAmJiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy50eXBlYWhlYWRIaWRlUmVzdWx0c09uQmx1ciB8fCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMub25PdXRzaWRlQ2xpY2soKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX3R5cGVhaGVhZC5pbnN0YW5jZTtcbiAgICB0aGlzLl9jb250YWluZXIucGFyZW50ID0gdGhpcztcbiAgICAvLyBUaGlzIGltcHJvdmVzIHRoZSBzcGVlZCBhcyBpdCB3b24ndCBoYXZlIHRvIGJlIGRvbmUgZm9yIGVhY2ggbGlzdCBpdGVtXG5cbiAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZSh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxuICAgICAgOiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdGhpcy5fY29udGFpbmVyLnF1ZXJ5ID0gdGhpcy50b2tlbml6ZVF1ZXJ5KG5vcm1hbGl6ZWRRdWVyeSk7XG5cbiAgICB0aGlzLl9jb250YWluZXIubWF0Y2hlcyA9IHRoaXMuX21hdGNoZXM7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblxuICAgIHRoaXMuX2NvbnRhaW5lci5hY3RpdmVDaGFuZ2VFdmVudC5zdWJzY3JpYmUoKGFjdGl2ZUlkOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlRGVzY2VuZGFudCA9IGFjdGl2ZUlkO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdHlwZWFoZWFkLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuX3R5cGVhaGVhZC5oaWRlKCk7XG4gICAgICB0aGlzLl9vdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBvbk91dHNpZGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyICYmICF0aGlzLl9jb250YWluZXIuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjbGVhbiB1cCBzdWJzY3JpcHRpb25zXG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX3R5cGVhaGVhZC5kaXNwb3NlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXJcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lPHN0cmluZz4odGhpcy50eXBlYWhlYWRXYWl0TXMpLFxuICAgICAgICAgIHRhcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hbGxFbnRlcmVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy50eXBlYWhlYWQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgobWF0Y2hlczogVHlwZWFoZWFkT3B0aW9uW10pID0+IHtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXMpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3luY0FjdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlclxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWU8c3RyaW5nPih0aGlzLnR5cGVhaGVhZFdhaXRNcyksXG4gICAgICAgICAgbWVyZ2VNYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FsbEVudGVyZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gdGhpcy5ub3JtYWxpemVRdWVyeSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmcm9tKHRoaXMudHlwZWFoZWFkKVxuICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKG9wdGlvbjogVHlwZWFoZWFkT3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uICYmIHRoaXMudGVzdE1hdGNoKHRoaXMubm9ybWFsaXplT3B0aW9uKG9wdGlvbiksIG5vcm1hbGl6ZWRRdWVyeSk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdG9BcnJheSgpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChtYXRjaGVzOiBUeXBlYWhlYWRPcHRpb25bXSkgPT4ge1xuICAgICAgICAgIHRoaXMuZmluYWxpemVBc3luY0NhbGwobWF0Y2hlcyk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBub3JtYWxpemVPcHRpb24ob3B0aW9uOiBUeXBlYWhlYWRPcHRpb24pOiBzdHJpbmcge1xuICAgIGNvbnN0IG9wdGlvblZhbHVlOiBzdHJpbmcgPSBnZXRWYWx1ZUZyb21PYmplY3QoXG4gICAgICBvcHRpb24sXG4gICAgICB0aGlzLnR5cGVhaGVhZE9wdGlvbkZpZWxkXG4gICAgKTtcbiAgICBjb25zdCBub3JtYWxpemVkT3B0aW9uID0gdGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZShvcHRpb25WYWx1ZSlcbiAgICAgIDogb3B0aW9uVmFsdWU7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZE9wdGlvbi50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHRva2VuaXplUXVlcnkoY3VycmVudFF1ZXJ5OiBzdHJpbmcgfCBzdHJpbmdbXSk6IHN0cmluZyB8IHN0cmluZ1tdIHtcblxuICAgIGxldCBxdWVyeSA9IGN1cnJlbnRRdWVyeTtcbiAgICBpZiAodGhpcy50eXBlYWhlYWRNdWx0aXBsZVNlYXJjaCAmJiB0aGlzLnR5cGVhaGVhZFNpbmdsZVdvcmRzKSB7XG4gICAgICBpZiAoIXRoaXMuaGF2ZUNvbW1vbkNoYXJhY3RlcnMoYCR7dGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzfSR7dGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVyc31gLFxuICAgICAgICB0aGlzLnR5cGVhaGVhZE11bHRpcGxlU2VhcmNoRGVsaW1pdGVycykpIHtcbiAgICAgICAgLy8gc2luZ2xlIHdvcmRzIGFuZCBtdWx0aXBsZSBzZWFyY2ggZGVsaW1pdGVycyBhcmUgZGlmZmVyZW50LCBjYW4gYmUgdXNlZCB0b2dldGhlclxuICAgICAgICBxdWVyeSA9IHRva2VuaXplKFxuICAgICAgICAgIHF1ZXJ5IGFzIHN0cmluZyxcbiAgICAgICAgICB0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzLFxuICAgICAgICAgIHRoaXMudHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVycyxcbiAgICAgICAgICB0aGlzLnR5cGVhaGVhZE11bHRpcGxlU2VhcmNoRGVsaW1pdGVyc1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkcykge1xuICAgICAgcXVlcnkgPSB0b2tlbml6ZShcbiAgICAgICAgcXVlcnkgYXMgc3RyaW5nLFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzLFxuICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG11bHRpcGxlIHNlYXJjaGVzXG4gICAgICBxdWVyeSA9IHRva2VuaXplKFxuICAgICAgICBxdWVyeSBhcyBzdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMudHlwZWFoZWFkTXVsdGlwbGVTZWFyY2hEZWxpbWl0ZXJzXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIHByb3RlY3RlZCBub3JtYWxpemVRdWVyeSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIC8vIElmIHNpbmdsZVdvcmRzLCBicmVhayBtb2RlbCBoZXJlIHRvIG5vdCBiZSBkb2luZyBleHRyYSB3b3JrIG9uIGVhY2ggaXRlcmF0aW9uXG4gICAgbGV0IG5vcm1hbGl6ZWRRdWVyeTogc3RyaW5nIHwgc3RyaW5nW10gPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxuICAgICAgPyBsYXRpbml6ZSh2YWx1ZSlcbiAgICAgIDogdmFsdWUpXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBub3JtYWxpemVkUXVlcnkgPSB0aGlzLnRva2VuaXplUXVlcnkobm9ybWFsaXplZFF1ZXJ5KTtcblxuICAgIHJldHVybiBub3JtYWxpemVkUXVlcnk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdGVzdE1hdGNoKG1hdGNoOiBzdHJpbmcsIHRlc3Q6IHN0cmluZ1tdIHwgc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHNwYWNlTGVuZ3RoOiBudW1iZXI7XG5cbiAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgICBzcGFjZUxlbmd0aCA9IHRlc3QubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGFjZUxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0ZXN0W2ldLmxlbmd0aCA+IDAgJiYgbWF0Y2guaW5kZXhPZih0ZXN0W2ldKSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoLmluZGV4T2YodGVzdCkgPj0gMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaW5hbGl6ZUFzeW5jQ2FsbChtYXRjaGVzOiBUeXBlYWhlYWRPcHRpb25bXSk6IHZvaWQge1xuICAgIHRoaXMucHJlcGFyZU1hdGNoZXMobWF0Y2hlcyB8fCBbXSk7XG5cbiAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdChmYWxzZSk7XG4gICAgdGhpcy50eXBlYWhlYWROb1Jlc3VsdHMuZW1pdCghdGhpcy5oYXNNYXRjaGVzKCkpO1xuXG4gICAgaWYgKCF0aGlzLmhhc01hdGNoZXMoKSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkICYmIHRoaXMuY2FuY2VsUmVxdWVzdE9uRm9jdXNMb3N0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgLy8gZml4OiByZW1vdmUgdXNhZ2Ugb2YgbmdDb250cm9sIGludGVybmFsc1xuICAgICAgY29uc3QgX2NvbnRyb2xWYWx1ZSA9ICh0aGlzLnR5cGVhaGVhZExhdGluaXplXG4gICAgICAgID8gbGF0aW5pemUodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSlcbiAgICAgICAgOiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKSB8fCAnJztcblxuICAgICAgLy8gVGhpcyBpbXByb3ZlcyB0aGUgc3BlZWQgYXMgaXQgd29uJ3QgaGF2ZSB0byBiZSBkb25lIGZvciBlYWNoIGxpc3QgaXRlbVxuICAgICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gX2NvbnRyb2xWYWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeSA9IHRoaXMudG9rZW5pemVRdWVyeShub3JtYWxpemVkUXVlcnkpO1xuICAgICAgdGhpcy5fY29udGFpbmVyLm1hdGNoZXMgPSB0aGlzLl9tYXRjaGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJlcGFyZU1hdGNoZXMob3B0aW9uczogVHlwZWFoZWFkT3B0aW9uW10pOiB2b2lkIHtcbiAgICBjb25zdCBsaW1pdGVkID0gb3B0aW9ucy5zbGljZSgwLCB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCk7XG4gICAgY29uc3Qgc29ydGVkID0gIXRoaXMudHlwZWFoZWFkT3JkZXJCeSA/IGxpbWl0ZWQgOiB0aGlzLm9yZGVyTWF0Y2hlcyhsaW1pdGVkKTtcblxuICAgIGlmICh0aGlzLnR5cGVhaGVhZEdyb3VwRmllbGQpIHtcbiAgICAgIGxldCBtYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdID0gW107XG5cbiAgICAgIC8vIGV4dHJhY3QgYWxsIGdyb3VwIG5hbWVzXG4gICAgICBjb25zdCBncm91cHMgPSBzb3J0ZWRcbiAgICAgICAgLm1hcCgob3B0aW9uOiBUeXBlYWhlYWRNYXRjaCkgPT5cbiAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZEdyb3VwRmllbGQpXG4gICAgICAgIClcbiAgICAgICAgLmZpbHRlcigodjogc3RyaW5nLCBpOiBudW1iZXIsIGE6IHN0cmluZ1tdKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xuXG4gICAgICBncm91cHMuZm9yRWFjaCgoZ3JvdXA6IHN0cmluZykgPT4ge1xuICAgICAgICAvLyBhZGQgZ3JvdXAgaGVhZGVyIHRvIGFycmF5IG9mIG1hdGNoZXNcbiAgICAgICAgbWF0Y2hlcy5wdXNoKG5ldyBUeXBlYWhlYWRNYXRjaChncm91cCwgZ3JvdXAsIHRydWUpKTtcblxuICAgICAgICAvLyBhZGQgZWFjaCBpdGVtIG9mIGdyb3VwIHRvIGFycmF5IG9mIG1hdGNoZXNcbiAgICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMuY29uY2F0KFxuICAgICAgICAgIHNvcnRlZFxuICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uOiBUeXBlYWhlYWRPcHRpb24pID0+XG4gICAgICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkR3JvdXBGaWVsZCkgPT09IGdyb3VwXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAubWFwKChvcHRpb246IFR5cGVhaGVhZE9wdGlvbikgPT5cbiAgICAgICAgICAgICAgbmV3IFR5cGVhaGVhZE1hdGNoKFxuICAgICAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZE9wdGlvbkZpZWxkKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fbWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hdGNoZXMgPSBzb3J0ZWQubWFwKFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIChvcHRpb246IGFueSkgPT5cbiAgICAgICAgICBuZXcgVHlwZWFoZWFkTWF0Y2goXG4gICAgICAgICAgICBvcHRpb24sXG4gICAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZE9wdGlvbkZpZWxkKVxuICAgICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG9yZGVyTWF0Y2hlcyhvcHRpb25zOiBUeXBlYWhlYWRPcHRpb25bXSk6IFR5cGVhaGVhZE9wdGlvbltdIHtcbiAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBpZiAodGhpcy50eXBlYWhlYWRPcmRlckJ5ICE9PSBudWxsXG4gICAgICAmJiB0aGlzLnR5cGVhaGVhZE9yZGVyQnkgIT09IHVuZGVmaW5lZFxuICAgICAgJiYgdHlwZW9mIHRoaXMudHlwZWFoZWFkT3JkZXJCeSA9PT0gJ29iamVjdCdcbiAgICAgICYmIE9iamVjdC5rZXlzKHRoaXMudHlwZWFoZWFkT3JkZXJCeSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignRmllbGQgYW5kIGRpcmVjdGlvbiBwcm9wZXJ0aWVzIGZvciB0eXBlYWhlYWRPcmRlckJ5IGhhdmUgdG8gYmUgc2V0IGFjY29yZGluZyB0byBkb2N1bWVudGF0aW9uIScpO1xuXG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBjb25zdCB7IGZpZWxkLCBkaXJlY3Rpb24gfSA9IHRoaXMudHlwZWFoZWFkT3JkZXJCeTtcblxuICAgIGlmICghZGlyZWN0aW9uIHx8ICEoZGlyZWN0aW9uID09PSAnYXNjJyB8fCBkaXJlY3Rpb24gPT09ICdkZXNjJykpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCd0eXBlYWhlYWRPcmRlckJ5IGRpcmVjdGlvbiBoYXMgdG8gZXF1YWwgXCJhc2NcIiBvciBcImRlc2NcIi4gUGxlYXNlIGZvbGxvdyB0aGUgZG9jdW1lbnRhdGlvbi4nKTtcblxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ2FzYycgPyBvcHRpb25zLnNvcnQoKSA6IG9wdGlvbnMuc29ydCgpLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoIWZpZWxkIHx8IHR5cGVvZiBmaWVsZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKCd0eXBlYWhlYWRPcmRlckJ5IGZpZWxkIGhhcyB0byBzZXQgYWNjb3JkaW5nIHRvIHRoZSBkb2N1bWVudGF0aW9uLicpO1xuXG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucy5zb3J0KChhOiBUeXBlYWhlYWRPcHRpb24sIGI6IFR5cGVhaGVhZE9wdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nQSA9IGdldFZhbHVlRnJvbU9iamVjdChhLCBmaWVsZCk7XG4gICAgICBjb25zdCBzdHJpbmdCID0gZ2V0VmFsdWVGcm9tT2JqZWN0KGIsIGZpZWxkKTtcblxuICAgICAgaWYgKHN0cmluZ0EgPCBzdHJpbmdCKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09ICdhc2MnID8gLTEgOiAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RyaW5nQSA+IHN0cmluZ0IpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ2FzYycgPyAxIDogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhc01hdGNoZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjaGVja0RlbGltaXRlcnNDb25mbGljdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50eXBlYWhlYWRNdWx0aXBsZVNlYXJjaCAmJiB0aGlzLnR5cGVhaGVhZFNpbmdsZVdvcmRzXG4gICAgICAmJiAodGhpcy5oYXZlQ29tbW9uQ2hhcmFjdGVycyhgJHt0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnN9JHt0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzfWAsXG4gICAgdGhpcy50eXBlYWhlYWRNdWx0aXBsZVNlYXJjaERlbGltaXRlcnMpKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERlbGltaXRlcnMgdXNlZCBpbiB0eXBlYWhlYWRNdWx0aXBsZVNlYXJjaERlbGltaXRlcnMgbXVzdCBiZSBkaWZmZXJlbnRcbiAgICAgICAgICBmcm9tIGRlbGltaXRlcnMgdXNlZCBpbiB0eXBlYWhlYWRXb3JkRGVsaW1pdGVycyAoY3VycmVudCB2YWx1ZTogJHt0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzfSkgYW5kXG4gICAgICAgICAgdHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVycyAoY3VycmVudCB2YWx1ZTogJHt0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnN9KS5cbiAgICAgICAgICBQbGVhc2UgcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb25gKTtcbiAgICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBoYXZlQ29tbW9uQ2hhcmFjdGVycyhzdHIxOiBzdHJpbmcsIHN0cjI6IHN0cmluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyMS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0cjEuY2hhckF0KGkpLmluZGV4T2Yoc3RyMikgPiAtMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==