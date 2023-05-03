export function ormConfig(): any {
    return {
        "type": "mongodb",
        "url": process.env.MONGOURL,
        "useNewUrlParser": true,
        "synchronize": true,
        "logging": true,
        // connectTimeout: parseInt(process.env.DATABASE_CONNECTION_TIME_OUT),
        // acquireTimeout: parseInt(process.env.DATABASE_ACQUIRE_TIME_OUT),
        // extra: {
        //     connectionLimit: parseInt(process.env.DATABASE_CONNECTION_LIMIT),
        // },
        entities: [
            'dist/**/entity/*.entity.js',
        ],
        migrations: [
            'dist/database/migrations/*.js',
        ],
        subscribers: [
            'dist/observers/subscribers/*.subscriber.js',
        ],
        cli: {
            entitiesDir: 'src/components/**/entity',
            migrationsDir: 'src/database/migrations',
            subscribersDir: 'src/observers/subscribers',
        },
    };
}