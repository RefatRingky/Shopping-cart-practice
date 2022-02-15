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