/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from 'ngx-bootstrap/utils';
export class PopoverContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
}
PopoverContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'popover-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[attr.id]': 'popoverId',
                    '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    role: 'tooltip',
                    style: 'display:block;'
                },
                template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [`
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `]
            }] }
];
/** @nocollapse */
PopoverContainerComponent.ctorParameters = () => [
    { type: PopoverConfig }
];
PopoverContainerComponent.propDecorators = {
    placement: [{ type: Input }],
    title: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PopoverContainerComponent.prototype.placement;
    /** @type {?} */
    PopoverContainerComponent.prototype.title;
    /** @type {?} */
    PopoverContainerComponent.prototype.containerClass;
    /** @type {?} */
    PopoverContainerComponent.prototype.popoverId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3BvdmVyLyIsInNvdXJjZXMiOlsicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBdUM1QyxNQUFNLE9BQU8seUJBQXlCOzs7O0lBVXBDLFlBQVksTUFBcUI7UUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQU5ELElBQUksS0FBSztRQUNQLE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLElBQUksRUFBRTtvQkFDSixXQUFXLEVBQUUsV0FBVztvQkFDeEIsU0FBUyxFQUNQLDhHQUE4RztvQkFDaEgsY0FBYyxFQUFFLFFBQVE7b0JBQ3hCLGFBQWEsRUFBRSxPQUFPO29CQUN0QixJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsZ0JBQWdCO2lCQUN4QjtnQkF1QkQsdU5BQWlEO3lCQXJCL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQkM7YUFHSjs7OztZQXZDUSxhQUFhOzs7d0JBeUNuQixLQUFLO29CQUNMLEtBQUs7Ozs7SUFETiw4Q0FBMkI7O0lBQzNCLDBDQUF1Qjs7SUFDdkIsbURBQXVCOztJQUN2Qiw4Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbmZpZyB9IGZyb20gJy4vcG9wb3Zlci5jb25maWcnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncG9wb3Zlci1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIuaWRdJzogJ3BvcG92ZXJJZCcsXG4gICAgJ1tjbGFzc10nOlxuICAgICAgJ1wicG9wb3ZlciBpbiBwb3BvdmVyLVwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBcImJzLXBvcG92ZXItXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIHBsYWNlbWVudCArIFwiIFwiICsgY29udGFpbmVyQ2xhc3MnLFxuICAgICdbY2xhc3Muc2hvd10nOiAnIWlzQnMzJyxcbiAgICAnW2NsYXNzLmJzM10nOiAnaXNCczMnLFxuICAgIHJvbGU6ICd0b29sdGlwJyxcbiAgICBzdHlsZTogJ2Rpc3BsYXk6YmxvY2s7J1xuICB9LFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgOmhvc3QuYnMzLnBvcG92ZXItdG9wIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIDpob3N0LmJzMy5wb3BvdmVyLnRvcD4uYXJyb3cge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gICAgfVxuICAgIDpob3N0LmJzMy5wb3BvdmVyLnRvcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICA6aG9zdC5wb3BvdmVyLmJvdHRvbT4uYXJyb3cge1xuICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gICAgfVxuICAgIDpob3N0LmJzMy5icy1wb3BvdmVyLWxlZnQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICB9XG4gICAgOmhvc3QuYnMzLmJzLXBvcG92ZXItcmlnaHQgLmFycm93LCA6aG9zdC5iczMuYnMtcG9wb3Zlci1sZWZ0IC5hcnJvd3tcbiAgICAgIG1hcmdpbjogLjNyZW0gMDtcbiAgICB9XG4gICAgYFxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb250YWluZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcbiAgcG9wb3ZlcklkOiBzdHJpbmc7XG5cbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBQb3BvdmVyQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG59XG4iXX0=