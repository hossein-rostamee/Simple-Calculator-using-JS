const
    inp1 = document.getElementById('first-element'),
    inp2 = document.getElementById('second-element'),
    selector = document.getElementById('list'),
    resultElem = document.getElementById ( 'display-result' )
;

function calc () {
    eval("resultElem.innerHTML =" + inp1.value + selector.value + inp2.value ) ; 
    // const
    //     firstNum = parseInt ( inp1.value ),
    //     secondNum = parseInt ( inp2.value ),
    //     operator = selector.value
    // ;
    // let result;
    // switch ( operator ) {
    //     case "+" :
    //         result = firstNum + secondNum;
    //         break;  
    //     case "*" : 
    //         result = firstNum * secondNum;
    //         break;  
    //     case "/" : 
    //         result = firstNum / secondNum;
    //         break;  
    //     case "-" : 
    //         result = firstNum - secondNum;
    //         break;  
    // }
    // resultElem.innerHTML = result;
}
