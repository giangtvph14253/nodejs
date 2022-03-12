const Cat = mongoose.model('Product', { name: String });

export const create = async(req,res)=>{
    try{
        const product = await new Product(req.body).save();
        res.json(product);
    }catch(error){
        res.startus(400).json({
            error: "Không thêm được sản phẩm"
        })
    }
}

export const list = async (req, res) => {
    try{
        const products = await new Product.find({}).exec();
        res.json(products);
    }catch(error){
        res.startus(400).json({
            error: "Không thêm được sản phẩm"
        })
    }
}

export const get = async (req, res) => {
    try{
        const product = await new Product.find({_id: req.params.id}).exec();
        res.json(product);
    }catch(error){
        res.startus(400).json({
            error: "Không có sản phẩm"
        })
    }
}
export const remove = (req, res) => {
    res.json(data.filter(item => item.id != req.params.id));
}
export const update = (req, res) => {
    const result = data.map(item => item.id == req.params.id ? req.body : item)
    res.json(result);
}