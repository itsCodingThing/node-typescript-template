import express, { Response, Request } from "express";

const app = express();
const port: number | string = process.env.PORT || 1729;
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
