import app from './app';

app.listen(process.env.PORT || 3333, () => {
  console.log(
    `👍 Server started on url ${process.env.APP_URL}:${process.env.PORT}`
  );
});
