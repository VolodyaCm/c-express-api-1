import prisma from "@/src/db";
import { comparePassword, createJWT, hashPassowrd } from "@/modules/auth";

export const createUser = async (req, res) => {
  const hash = await hashPassowrd(req.body.password);

  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: hash,
    }
  });

  const token = createJWT(user);

  res.json({ user, token });
}

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username || '',
    }
  });

  if (!user) {
    res.status(401)
    res.json({ message: 'Not Authorized' });
    return;
  }

  const isValid = await comparePassword(req.body.password, user.password);

  if (!isValid) {
    res.status(401)
    res.json({ message: 'Not Authorized' });
    return;
  }

  const token = createJWT(user);

  res.json({ data: user, token });
}
