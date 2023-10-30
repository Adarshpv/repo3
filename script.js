document.addEventListener("DOMContentLoaded", function() {
    const billAmountInput = document.getElementById("billAmount");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const tipRangeInput = document.getElementById("tipRange");
    const tipAmountInput = document.getElementById("tipAmount");
    const totalBillInput = document.getElementById("totalBill");
    const form = document.getElementById("tipCalculatorForm");
    form.addEventListener("input", function() {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = tipRangeInput.value;
        
        
        if (isNaN(billAmount)) {
            alert("Please enter a valid number for the Bill Amount.");
            return;
        }
        
       
        const tipAmount = (billAmount * tipPercentage / 100).toFixed(2);
        const totalBill = (billAmount + parseFloat(tipAmount)).toFixed(2);
        
        
        tipPercentageInput.value = tipPercentage + "%";
        tipAmountInput.value = tipAmount;
        totalBillInput.value = totalBill;
    });
});
