/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: split
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Provides default values for Pagination and pager components
 */
export class PaginationConfig {
    constructor() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
}
PaginationConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ PaginationConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaginationConfig_Factory() { return new PaginationConfig(); }, token: PaginationConfig, providedIn: "root" });
if (false) {
    /** @type {?} */
    PaginationConfig.prototype.main;
    /** @type {?} */
    PaginationConfig.prototype.pager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUTNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFIN0I7UUFJRSxTQUFJLEdBQWdCO1lBQ2xCLE9BQU8sRUFBRSxLQUFLLENBQUM7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixhQUFhLEVBQUUsS0FBSztZQUNwQixjQUFjLEVBQUUsSUFBSTtZQUNwQixTQUFTLEVBQUUsT0FBTztZQUNsQixZQUFZLEVBQUUsVUFBVTtZQUN4QixRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTTtZQUNoQixZQUFZLEVBQUUsRUFBRTtZQUNoQixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFDRixVQUFLLEdBQWU7WUFDbEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDO0tBQ0g7OztZQXZCQSxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUMsZ0NBV0U7O0lBQ0YsaUNBTUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b2RvOiBzcGxpdFxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgUGFnZXJNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcblxuLyoqIFByb3ZpZGVzIGRlZmF1bHQgdmFsdWVzIGZvciBQYWdpbmF0aW9uIGFuZCBwYWdlciBjb21wb25lbnRzICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29uZmlnIHtcbiAgbWFpbjogQ29uZmlnTW9kZWwgPSB7XG4gICAgbWF4U2l6ZTogdm9pZCAwLFxuICAgIGl0ZW1zUGVyUGFnZTogMTAsXG4gICAgYm91bmRhcnlMaW5rczogZmFsc2UsXG4gICAgZGlyZWN0aW9uTGlua3M6IHRydWUsXG4gICAgZmlyc3RUZXh0OiAnRmlyc3QnLFxuICAgIHByZXZpb3VzVGV4dDogJ1ByZXZpb3VzJyxcbiAgICBuZXh0VGV4dDogJ05leHQnLFxuICAgIGxhc3RUZXh0OiAnTGFzdCcsXG4gICAgcGFnZUJ0bkNsYXNzOiAnJyxcbiAgICByb3RhdGU6IHRydWVcbiAgfTtcbiAgcGFnZXI6IFBhZ2VyTW9kZWwgPSB7XG4gICAgaXRlbXNQZXJQYWdlOiAxNSxcbiAgICBwcmV2aW91c1RleHQ6ICfCqyBQcmV2aW91cycsXG4gICAgbmV4dFRleHQ6ICdOZXh0IMK7JyxcbiAgICBwYWdlQnRuQ2xhc3M6ICcnLFxuICAgIGFsaWduOiB0cnVlXG4gIH07XG59XG4iXX0=