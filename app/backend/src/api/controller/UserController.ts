import { NextFunction, Request, Response } from 'express';
import IServiceUser from '../interfaces/IServiceUser';

class UserController {
  private _service: IServiceUser;

  constructor(service: IServiceUser) {
    this._service = service;
  }

  async verifyLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await this._service.verifyLogin(req.body);
      return res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;