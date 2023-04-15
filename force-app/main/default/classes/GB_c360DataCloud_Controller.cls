public with sharing class GB_c360DataCloud_Controller {
    
    @AuraEnabled(cacheable=true scope='global')
    public static Account getPersonAccount(String accountId) {
        System.debug('Get Person Account for id '+accountId);
         
         accountId = accountId.trim();
         if (accountId == '') {
             return null;
         }
         
        return [select Id, Name, AccountNumber from Account where ID = :accountId];
         }
}