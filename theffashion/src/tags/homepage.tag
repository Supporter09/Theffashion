<homepage>
    <div id="home-page">
        <div>
            <div class="slide-banner flex-box">
                <div>
                    <img class="slides" src="./assets/slide-banner-1.jpg">
                    <img class="slides" src="./assets/slide-banner-2.jpg">
                    <img class="slides" src="./assets/slide-banner-3.jpg">
                </div>
                <div class="btn-slide-banner">
                    <button id='aa'>&#10094;</button>
                    <button id='bb'>&#10095;</button>
                </div>
            </div>
            <div class="non-slide-banner flex-box">
                <div class="filter">
                    <div class="age">
                        <p>Type</p>
                        <ul>
                            <li><a href="home?type=Casual">Casual</a></li>
                            <li><a href="home?type=Work">Work</a></li>
                            <li><a href="home?type=Home">Home</a></li>
                            <li><a href="home?type=Others">Others</a></li>
                        </ul>
                    </div>
                    <div class="type">
                        <p>Age</p>
                        <ul>
                            <li><a href="home?age=Children">&lt18 Years Old</a></li>
                            <li><a href="home?age=18-30">18-30</a></li>
                            <li><a href="home?age=30-60">30-60</a></li>
                            <li><a href="home?age=60+">60+</a></li>
                        </ul>
                    </div>
                </div>
                <div class="shop flex-box">
                    <p>{opts.products.casual}</p>
                    <p>{opts.products.type}</p>
                    <p>{opts.name}</p>
                    <p each='{number in opts.arr}'>{number}</p>
                    <a href="#">
                        <div class="product-div" each='{product in opts.products}'>
                            <img src="{product.fileUrls[0]}">
                            <h1>{product.title}</h1>
                            <p>{Number(product.price).toLocaleString('vi')}đ</p>
                            <button>Add to cart</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</homepage>