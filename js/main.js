const prompt = require('prompt-sync')();

function horarioAtual() {
    const hora = new Date().getHours()

    const mensagem = {
        manha: "Bom dia",
        tarde: "Boa tarde",
        noite: "Boa noite"
    }

    return hora < 12 ? mensagem.manha : hora < 18 ? mensagem.tarde : mensagem.noite
}

function bankSystem() {

    var saldoInicial = Number(0)

    function verificarSaldo() {
        const mensagem = `${horarioAtual()}, o seu saldo atual é de R$${saldoInicial}.`
        return console.log(mensagem)
    }

    function depositarSaldo() {
        const saldoDepositado = Number(prompt("Digite o saldo a ser depositado: R$"))
        saldoInicial += saldoDepositado
        const mensagem = `
            Seu deposito de R$${saldoDepositado} foi feito com sucesso!
            Novo saldo = R$${saldoInicial}.
            `
        return console.log(mensagem)
    }

    function transferirSaldo() {
        const saldoTransferido = Number(prompt("Digite o saldo a ser transferido: R$"))
        if (saldoTransferido > saldoInicial) {
            return console.log(`Erro na operação, o valor de R$${saldoTransferido} é menor que o saldo em conta.`)
        }
        else {
            saldoInicial -= saldoTransferido
            const mensagem = `
            Seu deposito de R$${saldoTransferido} foi feito com sucesso!
            Novo saldo = R$${saldoInicial}.
            `
            return console.log(mensagem)
        }
    }

    transferirSaldo()

    // const novaAcao = Number(prompt("Deseja realizar outra ação?"))
    // novaAcao === 1 ? depositarSaldo() : null
}

bankSystem()