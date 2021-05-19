import { BehaviorSubject, Observable } from 'rxjs';
export declare class BsLocaleService {
    private _defaultLocale;
    private _locale;
    private _localeChange;
    get locale(): BehaviorSubject<string>;
    get localeChange(): Observable<string>;
    get currentLocale(): string;
    use(locale: string): void;
}
