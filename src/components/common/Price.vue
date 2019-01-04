<template>
    <Row>
        <Col span="5">
            <div class="pricing-table">
                <h3>云主机入门版</h3>
                <div class="desc">
                    Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit.
                </div>
                <ul>
                    <li><i class="icon-angle-right"></i> 10 Email Accounts</li>
                    <li><i class="icon-angle-right"></i> 10 User Accounts</li>
                    <li><i class="icon-angle-right"></i> 100 GB Storage</li>
                    <li><i class="icon-angle-right"></i> 24X7 Support</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                </ul>
                <div class="rate">
                    <div class="price">
                        <div class="currency ">
                            $<br />
                            Monthly
                        </div>
                        <div class="amount ">
                            99
                        </div>
                    </div>
                    <a href="#" class="btn green">
                       购买 <i class="m-icon-swapright m-icon-white"></i>
                    </a>
                </div>
            </div>
        </Col>
    </Row>
</template>

<script>
    export default {
        name: "Price"
    }
</script>

<style scoped>
    .pricing-table{
        display: block;
        border: 3px solid transparent;
        padding: 10px;
        background-color: #f1f2f2;
    }

    .pricing-table h3 {
        margin-left: -2px;
        padding-left: 0;
        font-size: 26px;
        margin-bottom: 5px;
        line-height: 26px;
        color: #111;
        margin-top: 0;
        font-weight: 500;
    }

    .pricing-table .desc {
        margin-bottom: 10px;
        padding-bottom: 15px;
        color: #666;
        border-bottom: 1px solid #ddd;
        display: block;
        border-radius: 0 !important;
    }

    .pricing-table ul {
        margin: 0;
        margin-bottom: 15px;
        padding: 0;
        list-style: none;
    }
    .pricing-table ul li {
        padding: 6px 0;
        padding-left: 11px;
        font-size: 13px;
        line-height: 13px;
        color: #666;
    }

    .pricing-table ul li i {
        position: absolute;
        margin-right: 0;
        margin-top: -2px;
        margin-left: -17px;
        color: #35aa47;
        font-size: 16px;
    }

    .pricing-table .rate {
        border-top: 1px solid #ddd;
        margin-bottom: 10px;
        padding-top: 15px;
        height: 50px;
        clear: both;
    }

    .pricing-table .rate .price {
        display: inline-block;
        float: left;
        clear: both;
    }

    .pricing-table .rate .price .currency {
        padding-top: 4px;
        float: left;
        width: 50px;
        text-align: right;
        font-size: 13px;
        line-height: 14px;
        font-weight: 300;
        margin-right: 2px;
    }

    .pricing-table .rate .price .amount {
        padding-top: 4px;
        letter-spacing: -3px;
        float: left;
        text-align: right;
        font-size: 36px;
        line-height: 30px;
        font-weight: 300;
    }
    .btn {
        background-color: #e5e5e5;
        background-image: none;
        filter: none;
        border: 0;
        padding: 7px 14px;
        text-shadow: none;
        font-family: "Segoe UI", Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #333333;
        cursor: pointer;
        outline: none;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        box-shadow: none !important;
        -webkit-border-radius: 0 !important;
        -moz-border-radius: 0 !important;
        border-radius: 0 !important;
    }

    .btn.green {
        color: white;
        text-shadow: none;
        background-color: #35aa47;
    }

    .pricing-table .rate .btn {
        margin-top: 3px;
        float: right;
        display: block;
    }

    [class^="m-icon-"] {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-top: 4px;
        line-height: 14px;
        vertical-align: top;
        background-position: 0 0;
        background-repeat: no-repeat;
    }

    .m-icon-white {
        background-image: url(/static/images/syncfusion-icons-white.png);
    }

    .m-icon-swapright {
        background-position: -27px -10px;
    }
</style>