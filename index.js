function calcularEconomia() {
    // Obter valores dos campos de entrada
    const precoGasolina = parseFloat(document.getElementById('precoGasolina').value);
    const precoEtanol = parseFloat(document.getElementById('precoEtanol').value);
    const consumoGasolina = parseFloat(document.getElementById('consumoGasolina').value);
    const consumoEtanol = parseFloat(document.getElementById('consumoEtanol').value);
    
    // Validar se todos os campos têm valores
    if (isNaN(precoGasolina) || isNaN(precoEtanol) || isNaN(consumoGasolina) || isNaN(consumoEtanol) || consumoGasolina <= 0 || consumoEtanol <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    // Calcular custo por km para cada combustível
    const custoGasolinaKm = precoGasolina / consumoGasolina;
    const custoEtanolKm = precoEtanol / consumoEtanol;
    
    // Comparar custos e exibir o resultado
    let resultado;
    if (custoGasolinaKm < custoEtanolKm) {
        resultado = `A gasolina é mais econômica. Custo por km: R$ ${custoGasolinaKm.toFixed(2)}`;
    } else {
        resultado = `O etanol é mais econômico. Custo por km: R$ ${custoEtanolKm.toFixed(2)}`;
    }
    
    document.getElementById('resultado').textContent = resultado;
}