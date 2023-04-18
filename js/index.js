
  
  function comprobarMayus() {
    const text = document.getElementById("text").value;
    let impresion = "";
    if (text === text.toUpperCase()) {
      impresion = "El texto solo contiene mayúsculas";
    } else if (text === text.toLowerCase()) {
      impresion = "El texto solo contiene minúsculas";
    } else {
      impresion = "El texto contiene una mezcla de mayúsculas y minúsculas.";
    }
    alert(impresion);
  }

  function parImpar() {
    var num = parseInt(document.getElementById("num").value);
    if (isNaN(num)) {
      alert("El valor ingresado no es un número");
    } else if (num % 2 === 0) {
      alert("Es par");
    } else {
      alert("Es impar");
    }
  }
  
  function comprobarPalindromo() {
    const text = document.getElementById("palindromo").value.toLowerCase();
    let impresion = "";
    const noEspacios = text.replace(/[\W_]/g, "");

    if (noEspacios === noEspacios.split("").reverse().join("")) {
      impresion = "El texto es un palíndromo";
    } else {
      impresion = "El texto no es un palíndromo";
    }

    alert(impresion);
  }