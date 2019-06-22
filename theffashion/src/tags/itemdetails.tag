<itemdetail>
    <div id="itemdetails">
        <p each='{number in opts.arr}'>{number}</p>
        <!-- <div each='{product in opts.product}'> -->
        <div>
            <p>{opts.product.title}</p>
        </div>
        <div class="itemimg">
            <img src="{opts.product.fileUrls[0]}" alt>
        </div>

        <!-- <p>{opts.product.age}</p>
            <p>{opts.product.type}</p> -->

        <div>
            <p>{opts.product.description}</p>
        </div>

        <div>
            <p>{Number(opts.product.price).toLocaleString('vi')}đ</p>
        </div>

    </div>

</itemdetail>