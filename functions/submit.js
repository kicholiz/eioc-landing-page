exports.handler = (event, ctx, callback) => {
    const faunadb = require('faunadb');
    const q = faunadb.query;

    const client = new faunadb.Client({
        secret: process.env.FAUNADB_SERVER_SECRET
    });

    console.log(`Function 'submit' invoked.`);

    let customerData = JSON.parse(event.body);
    const data = {
        name: customerData.name,
        organisation: customerData.organisation,
        email: customerData.email,
        phone: customerData.phone,
        eventType: customerData.eventType,
        eventDate: customerData.eventDate,
        budget: customerData.budget,
        guestCount: customerData.guestCount,
        aboutEvent: customerData.aboutEvent,
    }

    console.log(data);
    return client.query(q.Create(q.Collection('customers'), { data: customerData } )).then((response) => {
        console.log("success", response);
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        }
    }).catch((error) => {
        console.log("error", error);
        return {
            statusCode: 400,
            body: JSON.stringify(error)
        }
    })
}