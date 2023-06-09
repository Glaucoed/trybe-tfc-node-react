import * as express from 'express';
import teamRouter from './routes/TeamRouter';
import userRouter from './routes/UserRouter';
import ErrorHandler from './api/middleware/ErrorHandler';
import matchRouter from './routes/MatchRouter';
import leaderboardRouter from './routes/LeaderboardRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    //  Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
    this.initRoutes();
    this.initMiddlewares();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private initRoutes(): void {
    this.app.use(teamRouter);
    this.app.use(userRouter);
    this.app.use(matchRouter);
    this.app.use(leaderboardRouter);
  }

  private initMiddlewares() {
    this.app.use(ErrorHandler.handle);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
