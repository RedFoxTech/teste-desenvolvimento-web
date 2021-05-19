import { EventEmitter } from '@angular/core';
export declare class BsModalRef<T = any> {
    /**
     *  Allow user to ID for the modal. Otherwise, a unique number will be given
     */
    id: number;
    /**
     * Reference to a component inside the modal. Null if modal's been created with TemplateRef
     */
    content?: T | null;
    /**
     * Hides the modal
     */
    hide: () => void;
    /**
     * Sets new class to modal window
     */
    setClass: (newClass: string) => void;
    /**
     * Event that is fired when the modal behind the ref starts hiding
     */
    onHide: EventEmitter<any>;
    /**
     * Event that is fired when the modal behind the ref finishes hiding
     */
    onHidden: EventEmitter<any>;
}
