const questions = [
    {
        question: "As cantidades bloqueadas pola empresa con vistas a atender posibles perdas ou desembolsos futuros, chámanse:",
        answers: [
            { text: "Descubertos", correct: false },
            { text: "Fondos propios", correct: false },
            { text: "Amortizacións", correct: false },
            { text: "Provisions", correct: true },
            { text: "Reservas", correct: false }
        ]
    },{
        question: "Polo feito de ser dono dunha vivenda hai que pagar todos os anos:",
        answers: [
            { text: "IBI", correct: true },
            { text: "ICIO", correct: false },
            { text: "Plusvalía", correct: false },
            { text: "IVE", correct: false },
            { text: "IAE", correct: false }
        ],
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "Cal dos seguintes non é un dos réximes especiais do IVE?:",
        answers: [
            { text: "Comercio maiorista", correct: true },
            { text: "Simplificado", correct: false },
            { text: "Axencias de viaxe", correct: false },
            { text: "Agricultura", correct: false },
            { text: "Todos son réximes especiais do IVE.", correct: false }
        ],
    },{
        question: "A Lei Cambiaria e do Cheque regula:",
        answers: [
            { text: "Cheque", correct: false },
            { text: "Cheque e factura", correct: false },
            { text: "Cheque, obriga de pagamento e letra de cambio", correct: true },
            { text: "Cheque e letra de cambio", correct: false },
            { text: "Cheque e obriga de pagamento", correct: false }
        ],
    },{
        question: "O contrato de aluguer que inclúe o mantemento, reparación e seguro a todo risco do ben arrendado, chámase:",
        answers: [
            { text: "Leasing", correct: false },
            { text: "Renting", correct: true },
            { text: "Desconto", correct: false },
            { text: "Factoring", correct: false },
            { text: "Confirming", correct: false }
        ],
    },{
        question: "Na obriga de pagamento, se a data de vencemento aparece en branco:",
        answers: [
            { text: "A obriga de pagamento sería válida pero non tería valor executivo.", correct: false },
            { text: "Entenderíase que a obriga de pagamento é pagadoira aos 15 días da data de emisión.", correct: false },
            { text: "A obriga de pagamento non sería válida.", correct: false },
            { text: "Pode presentarse ao cobro en calquera momento, sen esperar a unha determinada data.", correct: true },
            { text: "A obriga de pagamento non sería endosable.", correct: false }
        ],
    },{
        question: "A persoa que emite a letra de cambio chámase:",
        answers: [
            { text: "Librador.", correct: true },
            { text: "Asinante.", correct: false },
            { text: "Tomador.", correct: false },
            { text: "Aceptante.", correct: false },
            { text: "Librado.", correct: false }
        ],
    },{
        question: "Nas cooperativas de segundo grao o número mínimo de socios é de:",
        answers: [
            { text: "4.", correct: false },
            { text: "5.", correct: false },
            { text: "2.", correct: true },
            { text: "1.", correct: false },
            { text: "3.", correct: false }
        ],
    },{
        question: "A tipo de financiamento máis caro é:",
        answers: [
            { text: "Crédito comercial.", correct: false },
            { text: "Conta de crédito.", correct: false },
            { text: "Factoring.", correct: false },
            { text: "Descuberto bancario.", correct: true },
            { text: "Confirming.", correct: false }
        ],
    },{
        question: "Cal das seguintes empresas ten o seu capital dividido en accións?",
        answers: [
            { text: "SL.", correct: false },
            { text: "S. Coop.", correct: false },
            { text: "SLL.", correct: false },
            { text: "SAL.", correct: true },
            { text: "Ningunha delas.", correct: false }
        ],
    },{
        question: "O capital mínimo para constituír unha sociedade anónima é:",
        answers: [
            { text: "Non se esixe capital mínimo.", correct: false },
            { text: "60.000€ totalmente subscrito e desembolsado.", correct: false },
            { text: "3.000€ totalmente subscrito e desembolsado nun 25%.", correct: false },
            { text: "60.000€ totalmente subscrito e desembolsado nun 25%.", correct: true },
            { text: "3.000€ totalmente subscrito e desembolsado.", correct: false }
        ],
    },{
        question: "O recargo de equivalencia aplicable a un produto que ten un IVE do 10%, é de:",
        answers: [
            { text: "2,5%", correct: true },
            { text: "0,5%", correct: false },
            { text: "7,1%", correct: false },
            { text: "5,2%", correct: false },
            { text: "1,4%", correct: false }
        ],
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },{
        question: "O préstamo bancario que a empresa debe devolver a curto prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: false },
            { text: "Pasivo corrente", correct: true },
            { text: "Patrimonio neto", correct: false }
        ]
    },
    // Añade más preguntas aquí
];

let currentQuestionIndex = 0;
let score = 0; // Para contar los aciertos
let totalAnswered = 0; // Para contar las preguntas respondidas
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const questionCounter = document.getElementById('question-counter');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    totalAnswered = 0;
    updateScore();
    nextButton.innerText = 'Siguiente';
    nextButton.classList.add('hide');
    prevButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
    updateQuestionCounter();
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
    updateButtons();
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

    // Eliminar la clase 'selected' de todos los botones y añadirla solo al seleccionado
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.remove('selected');
    });
    selectedButton.classList.add('selected');

    // Colorear los botones según si son correctos o incorrectos
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });

    // Actualizar el contador de aciertos
    if (selectedButton.dataset.correct) {
        score++;
    }
    totalAnswered++;
    updateScore();

    nextButton.classList.remove('hide');
    if (currentQuestionIndex > 0) {
        prevButton.classList.remove('hide');
    }
    updateButtons();
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
    // Mantener la clase 'selected' si el botón es el seleccionado
    if (!element.classList.contains('selected')) {
        element.classList.remove('selected');
    }
}

function updateQuestionCounter() {
    questionCounter.innerText = `${currentQuestionIndex + 1} / ${questions.length}`;
}

function updateScore() {
    scoreElement.innerText = score;
    totalElement.innerText = totalAnswered;
}

function updateButtons() {
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.innerText = 'Reiniciar';
    } else {
        nextButton.innerText = 'Siguiente';
    }

    if (currentQuestionIndex === 0) {
        prevButton.classList.add('hide');
    } else {
        prevButton.classList.remove('hide');
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
        updateQuestionCounter();
    } else {
        startQuiz();
    }
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(questions[currentQuestionIndex]);
        updateQuestionCounter();
    }
});

startQuiz();
