// const express = require('express');
// const Razorpay = require('razorpay');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// app.post('/create-order', async (req, res) => {
//   const { amount, currency, receipt } = req.body;

//   const options = {
//     amount: amount * 100, // Convert to smallest currency unit
//     currency,
//     receipt,
//   };

//   try {
//     const order = await razorpay.orders.create(options);
//     res.status(200).json(order);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post('/order',async (req,res)=>{
    try{
    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });
      const options = req.body
      const order = await razorpay.orders.create(options);

      if (!order) return res.status(500).json({error: 'Some error occured'})
        res.status(200).json(order)
    }catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

app.post('/order/validate', (req, res) => {
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature }= req.body;
    const sha = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`)
    const digest = sha.digest('hex')
    if (digest !== razorpay_signature) {
        return res.status(400).json({error: 'Transaction not legit!'})
    }
    res.json({msg: 'Payment successfull!',orderId:razorpay_order_id,paymentId:razorpay_payment_id}) 

});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
