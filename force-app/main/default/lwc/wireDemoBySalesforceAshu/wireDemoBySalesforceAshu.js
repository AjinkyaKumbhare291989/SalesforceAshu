import { LightningElement, wire, track } from 'lwc';

const columns = [
    { label : "Name" , field : "Name" },
    { label : "Player Record Id" , field : "ID"},
];
export default class WireDemoBySalesforceAshu extends LightningElement {

        @track columns = columns;
}