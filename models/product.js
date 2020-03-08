const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');

const getProductsFromFile = cb =>{
    fs.readFile(p, (err , fileContent)=>{
        if(err){
            cb([])
        }else{
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product{
    constructor(t){
        this.title = t;
    }
    save(){
        getProductsFromFile( (product)=>{
            product.push(this);
            fs.writeFile(p, JSON.stringify(product), (err)=>{
                console.log(err);
            })
        });
        

    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}