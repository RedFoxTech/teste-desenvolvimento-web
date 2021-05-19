/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
var TabDirective = /** @class */ (function () {
    function TabDirective(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.selectTab = new EventEmitter();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new EventEmitter();
        /**
         * fired before tab will be removed, $event:Tab equals to instance of removed tab
         */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.role = 'tabpanel';
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "customClass", {
        /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
        get: /**
         * if set, will be added to the tab's class attribute. Multiple classes are supported.
         * @return {?}
         */
        function () {
            return this._customClass;
        },
        set: /**
         * @param {?} customClass
         * @return {?}
         */
        function (customClass) {
            var _this = this;
            if (this.customClass) {
                this.customClass.split(' ').forEach((/**
                 * @param {?} cssClass
                 * @return {?}
                 */
                function (cssClass) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                }));
            }
            this._customClass = customClass ? customClass.trim() : null;
            if (this.customClass) {
                this.customClass.split(' ').forEach((/**
                 * @param {?} cssClass
                 * @return {?}
                 */
                function (cssClass) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: /**
         * tab active state toggle
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            var _this = this;
            if (this._active === active) {
                return;
            }
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.deselect.emit(this);
                    this._active = active;
                }
                return;
            }
            this._active = active;
            this.selectTab.emit(this);
            this.tabset.tabs.forEach((/**
             * @param {?} tab
             * @return {?}
             */
            function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "ariaLabelledby", {
        get: /**
         * @return {?}
         */
        function () {
            return this.id ? this.id + "-link" : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.removable = this.removable;
    };
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    };
    TabDirective.decorators = [
        { type: Directive, args: [{ selector: 'tab, [tab]', exportAs: 'tab' },] }
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: TabsetComponent },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TabDirective.propDecorators = {
        heading: [{ type: Input }],
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        disabled: [{ type: Input }],
        removable: [{ type: Input }],
        customClass: [{ type: Input }],
        active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
        selectTab: [{ type: Output }],
        deselect: [{ type: Output }],
        removed: [{ type: Output }],
        addClass: [{ type: HostBinding, args: ['class.tab-pane',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        ariaLabelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }]
    };
    return TabDirective;
}());
export { TabDirective };
if (false) {
    /**
     * tab header text
     * @type {?}
     */
    TabDirective.prototype.heading;
    /**
     * tab id. The same id with suffix '-link' will be added to the corresponding &lt;li&gt; element
     * @type {?}
     */
    TabDirective.prototype.id;
    /**
     * if true tab can not be activated
     * @type {?}
     */
    TabDirective.prototype.disabled;
    /**
     * if true tab can be removable, additional button will appear
     * @type {?}
     */
    TabDirective.prototype.removable;
    /**
     * fired when tab became active, $event:Tab equals to selected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.selectTab;
    /**
     * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.deselect;
    /**
     * fired before tab will be removed, $event:Tab equals to instance of removed tab
     * @type {?}
     */
    TabDirective.prototype.removed;
    /** @type {?} */
    TabDirective.prototype.addClass;
    /** @type {?} */
    TabDirective.prototype.role;
    /** @type {?} */
    TabDirective.prototype.headingRef;
    /** @type {?} */
    TabDirective.prototype.tabset;
    /**
     * @type {?}
     * @protected
     */
    TabDirective.prototype._active;
    /**
     * @type {?}
     * @protected
     */
    TabDirective.prototype._customClass;
    /** @type {?} */
    TabDirective.prototype.elementRef;
    /** @type {?} */
    TabDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGFicy8iLCJzb3VyY2VzIjpbInRhYi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUlOLFVBQVUsRUFDVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJEO0lBaUZFLHNCQUNFLE1BQXVCLEVBQ2hCLFVBQXNCLEVBQ3RCLFFBQW1CO1FBRG5CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVzs7OztRQXJCbEIsY0FBUyxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRTNELGFBQVEsR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUUxRCxZQUFPLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixTQUFJLEdBQUcsVUFBVSxDQUFDO1FBZ0IxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBNUVELHNCQUNJLHFDQUFXO1FBRmYsMEZBQTBGOzs7OztRQUMxRjtZQUVFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7OztRQUVELFVBQWdCLFdBQW1CO1lBQW5DLGlCQWNDO1lBYkMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsUUFBZ0I7b0JBQ25ELEtBQUksQ0FBQyxRQUFRLENBQUMs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QUVwQixnQ0FBMkI7Ozs7O0lBRTNCLGlDQUE0Qjs7Ozs7SUFxRDVCLGlDQUFxRTs7Ozs7SUFFckUsZ0NBQW9FOzs7OztJQUVwRSwrQkFBbUU7O0lBRW5FLGdDQUErQzs7SUFDL0MsNEJBQTRDOztJQU01QyxrQ0FBNkI7O0lBQzdCLDhCQUF3Qjs7Ozs7SUFDeEIsK0JBQTJCOzs7OztJQUMzQixvQ0FBK0I7O0lBSTdCLGtDQUE2Qjs7SUFDN0IsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYnNldENvbXBvbmVudCB9IGZyb20gJy4vdGFic2V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ3RhYiwgW3RhYl0nLCBleHBvcnRBczogJ3RhYicgfSlcbmV4cG9ydCBjbGFzcyBUYWJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiB0YWIgaGVhZGVyIHRleHQgKi9cbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xuICAvKiogdGFiIGlkLiBUaGUgc2FtZSBpZCB3aXRoIHN1ZmZpeCAnLWxpbmsnIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgJmx0O2xpJmd0OyBlbGVtZW50ICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIG5vdCBiZSBhY3RpdmF0ZWQgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gYmUgcmVtb3ZhYmxlLCBhZGRpdGlvbmFsIGJ1dHRvbiB3aWxsIGFwcGVhciAqL1xuICBASW5wdXQoKSByZW1vdmFibGU6IGJvb2xlYW47XG4gIC8qKiBpZiBzZXQsIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRhYidzIGNsYXNzIGF0dHJpYnV0ZS4gTXVsdGlwbGUgY2xhc3NlcyBhcmUgc3VwcG9ydGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgY3VzdG9tQ2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tQ2xhc3M7XG4gIH1cblxuICBzZXQgY3VzdG9tQ2xhc3MoY3VzdG9tQ2xhc3M6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmN1c3RvbUNsYXNzKSB7XG4gICAgICB0aGlzLmN1c3RvbUNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoY3NzQ2xhc3M6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9jdXN0b21DbGFzcyA9IGN1c3RvbUNsYXNzID8gY3VzdG9tQ2xhc3MudHJpbSgpIDogbnVsbDtcblxuICAgIGlmICh0aGlzLmN1c3RvbUNsYXNzKSB7XG4gICAgICB0aGlzLmN1c3RvbUNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoY3NzQ2xhc3M6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogdGFiIGFjdGl2ZSBzdGF0ZSB0b2dnbGUgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cblxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9hY3RpdmUgPT09IGFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKHRoaXMuZGlzYWJsZWQgJiYgYWN0aXZlKSB8fCAhYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlICYmICFhY3RpdmUpIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdC5lbWl0KHRoaXMpO1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gICAgdGhpcy5zZWxlY3RUYWIuZW1pdCh0aGlzKTtcbiAgICB0aGlzLnRhYnNldC50YWJzLmZvckVhY2goKHRhYjogVGFiRGlyZWN0aXZlKSA9PiB7XG4gICAgICBpZiAodGFiICE9PSB0aGlzKSB7XG4gICAgICAgIHRhYi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgYWN0aXZlLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBzZWxlY3RlZCBpbnN0YW5jZSBvZiBUYWIgY29tcG9uZW50ICovXG4gIEBPdXRwdXQoKSBzZWxlY3RUYWI6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogZmlyZWQgd2hlbiB0YWIgYmVjYW1lIGluYWN0aXZlLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBkZXNlbGVjdGVkIGluc3RhbmNlIG9mIFRhYiBjb21wb25lbnQgKi9cbiAgQE91dHB1dCgpIGRlc2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIGZpcmVkIGJlZm9yZSB0YWIgd2lsbCBiZSByZW1vdmVkLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBpbnN0YW5jZSBvZiByZW1vdmVkIHRhYiAqL1xuICBAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItcGFuZScpIGFkZENsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ3RhYnBhbmVsJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWxsZWRieScpIGdldCBhcmlhTGFiZWxsZWRieSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlkID8gYCR7dGhpcy5pZH0tbGlua2AgOiAnJztcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgaGVhZGluZ1JlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQ7XG4gIHByb3RlY3RlZCBfYWN0aXZlOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2N1c3RvbUNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQsXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy50YWJzZXQgPSB0YWJzZXQ7XG4gICAgdGhpcy50YWJzZXQuYWRkVGFiKHRoaXMpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmFibGUgPSB0aGlzLnJlbW92YWJsZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGFic2V0LnJlbW92ZVRhYih0aGlzLCB7IHJlc2VsZWN0OiBmYWxzZSwgZW1pdDogZmFsc2UgfSk7XG4gIH1cbn1cbiJdfQ==