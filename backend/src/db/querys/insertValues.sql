INSERT INTO conta (
	dt_recebimento,
    valor_conta,
    status_recebimento
) VALUES 
	('2024-08-01', 1034.45, TRUE);
    
INSERT INTO despesas (
	dt_despesa,
    despesa,
    valor_despesa,
    status_despesa,
    idconta
) VALUES 
	('2024-08-14', 'Passeio Shopping', 120.35, FALSE, 1),
    ('2024-08-25', 'CRÉDITO', 345.70, FALSE, 1);
    
INSERT INTO despesas_credito (
	dt_despesa_credito,
    despesa_credito,
    valor,
    descricao,
    id_despesa
) VALUES 
	('2024-08-01', 'Amazon Store', 160.00, 'Fone Bluethoo a Prova de Água', 1);
    
TRUNCATE TABLE despesas_credito;