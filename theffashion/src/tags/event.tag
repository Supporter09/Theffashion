<event>
    <h1>Events</h1>
    <div>
        <!-- <p>{opts.name}</p> -->
        <p each='{number in opts.arr}'>{number}</p>
        <div each='{event in opts.events}'>
            <img src="{event.fileUrls[0]}">
            <p>{event.title}</p>
            <p>{event.date}</p>
            <a href="eventdetails?_id={event._id}">Details</a>
        </div>
    </div>
</event>