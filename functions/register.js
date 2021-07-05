exports.handler = async(event, ctx, callback) => {

    // receive the request event and get the user's details from it
    console.log(JSON.parse(event.body));
    const {
        name,
        organisation,
        email,
        phone,
        eventType,
        eventDate,
        budget,
        guestCount,
        aboutEvent
    } = JSON.parse(event.body);

    // create a new user object and do what you want with, like: 
    // Save user to a database
    // Authenticate user
    // Send event details to user's email
    // etc.

    const data = {
        name: name,
        organisation: organisation,
        email: email,
        phone: phone,
        eventType: eventType,
        eventDate: eventDate,
        budget: budget,
        guestCount: guestCount,
        aboutEvent: aboutEvent,
    }

    // Send user back to the client
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}