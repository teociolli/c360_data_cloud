import { LightningElement,api,wire,track } from 'lwc';
import getPersonAccount from '@salesforce/apex/GB_c360DataCloud_Controller.getPersonAccount';

export default class c360DataCloud extends LightningElement {
    @api recordId;

    @api Location ='Zurich, Switzerland';
    @api Avatar = 'https://www.lightningdesignsystem.com/assets/images/avatar2.jpg';
    
    @api Attr1Label ='Customer ID';
    @api Attr1Value = '99900';
    @api Attr1Icon = 'utility:identity';

    @api Attr2Label ='Email Address';
    @api Attr2Value = 'your@email.com';
    @api Attr2Icon = 'utility:email';

    @api Attr3Label ='Loyalty Status22';
    @api Attr3Value = 'Silver';    
    @api Attr3Icon = 'utility:favorite';
    
    @api Attr4Label ='Segments';
    @api Attr4Value = 'Frequent Shoppers';    
    @api Attr4Icon = 'utility:chart';    

    @api Attr5Label ='Lifetime Value';
    @api Attr5Value = '$2,433.24';    
    @api Attr5Icon = 'utility:cart';     

    @api Attr6Label ='Propensity to Purchase';
    @api Attr6Value = 'More Likely';      
    @api Attr6Bar = 80;
    @api Attr6Icon = 'utility:magicwand';    

    @api Attr7Label ='Engagement Score';
    @api Attr7Value = '84 %';      
    @api Attr7DescriptionLine1 = 'Highly Engaged';
    @api Attr7DescriptionLine2 = 'Compared to 12k similar audience';
    @api Attr7Icon = 'utility:magicwand';    

    @track pAccount;
    
    @wire(getPersonAccount, {accountId: '$recordId'}) 
    loadAccount(result){
      console.log("Result "+ JSON.stringify(result));
      console.log("Result data "+ JSON.stringify(result.data));
        if (result.data) {
          this.pAccount = result.data;
          this.error = undefined;
        } else if (result.error) {
          this.error = result.error;
          console.log("Error "+ JSON.stringify(result.error));
          this.pAccount = undefined;
        }
      }

}