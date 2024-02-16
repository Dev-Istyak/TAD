const myinput=document.getElementById("myinput");
const mysubmit=document.getElementById("mysubmit");
let purchaseAmount;
const result=document.getElementById("result");
let discount;
mysubmit.onclick=function(){
    
    purchaseAmount=myinput.value;
    purchaseAmount=Number(purchaseAmount);
    //if(purchaseAmount>=1000){
    //result.textContent=(`your total is  $${purchaseAmount-purchaseAmount*(25/100)}`);
    //}
   // else
   // {
   //     result.textContent=(`your total is  $${purchaseAmount}`);
   // }
   let discount=purchaseAmount>= 1000?.25:0;
   let discountamount=purchaseAmount-purchaseAmount*discount;
   result.textContent=(`your total is  $${discountamount}`);

};
