import { Request, Response, NextFunction } from 'express';

class validateFieldsUser {
  public static checkFields(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: 'All fields must be filled' });
    }

    next();
  }
}

export default validateFieldsUser;
