let ret = [{
    retNavn: "Salat",
    billede: "salad.png",
    pris: 69
  },
  {
    retNavn: "Burger",
    billede: "hamburger.png",
    pris: 119
  },
  {
    retNavn: "Kage",
    billede: "cake.png",
    pris: 59
  }
]

let amount = 0
sum.innerHTML = amount


for (let i = 0; i < ret.length; i++) {

  menu.innerHTML += `
    <div class="enRet">
      <h3>  ${ret[i].retNavn} </h3>
      <img src="images/${ret[i].billede}" alt="">
      <p> Pris: ${ret[i].pris} kr. </p>
      <button onclick="enBestilling(
        '${ret[i].retNavn}',
        '${ret[i].pris}'
        )"> Bestil ${ret[i].retNavn}</button>
    <div>
  `
}


function enBestilling(bestilling, pris, i) {

    liste.innerHTML += '<li class="bestilRet">' + bestilling
    +  ' pris: ' + pris + ' kr.'+
    ' <button onclick="this.parentNode.remove();amount-='+ parseInt(pris) +';sum.innerHTML=amount">Fjern Ret</button> </li>'
 
    amount += parseInt( pris ) 
    sum.innerHTML = amount + ' kr.';
    sum.innerHTML += `
        <form action="kvittering.html">
        <button> Betal </button>
        </form>
    `

    localStorage.setItem("dinBestilling", bestillinger.innerHTML)
    console.log(localStorage.getItem("dinBestilling"))
}

