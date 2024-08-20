function calcularJuros(){
    const capital = parseFloat(document.getElementById("value").value)
    
    const juros = parseFloat(document.getElementById("fee").value) / 100
    const tempo = parseFloat(document.getElementById("tempo").value)

    console.log( capital, juros, tempo)

    if (isNaN(capital) || isNaN(juros) || isNaN(tempo)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const total = (capital * (1 + juros) ** tempo)
    document.getElementById('total').innerHTML = total.toFixed(2)

}