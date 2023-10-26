// Função para pesquisar a nota fiscal
function pesquisarNotaFiscal() {
    const notaFiscal = document.getElementById('notaFiscalInput').value;
    const planilhaId = 'ID_DA_PLANILHA'; // Substitua pelo ID da sua planilha
    const range = 'A:B'; // Substitua pelo intervalo que contém os dados da nota fiscal e status

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: planilhaId,
        range: range
    }).then(function(response) {
        const values = response.result.values;
        let resultado = "Nota fiscal não encontrada.";

        if (values) {
            for (let i = 0; i < values.length; i++) {
                const numeroNota = values[i][0];
                const status = values[i][1];

                if (numeroNota === notaFiscal) {
                    resultado = `Status da Nota Fiscal ${numeroNota}: ${status}`;
                    break;
                }
            }
        }

        document.getElementById('resultado').textContent = resultado;
    });
}
