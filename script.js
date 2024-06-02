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
            { text: "2,5%", correct: false },
            { text: "0,5%", correct: false },
            { text: "7,1%", correct: false },
            { text: "5,2%", correct: false },
            { text: "1,4%", correct: true }
        ],
    },{
        question: "Que sociedade non podería constituírse con 6 socios?",
        answers: [
            { text: "Sociedade Civil.", correct: false },
            { text: "Sociedade Anónima Laboral.", correct: false },
            { text: "Todas estas poden constituírse con 6 socios.", correct: true },
            { text: "Sociedade Limitada.", correct: false },
            { text: "Sociedade Cooperativa.", correct: false }
        ],
    },{
        question: "O diñeiro que ten a empresa na caixa inclúese dentro de:",
        answers: [
            { text: "Patrimonio neto.", correct: false },
            { text: "Activo non corrente (intanxible).", correct: false },
            { text: "Activo corrente (realizable).", correct: false },
            { text: "Activo corrente (dispoñible).", correct: true },
            { text: "Activo corrente (existencias).", correct: false }
        ],
    },{
        question: "As subvencións recibidas pola empresa inclúense dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro).", correct: false },
            { text: "Pasivo corrente.", correct: false },
            { text: "Pasivo non corrente.", correct: false },
            { text: "Activo corrente (dispoñible).", correct: false },
            { text: "Patrimonio neto.", correct: true }
        ],
    },{
        question: "As mercaderías da empresa inclúense dentro de:",
        answers: [
            { text: "Activo non corrente (material).", correct: false },
            { text: "Activo corrente (realizable).", correct: false },
            { text: "Activo non corrente (intanxible).", correct: false },
            { text: "Activo corrente (existencias).", correct: true },
            { text: "Activo corrente (dispoñible).", correct: false }
        ],
    },{
        question: "As perdas da empresa inclúense dentro de:",
        answers: [
            { text: "Activo corrente (dispoñible).", correct: false },
            { text: "Pasivo corrente.", correct: false },
            { text: "Pasivo non corrente.", correct: false },
            { text: "Patrimonio neto.", correct: true },
            { text: "Activo non corrente (financeiro).", correct: false }
        ],
    },{
        question: "A operación que aumenta o valor patrimonial da empresa é:",
        answers: [
            { text: "Pagamento.", correct: false },
            { text: "Ningunha.", correct: false },
            { text: "Ingreso.", correct: true },
            { text: "Cobro.", correct: false },
            { text: "Gasto.", correct: false }
        ],
    },{
        question: "O documento que ten por obxectivo determinar a viabilidade dun proxecto empresarial chámase:",
        answers: [
            { text: "Plan financeiro.", correct: true },
            { text: "Balance.", correct: false },
            { text: "Conta de resultados.", correct: false },
            { text: "Plan de tesouraría.", correct: false },
            { text: "Fondo de manobra.", correct: false }
        ],
    },{
        question: "No momento de constituir a empresa DONALD, SL cómpre ingresar nunha conta corrente ao nome da empresa a cantidade mínima de:",
        answers: [
            { text: "30.000€.", correct: false },
            { text: "750€.", correct: false },
            { text: "1€.", correct: true },
            { text: "15.000€.", correct: false },
            { text: "60.000€.", correct: false }
        ],
    },{
        question: "Cal dos seguintes é un imposto indirecto?:",
        answers: [
            { text: "IS.", correct: false },
            { text: "IRPF.", correct: false },
            { text: "Ningún deles.", correct: false },
            { text: "IVE.", correct: true },
            { text: "IAE.", correct: false }
        ],
    },{
        question: "O sistema que determina o rendemento dunha empresa en base a unha serie de índices ou módulos, chámase:",
        answers: [
            { text: "Estimación indirecta.", correct: false },
            { text: "Estimación subxectiva.", correct: false },
            { text: "Estimación directa simplificada.", correct: false },
            { text: "Estimación directa normal.", correct: false },
            { text: "Estimación obxectiva.", correct: true }
        ],
    },{
        question: "No IRPF, o uso dunha vivenda inclúese dentro de:",
        answers: [
            { text: "Rendementos do capital mobiliario.", correct: false },
            { text: "Ganancias e perdas patrimoniais.", correct: false },
            { text: "Rendementos do traballo.", correct: false },
            { text: "Rendementos de actividades económicas.", correct: false },
            { text: "Rendementos do capital imobiliario.", correct: true }
        ],
    },{
        question: "O capital mínimo para constituír unha sociedade anónima laboral é:",
        answers: [
            { text: "60.000€ totalmente subscrito e desembolsado.", correct: false },
            { text: "60.000€ totalmente subscrito e desembolsado nun 25%.", correct: false },
            { text: "3.000€ totalmente subscrito e desembolsado nun 25%.", correct: false },
            { text: "3.000€ totalmente subscrito e desembolsado.", correct: true },
            { text: "Non se esixe capital mínimo.", correct: false }
        ],
    },{
        question: "Para saber cal é o préstamo máis barato, o dato a ter en conta é:",
        answers: [
            { text: "IPC.", correct: false },
            { text: "Interese nominal.", correct: false },
            { text: "Comisión de apertura.", correct: false },
            { text: "TAE.", correct: true },
            { text: "Euribor.", correct: false }
        ],
    },{
        question: "As patentes que posúe a empresa inclúense dentro de:",
        answers: [
            { text: "Activo corrente (dispoñible).", correct: false },
            { text: "Activo corrente (existencias).", correct: false },
            { text: "Activo non corrente (material).", correct: false },
            { text: "Activo corrente (realizable).", correct: false },
            { text: "Activo non corrente (intanxible).", correct: true }
        ],
    },{
        question: "O pago pola ocupación da vía pública é un exemplo típico de:",
        answers: [
            { text: "Ningún destes.", correct: false },
            { text: "Contribución especial.", correct: false },
            { text: "Imposto directo.", correct: false },
            { text: "Taxa.", correct: true },
            { text: "Imposto indirecto.", correct: false }
        ],
    },{
        question: "O alta no IAE solicitase en:",
        answers: [
            { text: "Delegación provincial de Traballo.", correct: false },
            { text: "Facenda (AEAT).", correct: true },
            { text: "Rexistro Mercantil Central.", correct: false },
            { text: "Facenda (Consellería).", correct: false },
            { text: "Concello.", correct: false }
        ],
    },{
        question: "Nas cooperativas de primeiro grao o número mínimo de socios é de:",
        answers: [
            { text: "1.", correct: false },
            { text: "5.", correct: false },
            { text: "2.", correct: false },
            { text: "4.", correct: false },
            { text: "3.", correct: true }
        ],
    },{
        question: "A certificación negativa da denominación social solicitase en:",
        answers: [
            { text: "Concello.", correct: false },
            { text: "Delegación provincial de Traballo.", correct: false },
            { text: "Facenda (AEAT).", correct: false },
            { text: "Facenda (Consellería).", correct: false },
            { text: "Rexistro Mercantil Central.", correct: true }
        ],
    },{
        question: "O capital social da empresa inclúese dentro de:",
        answers: [
            { text: "Patrimonio neto.", correct: true },
            { text: "Activo non corrente (financeiro).", correct: false },
            { text: "Pasivo corrente.", correct: false },
            { text: "Pasivo non corrente.", correct: false },
            { text: "Activo corrente (disponible).", correct: false }
        ],
    },{
        question: "A sociedade que ten unha menor complexidade de tramitación é:",
        answers: [
            { text: "SL.", correct: true },
            { text: "SA.", correct: false },
            { text: "SAL.", correct: false },
            { text: "SLL.", correct: false },
            { text: "Cooperativa.", correct: false }
        ],
    },{
        question: "No cheque, o vendedor actúa como:",
        answers: [
            { text: "Avalista.", correct: false },
            { text: "Tomador.", correct: true },
            { text: "Librador.", correct: false },
            { text: "Endosatario.", correct: false },
            { text: "Librado.", correct: false }
        ],
    },{
        question: "En cal das seguintes non se esixe capital mínimo para a súa constitución?:",
        answers: [
            { text: "SL.", correct: false },
            { text: "SLL.", correct: false },
            { text: "Todas estas requiren un capital mínimo.", correct: true },
            { text: "SAL.", correct: false },
            { text: "ERL.", correct: false }
        ],
    },{
        question: "As facturas dos clientes pendentes de cobro pola empresa inclúense dentro de:",
        answers: [
            { text: "Patrimonio neto.", correct: false },
            { text: "Activo corrente (dispoñible).", correct: false },
            { text: "Activo corrente (realizable).", correct: true },
            { text: "Activo corrente (existencias).", correct: false },
            { text: "Activo non corrente (intanxible).", correct: false }
        ],
    },{
        question: "O NIF solicítase en:",
        answers: [
            { text: "Facenda (Consellería).", correct: false },
            { text: "Rexistro Mercantil Central.", correct: false },
            { text: "Facenda (AEAT).", correct: true },
            { text: "Delegación provincial de Traballo.", correct: false },
            { text: "Concello.", correct: false }
        ],
    },{
        question: "O Consello Reitor é o órgano de goberno e dirección de:",
        answers: [
            { text: "SAL.", correct: false },
            { text: "Cooperativa.", correct: true },
            { text: "Sociedade civil.", correct: false },
            { text: "SA.", correct: false },
            { text: "Comunidade de bens.", correct: false }
        ],
    },{
        question: "Na letra de cambio, o vendedor actúa como:",
        answers: [
            { text: "Avalista.", correct: false },
            { text: "Endosatario.", correct: false },
            { text: "Librado.", correct: false },
            { text: "Tomador.", correct: true },
            { text: "Librador.", correct: false }
        ],
    },{
        question: "O ITPAXD págase en:",
        answers: [
            { text: "Facenda (Consellería).", correct: false },
            { text: "Concello.", correct: false },
            { text: "Rexistro Mercantil Central.", correct: false },
            { text: "Facenda (AEAT).", correct: true },
            { text: "Delegación provincial de Traballo.", correct: false }
        ],
    },{
        question: "As construcións, edificios e locais da empresa inclúense dentro de:",
        answers: [
            { text: "Activo non corrente (material).", correct: true },
            { text: "Activo corrente (realizable).", correct: false },
            { text: "Activo corrente (dispoñible).", correct: false },
            { text: "Activo non corrente (intanxible).", correct: false },
            { text: "Activo corrente (existencias).", correct: false }
        ],
    },{
        question: "Os cheques emitidos en Europa e pagadoiros en España caducan en:",
        answers: [
            { text: "15 días.", correct: false },
            { text: "30 días.", correct: false },
            { text: "60 días.", correct: false },
            { text: "90 días.", correct: false },
            { text: "20 días.", correct: true }
        ],
    },{
        question: "No IRPF, as pensións inclúense dentro de:",
        answers: [
            { text: "Rendementos do capital mobiliario.", correct: false },
            { text: "Ganancias e perdas patrimoniais.", correct: false },
            { text: "Rendementos do traballo.", correct: true },
            { text: "Rendementos de actividades económicas.", correct: false },
            { text: "Rendementos do capital imobiliario.", correct: false }
        ],
    },{
        question: "O contrato polo que se cede a outra empresa o cobro das débedas dos clientes a cambio dun pago imediato é:",
        answers: [
        { text: "Renting", correct: false },
        { text: "Desconto", correct: false },
        { text: "Confirming", correct: false },
        { text: "Leasing", correct: false },
        { text: "Factoring", correct: true }
        ]
    },{
        question: "Os socios traballadores deben ser propietarios, ao menos, do 51% do capital na:",
        answers: [
        { text: "SAL", correct: false },
        { text: "Cooperativa", correct: false },
        { text: "ERL", correct: true },
        { text: "SLL", correct: false },
        { text: "SLL e máis SAL", correct: false }
        ],
    },{
        question: "Na letra de cambio, se o vencemento ten lugar pasado un prazo contado desde a data de libramento, trátase dun:",
        answers: [
            { text: "Vencemento a días data.", correct: true },
            { text: "Vencemento á vista.", correct: false },
            { text: "Vencemento a data fixa.", correct: false },
            { text: "Vencemento a días vista.", correct: false },
            { text: "Ningún deles.", correct: false }
        ],
    },{
        question: "A empresa PEPITO, SAL necesita para a súa constitución contar cun mínimo de:",
        answers: [
        { text: "3 socios.", correct: false },
        { text: "2 socios.", correct: false },
        { text: "2 socios, dos cales un debe ser socio traballador.", correct: false },
        { text: "1 socio.", correct: false },
        { text: "3 socios, dos cales dous deben ser socios traballadores.", correct: true }
        ],
    },{
        question: "As débedas que a empresa ten con provedores inclúense dentro de:",
        answers: [
        { text: "Patrimonio neto.", correct: false },
        { text: "Pasivo non corrente.", correct: false },
        { text: "Pasivo corrente.", correct: true },
        { text: "Activo corrente (dispoñible).", correct: false },
        { text: "Activo non corrente (financeiro).", correct: false }
        ],
    },{
        question: "O documento que xustifica a saída dos produtos do almacén, é:",
        answers: [
        { text: "Recibo.", correct: false },
        { text: "Factura.", correct: false },
        { text: "Pedido.", correct: false },
        { text: "Ningún deles.", correct: false },
        { text: "Albará.", correct: true }
        ],
    },{
        question: "No IVE o suxeito pasivo é:",
        answers: [
        { text: "O cliente que non chega a comprar ningún produto.", correct: false },
        { text: "O comerciante que carga o imposto aos seus clientes.", correct: true },
        { text: "Persoa física con residencia habitual en España.", correct: false },
        { text: "Persoa xurídica con residencia habitual en España.", correct: false },
        { text: "O cliente que compra un produto.", correct: false }
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
        question: "O recargo de equivalencia aplicable a un produto que ten un IVE do 21%, é de:",
        answers: [
        { text: "5,2%.", correct: true },
        { text: "2,5%.", correct: false },
        { text: "0,5%.", correct: false },
        { text: "1,4%.", correct: false },
        { text: "7,1%.", correct: false }
        ],
    },{
        question: "As letras de cambio en contra da empresa inclúense dentro de:",
        answers: [
        { text: "Activo corrente (dispoñible).", correct: false },
        { text: "Pasivo corrente.", correct: true },
        { text: "Patrimonio neto.", correct: false },
        { text: "Activo non corrente (financeiro).", correct: false },
        { text: "Pasivo non corrente.", correct: false }
        ],
    },{
        question: "A Declaración Censual solicitase en:",
        answers: [
            {text: "Facenda (AEAT).", correct: true},
            {text: "Delegación provincial de Traballo.", correct: false},
            {text: "Rexistro Mercantil Central.", correct: false},
            {text: "Concello.", correct: false},
            {text: "Facenda (Consellería).", correct: false}
        ],
    },{
        question: "A empresa GILITO, SLL necesita para a súa constitución contar cun mínimo de:",
        answers: [
        { text: "1 socio.", correct: false },
        { text: "2 socios, dos cales un debe ser socio traballador.", correct: false },
        { text: "3 socios, dos cales dous deben ser socios traballadores.", correct: true },
        { text: "3 socios.", correct: false },
        { text: "2 socios.", correct: false }
        ],
    },{
        question: "O documento que xustifica a entrega das mercadorías, é:",
        answers: [
            {text: "Albara.", correct: true},
            {text: "Recibo.", correct: false},
            {text: "Factura.", correct: false},
            {text: "Ningún deles.", correct: false},
            {text: "Pedido.", correct: false}
        ],
    },{
        question: "Na SL o número de traballadores (por tempo indefinido) que non sexan socios está limitado ao:",
        answers: [
        { text: "25%.", correct: false },
        { text: "10%.", correct: false },
        { text: "15%.", correct: false },
        { text: "20%.", correct: false },
        { text: "Non está limitado.", correct: true }
        ],
    },{
        question: "Na letra de cambio, se o vencemento ten lugar pasado un prazo contado desde a data de aceptación, trátase dun:",
        answers: [
        { text: "Vencemento a data fixa.", correct: false },
        { text: "Vencemento a días data.", correct: false },
        { text: "Vencemento a días vista.", correct: true },
        { text: "Vencemento á vista.", correct: false },
        { text: "Ningún deles.", correct: false }
        ],
    },{
        question: "No caso de reclamación relacionada cunha operación de compravenda, faise imprescindible presentar:",
        answers: [
            {text: "Factura.", correct: true},
            {text: "Pedido.", correct: false},
            {text: "Albará.", correct: false},
            {text: "Recibo.", correct: false},
            {text: "Ningún deles.", correct: false}
        ],
    },{
        question: "O ITPAXD grava a constitución dunha sociedade con:",
        answers: [
        { text: "0,5% do capital social.", correct: false },
        { text: "5% do capital social.", correct: false },
        { text: "1% do capital social.", correct: true },
        { text: "2% do capital social.", correct: false },
        { text: "3% do capital social.", correct: false }
        ],
    },{
        question: "En que forma xurídica cada socio ten un voto, independentemente da súa aportación económica?",
        answers: [
            {text: "Cooperativa.", correct: true},
            {text: "SAL.", correct: false},
            {text: "SL.", correct: false},
            {text: "Comunidade de bens.", correct: false},
            {text: "SA.", correct: false}
        ],
    },{
        question: "O recargo de equivalencia aplicable a un produto que ten un IVE do 4%, é de:",
        answers: [
        { text: "0,1%.", correct: false },
        { text: "1,7%.", correct: false },
        { text: "0,5%.", correct: true },
        { text: "0,9%.", correct: false },
        { text: "1,4%.", correct: false }
        ],
    },{
        question: "Cal dos seguintes convértese en aceptante da letra de cambio a través da súa sinatura?:",
        answers: [
        { text: "Tomador.", correct: false },
        { text: "Librador.", correct: false },
        { text: "Avalista.", correct: false },
        { text: "Librado.", correct: true },
        { text: "Asinante.", correct: false }
        ],
    },{
        question: "No IRPF, o beneficio obtido no exercicio dunha actividade empresarial, profesional ou artística inclúese dentro de:",
        answers: [
            { text: "Rendementos do capital imobiliario.", correct: false },
            { text: "Rendementos de actividades económicas.", correct: true },
            { text: "Rendementos do capital mobiliario.", correct: false },
            { text: "Ganancias e perdas patrimoniais.", correct: false },
            { text: "Rendementos do traballo.", correct: false }
        ],
    },{
        question: "No IVE o obrigado tributario é:",
        answers: [
            { text: "O comerciante que carga o imposto aos seus clientes.", correct: false },
            { text: "Persoa física con residencia habitual en España.", correct: false },
            { text: "Persoa xurídica con residencia habitual en España.", correct: false },
            { text: "O cliente que compra un produto.", correct: true },
            { text: "O cliente que non chega a comprar ningún produto.", correct: false }
        ],
    },{
        question: "Cal das seguintes non podería constituírse cun capital de 123.000€?:",
        answers: [
            { text: "Todas estas poderían constituírse cun capital de 123.000€.", correct: true },
            { text: "SL.", correct: false },
            { text: "SLL.", correct: false },
            { text: "Cooperativa.", correct: false },
            { text: "SAL.", correct: false }
        ],
    },{
        question: "No IRPF, o aluguer dunha vivenda inclúese dentro de:",
        answers: [
            { text: "Rendementos de actividades económicas.", correct: false },
            { text: "Rendementos do capital mobiliario.", correct: false },
            { text: "Rendementos do capital imobiliario.", correct: true },
            { text: "Rendementos do traballo.", correct: false },
            { text: "Ganancias e perdas patrimoniais.", correct: false }
        ],
    },{
        question: "A Licenza de Apertura solicitase en:",
        answers: [
            { text: "Facenda (AEAT).", correct: false },
            { text: "Concello.", correct: true },
            { text: "Facenda (Consellería).", correct: false },
            { text: "Delegación provincial de Traballo.", correct: false },
            { text: "Rexistro Mercantil Central.", correct: false }
        ],
    },{
        question: "As materias primas da empresa inclúense dentro de:",
        answers: [
            { text: "Activo corrente (disponible).", correct: false },
            { text: "Activo corrente (existencias).", correct: true },
            { text: "Activo non corrente (material).", correct: false },
            { text: "Activo non corrente (intanxible).", correct: false },
            { text: "Activo corrente (realizable).", correct: false }
        ],
    },{
        question: "O servizo polo que un banco ocúpase de pagar aos provedores dunha empresa na data que corresponda aínda que esta non teña diñeiro en conta nese momento, chámase:",
        answers: [
            { text: "Renting.", correct: false },
            { text: "Confirming.", correct: true },
            { text: "Conta de crédito.", correct: false },
            { text: "Factoring.", correct: false },
            { text: "Desconto comercial.", correct: false }
        ],
    },{
        question: "Os cheques emitidos fora de Europa e pagadoiros en España caducan en:",
        answers: [
            { text: "60 días.", correct: true },
            { text: "15 días.", correct: false },
            { text: "20 días.", correct: false },
            { text: "90 días.", correct: false },
            { text: "30 días.", correct: false }
        ],
    },{
        question: "O capital mínimo para constituír unha sociedade limitada laboral é:",
        answers: [
            {text: "3.000€ totalmente subscrito e desembolsado nun 25%.", correct: false},
            {text: "Non se esixe capital mínimo.", correct: false},
            {text: "1€.", correct: false},
            {text: "60.000€ totalmente subscrito e desembolsado nun 25%.", correct: true},
            {text: "60.000€ totalmente subscrito e desembolsado.", correct: false}
        ],
    },{
        question: "No momento de constituír a empresa DAISY, SA cómpre ingresar nunha conta corrente ao nome da empresa a cantidade mínima de:",
        answers: [
            {text: "15.000€.", correct: true},
            {text: "60.000€.", correct: false},
            {text: "3.000€.", correct: false},
            {text: "30.000€.", correct: false},
            {text: "750€.", correct: false}
        ],

    },{
        question: "Para saber se hai beneficios ou perdas na nosa empresa, contamos con:",
        answers: [
            {text: "Balance.", correct: false},
            {text: "Conta de resultados.", correct: true},
            {text: "Plan de tesouraría.", correct: false},
            {text: "Plan financeiro.", correct: false},
            {text: "Fondo de manobra.", correct: false}
        ],
    },{
        question: "O pago polo vado permanente é un exemplo típico de:",
        answers: [
            {text: "Imposto directo.", correct: false},
            {text: "Contribución especial.", correct: false},
            {text: "Ningún destes.", correct: false},
            {text: "Imposto indirecto.", correct: false},
            {text: "Taxa.", "correct": true}
        ],
    },{
        question: "As cantidades bloqueadas pola empresa para facer fronte á renovación dun inmobilizado cando remate a súa vida útil, chámanse:",
        answers: [
            {text: "Provisións.", correct: false},
            {text: "Amortizacións.", correct: true},
            {text: "Descubertos.", correct: false},
            {text: "Fondos propios.", correct: false},
            {text: "Reservas.", correct: false}
        ],
    },{
        question: "Cal das seguintes empresas tributa polo IRPF?",
        answers: [
            {text: "SLL.", correct: false},
            {text: "SL.", correct: false},
            {text: "SAL.", correct: false},
            {text: "ERL.", correct: true},
            {text: "Ningunha delas.", correct: false}
  ],
    },{
        question: "O capital mínimo para constituír unha sociedade limitada é:",
        answers: [
            {text: "1€.", correct: true},
            {text: "3.000€ totalmente subscrito e desembolsado nun 25%.", correct: false},
            {text: "Non se esixe capital mínimo.", correct: false},
            {text: "60.000€ totalmente subscrito e desembolsado nun 25%.", correct: false},
            {text: "60.000€ totalmente subscrito e desembolsado.", correct: false}
        ],
    },{
        question: "As reservas da empresa inclúense dentro de:",
        answers: [
            {text: "Patrimonio neto.", correct: true},
            {text: "Pasivo corrente.", correct: false},
            {text: "Activo corrente (dispoñible).", correct: false},
            {text: "Activo non corrente (financeiro).", correct: false},
            {text: "Pasivo non corrente.", correct: false}
        ],
    },{
        question: "A Licenza de Obras solicitase en:",
        answers: [
            {text: "Delegación provincial de Traballo.", correct: false},
            {text: "Facenda (Consellería).", correct: false},
            {text: "Rexistro Mercantil Central.", correct: false},
            {text: "Facenda (AEAT).", correct: false},
            {text: "Concello.", correct: true}
        ],
    },{
        question: "Na obriga de pagamento, se o nome do beneficiario aparece en branco:",
        answers: [
            {text: "A obriga de pagamento non sería endosable.", correct: false},
            {text: "A obriga de pagamento non sería válida.", correct: true},
            {text: "Pode presentarse ao cobro en calquera momento, sen esperar a unha determinada data.", correct: false},
            {text: "A obriga de pagamento podería ser cobrada pola persoa que a presente.", correct: false},
            {text: "A obriga de pagamento sería válida pero non tería valor executivo.", correct: false}
        ],
    },{
        question: "Cando o tenedor cede a súa letra de cambio a un banco para obter o seu importe por anticipado, trátase de:",
        answers: [
            {text: "Aval.", correct: false},
            {text: "Factoring.", correct: true},
            {text: "Desconto.", correct: false},
            {text: "Confirming.", correct: false},
            {text: "Endoso.", correct: false}
        ],
    },{
        question: "O préstamo bancario que a empresa debe devolver a longo prazo inclúese dentro de:",
        answers: [
            { text: "Activo non corrente (financeiro)", correct: false },
            { text: "Activo corrente (dispoñible)", correct: false },
            { text: "Pasivo non corrente", correct: true },
            { text: "Pasivo corrente", correct: false },
            { text: "Patrimonio neto", correct: false }
        ],
    },{
        question: "O contrato polo que se aluga un ben con opción de compra é:",
        answers: [
            {text: "Confirming.", correct: false},
            {text: "Factoring.", correct: false},
            {text: "Renting.", correct: false},
            {text: "Leasing.", correct: true},
            {text: "Desconto.", correct: false}
        ],
    },{
        question: "No IRPF, os xuros das contas bancarias inclúense dentro de:",
        answers: [
            {text: "Ganancias e perdas patrimoniais.", correct: false},
            {text: "Rendementos do traballo.", correct: false},
            {text: "Rendementos do capital inmobiliario.", correct: false},
            {text: "Rendementos do capital mobiliario.", correct: true},
            {text: "Rendementos de actividades económicas.", correct: false}
        ],
    },{
        question: "Ningún socio pode posuír máis dun terzo do capital social na:",
        answers: [
            {text: "ERL.", correct: false},
            {text: "SLL e máis SAL.", correct: true},
            {text: "SLL.", correct: false},
            {text: "SAL.", correct: false},
            {text: "Cooperativa.", correct: false}
        ],
    },{
        question: "Cal dos seguintes non é un dos réximes especiais do IVE?",
        answers: [
            {text: "Servizos prestados por vía electrónica.", "correct": false},
            {text: "Todos son réximes especiais do IVE.", "correct": false},
            {text: "Bens usados.", "correct": false},
            {text: "Recargo de equivalencia.", "correct": false},
            {text: "Prata de investimento.", "correct": true}
        ],
    },{
        question: "Cal ten a tramitación máis sinxela e barata?",
        answers: [
            {text: "ERL.", correct: false},
            {text: "CB.", correct: false},
            {text: "SC.", correct: false},
            {text: "Cooperativa.", correct: false},
            {text: "Empresa individual.", correct: true}
        ],
    },{
        question: "A empresa MAISMORRO, SL non pode pagar aos seus acredores ao vencemento das súas débedas. E se vende todos os bens e dereitos da súa propiedade tampouco poderá pagar completamente a todos os acredores. Actualmente, esta empresa está en situación de:",
        answers: [
            {text: "Morosidade de primeiro grao.", correct: false},
            {text: "Desequilibrio financeiro.", correct: false},
            {text: "Suspensión de pagos.", correct: false},
            {text: "Morosidade de segundo grao.", correct: false},
            {text: "Quebra.", correct: true}
        ],
    },{
        question: "Na letra de cambio, se no vencemento aparece unha data concreta, trátase dun:",
        answers: [
            {text: "Ningún deles.", correct: false},
            {text: "Vencemento á vista.", correct: false},
            {text: "Vencemento a días vista.", correct: false},
            {text: "Vencemento a data fixa.", correct: true},
            {text: "Vencemento a días data.", correct: false}
        ],
    },{
        question: "O diñeiro que ten a empresa nunha conta bancaria inclúese dentro de:",
        answers: [
            {text: "Patrimonio neto.", correct: false},
            {text: "Activo corrente (dispoñible).", correct: true},
            {text: "Activo corrente (realizable).", correct: false},
            {text: "Activo non corrente (intanxible).", correct: false},
            {text: "Activo corrente (existencias).", correct: false}
        ],
    },{
        question: "O patrimonio neto dunha empresa é igual a:",
        answers: [
            {text: "Bens + Dereitos + Obrigas.", correct: false},
            {text: "Bens + Dereitos - Obrigas.", correct: true},
            {text: "Bens - Obrigas.", correct: false},
            {text: "Bens + Obrigas.", correct: false},
            {text: "Bens + Dereitos.", correct: false}
        ],
    },{
        question: "Que sociedade pódese constituír cun só socio?:",
        answers: [
            {text: "Sociedade Cooperativa.", correct: false},
            {text: "Sociedade Limitada.", correct: true},
            {text: "Sociedade Anónima Laboral.", correct: false},
            {text: "Sociedade Civil.", correct: false},
            {text: "Sociedade Limitada Laboral.", correct: false}
        ],
    },{
        question: "O cheque no que o banco actúa non só como librado senón tamén como librador é:",
        answers: [
            {text: "Ningún deles.", correct: false},
            {text: "Cheque conformado.", correct: false},
            {text: "Cheque bancario.", correct: true},
            {text: "Cheque para aboar en conta.", correct: false},
            {text: "Cheque cruzado.", correct: false}
        ],
    },{
        question: "Cal dos seguintes é un imposto progresivo?:",
        answers: [
            {text: "IRPF.", correct: true},
            {text: "IS.", correct: false},
            {text: "IVE.", correct: false},
            {text: "Ningún deles.", correct: false},
            {text: "IAE.", correct: false}
        ],
    },{
        question: "Os combustibles inclúense dentro de:",
        answers: [
            {text: "Activo corrente (existencias).", correct: true},
            {text: "Activo corrente (realizable).", correct: false},
            {text: "Activo corrente (dispoñible).", correct: false},
            {text: "Activo non corrente (material).", correct: false},
            {text: "Activo non corrente (intanxible).", correct: false}
        ],
    },{
        question: "As ganancias da empresa inclúense dentro de:",
        answers: [
            {text: "Pasivo corrente.", correct: false},
            {text: "Activo non corrente (financeiro).", correct: false},
            {text: "Pasivo non corrente.", correct: false},
            {text: "Patrimonio neto.", correct: true},
            {text: "Activo corrente (dispoñible).", correct: false}
        ],
    },{
        question: "Cal das seguintes empresas ten o seu capital dividido en participacións?:",
        answers: [
            {text: "SA.", correct: false},
            {text: "SA e máis SAL.", correct: true},
            {text: "Ningunha delas.", correct: false},
            {text: "SAL.", correct: false},
            {text: "SLL.", correct: false}
        ],
    },{
        question: "Os beneficios non distribuídos procedentes de exercicios anteriores, chámanse:",
        answers: [
            {text: "Fondos propios.", correct: false},
            {text: "Amortizacións.", correct: false},
            {text: "Descubertos.", correct: false},
            {text: "Reservas.", correct: true},
            {text: "Provisións.", correct: false}
        ],
    },{
        question: "As letras de cambio pendentes de cobro pola empresa inclúense dentro de:",
        answers: [
            {text: "Activo non corrente (intanxible).", correct: false},
            {text: "Activo corrente (realizable).", correct: true},
            {text: "Patrimonio neto.", correct: false},
            {text: "Activo corrente (dispoñible).", correct: false},
            {text: "Activo corrente (existencias).", correct: false}
        ],
    },{
        question: "A operación que diminúe o valor patrimonial da empresa é:",
        answers: [
            {text: "Ningunha.", correct: false},
            {text: "Pagamento.", correct: false},
            {text: "Gasto.", correct: true},
            {text: "Ingreso.", correct: false},
            {text: "Cobro.", correct: false}
        ],
    }
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
