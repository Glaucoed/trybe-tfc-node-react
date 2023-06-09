import { Router, Request, Response } from 'express';
import TeamController from '../api/controller/TeamController';
import TeamService from '../api/services/TeamService';

const teamRouter = Router();

const teamService = new TeamService();
const teamController = new TeamController(teamService);

teamRouter.get('/teams', (req: Request, res: Response) => teamController.readAll(req, res));
teamRouter.get('/teams/:id', (req: Request, res: Response) => teamController.findByTeam(req, res));

export default teamRouter;
