// import  pg from "pg";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "postgres://lzdyzbdc:al_M-CPndOp-3SS0VvBhv6OjVNhoZ-We@babar.db.elephantsql.com/lzdyzbdc",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;

// async function connect() {
//     if (global.connection) {
//         return global.connection.connect();
//     }
//     const pool = new pg.Pool({
//         connectionString: "postgres://lzdyzbdc:al_M-CPndOp-3SS0VvBhv6OjVNhoZ-We@babar.db.elephantsql.com/lzdyzbdc"
//     });
//     global.connection = pool;
//     return pool.connect();
// }

// export {
//     connect
// }