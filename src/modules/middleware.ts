import { validationResult } from "express-validator";

export const handleValidations = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ error: errors.array() })
  }
}
