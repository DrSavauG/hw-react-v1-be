import UserModel from '../models/user-model';
import { Request, Response, NextFunction } from 'express';
import mailService from './mail-service';
import UserDto from '../DTO/user-dto';
import tokenService from '../services/token-service';

const bcrypt = require('bcrypt');
const uuid = require('uuid');

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`Пользователь  с адресом ${email} уже существует`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();/////////////////////

    const user = await UserModel.create({ email, password: hashPassword, activationLink });
    await mailService.sendActivationMail(email, `${process.env.API_URL}/roulette/activate/${activationLink}`);

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
}

export default new UserService();