const Razorpay = require('razorpay');

module.exports = async (req, res) => {
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const options = {
        amount: req.body.amount*100,
        currency: 'INR',
        receipt: "receipt_order#1",
        notes: {
            desc: req.body.desc,
        },
    };
    try {
        const order = await instance.orders.create(options);
        res.send({success:true,order});
    } catch (error) {
        res.send({success:false,message: error.message});
    }
}