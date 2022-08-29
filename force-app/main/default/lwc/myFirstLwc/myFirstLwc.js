import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class MyFirstLwc extends LightningElement {

   mytitle = "Salesforce Ashu";
   
   //ist function 
   
   handleClick(){
      this.ShowToast();
   }

   //2nd function
   ShowToast(){
      const event = new ShowToastEvent({
         title : 'Show tost Demo',
         message : 'Want to Display toast Example',
         variant : 'error',
      })
      this.dispatchEvent(event);
   }
}