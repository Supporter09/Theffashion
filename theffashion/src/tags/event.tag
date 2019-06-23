<event>
    <h1>Events</h1>
    <div class="grid-center-middle eventform">
        <!-- <p>{opts.name}</p> -->
        <p each='{number in opts.arr}'>{number}</p>
        <div each='{event in opts.events}'>
            <img id="img-event" src="{event.fileUrls[0]}">
            <div class="event-p">
                <p class="event-title">{event.title}</p>
                <p class="event-date-details">{event.date}</p>
                <a class="event-detail event-date-details" href="eventdetails?_id={event._id}">Details</a>
                <div>
                   <a href="" id="btn-event"><img class="event-interested" src="./assets/Ellipse.png" alt=""></a>
                <!-- </div> -->
                <!-- <div> -->
                   <a href="" id="btn-event-2"><img class="event-going" src="./assets/Ellipse2.png"></a>
                <!-- </div> -->
                    <p class="date-circle-event" class="month">{event.date}</p>
                </div>
            </div>


        </div>


    </div>
</event>