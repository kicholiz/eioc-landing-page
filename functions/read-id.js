import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET
});

exports.handler = (event, ctx, callback) => {
    const id = getId(event.path)
    console.log(`Function 'read-id' invoked. Read id: ${id}`)
    return client.query(q.Get(q.Ref(`collections/customers/${id}`)))
        .then((response) => {
            console.log("success", response)
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify(response)
            })
        }).catch((error) => {
            console.log("error", error)
            return callback(null, {
                statusCode: 400,
                body: JSON.stringify(error)
            })
        })
}