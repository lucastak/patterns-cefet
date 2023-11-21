interface DatabaseConnection {
    connect(): void;
    query(sql: string): void;
    disconnect(): void;
}

class OracleConnection implements DatabaseConnection {
    connect(): void {
        console.log("Conectando ao banco de dados Oracle...");
        // Lógica de conexão com o Oracle
    }

    query(sql: string): void {
        console.log(`Executando a query no banco de dados Oracle: ${sql}`);
        // Lógica de execução da query no Oracle
    }

    disconnect(): void {
        console.log("Desconectando do banco de dados Oracle...");
        // Lógica de desconexão do Oracle
    }
}

class MySqlConnection implements DatabaseConnection {
    connect(): void {
        console.log("Conectando ao banco de dados MySQL...");
        // Lógica de conexão com o MySQL
    }

    query(sql: string): void {
        console.log(`Executando a query no banco de dados MySQL: ${sql}`);
        // Lógica de execução da query no MySQL
    }

    disconnect(): void {
        console.log("Desconectando do banco de dados MySQL...");
        // Lógica de desconexão do MySQL
    }
}

abstract class DatabaseConnectionFactory {
    abstract createConnection(databaseType: string): DatabaseConnection;
}

class ConcreteDatabaseConnectionFactory extends DatabaseConnectionFactory {
    createConnection(databaseType: string): DatabaseConnection {
        switch (databaseType) {
            case "Oracle":
                return new OracleConnection();
            case "Mysql":
                return new MySqlConnection();
            default:
                throw new Error("Tipo de banco de dados não suportado");
        }
    }
}

const databaseType = "Oracle";
const factory: DatabaseConnectionFactory = new ConcreteDatabaseConnectionFactory();
const connection: DatabaseConnection = factory.createConnection(databaseType);

connection.connect();
connection.query("SELECT * FROM tabela");
connection.disconnect();
