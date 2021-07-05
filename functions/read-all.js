import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET
})

exports.handler = (event, context, callback) => {
    console.log("Function 'read-all' invoked")
    return client.query(q.Paginate(q.Match(q.Ref("collections/customers"))))
        .then((response) => {
            const eventRefs = response.data
            console.log("Event refs", eventRefs)
            console.log(`${eventRefs.length} found`)
            const getAllCustomerQuery = eventRefs.map((ref) => {
                return q.Get(ref)
            })
            // then query the refs
            return client.query(getAllCustomerQuery).then((ref) => {
                return callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(ref)
                })
            })
        }).catch((error) => {
            console.log("error", error)
            return callback(null, {
                statusCode: 400,
                body: JSON.stringify(error)
            })
        })
}