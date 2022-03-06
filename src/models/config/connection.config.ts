import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: 'db',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest-db',
    entities: ["dist/models/entities/**/*{.js,.ts}"],
    migrations: ["dist/models/migrations/**/*{.js,.ts}"],
    synchronize: false,
    cli: {
        entitiesDir: './src/models/entities',
        migrationsDir: './src/models/migrations',
    }
}

export default connectionOptions;