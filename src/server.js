import app from './app';

app.listen(3333, () => {
  console.log(`👍 Server started on url ${process.env.APP_URL}`);
});
