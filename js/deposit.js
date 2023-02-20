
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValue('deposit-amount');
    const preDepositAmount = getElementValue('total-deposit');

    const newDepositTotal = preDepositAmount + newDepositAmount;

    setTextElementValueById('total-deposit', newDepositTotal);



    //Balance amount 
    
    const preBalanceAmount = getElementValue('total-balance');
    const newBalanceTotal = preBalanceAmount + newDepositAmount;
    setTextElementValueById('total-balance', newBalanceTotal);
});