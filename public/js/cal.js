$(document).ready(function() {
    $('#calendar').evoCalendar({
        theme: 'Royal Navy',
        'eventHeaderFormat': 'MM dd yyyy',
        calendarEvents: [
            // {
            //     id: 'event1', // Event's ID (required)
            //     name: "New Year", // Event name (required)
            //     date: "November/1/2021", // Event date (required)
            //     description: "my birthday is coming soon",
            //     type: "holiday", // Event type (required)
            //     everyYear: true // Same event every year (optional)
            // },
            // {
            //     name: "Vacation Leave",
            //     badge: "02/13 - 02/15", // Event badge (optional)
            //     date: ["February/13/2020", "February/15/2020"], // Date range
            //     description: "Vacation leave for 3 days.", // Event description (optional)
            //     type: "event",
            //     color: "#63d867" // Event custom color (optional)
            // },
            {
                name: "Event #22",
                date: "November/20/2021",
                description: "How to start a startup",
                type: "event",
            },
            {
                name: "Event #23",
                date: "November/27/2021",
                description: "Job opportunities in civil engineering",
                type: "event",
            },
            {
                name: "Event #24",
                date: "December/4/2021",
                description: "software testing as a career option",
                type: "event",
            },
            {
                name: "Event #25",
                date: "December/11/2021",
                description: "A day in the life of network and cloud engineer",
                type: "event",
            },
            ]
    })
})