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

    let estado = {
        saldo: 10
    }

    function verificarSaldo() {
        return `O saldo atual é de R$${estado.saldo}.`
    }

    function depositarSaldo() {
        const saldoDepositado = Number(prompt("Digite o saldo a ser depositado: R$"))

        if (isNaN(saldoDepositado) || saldoDepositado <= 0) {
            return "Erro: Digite um valor valido para o deposito."
        }

        estado.saldo += saldoDepositado
        return `
            Seu deposito de R$${saldoDepositado.toFixed(2)} foi feito com sucesso!
            Novo saldo = R$${estado.saldo.toFixed(2)}.
            `
    }

    function transferirSaldo() {
        const saldoTransferido = Number(prompt("Digite o saldo a ser transferido: R$"))

        if (isNaN(saldoTransferido) || saldoTransferido <= 0) {
            return "Erro: Digite um valor valido para a transferência."
        }

        if (saldoTransferido > estado.saldo) {
            return `Erro na operação, o valor R$${saldoTransferido.toFixed(2)} é maior que o saldo em conta.`
        }

        estado.saldo -= saldoTransferido
        return `
            Sua transferência de R$${saldoTransferido.toFixed(2)} foi realizada com sucesso!
            Novo saldo = R$${estado.saldo}.
            `
    }

    // const novaAcao = Number(prompt("Deseja realizar outra ação?"))
    // novaAcao === 1 ? depositarSaldo() : null
}

bankSystem()