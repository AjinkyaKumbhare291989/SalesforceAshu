trigger AccountPrefix on Account (before insert) {
    
  for (Account Acc : Trigger.new)
    {
        if(Acc.Gender__c == 'Male'){
            Acc.Name = 'Mr. ' + Acc.Name;
        }
        else {
            if(Acc.Gender__c == 'Female'){
                acc.Name = 'Miss. ' + Acc.Name;
                
                            }
    else{
                acc.adderror('Transgender');
            }
        }
    }
    
    
    
}