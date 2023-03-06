function calculate(){
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value

    let imc = peso / altura**2
    let text = ""

    if(imc < 18.5){
        text = `Seu IMC é ${imc.toFixed(2)} e você está muito magro!`
    }else if (imc < 24.9){
        text = `Seu IMC é ${imc.toFixed(2)} e você está normal`
    }else if (imc < 29.9){
        text = `Seu IMC é ${imc.toFixed(2)} e você está sobrepeso`
    }else if (39.9){
        text = `Seu IMC é ${imc.toFixed(2)} e você está obesidade`
    }else if (imc > 39.9){
        text = `Seu IMC é ${imc.toFixed(2)} e você está obesidade mórbida`
    }
    document.getElementById("text_area").innerText = text;
}