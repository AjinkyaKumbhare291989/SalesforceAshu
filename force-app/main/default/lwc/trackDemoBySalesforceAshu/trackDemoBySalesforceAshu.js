import { LightningElement,track } from 'lwc';

export default class TrackDemoBySalesforceAshu extends LightningElement {

    @track fullName = { firstname: "" , lastName: ""};

    handleChange(event){
        const field = event.target.name;
        // window.alert(field)

        if(field === 'firstname'){
            this.fullName.firstname = event.target.value;
        }
        else if(field === 'lastname'){
            this.fullName.lastname = event.target.value;

        }

    }

}