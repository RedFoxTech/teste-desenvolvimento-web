import { AfterViewInit } from '@angular/core';
import { TooltipConfig } from './tooltip.config';
export declare class TooltipContainerComponent implements AfterViewInit {
    classMap: {
        [key: string]: boolean;
    };
    placement: string;
    containerClass: string;
    animation: boolean;
    id: string;
    get isBs3(): boolean;
    constructor(config: TooltipConfig);
    ngAfterViewInit(): void;
}
