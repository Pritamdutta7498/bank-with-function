document.getElementById('btn-withdraw').addEventListener('click', function(){

const newWithdrawAmount = getInputFieldValue('withdraw-amount');
const preWithdrawAmount = getElementValue('total-withdraw');
const newWithdrawTotal = preWithdrawAmount + newWithdrawAmount;
setTextElementValueById('total-withdraw', newWithdrawTotal);


const preBalanceTotal = getElementValue('total-balance');
const newBalanceTotal = preBalanceTotal - newWithdrawAmount;
setTextElementValueById('total-balance', newBalanceTotal);
})