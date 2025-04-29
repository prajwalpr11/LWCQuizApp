

public without sharing class MapHelper {
    
    @AuraEnabled(cacheable = true)
    
    public static Map<Id, Account> mapAccount(){
        
        //Map<Id,Account> accMap = new Map<Id,Account>();

        return new Map<Id,Account>([Select id, Name, industry From Account LIMIT 5]);
    }
    
}