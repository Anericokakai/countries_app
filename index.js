

  


fetch('https://restcountries.com/v3.1/all').then( (data)=>{
    return data.json()
 }).then( (fulldata)=>{
   const divHolder=document.createElement('div')
 
  console.log(fulldata[0])
    
     let data1=" "
     fulldata.map( (values)=>{
       
 
         // values.flags.png
         data1+=`<a href="./each.html?country=${values.name.common}">  <div class="eachcounrty">
         <div class="image">
           <img src=${values.flags.png} alt="" /> 
         </div>
         <div class="details">
           <h3 class="header"><strong>${values.name.common}</strong></h3>
           <p><strong> population: </strong>${values.population}</p>
           <p><strong>region: </strong>${values.region}</p>
           <p><strong>capital: </strong> ${values.capital} </p>
         </div>
       </div> </a> `
     })
    
  
    document.querySelector('.container').innerHTML=data1
       
 
 
 
 
 
 
 }).catch((err)=>{
     console.log(err)
 })
 
//  creating dark mode

const moon=document.querySelector('.fa-moon')
const home=document.querySelector('.home')
 
moon.onclick=()=>{
  home.classList.toggle('darkmode')
  moon.classList.toggle('fa-moon')
  moon.classList.toggle('fa-sun')



  


}
 
 
 
 