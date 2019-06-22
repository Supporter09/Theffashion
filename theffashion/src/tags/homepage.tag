<homepage>

    <div id="home-page">
        <div class="flex">
            <div class="w3-content w3-display-container">
                    <img class="slides" src="https://picsum.photos/id/290/200/300" >
                    <img class="slides" src="https://picsum.photos/id/839/200/300" >
                    <img class="slides" src="https://picsum.photos/id/497/200/300" >
            </div>
            <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
            <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
        </div>
        <div class="non-slide-banner">
            <div class="filter">
                <div class="age">
                    <p>Age</p>
                    <ul>
                        <li><a href="home?type=Casual">Casual</a></li>
                        <li><a href="home?category=Work">Work</a></li>
                        <li><a href="home?category=Home">Home</a></li>
                        <li><a href="home?category=Others">Others</a></li>
                    </ul>
                </div>
                <div class="type">
                    <p>Type</p>
                    <ul>
                        <li><a href="home?age=Children">&lt18 Years Old</a></li>
                        <li><a href="home?age=18-30">18-30</a></li>
                        <li><a href="home?age=31-60">31-60</a></li>
                        <li><a href="home?age=Elder">Elder</a></li>
                    </ul>
                </div>
            </div>
            <div class="shop">
                <div class="title"><h3>All products</h3></div>
                <div>
                    <p>{opts.name}</p>
                    <p each={number in opts.arr}>{number}</p>
                    <div each={products in opts.products}>
                        <img src={products.fileURLs[0]} alt="">
                        <p>{products.title}</p>
                        <p>{Number(products.price).toLocaleString('vi')}đ</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</homepage>