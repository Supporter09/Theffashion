<homepage>
    <h3>All Products</h3>
    <div>
            <div class="w3-content w3-display-container">
                    <img class="slides" src="https://picsum.photos/id/290/200/300" style="width:100%">
                    <img class="slides" src="https://picsum.photos/id/839/200/300" style="width:100%">
                    <img class="slides" src="https://picsum.photos/id/497/200/300" style="width:100%">
            </div>
                    <button class="w3-button w3-black w3-display-left" id='aa'>&#10094;</button>
                    <button class="w3-button w3-black w3-display-right" id = 'bb' >&#10095;</button>
        <ul>
            <!-- <li><a href='home?category=Accessories'>Assessories</a></li>
            <li><a href="home?category=Boys Stuff">Boys Stuff</a></li>
            <li><a href="home?category=Bridal">Bridal</a></li>
            <li><a href="home?category=Girls Stuff">Girls Stuff</a></li>
            <li><a href="home?category=Jewelry">Jewelry</a></li>
            <li><a href="home?category=Weird Stuff">Weird Stuff</a></li>
            <li><a href="home?category=Random Stuff">Random Stuff</a></li> -->
            <li><a href="home?type=Casual">Casual</a></li>
            <li><a href="home?category=Work">Work</a></li>
            <li><a href="home?category=Home">Home</a></li>
            <li><a href="home?category=Others">Others</a></li>
        </ul>
        <ul>
            <li><a href="home?age=Children">&lt18 Years Old</a></li>
            <li><a href="home?age=18-30">18-30</a></li>
            <li><a href="home?age=31-60">31-60</a></li>
            <li><a href="home?age=Elder">Elder</a></li>
        </ul>
    </div>
    <div>
        <p>{opts.name}</p>
        <p each='{number in opts.arr}'>{number}</p>
        <div each='{products in opts.products}'>
            <img src="{products.fileURLs[0]}" alt>
            <p>{products.title}</p>
            <!-- <div>
                <p>{products.emotion}</p>
                <img src="./assets/{products.emotion}.png">
            </div> -->
            <p>{Number(products.price).toLocaleString('vi')}đ</p>
        </div>
    </div>
</homepage>