/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, ContentChildren, Directive, forwardRef, HostBinding, HostListener, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonRadioDirective } from './button-radio.directive';
/** @type {?} */
export var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return ButtonRadioGroupDirective; })),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioGroupDirective = /** @class */ (function () {
    function ButtonRadioGroupDirective(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.role = 'radiogroup';
    }
    Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            this.onChange(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioGroupDirective.prototype, "tabindex", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._disabled) {
                return null;
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (this.radioButtons) {
            this._disabled = disabled;
            this.radioButtons.forEach((/**
             * @param {?} buttons
             * @return {?}
             */
            function (buttons) {
                buttons.setDisabledState(disabled);
            }));
            this.cdr.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        if (this._disabled) {
            return;
        }
        /** @type {?} */
        var activeRadio = this.getActiveOrFocusedRadio();
        if (activeRadio) {
            activeRadio.focus();
        }
        else {
            /** @type {?} */
            var firstEnabled = this.radioButtons.find((/**
             * @param {?} r
             * @return {?}
             */
            function (r) { return !r.disabled; }));
            if (firstEnabled) {
                firstEnabled.focus();
            }
        }
    };
    /**
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.selectNext = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectInDirection('next');
        event.preventDefault();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.selectPrevious = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectInDirection('previous');
        event.preventDefault();
    };
    Object.defineProperty(ButtonRadioGroupDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.selectInDirection = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
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
            var step = direction === 'next' ? 1 : -1;
            /** @type {?} */
            var calcIndex = (currentIndex + step) % buttonRadioDirectives.length;
            if (calcIndex < 0) {
                calcIndex = buttonRadioDirectives.length - 1;
            }
            return calcIndex;
        }
        /** @type {?} */
        var activeRadio = this.getActiveOrFocusedRadio();
        if (activeRadio) {
            /** @type {?} */
            var buttonRadioDirectives = this.radioButtons.toArray();
            /** @type {?} */
            var currentActiveIndex = buttonRadioDirectives.indexOf(activeRadio);
            for (var i = nextIndex(currentActiveIndex, buttonRadioDirectives); i !== currentActiveIndex; i = nextIndex(i, buttonRadioDirectives)) {
                if (buttonRadioDirectives[i].canToggle()) {
                    buttonRadioDirectives[i].toggleIfAllowed();
                    buttonRadioDirectives[i].focus();
                    break;
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.getActiveOrFocusedRadio = /**
     * @private
     * @return {?}
     */
    function () {
        return this.radioButtons.find((/**
         * @param {?} button
         * @return {?}
         */
        function (button) { return button.isActive; })) || this.radioButtons.find((/**
         * @param {?} button
         * @return {?}
         */
        function (button) { return button.hasFocus; }));
    };
    ButtonRadioGroupDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[btnRadioGroup]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    ButtonRadioGroupDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    ButtonRadioGroupDirective.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }],
        radioButtons: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return ButtonRadioDirective; })),] }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        onFocus: [{ type: HostListener, args: ['focus',] }],
        onBlur: [{ type: HostListener, args: ['blur',] }],
        selectNext: [{ type: HostListener, args: ['keydown.ArrowRight', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowDown', ['$event'],] }],
        selectPrevious: [{ type: HostListener, args: ['keydown.ArrowLeft', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowUp', ['$event'],] }]
    };
    return ButtonRadioGroupDirective;
}());
export { ButtonRadioGroupDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXJhZGlvLWdyb3VwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy8iLCJzb3VyY2VzIjpbImJ1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFFWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVoRSxNQUFNLEtBQU8sNEJBQTRCLEdBQWE7SUFDcEQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsRUFBQztJQUN4RCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7OztBQU1EO0lBa0NFLG1DQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTdCMUMsYUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDOUIsY0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFFSSxTQUFJLEdBQVcsWUFBWSxDQUFDO0lBMEJsQixDQUFDO0lBckI5QyxzQkFBSSw0Q0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBQ0QsVUFBVSxLQUFvQjtZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBO0lBVUQsc0JBQ0ksK0NBQVE7Ozs7UUFEWjtZQUVFLElBQUksSUFBSSxDQUFDLFNB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QUMsZUFBZTswQkFrQzNCLFlBQVksU0FBQyxPQUFPO3lCQWdCcEIsWUFBWSxTQUFDLE1BQU07NkJBT25CLFlBQVksU0FBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUM3QyxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUNBTTVDLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUM1QyxZQUFZLFNBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBNkM3QyxnQ0FBQztDQUFBLEFBdklELElBdUlDO1NBbklZLHlCQUF5Qjs7O0lBQ3BDLDZDQUE4Qjs7SUFDOUIsOENBQStCOztJQUUvQix5Q0FBK0Q7O0lBRS9ELGlEQUM4Qzs7Ozs7SUFVOUMsMkNBQThCOzs7OztJQUU5Qiw4Q0FBMkI7Ozs7O0lBV2Ysd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBQcm92aWRlcixcbiAgUXVlcnlMaXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnV0dG9uUmFkaW9EaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1yYWRpby5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKlxuICogQSBncm91cCBvZiByYWRpbyBidXR0b25zLlxuICogQSB2YWx1ZSBvZiBhIHNlbGVjdGVkIGJ1dHRvbiBpcyBib3VuZCB0byBhIHZhcmlhYmxlIHNwZWNpZmllZCB2aWEgbmdNb2RlbC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2J0blJhZGlvR3JvdXBdJyxcbiAgcHJvdmlkZXJzOiBbUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJlYWRvbmx5IHJvbGU6IHN0cmluZyA9ICdyYWRpb2dyb3VwJztcblxuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uUmFkaW9EaXJlY3RpdmUpKVxuICByYWRpb0J1dHRvbnM6IFF1ZXJ5TGlzdDxCdXR0b25SYWRpb0RpcmVjdGl2ZT47XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyB8IG51bGw7XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgZ2V0IHRhYmluZGV4KCk6IG51bGwgfCBudW1iZXIge1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yYWRpb0J1dHRvbnMpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICB0aGlzLnJhZGlvQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbnMgPT4ge1xuICAgICAgICBidXR0b25zLnNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gIG9uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2ZVJhZGlvID0gdGhpcy5nZXRBY3RpdmVPckZvY3VzZWRSYWRpbygpO1xuICAgIGlmIChhY3RpdmVSYWRpbykge1xuICAgICAgYWN0aXZlUmFkaW8uZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3RFbmFibGVkID0gdGhpcy5yYWRpb0J1dHRvbnMuZmluZChyID0+ICFyLmRpc2FibGVkKTtcbiAgICAgIGlmIChmaXJzdEVuYWJsZWQpIHtcbiAgICAgICAgZmlyc3RFbmFibGVkLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uQmx1cigpIHtcbiAgICBpZiAodGhpcy5vblRvdWNoZWQpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BcnJvd1JpZ2h0JywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BcnJvd0Rvd24nLCBbJyRldmVudCddKVxuICBzZWxlY3ROZXh0KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5zZWxlY3RJbkRpcmVjdGlvbignbmV4dCcpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFycm93TGVmdCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uQXJyb3dVcCcsIFsnJGV2ZW50J10pXG4gIHNlbGVjdFByZXZpb3VzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5zZWxlY3RJbkRpcmVjdGlvbigncHJldmlvdXMnKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0SW5EaXJlY3Rpb24oZGlyZWN0aW9uOiAnbmV4dCcgfCAncHJldmlvdXMnKSB7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5leHRJbmRleChjdXJyZW50SW5kZXg6IG51bWJlciwgYnV0dG9uUmFkaW9EaXJlY3RpdmVzOiBCdXR0b25SYWRpb0RpcmVjdGl2ZVtdKSB7XG4gICAgICBjb25zdCBzdGVwID0gZGlyZWN0aW9uID09PSAnbmV4dCcgPyAxIDogLTE7XG4gICAgICBsZXQgY2FsY0luZGV4ID0gKGN1cnJlbnRJbmRleCArIHN0ZXApICUgYnV0dG9uUmFkaW9EaXJlY3RpdmVzLmxlbmd0aDtcbiAgICAgIGlmIChjYWxjSW5kZXggPCAwKSB7XG4gICAgICAgIGNhbGNJbmRleCA9IGJ1dHRvblJhZGlvRGlyZWN0aXZlcy5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FsY0luZGV4O1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVSYWRpbyA9IHRoaXMuZ2V0QWN0aXZlT3JGb2N1c2VkUmFkaW8oKTtcblxuICAgIGlmIChhY3RpdmVSYWRpbykge1xuICAgICAgY29uc3QgYnV0dG9uUmFkaW9EaXJlY3RpdmVzID0gdGhpcy5yYWRpb0J1dHRvbnMudG9BcnJheSgpO1xuICAgICAgY29uc3QgY3VycmVudEFjdGl2ZUluZGV4ID0gYnV0dG9uUmFkaW9EaXJlY3RpdmVzLmluZGV4T2YoYWN0aXZlUmFkaW8pO1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGkgPSBuZXh0SW5kZXgoY3VycmVudEFjdGl2ZUluZGV4LCBidXR0b25SYWRpb0RpcmVjdGl2ZXMpO1xuICAgICAgICBpICE9PSBjdXJyZW50QWN0aXZlSW5kZXg7XG4gICAgICAgIGkgPSBuZXh0SW5kZXgoaSwgYnV0dG9uUmFkaW9EaXJlY3RpdmVzKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChidXR0b25SYWRpb0RpcmVjdGl2ZXNbaV0uY2FuVG9nZ2xlKCkpIHtcbiAgICAgICAgICBidXR0b25SYWRpb0RpcmVjdGl2ZXNbaV0udG9nZ2xlSWZBbGxvd2VkKCk7XG4gICAgICAgICAgYnV0dG9uUmFkaW9EaXJlY3RpdmVzW2ldLmZvY3VzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEFjdGl2ZU9yRm9jdXNlZFJhZGlvKCk6IEJ1dHRvblJhZGlvRGlyZWN0aXZlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5yYWRpb0J1dHRvbnMuZmluZChidXR0b24gPT4gYnV0dG9uLmlzQWN0aXZlKSB8fCB0aGlzLnJhZGlvQnV0dG9ucy5maW5kKGJ1dHRvbiA9PiBidXR0b24uaGFzRm9jdXMpO1xuICB9XG59XG4iXX0=