import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/^\w/, c => c.toUpperCase());
    }
}