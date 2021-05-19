import { PopoverConfig } from './popover.config';
export declare class PopoverContainerComponent {
    placement: string;
    title: string;
    containerClass: string;
    popoverId: string;
    get isBs3(): boolean;
    constructor(config: PopoverConfig);
}
