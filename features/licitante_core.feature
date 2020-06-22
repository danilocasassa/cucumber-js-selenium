            #language:pt

            Funcionalidade: Teste

            Cenário: Gerando uma cotação qualquer
            Dado que acesso a plataforma no fluxo de licitante
            E seleciono qualquer tomador
            Quando gero uma cotação qualquer
            E seleciono qualquer opção de qualificação
            Então vejo o resultado da cotação

            Cenário: Usando tabela do cucumber
            Dado que acesso a plataforma no fluxo de licitante
            E seleciono qualquer tomador
            Quando gero uma cotação com os seguintes dados:
            | coluna               | valor     |
            | valor do Contrato    | 100000,00 |
            | vigencia do Contrato | 1829      |
            E seleciono qualquer opção de qualificação
            Então vejo o resultado da cotação com os seguintes dados:
            | coluna              | valor              |
            | valor da cotação    | R$ 197,23          |
            | valor de IS         | 1.000,00           |
            | vigencia da cotacao | 1829 dias          |
            | nome tomador        | NOVO TOMADOR TESTE |