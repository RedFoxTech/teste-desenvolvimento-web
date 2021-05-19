/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, forwardRef, HostBinding, HostListener, Inject, Input, Optional, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonRadioGroupDirective } from './button-radio-group.directive';
/** @type {?} */
export var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return ButtonRadioDirective; })),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    function ButtonRadioDirective(el, cdr, renderer, group) {
        this.el = el;
        this.cdr = cdr;
        this.renderer = renderer;
        this.group = group;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.role = 'radio';
        this._hasFocus = false;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "value", {
        /** Current value of radio component or group */
        get: /**
         * Current value of radio component or group
         * @return {?}
         */
        function () {
            return this.group ? this.group.value : this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.group) {
                this.group.value = value;
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
        /** If `true` — radio button is disabled */
        get: /**
         * If `true` — radio button is disabled
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this.setDisabledState(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "controlOrGroupDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled || (this.group && this.group.disabled) ? true : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "hasDisabledClass", {
        get: /**
         * @return {?}
         */
        function () {
            // Although the radio is disabled the active radio should still stand out.
            // The disabled class will prevent this so don't add it on the active radio
            return this.controlOrGroupDisabled && !this.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "tabindex", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.controlOrGroupDisabled) {
                // Disabled radio buttons should not receive focus
                return undefined;
            }
            else if (this.isActive || this.group == null) {
                return 0;
            }
            else {
                return -1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "hasFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasFocus;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.toggleIfAllowed = /**
     * @return {?}
     */
    function () {
        if (!this.canToggle()) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ButtonRadioDirective.prototype.onSpacePressed = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.toggleIfAllowed();
        event.preventDefault();
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this._hasFocus = true;
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._hasFocus = false;
        this.onTouched();
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.canToggle = /**
     * @return {?}
     */
    function () {
        return !this.controlOrGroupDisabled && (this.uncheckable || this.btnRadio !== this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype._onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.group) {
            this.group.value = value;
            return;
        }
        this.onTouched();
        this.onChange(value);
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = /**
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
    ButtonRadioDirective.prototype.registerOnTouched = /**
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
    ButtonRadioDirective.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this._disabled = disabled;
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    };
    ButtonRadioDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[btnRadio]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ButtonRadioGroupDirective, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return ButtonRadioGroupDirective; })),] }] }
    ]; };
    ButtonRadioDirective.propDecorators = {
        btnRadio: [{ type: Input }],
        uncheckable: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        controlOrGroupDisabled: [{ type: HostBinding, args: ['attr.aria-disabled',] }],
        hasDisabledClass: [{ type: HostBinding, args: ['class.disabled',] }],
        isActive: [{ type: HostBinding, args: ['class.active',] }, { type: HostBinding, args: ['attr.aria-checked',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        toggleIfAllowed: [{ type: HostListener, args: ['click',] }],
        onSpacePressed: [{ type: HostListener, args: ['keydown.space', ['$event'],] }],
        onFocus: [{ type: HostListener, args: ['focus',] }],
        onBlur: [{ type: HostListener, args: ['blur',] }]
    };
    return ButtonRadioDirective;
}());
export { ButtonRadioDirective };
if (false) {
    /** @type {?} */
    ButtonRadioDirective.prototype.onChange;
    /** @type {?} */
    ButtonRadioDirective.prototype.onTouched;
    /**
     * Radio button value, will be set to `ngModel`
     * @type {?}
     */
    ButtonRadioDirective.prototype.btnRadio;
    /**
     * If `true` — radio button can be unchecked
     * @type {?}
     */
    ButtonRadioDirective.prototype.uncheckable;
    /** @type {?} */
    ButtonRadioDirective.prototype.role;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioDirective.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioDirective.prototype._hasFocus;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioDirective.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioDirective.prototype.group;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXJhZGlvLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy8iLCJzb3VyY2VzIjpbImJ1dHRvbi1yYWRpby5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLFFBQVEsRUFFUixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUUzRSxNQUFNLEtBQU8sNEJBQTRCLEdBQWE7SUFDcEQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7OztBQU1EO0lBNEVFLDhCQUNVLEVBQWMsRUFDZCxHQUFzQixFQUN0QixRQUFtQixFQUduQixLQUFnQztRQUxoQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUduQixVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQTdFMUMsYUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDOUIsY0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFnREksU0FBSSxHQUFXLE9BQU8sQ0FBQztRQW9CbEQsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVN2QixDQUFDO0lBdEVKLHNCQUNJLHVDQUFLO1FBRlQsZ0RBQWdEOzs7OztRQUNoRDtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFD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ICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBQcm92aWRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLXJhZGlvLWdyb3VwLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvblJhZGlvRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKlxuICogQ3JlYXRlIHJhZGlvIGJ1dHRvbnMgb3IgZ3JvdXBzIG9mIGJ1dHRvbnMuXG4gKiBBIHZhbHVlIG9mIGEgc2VsZWN0ZWQgYnV0dG9uIGlzIGJvdW5kIHRvIGEgdmFyaWFibGUgc3BlY2lmaWVkIHZpYSBuZ01vZGVsLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnRuUmFkaW9dJyxcbiAgcHJvdmlkZXJzOiBbUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uUmFkaW9EaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAvKiogUmFkaW8gYnV0dG9uIHZhbHVlLCB3aWxsIGJlIHNldCB0byBgbmdNb2RlbGAgKi9cbiAgQElucHV0KCkgYnRuUmFkaW86IHN0cmluZztcbiAgLyoqIElmIGB0cnVlYCDigJQgcmFkaW8gYnV0dG9uIGNhbiBiZSB1bmNoZWNrZWQgKi9cbiAgQElucHV0KCkgdW5jaGVja2FibGU6IGJvb2xlYW47XG4gIC8qKiBDdXJyZW50IHZhbHVlIG9mIHJhZGlvIGNvbXBvbmVudCBvciBncm91cCAqL1xuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdXAgPyB0aGlzLmdyb3VwLnZhbHVlIDogdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IG51bGwgfCBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgdGhpcy5ncm91cC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLyoqIElmIGB0cnVlYCDigJQgcmFkaW8gYnV0dG9uIGlzIGRpc2FibGVkICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGlzYWJsZWQnKVxuICBnZXQgY29udHJvbE9yR3JvdXBEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAodGhpcy5ncm91cCAmJiB0aGlzLmdyb3VwLmRpc2FibGVkKSA/IHRydWUgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcbiAgZ2V0IGhhc0Rpc2FibGVkQ2xhc3MoKSB7XG4gICAgLy8gQWx0aG91Z2ggdGhlIHJhZGlvIGlzIGRpc2FibGVkIHRoZSBhY3RpdmUgcmFkaW8gc2hvdWxkIHN0aWxsIHN0YW5kIG91dC5cbiAgICAvLyBUaGUgZGlzYWJsZWQgY2xhc3Mgd2lsbCBwcmV2ZW50IHRoaXMgc28gZG9uJ3QgYWRkIGl0IG9uIHRoZSBhY3RpdmUgcmFkaW9cbiAgICByZXR1cm4gdGhpcy5jb250cm9sT3JHcm91cERpc2FibGVkICYmICF0aGlzLmlzQWN0aXZlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1jaGVja2VkJylcbiAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmJ0blJhZGlvID09PSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByZWFkb25seSByb2xlOiBzdHJpbmcgPSAncmFkaW8nO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gIGdldCB0YWJpbmRleCgpOiB1bmRlZmluZWQgfCBudW1iZXIge1xuICAgIGlmICh0aGlzLmNvbnRyb2xPckdyb3VwRGlzYWJsZWQpIHtcbiAgICAgIC8vIERpc2FibGVkIHJhZGlvIGJ1dHRvbnMgc2hvdWxkIG5vdCByZWNlaXZlIGZvY3VzXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmdyb3VwID09IG51bGwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhhc0ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNGb2N1cztcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlOiBudWxsIHwgc3RyaW5nO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaGFzRm9jdXMgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSkpXG4gICAgcHJpdmF0ZSBncm91cDogQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZVxuICApIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICB0b2dnbGVJZkFsbG93ZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNhblRvZ2dsZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudW5jaGVja2FibGUgJiYgdGhpcy5idG5SYWRpbyA9PT0gdGhpcy52YWx1ZSA/IHVuZGVmaW5lZCA6IHRoaXMuYnRuUmFkaW87XG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNwYWNlJywgWyckZXZlbnQnXSlcbiAgb25TcGFjZVByZXNzZWQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLnRvZ2dsZUlmQWxsb3dlZCgpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLl9oYXNGb2N1cyA9IHRydWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgb25CbHVyKCkge1xuICAgIHRoaXMuX2hhc0ZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuXG4gIGNhblRvZ2dsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuY29udHJvbE9yR3JvdXBEaXNhYmxlZCAmJiAodGhpcy51bmNoZWNrYWJsZSB8fCB0aGlzLmJ0blJhZGlvICE9PSB0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudW5jaGVja2FibGUgPSB0eXBlb2YgdGhpcy51bmNoZWNrYWJsZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICBfb25DaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICB0aGlzLmdyb3VwLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gIC8vIG1vZGVsIC0+IHZpZXdcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gIH1cbn1cbiJdfQ==