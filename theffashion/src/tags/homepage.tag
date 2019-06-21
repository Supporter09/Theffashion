<homepage>
    <div>
        <ul>
            <li><a href="home?category=Accessories">Accessories</a></li>
            <li><a href="home?category=Boys Stuff">Boys Stuff</a></li>
            <li><a href="home?category=Bridal">Bridal</a></li>
            <li><a href="home?category=Girls Stuff">Girls Stuff</a></li>
            <li><a href="home?category=Jewelry">Jewelry</a></li>
            <li><a href="home?category=Weird Stuff">Weird Stuff</a></li>
            <li><a href="home?category=Random Stuff">Random Stuff</a></li>
        </ul>
    </div>
<h3>All Product</h3>
<div each='{product in opts.products}'>
    <img src="{product.fileUrls[0]}" alt="">
    <p>{product.title}</p>
    <p>{Number(product.price).toLocaleString('vi')}đ</p>
    <p>{product.whatsell}</p>
    <p>{product.whysell}</p>
    <img src="./assets/{product.emotion}.png" alt=""></p>


</div>
</homepage>