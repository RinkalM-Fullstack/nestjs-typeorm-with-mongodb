require('dotenv').config({ path: `./config.env` })
import { User } from "../../entities/index";

console.log(process.env.MONGO_URL, "mong945834ourl")
export function ormConfig(): any {
    return {
        "type": "mongodb",
        "url": process.env.MONGO_URL,
        "useNewUrlParser": true,
        "synchronize": true,
        "logging": true,
        entities: [
            // User,
            'dist/**/entities/*.entity.js',
        ],
        // migrations: [
        //     'dist/database/migrations/*.js',
        // ],
        // subscribers: [
        //     'dist/observers/subscribers/*.subscriber.js',
        // ],
        cli: {
            entitiesDir: 'src/**/**/entities',
            // migrationsDir: 'src/database/migrations',
            // subscribersDir: 'src/observers/subscribers',
        },
    };
}