INSERT INTO
    conta (
        dt_recebimento,
        valor_conta,
        status_recebimento
    )
VALUES ('2024-08-01', 1034.45, TRUE),
    ('2024-09-10', 750.60, FALSE),
    ('2024-07-15', 1280.00, TRUE),
    ('2024-09-01', 540.75, FALSE);

INSERT INTO
    despesas (
        dt_despesa,
        despesa,
        valor_despesa,
        status_despesa,
        idconta
    )
VALUES (
        '2024-08-14',
        'Passeio Shopping',
        120.35,
        FALSE,
        1
    ),
    (
        '2024-08-15',
        'Supermercado',
        250.50,
        TRUE,
        2
    ),
    (
        '2024-08-16',
        'Restaurante',
        75.80,
        FALSE,
        3
    );

INSERT INTO
    despesas_credito (
        dt_despesa_credito,
        despesa_credito,
        valor,
        descricao,
        idconta
    )
VALUES (
        '2024-08-01',
        'Amazon Store',
        345.70,
        'Fone Bluetooth à Prova de Água',
        2
    ),
    (
        '2024-08-05',
        'Apple Store',
        999.99,
        'iPhone 14 Pro',
        3
    ),
    (
        '2024-08-10',
        'Steam',
        59.90,
        'Jogo de Aventura',
        1
    );

TRUNCATE TABLE despesas_credito;