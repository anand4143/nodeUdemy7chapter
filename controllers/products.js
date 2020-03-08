const Product = require('../models/product');

exports.getAddProduct = (req, res, next) =>{
    res.render('add-product',{
        pageTitle:'add product',
        path:'/admin/add-product',
        formCSS: true,
        productCSS:true,
        activeAddProduct:true
    });
}

exports.postAddProduct = (req, res, next) =>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProduct = (req, res, next)=>{
    Product.fetchAll( (product) =>{
        console.log('product==> ',product);
        res.render('shop',{
            prods:product,
            pageTitle: 'Shop',
            path : '/',
            hasProduct : product.length > 0,
            activeShop : true,
            productCSS: true
        });
    });
}