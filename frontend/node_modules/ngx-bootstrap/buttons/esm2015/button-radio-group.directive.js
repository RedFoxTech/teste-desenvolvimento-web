/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, ContentChildren, Directive, forwardRef, HostBinding, HostListener, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonRadioDirective } from './button-radio.directive';
/** @type {?} */
export const RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => ButtonRadioGroupDirective)),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export class ButtonRadioGroupDirective {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.role = 'radiogroup';
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this.onChange(value);
    }
    /**
     * @return {?}
     */
    get tabindex() {
        if (this._disabled) {
            return null;
        }
        else {
            return 0;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        if (this.radioButtons) {
            this._disabled = disabled;
            this.radioButtons.forEach((/**
             * @param {?} buttons
             * @return {?}
             */
            buttons => {
                buttons.setDisabledState(disabled);
            }));
            this.cdr.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (this._disabled) {
            return;
        }
        /** @type {?} */
        const activeRadio = this.getActiveOrFocusedRadio();
        if (activeRadio) {
            activeRadio.focus();
        }
        else {
            /** @type {?} */
            const firstEnabled = this.radioButtons.find((/**
             * @param {?} r
             * @return {?}
             */
            r => !r.disabled));
            if (firstEnabled) {
                firstEnabled.focus();
            }
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectNext(event) {
        this.selectInDirection('next');
        event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectPrevious(event) {
        this.selectInDirection('previous');
        event.preventDefault();
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    selectInDirection(direction) {
        if (this._disabled) {
            return;
        }
        /**
         * @param {?} currentIndex
         * @param {?} buttonRadioDirectives
         * @return {?}
         */
        function nextIndex(currentIndex, buttonRadioDirectives) {
            /** @type {?} */
            const step = direction === 'next' ? 1 : -1;
            /** @type {?} */
            let calcIndex = (currentIndex + step) % buttonRadioDirectives.length;
            if (calcIndex < 0) {
                calcIndex = buttonRadioDirectives.length - 1;
            }
            return calcIndex;
        }
        /** @type {?} */
        const activeRadio = this.getActiveOrFocusedRadio();
        if (activeRadio) {
            /** @type {?} */
            const buttonRadioDirectives = this.radioButtons.toArray();
            /** @type {?} */
            const currentActiveIndex = buttonRadioDirectives.indexOf(activeRadio);
            for (let i = nextIndex(currentActiveIndex, buttonRadioDirectives); i !== currentActiveIndex; i = nextIndex(i, buttonRadioDirectives)) {
                if (buttonRadioDirectives[i].canToggle()) {
                    buttonRadioDirectives[i].toggleIfAllowed();
                    buttonRadioDirectives[i].focus();
                    break;
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    getActiveOrFocusedRadio() {
        return this.radioButtons.find((/**
         * @param {?} button
         * @return {?}
         */
        button => button.isActive)) || this.radioButtons.find((/**
         * @param {?} button
         * @return {?}
         */
        button => button.hasFocus));
    }
}
ButtonRadioGroupDirective.decorators = [
    { type: Directive, args: [{
                selector: '[btnRadioGroup]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
ButtonRadioGroupDirective.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ButtonRadioGroupDirective.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    radioButtons: [{ type: ContentChildren, args: [forwardRef((/**
                 * @return {?}
                 */
                () => ButtonRadioDirective)),] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    selectNext: [{ type: HostListener, args: ['keydown.ArrowRight', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowDown', ['$event'],] }],
    selectPrevious: [{ type: HostListener, args: ['keydown.ArrowLeft', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowUp', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    ButtonRadioGroupDirective.prototype.onChange;
    /** @type {?} */
    ButtonRadioGroupDirective.prototype.onTouched;
    /** @type {?} */
    ButtonRadioGroupDirective.prototype.role;
    /** @type {?} */
    ButtonRadioGroupDirective.prototype.radioButtons;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioGroupDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioGroupDirective.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioGroupDirective.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXJhZGlvLWdyb3VwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy8iLCJzb3VyY2VzIjpbImJ1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFFWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVoRSxNQUFNLE9BQU8sNEJBQTRCLEdBQWE7SUFDcEQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixFQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7O0FBVUQsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQThCcEMsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE3QjFDLGFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzlCLGNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBRUksU0FBSSxHQUFXLFlBQVksQ0FBQztJQTBCbEIsQ0FBQzs7OztJQXJCOUMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBb0I7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7O0lBTUQsSUFDSSxRQUFRO1FBQ1YsSUFBSSxJQUFJLENBQUMs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WUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDLGNBQzVDLFlBQVksU0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQXJGM0MsNkNBQThCOztJQUM5Qiw4Q0FBK0I7O0lBRS9CLHlDQUErRDs7SUFFL0QsaURBQzhDOzs7OztJQVU5QywyQ0FBOEI7Ozs7O0lBRTlCLDhDQUEyQjs7Ozs7SUFXZix3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIFByb3ZpZGVyLFxuICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCdXR0b25SYWRpb0RpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLXJhZGlvLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBBIGdyb3VwIG9mIHJhZGlvIGJ1dHRvbnMuXG4gKiBBIHZhbHVlIG9mIGEgc2VsZWN0ZWQgYnV0dG9uIGlzIGJvdW5kIHRvIGEgdmFyaWFibGUgc3BlY2lmaWVkIHZpYSBuZ01vZGVsLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnRuUmFkaW9Hcm91cF0nLFxuICBwcm92aWRlcnM6IFtSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcmVhZG9ubHkgcm9sZTogc3RyaW5nID0gJ3JhZGlvZ3JvdXAnO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBCdXR0b25SYWRpb0RpcmVjdGl2ZSkpXG4gIHJhZGlvQnV0dG9uczogUXVlcnlMaXN0PEJ1dHRvblJhZGlvRGlyZWN0aXZlPjtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nIHwgbnVsbDtcblxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBnZXQgdGFiaW5kZXgoKTogbnVsbCB8IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnJhZGlvQnV0dG9ucykge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIHRoaXMucmFkaW9CdXR0b25zLmZvckVhY2goYnV0dG9ucyA9PiB7XG4gICAgICAgIGJ1dHRvbnMuc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlUmFkaW8gPSB0aGlzLmdldEFjdGl2ZU9yRm9jdXNlZFJhZGlvKCk7XG4gICAgaWYgKGFjdGl2ZVJhZGlvKSB7XG4gICAgICBhY3RpdmVSYWRpby5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdEVuYWJsZWQgPSB0aGlzLnJhZGlvQnV0dG9ucy5maW5kKHIgPT4gIXIuZGlzYWJsZWQpO1xuICAgICAgaWYgKGZpcnN0RW5hYmxlZCkge1xuICAgICAgICBmaXJzdEVuYWJsZWQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgb25CbHVyKCkge1xuICAgIGlmICh0aGlzLm9uVG91Y2hlZCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFycm93UmlnaHQnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFycm93RG93bicsIFsnJGV2ZW50J10pXG4gIHNlbGVjdE5leHQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLnNlbGVjdEluRGlyZWN0aW9uKCduZXh0Jyk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uQXJyb3dMZWZ0JywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BcnJvd1VwJywgWyckZXZlbnQnXSlcbiAgc2VsZWN0UHJldmlvdXMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLnNlbGVjdEluRGlyZWN0aW9uKCdwcmV2aW91cycpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RJbkRpcmVjdGlvbihkaXJlY3Rpb246ICduZXh0JyB8ICdwcmV2aW91cycpIHtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZnVuY3Rpb24gbmV4dEluZGV4KGN1cnJlbnRJbmRleDogbnVtYmVyLCBidXR0b25SYWRpb0RpcmVjdGl2ZXM6IEJ1dHRvblJhZGlvRGlyZWN0aXZlW10pIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBkaXJlY3Rpb24gPT09ICduZXh0JyA/IDEgOiAtMTtcbiAgICAgIGxldCBjYWxjSW5kZXggPSAoY3VycmVudEluZGV4ICsgc3RlcCkgJSBidXR0b25SYWRpb0RpcmVjdGl2ZXMubGVuZ3RoO1xuICAgICAgaWYgKGNhbGNJbmRleCA8IDApIHtcbiAgICAgICAgY2FsY0luZGV4ID0gYnV0dG9uUmFkaW9EaXJlY3RpdmVzLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWxjSW5kZXg7XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2ZVJhZGlvID0gdGhpcy5nZXRBY3RpdmVPckZvY3VzZWRSYWRpbygpO1xuXG4gICAgaWYgKGFjdGl2ZVJhZGlvKSB7XG4gICAgICBjb25zdCBidXR0b25SYWRpb0RpcmVjdGl2ZXMgPSB0aGlzLnJhZGlvQnV0dG9ucy50b0FycmF5KCk7XG4gICAgICBjb25zdCBjdXJyZW50QWN0aXZlSW5kZXggPSBidXR0b25SYWRpb0RpcmVjdGl2ZXMuaW5kZXhPZihhY3RpdmVSYWRpbyk7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgaSA9IG5leHRJbmRleChjdXJyZW50QWN0aXZlSW5kZXgsIGJ1dHRvblJhZGlvRGlyZWN0aXZlcyk7XG4gICAgICAgIGkgIT09IGN1cnJlbnRBY3RpdmVJbmRleDtcbiAgICAgICAgaSA9IG5leHRJbmRleChpLCBidXR0b25SYWRpb0RpcmVjdGl2ZXMpXG4gICAgICApIHtcbiAgICAgICAgaWYgKGJ1dHRvblJhZGlvRGlyZWN0aXZlc1tpXS5jYW5Ub2dnbGUoKSkge1xuICAgICAgICAgIGJ1dHRvblJhZGlvRGlyZWN0aXZlc1tpXS50b2dnbGVJZkFsbG93ZWQoKTtcbiAgICAgICAgICBidXR0b25SYWRpb0RpcmVjdGl2ZXNbaV0uZm9jdXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWN0aXZlT3JGb2N1c2VkUmFkaW8oKTogQnV0dG9uUmFkaW9EaXJlY3RpdmUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnJhZGlvQnV0dG9ucy5maW5kKGJ1dHRvbiA9PiBidXR0b24uaXNBY3RpdmUpIHx8IHRoaXMucmFkaW9CdXR0b25zLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi5oYXNGb2N1cyk7XG4gIH1cbn1cbiJdfQ==