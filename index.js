


const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
  e.preventDefault()

const height = document.querySelector('#height').value
const weight = document.querySelector('#weight').value
const result = document.querySelector('.output')
const screen = document.querySelector('.screen')



if(height === "" || height <= 0 || isNaN(height)){
  result.innerHTML = `<span style="color: crimson; font-weight: 700">* Enter a valid height</span>`
  return
}

if(weight === "" || weight <= 0 || isNaN(weight)){
  result.innerHTML = `<span style="color: crimson; font-weight: 700"> * Enter a valid weight</span>`
  return
}

  const heightSqr = height / 100
  const bmi = (weight / (heightSqr*heightSqr)).toFixed(2)

  result.innerHTML = `<span style="color: limegreen;  font-weight: 700 ;font-size: 24px;">${bmi}</span>`

  if(bmi<18){

    screen.innerHTML = `<h2  style="color: crimson; padding-left:10px; font-weight:700; font-size:28px;">You are Under Weight</h2>`
    return
    
  }
  else if(bmi > 24){
    screen.innerHTML = `<h2 style="color: crimson; padding-left:10px; font-weight:700; font-size:28px;">You are Over Weight</h2>`
    return
  }
  else{
    screen.innerHTML = `<h2 style="color: limegreen; padding-left:10px; font-weight:700; font-size:28px;"> Your BMI is normal</h2>`
    return
  }

 

})




