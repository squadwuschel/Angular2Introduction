import {Pipe, PipeTransform} from '@angular/core';


@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
    transform(value: string, args: string[]) {
        if (value) {
            var length: number = 10;
            var end: string = "...";
            //Erstes Arg ist die Länge des Strings
            if (args.length > 0) {
                length = parseInt(args[0]);
            }

            //Das zweite Argument ist der Wert mit dem das ende dargestellt werden soll z.B. "..."
            if (args.length > 1) {
                end = args[1];
            }

            if (value.length <= length || value.length - end.length <= length) {
                return value;
            } else {
                return String(value).substring(0, length - end.length) + end;
            }
        }

        return value;
    }
}