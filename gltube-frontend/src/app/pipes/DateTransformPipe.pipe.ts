import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "dateTransformPipe"
})
export class DateTransformPipe implements PipeTransform {
    transform(input: any, args?: any) {
        
    }
    
}