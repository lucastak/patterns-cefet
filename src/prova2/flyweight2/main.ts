// Interface para o Flyweight
interface DatabaseConnection {
    connect(): void;
    query(sql: string): void;
    disconnect(): void;
}

class OracleDatabaseConnection implements DatabaseConnection {
    private connected: boolean = false;

    connect(): void {
        if (!this.connected) {
            console.log("Conectando ao banco de dados Oracle...");
            this.connected = true;
        }
    }

    query(sql: string): void {
        if (this.connected) {
            console.log(`Executando a query no banco de dados Oracle: ${sql}`);
        } else {
            console.log("Por favor, conecte-se ao banco de dados primeiro.");
        }
    }

    disconnect(): void {
        if (this.connected) {
            console.log("Desconectando do banco de dados Oracle...");
            // Lógica de desconexão do Oracle
            this.connected = false;
        }
    }
}

class MysqlDatabaseConnection implements DatabaseConnection {
    private connected: boolean = false;

    connect(): void {
        if (!this.connected) {
            console.log("Conectando ao banco de dados MySQL...");
            // Lógica de conexão com o MySQL
            this.connected = true;
        }
    }

    query(sql: string): void {
        if (this.connected) {
            console.log(`Executando a query no banco de dados MySQL: ${sql}`);
            // Lógica de execução da query no MySQL
        } else {
            console.log("Por favor, conecte-se ao banco de dados primeiro.");
        }
    }

    disconnect(): void {
        if (this.connected) {
            console.log("Desconectando do banco de dados MySQL...");
            // Lógica de desconexão do MySQL
            this.connected = false;
        }
    }
}

class SqlServerDatabaseConnection implements DatabaseConnection {
    private connected: boolean = false;

    connect(): void {
        if (!this.connected) {
            console.log("Conectando ao banco de dados SQL Server...");
            // Lógica de conexão com o SQL Server
            this.connected = true;
        }
    }

    query(sql: string): void {
        if (this.connected) {
            console.log(`Executando a query no banco de dados SQL Server: ${sql}`);
            // Lógica de execução da query no SQL Server
        } else {
            console.log("Por favor, conecte-se ao banco de dados primeiro.");
        }
    }

    disconnect(): void {
        if (this.connected) {
            console.log("Desconectando do banco de dados SQL Server...");
            // Lógica de desconexão do SQL Server
            this.connected = false;
        }
    }
}

class ConnectionFactory {
    private connections: { [key: string]: DatabaseConnection } = {};

    getConnection(databaseType: string): DatabaseConnection {
        if (!this.connections[databaseType]) {
            switch (databaseType) {
                case "Oracle":
                    this.connections[databaseType] = new OracleDatabaseConnection();
                    break;
                case "Mysql":
                    this.connections[databaseType] = new MysqlDatabaseConnection();
                    break;
                case "SqlServer":
                    this.connections[databaseType] = new SqlServerDatabaseConnection();
                    break;
                default:
                    throw new Error("Tipo de banco de dados não suportado");
            }
        }

        return this.connections[databaseType];
    }
}

// Uso do Flyweight
const connectionFactory = new ConnectionFactory();

const oracleConnection = connectionFactory.getConnection("Oracle");
oracleConnection.connect();
oracleConnection.query("SELECT * FROM tabela");
oracleConnection.disconnect();

const mysqlConnection = connectionFactory.getConnection("Mysql");
mysqlConnection.connect();
mysqlConnection.query("SELECT * FROM table");
mysqlConnection.disconnect();

const sqlServerConnection = connectionFactory.getConnection("SqlServer");
sqlServerConnection.connect();
sqlServerConnection.query("SELECT * FROM table");
sqlServerConnection.disconnect();
