function productQuantity(product,operator){
  const inputField=document.getElementById(product + '-number').value;
  let convertQuantity=parseInt(inputField);
  if(operator=='plus'){
      convertQuantity=convertQuantity+1;
  }
  else{
    if(convertQuantity<1){
        return;
    }
      convertQuantity=convertQuantity-1;
  }
  document.getElementById(product + '-number').value=convertQuantity;
  productPrice(product);
}
//calculate
  const phonePrice=1219;
  const casePrice=59;
  let phoneTotal = 0;
  let caseTotal = 0;
function productPrice(product){
  const inputField=document.getElementById(product + '-number').value;
  let convertQuantity=parseInt(inputField);
  if(product==='phone'){
    phoneTotal=phonePrice*convertQuantity;
    productTotalUpdate(product,phoneTotal);
  }
  else{
    caseTotal=casePrice*convertQuantity;
    productTotalUpdate(product,caseTotal);
  }
  productCheckout(phoneTotal,caseTotal);
 // checkBtn(totalprice);
}
//set value
function productTotalUpdate(product,total){
    let productTotal= document.getElementById(product + '-total');
    productTotal.innerText=total;
}
//total calculate
function productCheckout(phoneTotal,caseTotal){
    const total=phoneTotal+caseTotal;
    const tax=total/10;
    const totalprice=total+tax;
    document.getElementById('sub-total').innerText=total;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('total-price').innerText=totalprice;
    document.getElementById('checkbtn').addEventListener('click',function(){
        document.getElementById('total-amount').innerText=document.getElementById('total-price').innerText;
    })
}
function saveBtn(){
    alert("Saved!!!!");
}