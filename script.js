function myFunction() {
  // Inicialize a API do Google Sheets
function init() {
    gapi.client.init({
        apiKey: 'AIzaSyAuv-HmunKG_-4ihTcdY8xC20swKCUCw_g',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        // API inicializada com sucesso
    });
}

// Função para pesquisar a nota fiscal
function pesquisarNotaFiscal() {
    const notaFiscal = document.getElementById('notaFiscalInput').value;
    
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1kgm4UfvxRqhxhCa9oFJVKFsrdfdn4Hto3iVdiDlUYXM',
        range: 'RASTREIO!A1:B100', // Substitua com o nome da aba e o intervalo apropriados
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

}
