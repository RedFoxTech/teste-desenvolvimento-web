(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/buttons', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].buttons = {}), global.ng.core, global.ng.forms));
}(this, (function (exports, core, forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO: config: activeClass - Class to apply to the checked buttons
    /** @type {?} */
    var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return ButtonCheckboxDirective; })),
        multi: true
    };
    /**
     * Add checkbox functionality to any element
     */
    var ButtonCheckboxDirective = /** @class */ (function () {
        function ButtonCheckboxDirective() {
            /**
             * Truthy value, will be set to ngModel
             */
            this.btnCheckboxTrue = true;
            /**
             * Falsy value, will be set to ngModel
             */
            this.btnCheckboxFalse = false;
            this.state = false;
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
        }
        // view -> model
        // view -> model
        /**
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.onClick = 
        // view -> model
        /**
         * @return {?}
         */
        function () {
            if (this.isDisabled) {
                return;
            }
            this.toggle(!this.state);
            this.onChange(this.value);
        };
        /**
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.toggle(this.trueValue === this.value);
        };
        Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
            get: /**
             * @protected
             * @return {?}
             */
            function () {
                return typeof this.btnCheckboxTrue !== 'undefined'
                    ? this.btnCheckboxTrue
                    : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
            get: /**
             * @protected
             * @return {?}
             */
            function () {
                return typeof this.btnCheckboxFalse !== 'undefined'
                    ? this.btnCheckboxFalse
                    : false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} state
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.toggle = /**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this.state = state;
            this.value = this.state ? this.trueValue : this.falseValue;
        };
        // ControlValueAccessor
        // model -> view
        // ControlValueAccessor
        // model -> view
        /**
         * @param {?} value
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.writeValue = 
        // ControlValueAccessor
        // model -> view
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.state = this.trueValue === value;
            this.value = value ? this.trueValue : this.falseValue;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.isDisabled = isDisabled;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        ButtonCheckboxDirective.prototype.registerOnChange = /**
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
        ButtonCheckboxDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        ButtonCheckboxDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[btnCheckbox]',
                        providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                    },] }
        ];
        ButtonCheckboxDirective.propDecorators = {
            btnCheckboxTrue: [{ type: core.Input }],
            btnCheckboxFalse: [{ type: core.Input }],
            state: [{ type: core.HostBinding, args: ['class.active',] }, { type: core.HostBinding, args: ['attr.aria-pressed',] }],
            onClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return ButtonCheckboxDirective;
    }());
    if (false) {
        /**
         * Truthy value, will be set to ngModel
         * @type {?}
         */
        ButtonCheckboxDirective.prototype.btnCheckboxTrue;
        /**
         * Falsy value, will be set to ngModel
         * @type {?}
         */
        ButtonCheckboxDirective.prototype.btnCheckboxFalse;
        /** @type {?} */
        ButtonCheckboxDirective.prototype.state;
        /**
         * @type {?}
         * @protected
         */
        ButtonCheckboxDirective.prototype.value;
        /**
         * @type {?}
         * @protected
         */
        ButtonCheckboxDirective.prototype.isDisabled;
        /**
         * @type {?}
         * @protected
         */
        ButtonCheckboxDirective.prototype.onChange;
        /**
         * @type {?}
         * @protected
         */
        ButtonCheckboxDirective.prototype.onTouched;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RADIO_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef((/**
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
            { type: core.Directive, args: [{
                        selector: '[btnRadio]',
                        providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                    },] }
        ];
        /** @nocollapse */
        ButtonRadioDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 },
            { type: ButtonRadioGroupDirective, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return ButtonRadioGroupDirective; })),] }] }
        ]; };
        ButtonRadioDirective.propDecorators = {
            btnRadio: [{ type: core.Input }],
            uncheckable: [{ type: core.Input }],
            value: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            controlOrGroupDisabled: [{ type: core.HostBinding, args: ['attr.aria-disabled',] }],
            hasDisabledClass: [{ type: core.HostBinding, args: ['class.disabled',] }],
            isActive: [{ type: core.HostBinding, args: ['class.active',] }, { type: core.HostBinding, args: ['attr.aria-checked',] }],
            role: [{ type: core.HostBinding, args: ['attr.role',] }],
            tabindex: [{ type: core.HostBinding, args: ['attr.tabindex',] }],
            toggleIfAllowed: [{ type: core.HostListener, args: ['click',] }],
            onSpacePressed: [{ type: core.HostListener, args: ['keydown.space', ['$event'],] }],
            onFocus: [{ type: core.HostListener, args: ['focus',] }],
            onBlur: [{ type: core.HostListener, args: ['blur',] }]
        };
        return ButtonRadioDirective;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RADIO_CONTROL_VALUE_ACCESSOR$1 = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef((/**
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
            { type: core.Directive, args: [{
                        selector: '[btnRadioGroup]',
                        providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
                    },] }
        ];
        /** @nocollapse */
        ButtonRadioGroupDirective.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        ButtonRadioGroupDirective.propDecorators = {
            role: [{ type: core.HostBinding, args: ['attr.role',] }],
            radioButtons: [{ type: core.ContentChildren, args: [core.forwardRef((/**
                         * @return {?}
                         */
                        function () { return ButtonRadioDirective; })),] }],
            tabindex: [{ type: core.HostBinding, args: ['attr.tabindex',] }],
            onFocus: [{ type: core.HostListener, args: ['focus',] }],
            onBlur: [{ type: core.HostListener, args: ['blur',] }],
            selectNext: [{ type: core.HostListener, args: ['keydown.ArrowRight', ['$event'],] }, { type: core.HostListener, args: ['keydown.ArrowDown', ['$event'],] }],
            selectPrevious: [{ type: core.HostListener, args: ['keydown.ArrowLeft', ['$event'],] }, { type: core.HostListener, args: ['keydown.ArrowUp', ['$event'],] }]
        };
        return ButtonRadioGroupDirective;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonsModule = /** @class */ (function () {
        function ButtonsModule() {
        }
        /**
         * @return {?}
         */
        ButtonsModule.forRoot = /**
         * @return {?}
         */
        function () {
            return { ngModule: ButtonsModule, providers: [] };
        };
        ButtonsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                        exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
                    },] }
        ];
        return ButtonsModule;
    }());

    exports.ButtonCheckboxDirective = ButtonCheckboxDirective;
    exports.ButtonRadioDirective = ButtonRadioDirective;
    exports.ButtonRadioGroupDirective = ButtonRadioGroupDirective;
    exports.ButtonsModule = ButtonsModule;
    exports.ɵa = CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.ɵb = RADIO_CONTROL_VALUE_ACCESSOR$1;
    exports.ɵc = RADIO_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-buttons.umd.js.map
