const select :Function = (el:string , all:boolean = false) => {
    el = el.trim();
    let element:any;
    if (all){
        element = Array.from( document.querySelectorAll(el));
    }
    else{
        element = document.querySelector(el);
    }
    if (element === null || element === undefined || element.length === 0) {
        console.log('no element found')
    } else {
        return (element)
    }
}

let inputText:HTMLTextAreaElement = select('#inputText');
let truncateText:HTMLTextAreaElement = select('#truncateText');
let textLength:HTMLInputElement = select('.textLength');
let radio:NodeListOf<HTMLInputElement> = select ('input[name="radio"]', true);



let radioValue:string = 'right';
let lengthOfTheText:number = 5;


let changeInRadio = (e:any) => {
    radioValue = e.target.value;
}




let rightLeftDecision  = (radVal:string, str:string, n:number) => {
    let decided:string = str;
    let num = n;
     radioValue = radioValue.trim();

    if(radioValue === 'right'){
       let takeRight = decided.substring(0, num);
       return takeRight;
    }else{
        let takeLeft = decided.substring(decided.length-num, decided.length);
        return takeLeft;
    }
 
}




let changeTextLength = () => {
    lengthOfTheText =  Number.parseInt(textLength.value);
}

// let truncateFunction = (n:number) => {
//     let actualString:string = rightLeftDecision(radioValue, inputText.value);
//     let truncatedText:string = actualString.substring(0, n);
//     // console.log('truncated', truncatedText)
//     return truncatedText
// }

let inputFunction = () => {
    // let inputValue = inputText.value;
   let truncatedWord =  rightLeftDecision(radioValue, inputText.value, lengthOfTheText);
    truncateText.value = truncatedWord ;
}

inputText.addEventListener('input', () => {
    inputFunction()
})

textLength.addEventListener('input', () => {
    changeTextLength()
    inputFunction()
})




radio.forEach((eachELe) => {
    eachELe.addEventListener('change', (e:any) => {
        changeInRadio(e);
        inputFunction();
    })
})
