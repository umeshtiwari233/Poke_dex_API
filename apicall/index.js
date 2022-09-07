let input1=document.getElementById("ut");
let btn=document.getElementById("btnn");


btn.addEventListener("click",function(){

let file = `https://pokeapi.co/api/v2/pokemon/${input1.value}`
fetch (file)
.then(x => x.json())
.then(y=>{
    //console.log(input1);
    document.getElementById('divi').innerHTML=`The height of <b> ${input1.value}</b> pokemon is :${y.height} feets <br> 
    <br> The weight of <b> ${input1.value}</b> pokemon is :${y.weight} pounds 
    <br><img src="${y.sprites.back_default}"  ><br> 
    <u><b><h1>${input1.value}</h1></b></u>
    Pokemon ID: ${y.id}
    `

    //let imge=y.sprites.other["official-artwork"].front_default
    
})
.catch(error=>document.write(error))
})

//document.getElementById(     )
let file = `https://pokeapi.co/api/v2/pokemon/ditto`
fetch (file)
.then(x => x.json())
.then(y=>console.log(y));