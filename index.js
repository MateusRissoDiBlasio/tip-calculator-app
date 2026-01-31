const formatterUS = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

var bill = document.getElementById('billInput');
var tip = 0;

const five = document.getElementById('five');
const ten = document.getElementById('ten');
const fifteen = document.getElementById('fifteen');
const twentyFive = document.getElementById('twentyFive');
const fifty = document.getElementById('fifty');
var custom = document.getElementById('customTip');

var customers = document.getElementById('customers');

var tipAmountPerson = document.getElementById('tipAmountPerson');
var billTotalPerson = document.getElementById('billTotalPerson');
tipAmountPerson.innerText = formatterUS.format(0);
billTotalPerson.innerText = formatterUS.format(0);

const resetBtn = document.getElementById('resetBtn');
const errorMsg = document.getElementById('errorMsg');
const errorMsg2 = document.getElementById('errorMsg2');
const customTipError = document.getElementById('customTipError');

five.addEventListener('click', function() {
    five.classList.add('active');
    ten.classList.remove('active');
    fifteen.classList.remove('active');
    twentyFive.classList.remove('active');
    fifty.classList.remove('active');
    
    if(custom.value !== ''){
        custom.value = '';
    }

    if(isNaN(bill.value) && bill.value !== '0'){
        errorMsg.classList.add('activeMsg');
        errorMsg.innerText = 'Only numbers';
        bill.classList.add('activeMsg');
    }else{
        errorMsg.classList.remove('activeMsg');
        errorMsg.innerText = `Can't be zero`;
        bill.classList.remove('activeMsg');
    }
    if(bill.value !== '0' && customers.value > 1){
        tip = Number(bill.value) * 0.05;

        tipAmountPerson.value = tip/Number(customers.value);
        tipAmountPerson.value = tipAmountPerson.value.toFixed(2);
        tipAmountPerson.innerText = formatterUS.format(tipAmountPerson.value);
        billTotalPerson.value = (Number(bill.value) + tip)/Number(customers.value);
        billTotalPerson.value = billTotalPerson.value.toFixed(2);
        billTotalPerson.innerText = formatterUS.format(billTotalPerson.value);
        
        if((bill.value !== '0' || bill.value !== '') && !(isNaN(bill.value))){
            errorMsg.classList.remove('activeMsg');
            bill.classList.remove('activeMsg');
        }
    }else if(bill.value === '0' || bill.value === ''){
        errorMsg.classList.add('activeMsg');
        bill.classList.add('activeMsg');
    }
                
    if(isNaN(customers.value) && customers.value !== '0'){
        errorMsg2.classList.add('activeMsg');
        errorMsg2.innerText = 'Only numbers';
        customers.classList.add('activeMsg');
    }else{
        errorMsg2.classList.remove('activeMsg');
        errorMsg2.innerText = `Can't be zero`;
        customers.classList.remove('activeMsg');
    }

    if((customers.value !== '0' || customers.value !== '') && !(isNaN(customers.value))){
        errorMsg2.classList.remove('activeMsg');
        customers.classList.remove('activeMsg');
    }
    
    if(customers.value === '' || customers.value === '0'){
        errorMsg2.classList.add('activeMsg');
        customers.classList.add('activeMsg');
    }

    if(customers.value === '1'){
        errorMsg2.classList.add('activeMsg');
        errorMsg2.innerText = `Needless to say`;
        customers.classList.add('activeMsg');
    }

});

ten.addEventListener('click', function() {
    ten.classList.add('active');
    five.classList.remove('active');
    fifteen.classList.remove('active');
    twentyFive.classList.remove('active');
    fifty.classList.remove('active');
    
    if(custom.value !== ''){
        custom.value = '';
    }

    if(isNaN(bill.value) && bill.value !== '0'){
        errorMsg.classList.add('activeMsg');
        errorMsg.innerText = 'Only numbers';
        bill.classList.add('activeMsg');
    }else{
        errorMsg.classList.remove('activeMsg');
        errorMsg.innerText = `Can't be zero`;
        bill.classList.remove('activeMsg');
    }
    if(bill.value !== '0' && customers.value > 1){
        tip = Number(bill.value) * 0.10;

        tipAmountPerson.value = tip/Number(customers.value);
        tipAmountPerson.value = tipAmountPerson.value.toFixed(2);
        tipAmountPerson.innerText = formatterUS.format(tipAmountPerson.value);
        billTotalPerson.value = (Number(bill.value) + tip)/Number(customers.value);
        billTotalPerson.value = billTotalPerson.value.toFixed(2);
        billTotalPerson.innerText = formatterUS.format(billTotalPerson.value);

        if((bill.value !== '0' || bill.value !== '') && !(isNaN(bill.value))){
            errorMsg.classList.remove('activeMsg');
            bill.classList.remove('activeMsg');
        }
    }else if(bill.value === '0' || bill.value === ''){
        errorMsg.classList.add('activeMsg');
        bill.classList.add('activeMsg');
    }
    
    if(isNaN(customers.value) && customers.value !== '0'){
        errorMsg2.classList.add('activeMsg');
        errorMsg2.innerText = 'Only numbers';
        customers.classList.add('activeMsg');
    }else{
        errorMsg2.classList.remove('activeMsg');
        errorMsg2.innerText = `Can't be zero`;
        customers.classList.remove('activeMsg');
    }

    if((customers.value !== '0' || customers.value !== '') && !(isNaN(customers.value))){
        errorMsg2.classList.remove('activeMsg');
        customers.classList.remove('activeMsg');
    }
    
    if(customers.value === '' || customers.value === '0'){
        errorMsg2.classList.add('activeMsg');
        customers.classList.add('activeMsg');
    }

    if(customers.value === '1'){
        errorMsg2.classList.add('activeMsg');
        errorMsg2.innerText = `Needless to say`;
        customers.classList.add('activeMsg');
    }
});

fifteen.addEventListener('click', function() {
    fifteen.classList.add('active');
    five.classList.remove('active');
    ten.classList.remove('active');
    twentyFive.classList.remove('active');
    fifty.classList.remove('active');
    
    if(custom.value !== ''){
        custom.value = '';
    }
    
    if(isNaN(bill.value) && bill.value !== '0'){
        errorMsg.classList.add('activeMsg');
        errorMsg.innerText = 'Only numbers';
        bill.classList.add('activeMsg');
    }else{
        errorMsg.classList.remove('activeMsg');
        errorMsg.innerText = `Can't be zero`;
        bill.classList.remove('activeMsg');
    }
    if(bill.value !== '0' && customers.value > 1){
        tip = Number(bill.value) * 0.15;

        tipAmountPerson.value = tip/Number(customers.value);
        tipAmountPerson.value = tipAmountPerson.value.toFixed(2);
        tipAmountPerson.innerText = formatterUS.format(tipAmountPerson.value);
        billTotalPerson.value = (Number(bill.value) + tip)/Number(customers.value);
        billTotalPerson.value = billTotalPerson.value.toFixed(2);
        billTotalPerson.innerText = formatterUS.format(billTotalPerson.value);
        if((bill.value !== '0' || bill.value !== '') && !(isNaN(bill.value))){
            errorMsg.classList.remove('activeMsg');
            bill.classList.remove('activeMsg');
        }
    }else if(bill.value === '0' || bill.value === ''){
        errorMsg.classList.add('activeMsg');
        bill.classList.add('activeMsg');
    }
    
    if(isNaN(customers.value) && customers.value !== '0'){
        errorMsg2.classList.add('activeMsg');
        errorMsg2.innerText = 'Only numbers';
        customers.classList.add('activeMsg');
    }else{
        errorMsg2.classList.remove('activeMsg');
        errorMsg2.innerText = `Can't be zero`;
        customers.classList.remove('activeMsg');
    }

    if((customers.value !== '0' || customers.value !== '') && !(isNaN(customers.value))){
        errorMsg2.classList.remove('activeMsg');
        customers.classList.remove('activeMsg');
    }
    
    if(customers.value === '' || customers.value === '0'){
        errorMsg2.classList.add('activeMsg');
        customers.classList.add('activeMsg');
    }

    if(customers.value === '1'){
        errorMsg2.classList.add('activeMsg');
        errorMsg2.innerText = `Needless to say`;
        customers.classList.add('activeMsg');
    }
});

twentyFive.addEventListener('click', function() {
    twentyFive.classList.add('active');
    five.classList.remove('active');
    ten.classList.remove('active');
    fifteen.classList.remove('active');
    fifty.classList.remove('active');

    if(custom.value !== ''){
        custom.value = '';
    }
    
    if(isNaN(bill.value) && bill.value !== '0'){
        errorMsg.classList.add('activeMsg');
        errorMsg.innerText = 'Only numbers';
        bill.classList.add('activeMsg');
    }else{
        errorMsg.classList.remove('activeMsg');
        errorMsg.innerText = `Can't be zero`;
        bill.classList.remove('activeMsg');
    }
    if(bill.value !== '0' && customers.value > 1){
        tip = Number(bill.value) * 0.25;

        tipAmountPerson.value = tip/Number(customers.value);
        tipAmountPerson.value = tipAmountPerson.value.toFixed(2);
        tipAmountPerson.innerText = formatterUS.format(tipAmountPerson.value);
        billTotalPerson.value = (Number(bill.value) + tip)/Number(customers.value);
        billTotalPerson.value = billTotalPerson.value.toFixed(2);
        billTotalPerson.innerText = formatterUS.format(billTotalPerson.value);
        
        if((bill.value !== '0' || bill.value !== '') && !(isNaN(bill.value))){
            errorMsg.classList.remove('activeMsg');
            bill.classList.remove('activeMsg');
        }
    }else if(bill.value === '0' || bill.value === ''){
        errorMsg.classList.add('activeMsg');
        bill.classList.add('activeMsg');
    }
    
    if(isNaN(customers.value) && customers.value !== '0'){
        errorMsg2.classList.add('activeMsg');
        errorMsg2.innerText = 'Only numbers';
        customers.classList.add('activeMsg');
    }else{
        errorMsg2.classList.remove('activeMsg');
        errorMsg2.innerText = `Can't be zero`;
        customers.classList.remove('activeMsg');
    }

    if((customers.value !== '0' || customers.value !== '') && !(isNaN(customers.value))){
        errorMsg2.classList.remove('activeMsg');
        customers.classList.remove('activeMsg');
    }
    
    if(customers.value === '' || customers.value === '0'){
        errorMsg2.classList.add('activeMsg');
        customers.classList.add('activeMsg');
    }

    if(customers.value === '1'){
        errorMsg2.classList.add('activeMsg');
        errorMsg2.innerText = `Needless to say`;
        customers.classList.add('activeMsg');
    }
});

fifty.addEventListener('click', function() {
    fifty.classList.add('active');
    five.classList.remove('active');
    ten.classList.remove('active');
    fifteen.classList.remove('active');
    twentyFive.classList.remove('active');
    
    if(custom.value !== ''){
        custom.value = '';
    }
    
    if(isNaN(bill.value) && bill.value !== '0'){
        errorMsg.classList.add('activeMsg');
        errorMsg.innerText = 'Only numbers';
        bill.classList.add('activeMsg');
    }else{
        errorMsg.classList.remove('activeMsg');
        errorMsg.innerText = `Can't be zero`;
        bill.classList.remove('activeMsg');
    }
    if(bill.value !== '0' && customers.value > 1){
        tip = Number(bill.value) * 0.50;
        
        tipAmountPerson.value = tip/Number(customers.value);
        tipAmountPerson.value = tipAmountPerson.value.toFixed(2);
        tipAmountPerson.innerText = formatterUS.format(tipAmountPerson.value);
        billTotalPerson.value = (Number(bill.value) + tip)/Number(customers.value);
        billTotalPerson.value = billTotalPerson.value.toFixed(2);
        billTotalPerson.innerText = formatterUS.format(billTotalPerson.value);

        if((bill.value !== '0' || bill.value !== '') && !(isNaN(bill.value))){
            errorMsg.classList.remove('activeMsg');
            bill.classList.remove('activeMsg');
        }
    }else if(bill.value === '0' || bill.value === ''){
        errorMsg.classList.add('activeMsg');
        bill.classList.add('activeMsg');
    }

    if(isNaN(customers.value) && customers.value !== '0'){
        errorMsg2.classList.add('activeMsg');
        errorMsg2.innerText = 'Only numbers';
        customers.classList.add('activeMsg');
    }else{
        errorMsg2.classList.remove('activeMsg');
        errorMsg2.innerText = `Can't be zero`;
        customers.classList.remove('activeMsg');
    }

    if((customers.value !== '0' || customers.value !== '') && !(isNaN(customers.value))){
        errorMsg2.classList.remove('activeMsg');
        customers.classList.remove('activeMsg');
    }
    
    if(customers.value === '' || customers.value === '0'){
        errorMsg2.classList.add('activeMsg');
        customers.classList.add('activeMsg');
    }

    if(customers.value === '1'){
        errorMsg2.classList.add('activeMsg');
        errorMsg2.innerText = `Needless to say`;
        customers.classList.add('activeMsg');
    }
});

custom.addEventListener('blur', function() {

    fifty.classList.remove('active');
    five.classList.remove('active');
    ten.classList.remove('active');
    fifteen.classList.remove('active');
    twentyFive.classList.remove('active');
    
    if(isNaN(bill.value) && bill.value !== '0'){
        errorMsg.classList.add('activeMsg');
        errorMsg.innerText = 'Only numbers';
        bill.classList.add('activeMsg');
    }else{
        errorMsg.classList.remove('activeMsg');
        errorMsg.innerText = `Can't be zero`;
        bill.classList.remove('activeMsg');
    }
    if(bill.value !== '0' && customers.value > 1){
        tip = Number(bill.value) * (custom.value/100);

        tipAmountPerson.value = tip/Number(customers.value);
        tipAmountPerson.value = tipAmountPerson.value.toFixed(2);
        tipAmountPerson.innerText = formatterUS.format(tipAmountPerson.value);
        billTotalPerson.value = (Number(bill.value) + tip)/Number(customers.value);
        billTotalPerson.value = billTotalPerson.value.toFixed(2);
        billTotalPerson.innerText = formatterUS.format(billTotalPerson.value);

        if((bill.value !== '0' || bill.value !== '') && !(isNaN(bill.value))){
            errorMsg.classList.remove('activeMsg');
            bill.classList.remove('activeMsg');
        }
    }else if(bill.value === '0' || bill.value === ''){
        errorMsg.classList.add('activeMsg');
        bill.classList.add('activeMsg');
    }
    
    if(isNaN(customers.value) && customers.value !== '0'){
        errorMsg2.classList.add('activeMsg');
        errorMsg2.innerText = 'Only numbers';
        customers.classList.add('activeMsg');
    }else{
        errorMsg2.classList.remove('activeMsg');
        errorMsg2.innerText = `Can't be zero`;
        customers.classList.remove('activeMsg');
    }

    if((customers.value !== '0' || customers.value !== '') && !(isNaN(customers.value))){
        errorMsg2.classList.remove('activeMsg');
        customers.classList.remove('activeMsg');
    }
    
    if(customers.value === '' || customers.value === '0'){
        errorMsg2.classList.add('activeMsg');
        customers.classList.add('activeMsg');
    }

    if(customers.value === '1'){
        errorMsg2.classList.add('activeMsg');
        errorMsg2.innerText = `Needless to say`;
        customers.classList.add('activeMsg');
    }

    if(custom.value === '0'){
        custom.classList.add('activeMsg');
        customTipError.classList.add('activeMsg');
    }
    if(custom.value === ''){
        custom.classList.remove('activeMsg');
        customTipError.classList.remove('activeMsg');
    }

    if(isNaN(custom.value) && custom.value !== '0'){
        custom.classList.add('activeMsg');
        customTipError.innerText = 'Only numbers';
        customTipError.classList.add('activeMsg');
    }else{
        customTipError.innerText = `Can't be zero`;
    }

});


resetBtn.addEventListener('click', function() {

    five.classList.remove('active');
    ten.classList.remove('active');
    fifteen.classList.remove('active');
    twentyFive.classList.remove('active');
    fifty.classList.remove('active');
    bill.value = '';
    customers.value = '';
    custom.value = '';
    tipAmountPerson.innerText = formatterUS.format(0);
    billTotalPerson.innerText = formatterUS.format(0);
    errorMsg.classList.remove('activeMsg');
    errorMsg2.classList.remove('activeMsg');
    customers.classList.remove('activeMsg');
    bill.classList.remove('activeMsg');
});