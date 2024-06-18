let Numbers = ['1','2','3','4','5','6','7','8','9','0']
let Operators = ['+', '-', '*', '/', '÷','%','x']
let equals = ['=']


let Calculationstring =''
let Screenstring=''
let screendisplay = document.getElementById('display')

function Updatedisplay(Output){
    screendisplay.innerHTML =`<p class="fs-1">${Output}</p>`
    }

let operators = ['+', '-', 'x', '*', '/', '÷','%']
function endsWithNumber(calculate) {
    let lastChar = calculate.charAt(calculate.length - 1);
    return !operators.includes(lastChar);
}



function ProceedCalculation(calculate){
      console.log(calculate)
      if( endsWithNumber(calculate) && calculate.length>=3){
      let Finalvalue = eval(calculate)
      console.log(Finalvalue)
         return Finalvalue;    
}
}  

function deletelastchar(deletelastone){
    let splittingprocess = deletelastone.split('')
    console.log(splittingprocess)
    splittingprocess.pop()
    let UpdateNum = splittingprocess.join('')
    console.log(UpdateNum)
    return UpdateNum;
    }

function Removeoneoperatoriftwo(Calculationstring){
    console.log(Calculationstring)
if(TwoOperatorscheck(Calculationstring)){
    Calculationstring = deletelastchar(Calculationstring)
    return Calculationstring
}
else{
    return Calculationstring
}
}    

function TwoOperatorscheck(calculate){
    if (calculate.length >= 2){
        console.log(calculate)
    let lastChar = calculate.charAt(calculate.length - 1);
    console.log(lastChar)
    let lastBeforeChar = calculate.charAt(calculate.length - 2);
    console.log(lastBeforeChar)
    return operators.includes(lastChar) && operators.includes(lastBeforeChar)
    }
    return false
}
    

document.addEventListener('keydown', function(event){
    
    console.log(`Key pressed: ${event.key}`);
    if(equals.includes(event.key) || event.key==='Enter'){
        let equals =  ProceedCalculation(Calculationstring)
        Updatedisplay(equals)
        Calculationstring =''
    }

    else if(event.key === 'Shift'){
        return 
    }

    else if(Operators.includes(event.key)){

        Calculationstring += event.key
        console.log(Calculationstring)
        let firstlevelcheck = Removeoneoperatoriftwo(Calculationstring)
        Calculationstring = firstlevelcheck
        Updatedisplay(Calculationstring)
        console.log(Calculationstring)
    }

    else if(Numbers.includes(event.key) || Operators.includes(event.key)){
        console.log('A number or Operator')
        Calculationstring += event.key
        Updatedisplay(Calculationstring)
    }

    else if(event.key ==='Backspace'){ 
        let removingoperation =   deletelastchar(Calculationstring)
        Calculationstring = removingoperation
        console.log(Calculationstring)
       Updatedisplay(removingoperation)
       }
   
   else if(event.key === 'Delete'){
       Calculationstring = ''
       Output = 0
       Updatedisplay(Output)
   }

    else{
        console.log('Not a Number')
        alert('Only Numbers are allowed')
    }

})






document.querySelectorAll('button').forEach(button => {button.addEventListener('click', ()=>{

    let action = button.getAttribute('data-action')
    let Operators = button.getAttribute('id')
    console.log(Operators)
    
    
    
    if(action === 'ClearLastOne'){ 
         let removingoperation =   deletelastchar(Calculationstring)
         Calculationstring = removingoperation
         console.log(Calculationstring)
        Updatedisplay(removingoperation)
        }
    
     else if(button.innerHTML === 'x' ){
         Calculationstring += '*'
         Updatedisplay(Calculationstring)
         console.log(Calculationstring)
         let firstlevelcheck = Removeoneoperatoriftwo(Calculationstring)
         Calculationstring = firstlevelcheck
         Updatedisplay(Calculationstring)
         
     }
     else if(Operators === 'Operator divide'){
         Calculationstring += '/'
         Updatedisplay(Calculationstring)
         console.log(Calculationstring)
         let firstlevelcheck = Removeoneoperatoriftwo(Calculationstring)
         Calculationstring = firstlevelcheck
         Updatedisplay(Calculationstring)
     }
     
    else if(button.innerHTML === 'C'){
        Calculationstring = ''
        Output = 0
        Updatedisplay(Output)
    }
    
    
    else if(Operators === 'Operator'){
        Calculationstring += button.innerHTML
        console.log(Calculationstring)
        let firstlevelcheck = Removeoneoperatoriftwo(Calculationstring)
        Calculationstring = firstlevelcheck
        Updatedisplay(Calculationstring)
        console.log(Calculationstring)
    }
    
    else if(button.innerHTML === '=' && Calculationstring ==='' ){
        alert('Please Enter a Number to calculate')
    }



    else if(button.innerHTML === '='){
      let equals =  ProceedCalculation(Calculationstring)
      Updatedisplay(equals)
      Calculationstring =''
    }
    
    
    else{
        console.log(button.innerHTML)
        Calculationstring += button.innerHTML
        Updatedisplay(Calculationstring)
        ProceedCalculation(Calculationstring)
    }
    
})})
    
    
    
    