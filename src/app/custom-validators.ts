import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    // static enables to access functions without having to instantiate the class
    static isForbiddenName(formControl: FormControl) : {[s: string]: boolean} { 
        if(formControl.value === 'test') {
          return {'isForbiddenName' : true}
        } else {
          return null;
        }
    }
    
    static asyncIsBadName(formControl: FormControl) : Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
          setTimeout(() => {
            if(formControl.value === 'test2') {
              resolve({'isBadName' : true});
            } else {
              resolve(null);
            }
          },1500);
        });
        return promise;
    }
}