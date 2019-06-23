<homepage>

    <div id="home-page">
        <div>
            <div class="slide-banner flex-box">
                <div>
                    <div class="btn-slide-banner">
                        <button id='aa'>&#10094;</button>
                        <button id='bb'>&#10095;</button>
                    </div>
                    <img class="slides" src="./assets/slide-banner-1.jpg">
                    <img class="slides" src="./assets/slide-banner-2.jpg">
                    <img class="slides" src="./assets/slide-banner-3.jpg">
                </div>
            </div>
            <div class="non-slide-banner flex-box">
                <h1 id="heading-filter-age">aaaaaa</h1>
                <h1 id="heading-filter-type">bbbbbb</h1>
                <div class="filter">
                    <div class="age">
                        <p><a href="home?age={opts.currentAge}&type=">All Types</a></p>
                        <ul>
                            <li><a href="home?type=Casual&age={opts.currentAge}">Casual</a></li>
                            <li><a href="home?type=Work&age={opts.currentAge}">Work</a></li>
                            <li><a href="home?type=Home&age={opts.currentAge}">Home</a></li>
                            <li><a href="home?type=Others&age={opts.currentAge}">Others</a></li>
                        </ul>
                    </div>
                    <div class="type">
                        <p><a href='home?type={opts.currentType}&age='>All Ages</a></p>
                        <ul>
                            <li><a href="home?type={opts.currentType}&age=Children">&lt18 Years Old</a></li>
                            <li><a href="home?age=18-30&type={opts.currentType}">18-30</a></li>
                            <li><a href="home?age=30-60&type={opts.currentType}">30-60</a></li>
                            <li><a href="home?age=60+&type={opts.currentType}">60+</a></li>
                        </ul>
                    </div>
                </div>
                <div class="shop flex-box">
                    <p>{opts.name}</p>
                    <p each='{number in opts.arr}'>{number}</p>
                    <div>
                        <div class="product-div" each='{product in opts.products}'>
                            <img src="{product.fileUrls[0]}">
                            <h1>{product.title}</h1>
                            <p>{Number(product.price).toLocaleString('vi')}đ</p>
                            <a href="itemdetail?_id={product._id}" id="add-cart">Details</a>
                            <!-- <form action="itemdetail?_id={product._id}">
                                <button>Add to cart</button>
                            </form> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</homepage>