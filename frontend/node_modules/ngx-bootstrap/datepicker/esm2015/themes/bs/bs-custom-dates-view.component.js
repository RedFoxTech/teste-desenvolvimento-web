/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
/**
 * @record
 */
export function BsCustomDates() { }
if (false) {
    /** @type {?} */
    BsCustomDates.prototype.label;
    /** @type {?} */
    BsCustomDates.prototype.value;
}
export class BsCustomDatesViewComponent {
    constructor() {
        this.onSelect = new EventEmitter();
        this.customRange = null;
    }
    /**
     * @param {?} range
     * @return {?}
     */
    selectFromRanges(range) {
        this.onSelect.emit(range);
    }
    /**
     * @return {?}
     */
    checkRange() {
        return this.ranges ? this.ranges.filter((/**
         * @param {?} range
         * @return {?}
         */
        range => range.value === this.selectedRange)).length > 0 : false;
    }
}
BsCustomDatesViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-custom-date-view',
                template: `
    <div class="bs-datepicker-predefined-btns">
      <button *ngFor="let range of ranges"
        type="button"
        class="btn"
        (click)="selectFromRanges(range)"
        [class.selected]="range.value === selectedRange">
        {{ range.label }}
      </button>
      <button
        type="button"
        class="btn"
        (click)="selectFromRanges(customRange)"
        [class.selected]="!checkRange()">
        {{customRangeLabel}}
      </button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
BsCustomDatesViewComponent.propDecorators = {
    ranges: [{ type: Input }],
    selectedRange: [{ type: Input }],
    customRangeLabel: [{ type: Input }],
    onSelect: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.ranges;
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.selectedRange;
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.customRangeLabel;
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.onSelect;
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.customRange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsidGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVoRyxtQ0FHQzs7O0lBRkMsOEJBQWM7O0lBQ2QsOEJBQXFCOztBQXlCdkIsTUFBTSxPQUFPLDBCQUEwQjtJQXRCdkM7UUEwQlksYUFBUSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBRXZELGdCQUFXLEdBQVEsSUFBSSxDQUFDO0lBVTFCLENBQUM7Ozs7O0lBUkMsZ0JBQWdCLENBQUMsS0FBb0I7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFHLENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O3FCQUVFLEtBQUs7NEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLE1BQU07Ozs7SUFIUCw0Q0FBaUM7O0lBQ2pDLG1EQUErQjs7SUFDL0Isc0RBQWtDOztJQUNsQyw4Q0FBdUQ7O0lBRXZELGlEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJzQ3VzdG9tRGF0ZXMge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogRGF0ZSB8IERhdGVbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtY3VzdG9tLWRhdGUtdmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItcHJlZGVmaW5lZC1idG5zXCI+XG4gICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCByYW5nZSBvZiByYW5nZXNcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJidG5cIlxuICAgICAgICAoY2xpY2spPVwic2VsZWN0RnJvbVJhbmdlcyhyYW5nZSlcIlxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwicmFuZ2UudmFsdWUgPT09IHNlbGVjdGVkUmFuZ2VcIj5cbiAgICAgICAge3sgcmFuZ2UubGFiZWwgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJidG5cIlxuICAgICAgICAoY2xpY2spPVwic2VsZWN0RnJvbVJhbmdlcyhjdXN0b21SYW5nZSlcIlxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiIWNoZWNrUmFuZ2UoKVwiPlxuICAgICAgICB7e2N1c3RvbVJhbmdlTGFiZWx9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEJzQ3VzdG9tRGF0ZXNWaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgcmFuZ2VzOiBCc0N1c3RvbURhdGVzW107XG4gIEBJbnB1dCgpIHNlbGVjdGVkUmFuZ2U6IERhdGVbXTtcbiAgQElucHV0KCkgY3VzdG9tUmFuZ2VMYWJlbDogc3RyaW5nO1xuICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPEJzQ3VzdG9tRGF0ZXM+KCk7XG5cbiAgY3VzdG9tUmFuZ2U6IGFueSA9IG51bGw7XG5cbiAgc2VsZWN0RnJvbVJhbmdlcyhyYW5nZTogQnNDdXN0b21EYXRlcykge1xuICAgIHRoaXMub25TZWxlY3QuZW1pdChyYW5nZSk7XG4gIH1cblxuICBjaGVja1JhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLnJhbmdlcyA/IHRoaXMucmFuZ2VzLmZpbHRlcihyYW5nZSA9PiByYW5nZS52YWx1ZSA9PT0gdGhpcy5zZWxlY3RlZFJhbmdlKS5sZW5ndGggPiAwIDogZmFsc2U7XG4gIH1cblxufVxuIl19