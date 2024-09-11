CREATE TABLE conta (
    idconta INT NOT NULL UNIQUE AUTO_INCREMENT,
    dt_recebimento DATE NOT NULL,
    valor_conta FLOAT NOT NULL,
    status_recebimento BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (idconta)
);

CREATE TABLE despesas (
    id_despesa INT NOT NULL UNIQUE AUTO_INCREMENT,
    dt_despesa DATE NOT NULL,
    despesa VARCHAR(100) NOT NULL,
    valor_despesa FLOAT NOT NULL,
    status_despesa BOOLEAN NOT NULL DEFAULT FALSE,
    idconta INT,
    PRIMARY KEY (id_despesa),
    CONSTRAINT FK_despesas_conta FOREIGN KEY (idconta) REFERENCES conta (idconta) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE despesas_credito (
    id_credito INT NOT NULL UNIQUE AUTO_INCREMENT,
    dt_despesa_credito DATE NOT NULL,
    despesa_credito VARCHAR(100) NOT NULL,
    valor FLOAT NOT NULL,
    descricao VARCHAR(500) DEFAULT 'Sem informação',
    id_despesa INT,
    idconta INT,
    PRIMARY KEY (id_credito),
    CONSTRAINT FK_credito_conta FOREIGN KEY (idconta) REFERENCES conta (idconta) ON DELETE CASCADE ON UPDATE CASCADE
);

ALTER TABLE despesas_credito DROP COLUMN id_despesa;