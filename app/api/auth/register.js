import { hashPassword } from "@/lib/auth";
import { connectToDataBase } from "@/lib/db";

async function registerHandler(req, res) {
  const data = req.body;

  if (req.method !== "POST") {
    return;
  }
  const { name, email, password } = data;

  // Some validations
  if (
    !name ||
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res
      .status(422)
      .json({ message: "invalid input password should be longer." });
    return;
  }

  const client = await connectToDataBase();
  const db = client.db();

  const hashedPassword = hashPassword(password);
  db.collection("users").insertOne({
    name: name,
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
}

export default registerHandler;
