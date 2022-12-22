const billinput = document.querySelector('#bill-input');
let btnlist = document.querySelectorAll('.btn');
const peoplenum = document.querySelector('#people-num');
const customtip = document.querySelector('#custom-tip');
const totalval = document.querySelector('.total-val');
const tipresult  = document.querySelector('.tip-result')
const resets = document.querySelector('.reset')
var bill,tip,peoples,results,tipres;
bill =1;
tip = 1;
peoples =1;
tipres =1;
tipresult.textContent =(0.0).toFixed(2);
totalval.textContent = (0.0).toFixed(2);

billinput.addEventListener('input',() => {
    bill =parseInt(billinput.value);
    console.log(bill);
    totals()
});

btnlist.forEach((e) => {
    e.addEventListener("click", (event) => {
      btnlist.forEach((tipBtn) => {
        tipBtn.classList.remove("actives");
      });
      tip = parseInt(e.value)/100;
      if (event.target.classList.contains("custom-tip-input")) {
        event.target.parentElement.classList.add("actives");
        event.target.parentElement.classList.remove("inactive");
      } else {
        event.target.classList.add("actives");
      }
  
      totals();
    });
  })
  
customtip.addEventListener('input',() =>{
    tip = parseInt(customtip.value)/100;
    console.log(customs);
    totals()
});

peoplenum.addEventListener('input',() =>{
    peoples = parseInt(peoplenum.value);
    console.log(peoples);
    totals()
});
resets.addEventListener('click', () =>{

    tipresult.textContent =(0.0).toFixed(2);
    totalval.textContent = (0.0).toFixed(2);
    customtip.value = (0).toFixed(2);

    resets.classList.add('inactive')
    resets.classList.remove('actives')
});
function totals() {
    tipres = eval(bill + tip );
    results = eval((bill / peoples) + tip);
    tipresult.textContent = tipres
     totalval.textContent = results;

     if ( tipresult.textContent != (0.0).toFixed(2) || totalval.textContent != (0.0).toFixed(2) ) {
        resets.classList.add('actives')
        resets.classList.remove('inactive')
     }
}
