import { ElementRef, OnInit, Renderer2 } from '@angular/core';
/** This component will be added as background layout for modals if enabled */
import * as ɵngcc0 from '@angular/core';
export declare class ModalBackdropComponent implements OnInit {
    get isAnimated(): boolean;
    set isAnimated(value: boolean);
    get isShown(): boolean;
    set isShown(value: boolean);
    element: ElementRef;
    renderer: Renderer2;
    protected _isAnimated: boolean;
    protected _isShown: boolean;
    constructor(element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalBackdropComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ModalBackdropComponent, "bs-modal-backdrop", never, {}, {}, never, never>;
}

//# sourceMappingURL=modal-backdrop.component.d.ts.map