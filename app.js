window.onload = () => {
    
    //calling a function calculateTip which will calculate the tip for the bill.
    document.querySelector('#calculate').onclick = calculateTip;

    //calling the function resetPage which will reset the page.
    document.querySelector('#reset-button').onclick = resetPage;
}

//function to calulate the tip and return the result
function calculateTip() {

    const amountBillElement = document.getElementById('amountBill');
    const percentageTipElement = document.getElementById('percentageTip');
    const peopleNumberElement = document.getElementById('peopleNumber');

    //Getting the value of the Bill, TipPercentage and no of people
    const billAmount = Math.abs(parseFloat(amountBillElement.value));
    const tipPercentage = Math.abs(parseFloat(percentageTipElement.value));
    const peolpeNumber = Math.abs(parseInt(peopleNumberElement.value));
    //------------------------------------------------------------------------


    //------------Checking for Invalid Input----------------------------------
    if(isNaN(billAmount) || isNaN(tipPercentage) || isNaN(peolpeNumber))
    {
        alert("Please make sure all values are entered and are correct.");
    }
    //------------------------------------------------------------------------

    
    //-------------Tip percentage valid value checking------------------------
    let totalTip;

    if(tipPercentage>=0 && tipPercentage<=100)
    {
        totalTip = billAmount * tipPercentage / 100;
    }
    else if(tipPercentage<=0 || tipPercentage>=100)
    {
        alert("Please provide a tip percentage that is greater than 0 or less than 100.")
    }
    //-------------------------------------------------------------------------------------


    let totalToPay;
    let tipPerPerson;

    //--------------Checking for the valid no of people------------------------------------
    if(peolpeNumber>0)
    {
        totalToPay = (billAmount + totalTip)/peolpeNumber;
        tipPerPerson = totalTip / peolpeNumber;
    }

    else if(peolpeNumber<=0)
    {
        alert("The number of people cannot be less than one.");
    }
    //--------------------------------------------------------------------------------------
    

    //-----------------Always set to two decimal places.------------------------------------
    totalTip = totalTip.toFixed(2);
    totalToPay = totalToPay.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    //--------------------------------------------------------------------------------------


    //---------------Display the result-----------------------------------------------------
    document.getElementById('totalPayPerson').innerText = totalToPay;
    document.getElementById('perPerson').innerText = tipPerPerson;


}


//function to reset the form - clear the input fields.
function resetPage() {
    document.getElementById("form").reset();
}