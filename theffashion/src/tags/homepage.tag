<homepage>
    <div id="home-page">
        <h3>All Products</h3>
        <div>
            <div class="w3-content w3-display-container">
                <img class="slides" src="https://picsum.photos/id/290/200/300">
                <img class="slides" src="https://picsum.photos/id/839/200/300">
                <img class="slides" src="https://picsum.photos/id/497/200/300">
            </div>
            <div>
                <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)" id='aa'>&#10094;</button>
                <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)" id='bb'>&#10095;</button>
            </div>
            <div class="non-slide-banner flex-box">
                <div class="filter">
                    <div class="age">
                        <p>Age</p>
                        <ul>
                            <li><a href="home?type=Casual">Casual</a></li>
                            <li><a href="home?type=Work">Work</a></li>
                            <li><a href="home?type=Home">Home</a></li>
                            <li><a href="home?type=Others">Others</a></li>
                        </ul>
                    </div>
                    <div class="type">
                        <p>Type</p>
                        <ul>
                            <li><a href="home?age=Children">&lt18 Years Old</a></li>
                            <li><a href="home?age=18-30">18-30</a></li>
                            <li><a href="home?age=30-60">30-60</a></li>
                            <li><a href="home?age=60+">60+</a></li>
                        </ul>
                    </div>
                </div>
                <div class="shop">
                    <div class="title">
                        <h3>All products</h3>
                    </div>
                    <div>
                        <p>{opts.name}</p>
                        <p each='{number in opts.arr}'>{number}</p>
                        <div each='{product in opts.products}'>
                            <img src="{product.fileUrls[0]}">
                            <p>{product.title}</p>
                            <p>{Number(product.price).toLocaleString('vi')}đ</p>
                            <a href="itemdetail?_id={product._id}">See More</a>
                        </div>
                        <!-- <a href="./item"></a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</homepage>