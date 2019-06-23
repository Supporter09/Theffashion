<eventdetails>
    <div id="eventdetails">
        <form action="" id="event-details-form">
            <div>
                <img id="detailsimg" src="{opts.events.fileUrls[0]}" alt>
            </div>
            <form action="" id="eventform">
                <div>
                    <p>{opts.events.date}</p>
                </div>
            </form>

            <div>
                <p>{opts.events.title}</p>
            </div>
        </form>
        <p>{opts.name}</p>
        <p each='{number in opts.arr}'>{number}</p>
        <form action="" id="event-details-form2">
            <div>
                <p>{opts.events.description}</p>
            </div>
        </form>




    </div>


</eventdetails>