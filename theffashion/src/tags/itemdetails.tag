<itemdetail>
    <div id="itemdetails">
        <div class="itemimg" id="detail-pic">
            <img src="{opts.product.fileUrls[0]}" alt>
        </div>
        <div class="flex-box details">
            <div class="sub-details description">
                <div>
                    <p each='{number in opts.arr}'>{number}</p>
                    <div id="detail-title">
                        <h1>{opts.product.title}</h1>
                    </div>
                </div>
                <div class="filter">
                    <div id="detail-type" class='detail-filter'>{opts.product.type}</div>
                    <div id="detail-type" class='detail-filter'>{opts.product.age}</div>
                </div>
                <div class="price">
                    <a href="#">
                        <p class="price-show">{Number(opts.product.price).toLocaleString('vi')}đ<br><abbr
                                class="btn">Buy now</abbr></p>
                    </a>
                </div>
            </div>
            <div id="detail-desc" class='detail-filter sub-details'>
                <h2>Description</h2>
                <p>{opts.product.description}</p>
            </div>
            <div></div>
        </div>
    </div>
</itemdetail>