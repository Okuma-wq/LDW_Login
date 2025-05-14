 function aplicarMascaraCPF(input) {
      var valor = input.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
      if (valor.length <= 3) {
        input.value = valor;
      } else if (valor.length <= 6) {
        input.value = valor.replace(/(\d{3})(\d{0,3})/, '$1.$2');
      } else if (valor.length <= 9) {
        input.value = valor.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
      } else {
        input.value = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
      }
    }