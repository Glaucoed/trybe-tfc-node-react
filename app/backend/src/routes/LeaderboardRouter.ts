import { Router, Request, Response } from 'express';
import LeaderboardController from '../api/controller/LeaderboardController';
import LeaderboardService from '../api/services/LeaderboardService';

const leaderboardRouter = Router();

const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

leaderboardRouter.get(
  '/leaderboard/home',
  (req: Request, res: Response) => leaderboardController.allScore(req, res),
);

export default leaderboardRouter;