/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, Renderer2, ElementRef } from '@angular/core';
import { TabsetConfig } from './tabset.config';
// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(config, renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /** if true tabs will be placed vertically */
        get: /**
         * if true tabs will be placed vertically
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */
        function () {
            return this._justified;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "isKeysAllowed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isKeysAllowed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isKeysAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroyed = true;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    };
    /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    TabsetComponent.prototype.removeTab = /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    function (tab, options) {
        if (options === void 0) { options = { reselect: true, emit: true }; }
        /** @type {?} */
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    };
    /* tslint:disable-next-line: cyclomatic-complexity */
    /* tslint:disable-next-line: cyclomatic-complexity */
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.keyNavActions = /* tslint:disable-next-line: cyclomatic-complexity */
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        if (!this.isKeysAllowed) {
            return;
        }
        /** @type {?} */
        var list = Array.from(this.elementRef.nativeElement.querySelectorAll('.nav-link'));
        // const activeElList = list.filter((el: HTMLElement) => !el.classList.contains('disabled'));
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            event.preventDefault();
            /** @type {?} */
            var currentTab = list[(index) % list.length];
            currentTab.click();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            /** @type {?} */
            var nextTab = void 0;
            /** @type {?} */
            var shift = 1;
            do {
                nextTab = list[(index + shift) % list.length];
                shift++;
            } while (nextTab.classList.contains('disabled'));
            nextTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            /** @type {?} */
            var previousTab = void 0;
            /** @type {?} */
            var shift = 1;
            /** @type {?} */
            var i = index;
            do {
                if ((i - shift) < 0) {
                    i = list.length - 1;
                    previousTab = list[i];
                    shift = 0;
                }
                else {
                    previousTab = list[i - shift];
                }
                shift++;
            } while (previousTab.classList.contains('disabled'));
            previousTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 36 || event.key === 'Home') {
            event.preventDefault();
            /** @type {?} */
            var firstTab = void 0;
            /** @type {?} */
            var shift = 0;
            do {
                firstTab = list[shift % list.length];
                shift++;
            } while (firstTab.classList.contains('disabled'));
            firstTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 35 || event.key === 'End') {
            event.preventDefault();
            /** @type {?} */
            var lastTab = void 0;
            /** @type {?} */
            var shift = 1;
            /** @type {?} */
            var i = index;
            do {
                if ((i - shift) < 0) {
                    i = list.length - 1;
                    lastTab = list[i];
                    shift = 0;
                }
                else {
                    lastTab = list[i - shift];
                }
                shift++;
            } while (lastTab.classList.contains('disabled'));
            lastTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 46 || event.key === 'Delete') {
            if (this.tabs[index].removable) {
                this.removeTab(this.tabs[index]);
                if (list[index + 1]) {
                    list[(index + 1) % list.length].focus();
                    return;
                }
                if (list[list.length - 1]) {
                    list[0].focus();
                }
            }
        }
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.getClosestTabIndex = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            var prevIndex = index - step;
            /** @type {?} */
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.hasAvailableTabs = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    /**
     * @protected
     * @return {?}
     */
    TabsetComponent.prototype.setClassMap = /**
     * @protected
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'flex-column': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a);
    };
    TabsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tabset',
                    template: "<ul class=\"nav\" [ngClass]=\"classMap\"\n    (click)=\"$event.preventDefault()\"\n    [attr.aria-label]=\"ariaLabel\"\n    role=\"tablist\">\n  <li *ngFor=\"let tabz of tabs; let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (keydown)=\"keyNavActions($event, i)\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\" role=\"tab\"\n       [attr.aria-controls]=\"tabz.id ? tabz.id : ''\"\n       [attr.aria-selected]=\"!!tabz.active\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}"]
                }] }
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: TabsetConfig },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TabsetComponent.propDecorators = {
        vertical: [{ type: Input }],
        justified: [{ type: Input }],
        type: [{ type: Input }],
        clazz: [{ type: HostBinding, args: ['class.tab-container',] }]
    };
    return TabsetComponent;
}());
export { TabsetComponent };
if (false) {
    /** @type {?} */
    TabsetComponent.prototype.clazz;
    /** @type {?} */
    TabsetComponent.prototype.tabs;
    /** @type {?} */
    TabsetComponent.prototype.classMap;
    /**
     * aria label for tab list
     * @type {?}
     */
    TabsetComponent.prototype.ariaLabel;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype.isDestroyed;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._vertical;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._justified;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._type;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._isKeysAllowed;
    /**
     * @type {?}
     * @private
     */
    TabsetComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    TabsetComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGFicy8iLCJzb3VyY2VzIjpbInRhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRy9DO0lBMkRFLHlCQUNFLE1BQW9CLEVBQ1osUUFBbUIsRUFDbkIsVUFBc0I7UUFEdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBakJJLFVBQUssR0FBRyxJQUFJLENBQUM7UUFFakQsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFDMUIsYUFBUSxHQUErQixFQUFFLENBQUM7UUFnQnhDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUExREQsc0JBQ0kscUNBQVE7UUFGWiw2Q0FBNkM7Ozs7O1FBQzdDO1lBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBQ0QsVUFBYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDOzs7T0FKQTtJQU9ELHNCQUNJLHNDQUFTO1FBRmIsa0VBQWtFOzs7OztRQUNsRTtZQUVFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7OztRQUNELFVBQWMsS0FBYztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQzs7O09BSkE7SUFPRCxzQkFDSSxpQ0FBSTtRQUZS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QXFRQztTQWhRWSxlQUFlOzs7SUF3QzFCLGdDQUFpRDs7SUFFakQsK0JBQTBCOztJQUMxQixtQ0FBMEM7Ozs7O0lBRzFDLG9DQUFrQjs7Ozs7SUFFbEIsc0NBQStCOzs7OztJQUMvQixvQ0FBNkI7Ozs7O0lBQzdCLHFDQUE4Qjs7Ozs7SUFDOUIsZ0NBQXdCOzs7OztJQUN4Qix5Q0FBa0M7Ozs7O0lBSWhDLG1DQUEyQjs7Ozs7SUFDM0IscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhYkRpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUYWJzZXRDb25maWcgfSBmcm9tICcuL3RhYnNldC5jb25maWcnO1xuLy8gdG9kbzogYWRkIGFjdGl2ZSBldmVudCB0byB0YWJcbi8vIHRvZG86IGZpeD8gbWl4aW5nIHN0YXRpYyBhbmQgZHluYW1pYyB0YWJzIHBvc2l0aW9uIHRhYnMgaW4gb3JkZXIgb2YgY3JlYXRpb25cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYnNldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJzLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogaWYgdHJ1ZSB0YWJzIHdpbGwgYmUgcGxhY2VkIHZlcnRpY2FsbHkgKi9cbiAgQElucHV0KClcbiAgZ2V0IHZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuICBzZXQgdmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8qKiBpZiB0cnVlIHRhYnMgZmlsbCB0aGUgY29udGFpbmVyIGFuZCBoYXZlIGEgY29uc2lzdGVudCB3aWR0aCAqL1xuICBASW5wdXQoKVxuICBnZXQganVzdGlmaWVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZpZWQ7XG4gIH1cbiAgc2V0IGp1c3RpZmllZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2p1c3RpZmllZCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8qKiBuYXZpZ2F0aW9uIGNvbnRleHQgY2xhc3M6ICd0YWJzJyBvciAncGlsbHMnICovXG4gIEBJbnB1dCgpXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgaXNLZXlzQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNLZXlzQWxsb3dlZDtcbiAgfVxuXG4gIHNldCBpc0tleXNBbGxvd2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNLZXlzQWxsb3dlZCA9IHZhbHVlO1xuICB9XG5cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYi1jb250YWluZXInKSBjbGF6eiA9IHRydWU7XG5cbiAgdGFiczogVGFiRGlyZWN0aXZlW10gPSBbXTtcbiAgY2xhc3NNYXA6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG5cbiAgLyoqIGFyaWEgbGFiZWwgZm9yIHRhYiBsaXN0ICovXG4gIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBpc0Rlc3Ryb3llZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF92ZXJ0aWNhbDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9qdXN0aWZpZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfdHlwZTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2lzS2V5c0FsbG93ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29uZmlnOiBUYWJzZXRDb25maWcsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIGFkZFRhYih0YWI6IFRhYkRpcmVjdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gICAgdGFiLmFjdGl2ZSA9IHRoaXMudGFicy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHRhYi5hY3RpdmUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgcmVtb3ZlVGFiKFxuICAgIHRhYjogVGFiRGlyZWN0aXZlLFxuICAgIG9wdGlvbnMgPSB7IHJlc2VsZWN0OiB0cnVlLCBlbWl0OiB0cnVlIH1cbiAgKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhYnMuaW5kZXhPZih0YWIpO1xuICAgIGlmIChpbmRleCA9PT0gLTEgfHwgdGhpcy5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTZWxlY3QgYSBuZXcgdGFiIGlmIHRoZSB0YWIgdG8gYmUgcmVtb3ZlZCBpcyBzZWxlY3RlZCBhbmQgbm90IGRlc3Ryb3llZFxuICAgIGlmIChvcHRpb25zLnJlc2VsZWN0ICYmIHRhYi5hY3RpdmUgJiYgdGhpcy5oYXNBdmFpbGFibGVUYWJzKGluZGV4KSkge1xuICAgICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSB0aGlzLmdldENsb3Nlc3RUYWJJbmRleChpbmRleCk7XG4gICAgICB0aGlzLnRhYnNbbmV3QWN0aXZlSW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmVtaXQpIHtcbiAgICAgIHRhYi5yZW1vdmVkLmVtaXQodGFiKTtcbiAgICB9XG4gICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgaWYgKHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChcbiAgICAgICAgdGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICB0YWIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY3ljbG9tYXRpYy1jb21wbGV4aXR5ICovXG4gIGtleU5hdkFjdGlvbnMoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNLZXlzQWxsb3dlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsaXN0OiBIVE1MRWxlbWVudFtdID0gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKSk7XG4gICAgLy8gY29uc3QgYWN0aXZlRWxMaXN0ID0gbGlzdC5maWx0ZXIoKGVsOiBIVE1MRWxlbWVudCkgPT4gIWVsLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSk7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyIHx8IGV2ZW50LmtleSA9PT0gJ1NwYWNlJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSBsaXN0WyhpbmRleCkgJSBsaXN0Lmxlbmd0aF07XG4gICAgICBjdXJyZW50VGFiLmNsaWNrKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgfHwgZXZlbnQua2V5ID09PSAnUmlnaHRBcnJvdycpIHtcbiAgICAgIGxldCBuZXh0VGFiOiBhbnk7XG4gICAgICBsZXQgc2hpZnQgPSAxO1xuXG4gICAgICBkbyB7XG4gICAgICAgIG5leHRUYWIgPSBsaXN0WyhpbmRleCArIHNoaWZ0KSAlIGxpc3QubGVuZ3RoXTtcblxuICAgICAgICBzaGlmdCsrO1xuICAgICAgfSB3aGlsZSAobmV4dFRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpO1xuXG4gICAgICBuZXh0VGFiLmZvY3VzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5ID09PSAnTGVmdEFycm93Jykge1xuICAgICAgbGV0IHByZXZpb3VzVGFiOiBhbnk7XG4gICAgICBsZXQgc2hpZnQgPSAxO1xuICAgICAgbGV0IGkgPSBpbmRleDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAoKGkgLSBzaGlmdCkgPCAwKSB7XG4gICAgICAgICAgaSA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgICBwcmV2aW91c1RhYiA9IGxpc3RbaV07XG4gICAgICAgICAgc2hpZnQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZpb3VzVGFiID0gbGlzdFtpIC0gc2hpZnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hpZnQrKztcbiAgICAgIH0gd2hpbGUgKHByZXZpb3VzVGFiLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSk7XG5cbiAgICAgIHByZXZpb3VzVGFiLmZvY3VzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzYgfHwgZXZlbnQua2V5ID09PSAnSG9tZScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBmaXJzdFRhYjogYW55O1xuICAgICAgbGV0IHNoaWZ0ID0gMDtcblxuICAgICAgZG8ge1xuICAgICAgICBmaXJzdFRhYiA9IGxpc3Rbc2hpZnQgJSBsaXN0Lmxlbmd0aF07XG5cbiAgICAgICAgc2hpZnQrKztcbiAgICAgIH0gd2hpbGUgKGZpcnN0VGFiLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSk7XG5cbiAgICAgIGZpcnN0VGFiLmZvY3VzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzUgfHwgZXZlbnQua2V5ID09PSAnRW5kJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGxhc3RUYWI6IGFueTtcbiAgICAgIGxldCBzaGlmdCA9IDE7XG4gICAgICBsZXQgaSA9IGluZGV4O1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmICgoaSAtIHNoaWZ0KSA8IDApIHtcbiAgICAgICAgICBpID0gbGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgIGxhc3RUYWIgPSBsaXN0W2ldO1xuICAgICAgICAgIHNoaWZ0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0VGFiID0gbGlzdFtpIC0gc2hpZnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hpZnQrKztcbiAgICAgIH0gd2hpbGUgKGxhc3RUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKTtcblxuICAgICAgbGFzdFRhYi5mb2N1cygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQ2IHx8IGV2ZW50LmtleSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgIGlmICh0aGlzLnRhYnNbaW5kZXhdLnJlbW92YWJsZSkge1xuICAgICAgICB0aGlzLnJlbW92ZVRhYih0aGlzLnRhYnNbaW5kZXhdKTtcblxuICAgICAgICBpZiAobGlzdFtpbmRleCArIDFdKSB7XG4gICAgICAgICAgbGlzdFsoaW5kZXggKyAxKSAlIGxpc3QubGVuZ3RoXS5mb2N1cygpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RbbGlzdC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgIGxpc3RbMF0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgdGFic0xlbmd0aCA9IHRoaXMudGFicy5sZW5ndGg7XG4gICAgaWYgKCF0YWJzTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPD0gdGFic0xlbmd0aDsgc3RlcCArPSAxKSB7XG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBpbmRleCAtIHN0ZXA7XG4gICAgICBjb25zdCBuZXh0SW5kZXggPSBpbmRleCArIHN0ZXA7XG4gICAgICBpZiAodGhpcy50YWJzW3ByZXZJbmRleF0gJiYgIXRoaXMudGFic1twcmV2SW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBwcmV2SW5kZXg7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50YWJzW25leHRJbmRleF0gJiYgIXRoaXMudGFic1tuZXh0SW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhc0F2YWlsYWJsZVRhYnMoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRhYnNMZW5ndGggPSB0aGlzLnRhYnMubGVuZ3RoO1xuICAgIGlmICghdGFic0xlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoIXRoaXMudGFic1tpXS5kaXNhYmxlZCAmJiBpICE9PSBpbmRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgICduYXYtc3RhY2tlZCc6IHRoaXMudmVydGljYWwsXG4gICAgICAnZmxleC1jb2x1bW4nOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgJ25hdi1qdXN0aWZpZWQnOiB0aGlzLmp1c3RpZmllZCxcbiAgICAgIFtgbmF2LSR7dGhpcy50eXBlfWBdOiB0cnVlXG4gICAgfTtcbiAgfVxufVxuIl19