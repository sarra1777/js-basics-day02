// .checked = property that determines the checked state of an html checkbox or radio button element
const checkbox = document.getElementById('check');
const rad = document.getElementById('rad');
const rad2 = document.getElementById('rad2');
const rad3 = document.getElementById('rad3');
mysub = document.getElementById('mysub');
const subres = document.getElementById('subres');
const payres = document.getElementById('payres');

mysub.onclick = function(){
    if (checkbox.checked){
        subres.textContent = 'you are subscribed ! ';
    }
    else{
        subres.textContent = 'you are not subscribed !';
    }
    if(rad.checked){
        payres.textContent = 'you have paid with visa !';
    }
    else if(rad2.checked){
        payres.textContent = 'you are paying with master card !';
    }
    else if(rad3.checked){
        payres.textContent = 'you are paying with paypal !';
    }
    else{
        payres.textContent = 'you must select a payment type !';
    }
}


