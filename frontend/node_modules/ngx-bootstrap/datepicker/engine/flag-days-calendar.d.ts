import { DaysCalendarViewModel, DatepickerDateCustomClasses, DatepickerDateTooltipText } from '../models';
export interface FlagDaysCalendarOptions {
    isDisabled: boolean;
    minDate: Date;
    maxDate: Date;
    daysDisabled: number[];
    datesDisabled: Date[];
    datesEnabled: Date[];
    hoveredDate: Date;
    selectedDate: Date;
    selectedRange: Date[];
    displayMonths: number;
    monthIndex: number;
    dateCustomClasses: DatepickerDateCustomClasses[];
    dateTooltipTexts: DatepickerDateTooltipText[];
}
export declare function flagDaysCalendar(formattedMonth: DaysCalendarViewModel, options: FlagDaysCalendarOptions): DaysCalendarViewModel;
