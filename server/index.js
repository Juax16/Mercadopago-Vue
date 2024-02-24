import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const app = express();
app.use(cors());
app.use(bodyParser.json());


// test Mi prod key
// const client = new MercadoPagoConfig({ accessToken: 'TEST-1122289077700148-021419-2bacbdf0a0084093d403adb7a9284782-213796891'});
// test PD comprador dev key
// const client = new MercadoPagoConfig({ accessToken: 'TEST-2926992726219447-012408-6567041ac357f6e2c5ef3746ba87f1d4-1652884258'});
const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN});
// console.log(process.env.MP_ACCESS_TOKEN);
// test PD vendor prod key
// const client = new MercadoPagoConfig({ accessToken: 'APP_USR-564618658217500-021612-3b6fac037e224dda7a587206fb256385-1652915934'});

app.post('/create_preference', async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: 'CLP',
        },
      ],
      back_urls: {
        success: "https://www.google.com",
        failure: "https://www.google.com",
        pending: "https://www.google.com"
      },
      auto_return: "approved",

    };

    const preference = new Preference(client);
    const response = (await preference.create({ body }));
    // console log response as string
    // console.log(JSON.stringify(response));
    res.json({ id: response.id });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al crear la preferencia' });
  }
});



app.get('/', (req, res) => {
  res.send('Hello World');
});



app.listen(3000, () => {
  console.log('Server running on port 3000');
});