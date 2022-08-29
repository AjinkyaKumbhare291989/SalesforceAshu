import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api itemName = "Salesforce Ashu";

    @api handleChangeValue(){
        this.itemName = "Salesforce LWC Demo";
    }
}