import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();

const prisma = new PrismaClient();

// Rota para fazer get de todos os usuarios
router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
});

// Rota para fazer update do usuario
router.get("/:id", async (req, res) => {
  const { name, age } = req.body;
  const { id } = req.params;

  const post = await prisma.user.update({
    where: { id: Number(id) },
    data: { name: name, age: age },
  });

  res.status(200).json(post);
});

// Rota para criar usuario
router.post("/", async (req, res) => {
  const { name, age } = req.body;

  const results = await prisma.user.create({
    data: {
      name,
      age,
    },
  });

  res.status(200).json(results);
});

// Rota para deletar usuario
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const results = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });

  res.status(200).json(results);
});

export default router;
