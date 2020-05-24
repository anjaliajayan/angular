import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'insuranceFilter'
})

export class insurancefilterPipe implements PipeTransform {
    transform(insuranceListss: any , searchTerm: string,) :any[]{
      //  console.log('insurance_list12.......',insuranceListss);
        if(!insuranceListss || !searchTerm){
           // console.log('insura_list.......',insuranceListss);
            return insuranceListss;
          
        }

        return insuranceListss.filter(insurance=>

            insurance.policy_name.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1

        );
        
    }

} 