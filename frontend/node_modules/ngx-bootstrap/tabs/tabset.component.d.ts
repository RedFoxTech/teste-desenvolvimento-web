import { OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { TabDirective } from './tab.directive';
import { TabsetConfig } from './tabset.config';
export declare class TabsetComponent implements OnDestroy {
    private renderer;
    private elementRef;
    /** if true tabs will be placed vertically */
    get vertical(): boolean;
    set vertical(value: boolean);
    /** if true tabs fill the container and have a consistent width */
    get justified(): boolean;
    set justified(value: boolean);
    /** navigation context class: 'tabs' or 'pills' */
    get type(): string;
    set type(value: string);
    get isKeysAllowed(): boolean;
    set isKeysAllowed(value: boolean);
    clazz: boolean;
    tabs: TabDirective[];
    classMap: {
        [key: string]: boolean;
    };
    /** aria label for tab list */
    ariaLabel: string;
    protected isDestroyed: boolean;
    protected _vertical: boolean;
    protected _justified: boolean;
    protected _type: string;
    protected _isKeysAllowed: boolean;
    constructor(config: TabsetConfig, renderer: Renderer2, elementRef: ElementRef);
    ngOnDestroy(): void;
    addTab(tab: TabDirective): void;
    removeTab(tab: TabDirective, options?: {
        reselect: boolean;
        emit: boolean;
    }): void;
    keyNavActions(event: KeyboardEvent, index: number): void;
    protected getClosestTabIndex(index: number): number;
    protected hasAvailableTabs(index: number): boolean;
    protected setClassMap(): void;
}
