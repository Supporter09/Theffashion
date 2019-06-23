<itemdetail>
    <div id="itemdetails">
        <p each='{number in opts.arr}'>{number}</p>
        <div id="detail-title">
            <p>{opts.product.title}</p>
        </div>
        <div class="itemimg" id="detail-pic">
            <img src="{opts.product.fileUrls[0]}" alt>
        </div>
        <div id="detail-desc">
            <p>{opts.product.description}</p>
        </div>
        <div id="detail-type">{opts.product.type}</div>
        <div>{opts.product.age}</div>
        <div>
            <p>{Number(opts.product.price).toLocaleString('vi')}đ</p>
        </div>
    </div>
</itemdetail>