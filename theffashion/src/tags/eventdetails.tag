<eventdetails>
    <div id="eventdetails">
        <div class="events">
            <form action="#" id="event-details-form">
                <div class="pic">
                    <img class="eventdetail-img" id="detailsimg" src="{opts.events.fileUrls[0]}" alt>
                </div>
                <div class="non-pic flex-box">
                    <div class="description flex-box date-event">
                        <p id="date-event" class="flex-box">{opts.events.date}</p>
                    </div>
                    <div class="description">
                        <form action="#" id="eventform">
                            <div>
                                <p id="name-event">{opts.events.title}</p>
                            </div>
                        </form>
                    </div>
                    <div class="description btn-group">
                        <div class="btn">
                            <img src="./assets/Ellipse.png"><br>
                            <a href="#">Interested</a>
                        </div>
                        <div class="btn">
                            <img src="./assets/Ellipse2.png"><br>
                            <a href="#">Going</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!-- <p>{opts.name}</p>         -->
        <div class="details">
            <p each='{number in opts.arr}'>{number}</p>
            <form action="#" id="event-details-form2">
                <div>
                    <p>{opts.events.description}</p>
                </div>
            </form>
        </div>
    </div>
</eventdetails>