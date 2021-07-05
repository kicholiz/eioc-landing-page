const faunadb = require("faunadb");
const chalk = require("chalk");

const q = faunadb.query;

/*  */
function setupFaunaDB() {
    console.log(chalk.yellow("Attempting to create the DB schemas..."));

    let key = checkForFaunaKey();

    const client = new faunadb.Client({
        secret: key
    });

    /* Based on your requirements, change the schema here */
    return client
        .query(
            q.CreateCollection({
                name: "customers"
            })
        )
        .then(() =>
            client.query(
                q.Do(
                    q.CreateCollection({
                        name: "customers",
                        permissions: {
                            create: q.Collection("customers")
                        }
                    })
                )
            )
        )
        .then(() =>
            client.query(
                q.Do(
                    q.CreateIndex({
                        name: "customers_by_id",
                        source: q.Collection("customers"),
                        terms: [
                            {
                                field: ["data", "id"]
                            }
                        ],
                        unique: true
                    }),
                    q.CreateIndex({
                        // this index is optional but useful in development for browsing users
                        name: `all_customers`,
                        source: q.Collection("customers")
                    })
                )
            )
        )
        .catch(e => {
            if (e.message === "instance already exists") {
                console.log("Schemas are already created... skipping");
                process.exit(0);
            } else {
                console.error("There was a problem bootstrapping the db", e);
                throw e;
            }
        });
}

function checkForFaunaKey() {
    if (!process.env.FAUNADB_SERVER_SECRET) {
        process.exit(1);
    }
    console.log(
        chalk.green(
            `Found FAUNADB_SERVER_SECRET environment variable in Netlify site`
        )
    );
    return process.env.FAUNADB_SERVER_SECRET;
}

setupFaunaDB()
    .then(() => {
        console.log(chalk.green(`Bootstraping DB scheamas was successful!`));
    })
    .catch(err => {
        console.log(
            chalk.red.bold(
                `There was an issue bootstrapping the DB scheamas due to: ${err}`
            )
        );
        process.exit(1);
    });