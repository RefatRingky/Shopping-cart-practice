function updateCaseNumber(product,price,isIncreasing) {
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
      
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if( productNumber > 0){
       productNumber = parseInt(productNumber) - 1; 
    }
    productInput.value = productNumber;

    // update total
     const productTotal = document.getElementById(product +'-total');
     productTotal.innerText = productNumber * price;
    //  update value subtotal
    calculateTotal();
}
// for case  event handler function
document.getElementById('case-plus').addEventListener('click',function () {
    updateCaseNumber( 'case',59,true);
});
document.getElementById('case-minus').addEventListener('click',function () {
    updateCaseNumber('case',59,false)

});

// for phone increase decrease event handler
document.getElementById('phone-plus').addEventListener('click',function () {
    updateCaseNumber( 'phone',1229,true);
})
document.getElementById('phone-minus').addEventListener('click',function () {
    updateCaseNumber('phone',1229,false)
})

// subtotal section
function getInputValue(product) {
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal+caseTotal;
    document.getElementById('sub-total').innerText = subTotal;

}