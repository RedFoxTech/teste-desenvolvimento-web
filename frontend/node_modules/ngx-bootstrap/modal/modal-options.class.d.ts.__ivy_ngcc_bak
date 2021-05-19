import { StaticProvider, InjectionToken } from '@angular/core';
import { ClassName, DismissReasons, Selector, TransitionDurations } from './models';
export declare class ModalOptions<T = Object> {
    /**
     *  Allow user to ID for the modal. Otherwise, a unique number will be given
     */
    id?: number;
    /**
     *  Includes a modal-backdrop element. Alternatively,
     *  specify static for a backdrop which doesn't close the modal on click.
     */
    backdrop?: boolean | 'static';
    /**
     * Closes the modal when escape key is pressed.
     */
    keyboard?: boolean;
    focus?: boolean;
    /**
     * Shows the modal when initialized.
     */
    show?: boolean;
    /**
     * Ignore the backdrop click
     */
    ignoreBackdropClick?: boolean;
    /**
     * Css class for opened modal
     */
    class?: string;
    /**
     * Toggle animation
     */
    animated?: boolean;
    /**
     * Modal data
     */
    initialState?: Partial<T>;
    /**
     * Modal providers
     */
    providers?: StaticProvider[];
    /**
     * aria-labelledby attribute value to set on the modal window
     */
    ariaLabelledBy?: string;
    /**
     * aria-describedby attribute value to set on the modal window
     */
    ariaDescribedby?: string;
}
export declare const modalConfigDefaults: ModalOptions;
export declare const MODAL_CONFIG_DEFAULT_OVERRIDE: InjectionToken<ModalOptions>;
export declare const CLASS_NAME: ClassName;
export declare const SELECTOR: Selector;
export declare const TRANSITION_DURATIONS: TransitionDurations;
export declare const DISMISS_REASONS: DismissReasons;
