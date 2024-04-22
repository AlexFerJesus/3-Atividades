alert("Digite um numero a qual voce queira dividir após o (OK)");

let Div1 = (prompt("Numerador: "));
let Div2 = (prompt("Denominador: "));

if(Div2 < 1){
    alert("Não é possível dividir por zero.");
}

else{
    let resultado = (Div1 / Div2);
    alert(Div1 + " dividido por " + Div2 + " é igual a: " + resultado.toFixed(2));
}