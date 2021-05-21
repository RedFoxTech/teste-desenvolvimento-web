/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken } from '@angular/core';
/**
 * @template T
 */
export class ModalOptions {
}
ModalOptions.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     *  Allow user to ID for the modal. Otherwise, a unique number will be given
     * @type {?}
     */
    ModalOptions.prototype.id;
    /**
     *  Includes a modal-backdrop element. Alternatively,
     *  specify static for a backdrop which doesn't close the modal on click.
     * @type {?}
     */
    ModalOptions.prototype.backdrop;
    /**
     * Closes the modal when escape key is pressed.
     * @type {?}
     */
    ModalOptions.prototype.keyboard;
    /** @type {?} */
    ModalOptions.prototype.focus;
    /**
     * Shows the modal when initialized.
     * @type {?}
     */
    ModalOptions.prototype.show;
    /**
     * Ignore the backdrop click
     * @type {?}
     */
    ModalOptions.prototype.ignoreBackdropClick;
    /**
     * Css class for opened modal
     * @type {?}
     */
    ModalOptions.prototype.class;
    /**
     * Toggle animation
     * @type {?}
     */
    ModalOptions.prototype.animated;
    /**
     * Modal data
     * @type {?}
     */
    ModalOptions.prototype.initialState;
    /**
     * Modal providers
     * @type {?}
     */
    ModalOptions.prototype.providers;
    /**
     * aria-labelledby attribute value to set on the modal window
     * @type {?}
     */
    ModalOptions.prototype.ariaLabelledBy;
    /**
     * aria-describedby attribute value to set on the modal window
     * @type {?}
     */
    ModalOptions.prototype.ariaDescribedby;
}
/** @type {?} */
export const modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
/** @type {?} */
export const MODAL_CONFIG_DEFAULT_OVERRIDE = new InjectionToken('override-default-config');
/** @type {?} */
export const CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
export const SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
/** @type {?} */
export const TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
export const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc',
    BACK: 'browser-back-navigation-clicked'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtb3B0aW9ucy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC1vcHRpb25zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFrQixjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFJM0UsTUFBTSxPQUFPLFlBQVk7OztZQUR4QixVQUFVOzs7Ozs7O0lBS1QsMEJBQVk7Ozs7OztJQUtaLGdDQUE4Qjs7Ozs7SUFJOUIsZ0NBQW1COztJQUVuQiw2QkFBZ0I7Ozs7O0lBSWhCLDRCQUFlOzs7OztJQUlmLDJDQUE4Qjs7Ozs7SUFJOUIsNkJBQWU7Ozs7O0lBSWYsZ0NBQW1COzs7OztJQUluQixvQ0FBMEI7Ozs7O0lBSTFCLGlDQUE2Qjs7Ozs7SUFJN0Isc0NBQXdCOzs7OztJQUl4Qix1Q0FBeUI7OztBQUczQixNQUFNLE9BQU8sbUJBQW1CLEdBQWlCO0lBQy9DLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxLQUFLLEVBQUUsSUFBSTtJQUNYLElBQUksRUFBRSxLQUFLO0lBQ1gsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixLQUFLLEVBQUUsRUFBRTtJQUNULFFBQVEsRUFBRSxJQUFJO0lBQ2QsWUFBWSxFQUFFLEVBQUU7Q0FDakI7O0FBRUQsTUFBTSxPQUFPLDZCQUE2QixHQUN4QyxJQUFJLGNBQWMsQ0FBZSx5QkFBeUIsQ0FBQzs7QUFFN0QsTUFBTSxPQUFPLFVBQVUsR0FBYztJQUNuQyxrQkFBa0IsRUFBRSx5QkFBeUI7SUFDN0MsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsTUFBTTtJQUNaLEVBQUUsRUFBRSxJQUFJOztJQUNSLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTTtDQUNwQjs7QUFFRCxNQUFNLE9BQU8sUUFBUSxHQUFhO0lBQ2hDLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7SUFDcEMsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QyxhQUFhLEVBQUUsb0RBQW9EO0NBQ3BFOztBQUVELE1BQU0sT0FBTyxvQkFBb0IsR0FBd0I7SUFDdkQsS0FBSyxFQUFFLEdBQUc7SUFDVixRQUFRLEVBQUUsR0FBRztDQUNkOztBQUVELE1BQU0sT0FBTyxlQUFlLEdBQW1CO0lBQzdDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsR0FBRyxFQUFFLEtBQUs7SUFDVixJQUFJLEVBQUUsaUNBQWlDO0NBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgU3RhdGljUHJvdmlkZXIsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGFzc05hbWUsIERpc21pc3NSZWFzb25zLCBTZWxlY3RvciwgVHJhbnNpdGlvbkR1cmF0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vZGFsT3B0aW9uczxUID0gT2JqZWN0PiB7XG4gIC8qKlxuICAgKiAgQWxsb3cgdXNlciB0byBJRCBmb3IgdGhlIG1vZGFsLiBPdGhlcndpc2UsIGEgdW5pcXVlIG51bWJlciB3aWxsIGJlIGdpdmVuXG4gICAqL1xuICBpZD86IG51bWJlcjtcbiAgLyoqXG4gICAqICBJbmNsdWRlcyBhIG1vZGFsLWJhY2tkcm9wIGVsZW1lbnQuIEFsdGVybmF0aXZlbHksXG4gICAqICBzcGVjaWZ5IHN0YXRpYyBmb3IgYSBiYWNrZHJvcCB3aGljaCBkb2Vzbid0IGNsb3NlIHRoZSBtb2RhbCBvbiBjbGljay5cbiAgICovXG4gIGJhY2tkcm9wPzogYm9vbGVhbiB8ICdzdGF0aWMnO1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBtb2RhbCB3aGVuIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cbiAgICovXG4gIGtleWJvYXJkPzogYm9vbGVhbjtcblxuICBmb2N1cz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaG93cyB0aGUgbW9kYWwgd2hlbiBpbml0aWFsaXplZC5cbiAgICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICogSWdub3JlIHRoZSBiYWNrZHJvcCBjbGlja1xuICAgKi9cbiAgaWdub3JlQmFja2Ryb3BDbGljaz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDc3MgY2xhc3MgZm9yIG9wZW5lZCBtb2RhbFxuICAgKi9cbiAgY2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUb2dnbGUgYW5pbWF0aW9uXG4gICAqL1xuICBhbmltYXRlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNb2RhbCBkYXRhXG4gICAqL1xuICBpbml0aWFsU3RhdGU/OiBQYXJ0aWFsPFQ+O1xuICAvKipcbiAgICogTW9kYWwgcHJvdmlkZXJzXG4gICAqL1xuICBwcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdO1xuICAvKipcbiAgICogYXJpYS1sYWJlbGxlZGJ5IGF0dHJpYnV0ZSB2YWx1ZSB0byBzZXQgb24gdGhlIG1vZGFsIHdpbmRvd1xuICAgKi9cbiAgYXJpYUxhYmVsbGVkQnk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhcmlhLWRlc2NyaWJlZGJ5IGF0dHJpYnV0ZSB2YWx1ZSB0byBzZXQgb24gdGhlIG1vZGFsIHdpbmRvd1xuICAgKi9cbiAgYXJpYURlc2NyaWJlZGJ5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgbW9kYWxDb25maWdEZWZhdWx0czogTW9kYWxPcHRpb25zID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIGZvY3VzOiB0cnVlLFxuICBzaG93OiBmYWxzZSxcbiAgaWdub3JlQmFja2Ryb3BDbGljazogZmFsc2UsXG4gIGNsYXNzOiAnJyxcbiAgYW5pbWF0ZWQ6IHRydWUsXG4gIGluaXRpYWxTdGF0ZToge31cbn07XG5cbmV4cG9ydCBjb25zdCBNT0RBTF9DT05GSUdfREVGQVVMVF9PVkVSUklERTogSW5qZWN0aW9uVG9rZW48TW9kYWxPcHRpb25zPiA9XG4gIG5ldyBJbmplY3Rpb25Ub2tlbjxNb2RhbE9wdGlvbnM+KCdvdmVycmlkZS1kZWZhdWx0LWNvbmZpZycpO1xuXG5leHBvcnQgY29uc3QgQ0xBU1NfTkFNRTogQ2xhc3NOYW1lID0ge1xuICBTQ1JPTExCQVJfTUVBU1VSRVI6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gIEJBQ0tEUk9QOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBPUEVOOiAnbW9kYWwtb3BlbicsXG4gIEZBREU6ICdmYWRlJyxcbiAgSU46ICdpbicsIC8vIGJzM1xuICBTSE9XOiAnc2hvdycgLy8gYnM0XG59O1xuXG5leHBvcnQgY29uc3QgU0VMRUNUT1I6IFNlbGVjdG9yID0ge1xuICBESUFMT0c6ICcubW9kYWwtZGlhbG9nJyxcbiAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gIERBVEFfRElTTUlTUzogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gIEZJWEVEX0NPTlRFTlQ6ICcubmF2YmFyLWZpeGVkLXRvcCwgLm5hdmJhci1maXhlZC1ib3R0b20sIC5pcy1maXhlZCdcbn07XG5cbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OUzogVHJhbnNpdGlvbkR1cmF0aW9ucyA9IHtcbiAgTU9EQUw6IDMwMCxcbiAgQkFDS0RST1A6IDE1MFxufTtcblxuZXhwb3J0IGNvbnN0IERJU01JU1NfUkVBU09OUzogRGlzbWlzc1JlYXNvbnMgPSB7XG4gIEJBQ0tSRE9QOiAnYmFja2Ryb3AtY2xpY2snLFxuICBFU0M6ICdlc2MnLFxuICBCQUNLOiAnYnJvd3Nlci1iYWNrLW5hdmlnYXRpb24tY2xpY2tlZCdcbn07XG4iXX0=