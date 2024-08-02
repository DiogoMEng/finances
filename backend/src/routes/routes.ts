import express, { Request, Response } from "express";

const router = express.Router();

router.get("/conta", (req: Request, res: Response) => {
  res.json({ msg: "teste" });
});

export default router;
