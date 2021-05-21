import { OnDestroy, OnInit, ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import { ProgressbarComponent } from './progressbar.component';
export declare class BarComponent implements OnInit, OnDestroy {
    private el;
    private renderer;
    max: number;
    /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
    type: string;
    /** current value of progress bar */
    value: number;
    get setBarWidth(): number;
    addClass: boolean;
    get isBs3(): boolean;
    striped: boolean;
    animate: boolean;
    percent: number;
    progress: ProgressbarComponent;
    private _prevType;
    constructor(el: ElementRef, progress: ProgressbarComponent, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    recalculatePercentage(): void;
    private applyTypeClasses;
}
