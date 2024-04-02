let Balance= document.getElementById("Balance");
let income= document.getElementById("income");
let expense= document.getElementById("expense");
let historyprocess= document.getElementById("historyprocess");
let text= document.getElementById("text");
let amount= document.getElementById("amount");


function sub()
{
    if(amount.value==""|| text.value==""){
        alert(" fill the details properly");
    }
    else{
        if(amount.value<0){
            expense.innerText=+expense.innerText+ +amount.value.slice(1,);    
            Balance.innerText=+Balance.innerText- +amount.value.slice(1,);
            // amount.value="";
            // text.value="";

        }
        else{
            income.innerText=+income.innerText+ +amount.value; 
            Balance.innerText=+Balance.innerText+ +amount.value;
            historyprocess.innerHTML+=`<button style="margin-right:2px">${text.value}<br>${amount.value}</button>`
            // amount.value="";
            // text.value="";

        }
    }
}

