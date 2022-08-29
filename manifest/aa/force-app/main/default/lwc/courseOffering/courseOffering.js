import { LightningElement, track} from 'lwc';
import Course_Offering__c_OBJECT from '@salesforce/schema/Course_Offering__c';
import NAME_FIELD from '@salesforce/schema/Course_Offering__c.Course__c';
import createAccount from '@salesforce/apex/createAcc.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordWithFieldIntigrity extends LightningElement {

    @track Course__c = NAME_FIELD;
    
    rec = {
        Course__c : this.Course__c
        
    }

    handleNameChange(event) {
        this.rec.Course__c = event.target.value;
        console.log("name1", this.rec.Course__c);
    }
    
   
    handleClick() {
        createAccount({ acc : this.rec })
            .then(result => {
                this.message = result;
                this.error = undefined;
                if(this.message !== undefined) {
                    this.rec.Course__c = '';
                  
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Account created',
                            variant: 'success',
                        }),
                    );
                }
                
                console.log(JSON.stringify(result));
                console.log("result", this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log("error", JSON.stringify(this.error));
            });
    }
}