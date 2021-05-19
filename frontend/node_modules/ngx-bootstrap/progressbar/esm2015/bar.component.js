/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, HostBinding, Input, ElementRef, Renderer2 } from '@angular/core';
import { ProgressbarComponent } from './progressbar.component';
import { isBs3 } from 'ngx-bootstrap/utils';
// todo: number pipe
// todo: use query from progress?
export class BarComponent {
    /**
     * @param {?} el
     * @param {?} progress
     * @param {?} renderer
     */
    constructor(el, progress, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.addClass = true;
        this.percent = 0;
        this.progress = progress;
    }
    /**
     * @return {?}
     */
    get setBarWidth() {
        this.recalculatePercentage();
        return this.percent;
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.progress.addBar(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.progress.removeBar(this);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value) {
            if (!changes.value.currentValue && changes.value.currentValue !== 0) {
                return;
            }
            this.value = changes.value.currentValue;
            this.recalculatePercentage();
        }
        if (changes.type) {
            this.type = changes.type.currentValue;
            this.applyTypeClasses();
        }
    }
    /**
     * @return {?}
     */
    recalculatePercentage() {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        /** @type {?} */
        const totalPercentage = this.progress.bars
            .reduce((/**
         * @param {?} total
         * @param {?} bar
         * @return {?}
         */
        function (total, bar) {
            return total + bar.percent;
        }), 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    }
    /**
     * @private
     * @return {?}
     */
    applyTypeClasses() {
        if (this._prevType) {
            /** @type {?} */
            const barTypeClass = `progress-bar-${this._prevType}`;
            /** @type {?} */
            const bgClass = `bg-${this._prevType}`;
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = null;
        }
        if (this.type) {
            /** @type {?} */
            const barTypeClass = `progress-bar-${this.type}`;
            /** @type {?} */
            const bgClass = `bg-${this.type}`;
            this.renderer.addClass(this.el.nativeElement, barTypeClass);
            this.renderer.addClass(this.el.nativeElement, bgClass);
            this._prevType = this.type;
        }
    }
}
BarComponent.decorators = [
    { type: Component, args: [{
                selector: 'bar',
                template: "<ng-content></ng-content>\n",
                host: {
                    role: 'progressbar',
                    'aria-valuemin': '0',
                    '[class.progress-bar-animated]': '!isBs3 && animate',
                    '[class.progress-bar-striped]': 'striped',
                    '[class.active]': 'isBs3 && animate',
                    '[attr.aria-valuenow]': 'value',
                    '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                    '[attr.aria-valuemax]': 'max',
                    '[style.height.%]': '"100"'
                }
            }] }
];
/** @nocollapse */
BarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ProgressbarComponent, decorators: [{ type: Host }] },
    { type: Renderer2 }
];
BarComponent.propDecorators = {
    max: [{ type: Input }],
    type: [{ type: Input }],
    value: [{ type: Input }],
    setBarWidth: [{ type: HostBinding, args: ['style.width.%',] }],
    addClass: [{ type: HostBinding, args: ['class.progress-bar',] }]
};
if (false) {
    /** @type {?} */
    BarComponent.prototype.max;
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @type {?}
     */
    BarComponent.prototype.type;
    /**
     * current value of progress bar
     * @type {?}
     */
    BarComponent.prototype.value;
    /** @type {?} */
    BarComponent.prototype.addClass;
    /** @type {?} */
    BarComponent.prototype.striped;
    /** @type {?} */
    BarComponent.prototype.animate;
    /** @type {?} */
    BarComponent.prototype.percent;
    /** @type {?} */
    BarComponent.prototype.progress;
    /**
     * @type {?}
     * @private
     */
    BarComponent.prototype._prevType;
    /**
     * @type {?}
     * @private
     */
    BarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    BarComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvIiwic291cmNlcyI6WyJiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLFVBQVUsRUFDVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFtQjVDLE1BQU0sT0FBTyxZQUFZOzs7Ozs7SUE0QnZCLFlBQ1UsRUFBYyxFQUNkLFFBQThCLEVBQzlCLFFBQW1CO1FBRm5CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFFZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBaEJNLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFRbkQsWUFBTyxHQUFHLENBQUMsQ0FBQztRQVVWLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7SUExQkQsSUFDSSxXQUFXO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFJRCxJQUFJLEtBQUs7UUFDUCxPQUFPLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFpQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElB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QVcsU0FBQyxvQkFBb0I7Ozs7SUFkakMsMkJBQXFCOzs7OztJQUVyQiw0QkFBc0I7Ozs7O0lBR3RCLDZCQUF1Qjs7SUFTdkIsZ0NBQW1EOztJQU1uRCwrQkFBaUI7O0lBQ2pCLCtCQUFpQjs7SUFDakIsK0JBQVk7O0lBQ1osZ0NBQStCOzs7OztJQUUvQixpQ0FBMEI7Ozs7O0lBR3hCLDBCQUFzQjs7Ozs7SUFFdEIsZ0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByb2dyZXNzYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuLy8gdG9kbzogbnVtYmVyIHBpcGVcbi8vIHRvZG86IHVzZSBxdWVyeSBmcm9tIHByb2dyZXNzP1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICdhcmlhLXZhbHVlbWluJzogJzAnLFxuICAgICdbY2xhc3MucHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXSc6ICchaXNCczMgJiYgYW5pbWF0ZScsXG4gICAgJ1tjbGFzcy5wcm9ncmVzcy1iYXItc3RyaXBlZF0nOiAnc3RyaXBlZCcsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2lzQnMzICYmIGFuaW1hdGUnLFxuICAgICdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICd2YWx1ZScsXG4gICAgJ1thdHRyLmFyaWEtdmFsdWV0ZXh0XSc6ICdwZXJjZW50ID8gcGVyY2VudC50b0ZpeGVkKDApICsgXCIlXCIgOiBcIlwiJyxcbiAgICAnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnbWF4JyxcbiAgICAnW3N0eWxlLmhlaWdodC4lXSc6ICdcIjEwMFwiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbWF4OiBudW1iZXI7XG4gIC8qKiBwcm92aWRlIG9uZSBvZiB0aGUgZm91ciBzdXBwb3J0ZWQgY29udGV4dHVhbCBjbGFzc2VzOiBgc3VjY2Vzc2AsIGBpbmZvYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG5cbiAgLyoqIGN1cnJlbnQgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyICovXG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC4lJylcbiAgZ2V0IHNldEJhcldpZHRoKCkge1xuICAgIHRoaXMucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5wZXJjZW50O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wcm9ncmVzcy1iYXInKSBhZGRDbGFzcyA9IHRydWU7XG5cbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgc3RyaXBlZDogYm9vbGVhbjtcbiAgYW5pbWF0ZTogYm9vbGVhbjtcbiAgcGVyY2VudCA9IDA7XG4gIHByb2dyZXNzOiBQcm9ncmVzc2JhckNvbXBvbmVudDtcblxuICBwcml2YXRlIF9wcmV2VHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEhvc3QoKSBwcm9ncmVzczogUHJvZ3Jlc3NiYXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZ3Jlc3MuYWRkQmFyKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5wcm9ncmVzcy5yZW1vdmVCYXIodGhpcyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUpIHtcbiAgICAgIGlmICghY2hhbmdlcy52YWx1ZS5jdXJyZW50VmFsdWUgJiYgY2hhbmdlcy52YWx1ZS5jdXJyZW50VmFsdWUgIT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IGNoYW5nZXMudmFsdWUuY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy50eXBlKSB7XG4gICAgICB0aGlzLnR5cGUgPSBjaGFuZ2VzLnR5cGUuY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5hcHBseVR5cGVDbGFzc2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVjYWxjdWxhdGVQZXJjZW50YWdlKCk6IHZvaWQge1xuICAgIHRoaXMucGVyY2VudCA9ICsodGhpcy52YWx1ZSAvIHRoaXMucHJvZ3Jlc3MubWF4ICogMTAwKS50b0ZpeGVkKDIpO1xuXG4gICAgY29uc3QgdG90YWxQZXJjZW50YWdlID0gdGhpcy5wcm9ncmVzcy5iYXJzXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uICh0b3RhbDogbnVtYmVyLCBiYXI6IEJhckNvbXBvbmVudCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0b3RhbCArIGJhci5wZXJjZW50O1xuICAgICAgfSwgMCk7XG5cbiAgICBpZiAodG90YWxQZXJjZW50YWdlID4gMTAwKSB7XG4gICAgICB0aGlzLnBlcmNlbnQgLT0gdG90YWxQZXJjZW50YWdlIC0gMTAwO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlUeXBlQ2xhc3NlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcHJldlR5cGUpIHtcbiAgICAgIGNvbnN0IGJhclR5cGVDbGFzcyA9IGBwcm9ncmVzcy1iYXItJHt0aGlzLl9wcmV2VHlwZX1gO1xuICAgICAgY29uc3QgYmdDbGFzcyA9IGBiZy0ke3RoaXMuX3ByZXZUeXBlfWA7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYmFyVHlwZUNsYXNzKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBiZ0NsYXNzKTtcbiAgICAgIHRoaXMuX3ByZXZUeXBlID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50eXBlKSB7XG4gICAgICBjb25zdCBiYXJUeXBlQ2xhc3MgPSBgcHJvZ3Jlc3MtYmFyLSR7dGhpcy50eXBlfWA7XG4gICAgICBjb25zdCBiZ0NsYXNzID0gYGJnLSR7dGhpcy50eXBlfWA7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYmFyVHlwZUNsYXNzKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBiZ0NsYXNzKTtcbiAgICAgIHRoaXMuX3ByZXZUeXBlID0gdGhpcy50eXBlO1xuICAgIH1cbiAgfVxufVxuIl19