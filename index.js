const Calculate = document.getElementById("login-submit");
const Income = document.getElementById("income");
const Food = document.getElementById("food");
const Rent = document.getElementById("rent");
const Clothes = document.getElementById("clothes");
const Expenses = document.getElementById("Total-Expenses");
const Balence = document.getElementById("Balance");
const Saving = document.getElementById("Save-button");
const Percentage = document.getElementById("Save");
const AmountToSave = document.getElementById("Saving-Amount");
const RemainingBalance = document.getElementById("Remaining-Balance");


Calculate.addEventListener("click", ()=>{
    if(Income.value == '' || Food.value == '' || Rent.value == '' || Clothes.value == ''){
        alert("Fill the form");
    }else{
        let TotalIncome = Number(Income.value);
        let TotalExpenses = (Number(Food.value) + Number(Rent.value) + Number(Clothes.value));
        Expenses.value = String(TotalExpenses);
        Balence.value = String(TotalIncome - TotalExpenses);
    }
});


const percentage = (num, per)=>{
    return (num/100)*per
}

Saving.addEventListener("click", ()=>{
    SavingAmount = percentage(Number(Income.value), Number(Percentage.value));
    AmountToSave.value = String(SavingAmount);
    RemainingBalance.value = String(Balence.value - SavingAmount);

    if(Number(RemainingBalance.value) < 0){
        alert(`Can not save more then remaining balance. Your remaining balance is ${Balence.value} you are trying to save ${SavingAmount}`)
        RemainingBalance.value = Percentage.value = AmountToSave.value = "";
    }
    console.log(typeof(RemainingBalance.value));
});

