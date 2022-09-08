let input1=document.getElementById("ut");
let btn=document.getElementById("btnn");


btn.addEventListener("click",async function(){
if(input1.value.trim().length==0){
    return window.alert("enter any value");
}

let file = `https://pokeapi.co/api/v2/pokemon/${input1.value}`;
let resp=await fetch(file);

if(resp.status === 200){
    const y=await resp.json();
    document.getElementById('divi').innerHTML=`
    The height of <b> ${input1.value}</b> pokemon is :${y.height} feets <br> 
         <br> The weight of <b> ${input1.value}</b> pokemon is :${y.weight} pounds 
         <br><img src="${y.sprites.back_default}"  ><br> 
         <u><b><h1>${input1.value}</h1></b></u>
         Pokemon ID: ${y.id}
          `
}
else{
    document.getElementById('divi').innerHTML=`OOPS ! Pokemon not found :(<br> Invalid Entry<br>
        `
}

})





// //document.getElementById(     )
// let file = `https://pokeapi.co/api/v2/pokemon/ditto`
// fetch (file)
// .then(x => x.json())
// .then(y=>console.log(y));




// let file = `https://pokeapi.co/api/v2/pokemon/${input1.value}`
// fetch (file)
// .then(x => x.json())
// .then(y=>{
//     //console.log(input1);
//     document.getElementById('divi').innerHTML=`The height of <b> ${input1.value}</b> pokemon is :${y.height} feets <br> 
//     <br> The weight of <b> ${input1.value}</b> pokemon is :${y.weight} pounds 
//     <br><img src="${y.sprites.back_default}"  ><br> 
//     <u><b><h1>${input1.value}</h1></b></u>
//     Pokemon ID: ${y.id}
//     `

//     //let imge=y.sprites.other["official-artwork"].front_default
    
// })
// .catch(error=>{
//     window.alert("You have not Entered any value")
// })




