





const queryParams= new URLSearchParams( window.location.search )
const nm=queryParams.get('country')
console.log(nm)

    
   


const container2=document.querySelector('.container')






fetch(`https://restcountries.com/v3.1/name/${nm}`).then((data)=>{
   return  data.json()
}).then((completedata)=>{
    

   
    
  
  completedata.map((values)=>{
     console.log(values)
    
   
console.log(values.flags.png)
    // array of languages
    const lang=values.languages
    console.log(lang)
    let txt=''
    for(let x in lang){
        txt+=`${lang[x]} `
       
    }
    
    
    // end of looping through languages

    // array of currencies
    let cur=values.currencies
    console.log(cur)
    let currValue=' '
for(let y in cur){
    currValue+=cur[y].name
}
console.log(currValue)




var data2=`     <div class="flag">
<img src='${values.flags.png}' alt="country">
</div>
<div class="countrydetails">
<div>
<h2><strong>${values.name.common}</strong></h2>
<p><strong>Native Name:</strong> ${values.name.official}</p>
<p><strong>Population:</strong> ${values.population}</p>
<p><strong>Region:</strong> ${values.region}</p>
<p><strong>Subregion:</strong> ${values.subregion}</p>
<p><strong>Capital:</strong> ${values.capital}</p>
</div>
<div class="domain">
    <p><strong>Top Level Domain:</strong> ${values.tld}</p>
    <p><strong>Currencies:</strong>${currValue}</p>
    <p><strong>Languages:</strong> ${txt}</p>
    
</div>

</div>`

container2.innerHTML=data2
  })


  

})
 

         
     
//  creating dark mode

const moon=document.querySelector('.fa-moon')
const home=document.querySelector('.home')
 
moon.onclick=()=>{
  home.classList.toggle('darkmode')
  moon.classList.toggle('fa-moon')
  moon.classList.toggle('fa-sun')



  


}
   
