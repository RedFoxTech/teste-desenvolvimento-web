import { app } from "./main";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`\x1b[42m--SERVER RUNNING AT ${PORT}\x1b[0m`);
});
