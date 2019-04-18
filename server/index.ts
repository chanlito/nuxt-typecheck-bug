import express from 'express';
import { Builder, Nuxt } from 'nuxt';

const dev = process.env.NODE_ENV !== 'production';

const app = express();

const nuxt = new Nuxt({
  dev,
  _typescript: {
    build: true
  }
});

nuxt.ready().then(() => {
  if (dev) new Builder(nuxt).build();
});

app.use(nuxt.render);

app.listen(1234, () => {
  console.log('Serving 🐛 at http://localhost:1234');
});
