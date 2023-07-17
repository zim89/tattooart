import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';
import User from '../models/User.js';

// Registration user
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hasUser = await User.findOne({ email });

    if (hasUser) {
      return res.json({
        message: `Пользователь с указанным email уже существует`,
      });
    }

    const username_suffix = nanoid(6);
    const username = `${email.split('@')[0]}-${username_suffix}`;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email,
      password: hash,
      username,
    });

    await newUser.save();
    res.json({ newUser, message: 'Регистрация прошла успешно' });
  } catch (error) {
    res.json({ message: 'Ошибка при создании пользователя' });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: `Такого пользователя не существует`,
      });
    }

    const isPassCorrect = await bcrypt.compare(password, user.password);

    if (!isPassCorrect) {
      return res.json({
        message: `Неверный пароль`,
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ token, user, message: 'Вы успешно авторизовались' });
  } catch (error) {
    res.json({ message: 'Ошибка при авторизации' });
  }
};

// Profile user
export const profile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.json({
        message: `Такого пользователя не существует`,
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ user, token });
  } catch (error) {
    return res.json({
      message: `Нет доступа`,
    });
  }
};
