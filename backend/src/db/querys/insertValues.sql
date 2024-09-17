INSERT INTO
    conta (
        dt_recebimento,
        valor_conta,
        status_recebimento
    )
VALUES ('2024-01-30', 985.40, TRUE),
    ('2024-02-18', 760.00, FALSE),
    ('2024-03-01', 1120.75, TRUE),
    ('2024-04-10', 540.00, TRUE),
    ('2024-05-20', 1345.80, FALSE),
    ('2023-01-15', 455.60, TRUE),
    ('2023-02-05', 675.30, FALSE),
    ('2023-03-25', 890.95, TRUE),
    ('2023-04-10', 1025.20, TRUE),
    ('2023-05-05', 600.50, TRUE);

INSERT INTO
    despesas (
        dt_despesa,
        despesa,
        valor_despesa,
        status_despesa,
        idconta
    )
VALUES (
        '2024-09-01',
        'Posto de Gasolina',
        180.75,
        TRUE,
        4
    ),
    (
        '2024-09-05',
        'Farmácia',
        45.60,
        FALSE,
        5
    ),
    (
        '2024-09-07',
        'Padaria',
        35.20,
        TRUE,
        6
    ),
    (
        '2024-09-10',
        'Cinema',
        60.50,
        FALSE,
        7
    ),
    (
        '2024-09-12',
        'Academia',
        150.00,
        TRUE,
        8
    );

INSERT INTO
    despesas_credito (
        dt_despesa_credito,
        despesa_credito,
        valor_credito,
        descricao,
        idconta
    )
VALUES (
        '2024-08-12',
        'Mercado Livre',
        199.99,
        'Relógio Inteligente',
        4
    ),
    (
        '2024-08-20',
        'AliExpress',
        45.60,
        'Cabo de Carregamento',
        5
    ),
    (
        '2024-08-25',
        'Microsoft Store',
        79.99,
        'Assinatura Office 365',
        6
    ),
    (
        '2024-09-01',
        'Google Play',
        12.50,
        'Aplicativo de Produtividade',
        7
    ),
    (
        '2024-09-05',
        'eBay',
        350.00,
        'Câmera de Segurança',
        8
    ),
    (
        '2024-09-07',
        'Shopee',
        29.90,
        'Capa para Celular',
        9
    );

TRUNCATE TABLE despesas_credito;