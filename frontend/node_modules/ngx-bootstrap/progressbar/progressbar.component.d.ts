import { ProgressbarConfig } from './progressbar.config';
import { ProgressbarType } from './progressbar-type.interface';
import { BarComponent } from './bar.component';
export declare class ProgressbarComponent {
    /** if `true` changing value of progress bar will be animated */
    set animate(value: boolean);
    /** If `true`, striped classes are applied */
    set striped(value: boolean);
    /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
    type: ProgressbarType;
    /** current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     */
    set value(value: number | any[]);
    isStacked: boolean;
    _striped: boolean;
    _animate: boolean;
    _max: number;
    _value: number | any[];
    get isBs3(): boolean;
    /** maximum total value of progress element */
    get max(): number;
    set max(v: number);
    addClass: boolean;
    bars: BarComponent[];
    constructor(config: ProgressbarConfig);
    addBar(bar: BarComponent): void;
    removeBar(bar: BarComponent): void;
}
