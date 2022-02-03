import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

const getHome = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'Hello World' });
};

const login = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'Login' });
};

const query = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: 'Query' });
};

app.get('/', getHome);
app.post('/login', login);
app.post('/query', query);

module.exports = app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
