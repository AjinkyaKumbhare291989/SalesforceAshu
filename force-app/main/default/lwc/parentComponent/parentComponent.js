import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    handleclick(){
        this.template.querySelector("c-child-Component").handleChangeValue();
    }
}