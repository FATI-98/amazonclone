//const functions = require("firebase-functions");
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const stripe=require('stripe')
('sk_test_51JPRrrHlfj6H9AADCC6ouyxWNdTSmitFlhjELZnlC7PhWhPkrrCXgkvV8TC7Pl4qjwhjQGDnD4kkOBOnOwgdBtXI00G1BkcKRu'); //stripe key secret

//api


//api config

const app =express();
//app middlewares

app.use(cors());
app.use( express.json() );       // to support JSON-encoded bodies


//api routes

app.get('/',(request,response)=>{
    response.status(200).send('helllooooooooo')
});

app.post('/payments/create',async(request,response)=>{
    const total=request.query.total;
    console.log('Payment request received ',total);

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,//subunits of the currency
        currency:'€',
    });


    //ok -create
    response.send({
         clientSecret:paymentIntent.client_secret,
    })
    

})

//listen command
app.listen(5000,(request,response)=>{
 console.log('server is running');
})
//exports.api=functions.https.onRequest(app);