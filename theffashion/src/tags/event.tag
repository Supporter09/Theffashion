<event>
    <h1>Events</h1>
    <div class="grid-center-middle">
        <!-- <p>{opts.name}</p> -->
        <p each='{number in opts.arr}'>{number}</p>
        <div each='{event in opts.events}'>
            <img id="img-event" src="{event.fileUrls[0]}">
            <div id="event-p">
            <p class="event-title">{event.title}</p>
            <p class="event-date-details">{event.date}</p>
            <a class="event-date-details" href="eventdetails?_id={event._id}">Details</a>
            </div>
            <div class="circle date-event">
                <p class="month">{event.date}</p>
            </div>
            <img id="event-interested" src="./assets/Ellipse.png" alt="">
            <img id="event-going" src="./assets/Ellipse2.png">
        </div>
    

    </div>
</event>