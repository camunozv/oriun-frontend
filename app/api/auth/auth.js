import { hash, compare } from "bcryptjs";

export async function hashPassword(password) {
  // dummy code for hashing a password when registering a user.
  const hashedPassword = await hash(password, 12); // 12 is a standard hashing rounds number, to give security and velocity
  return hashedPassword;
}

// compare: allows grabing a plane text password & observing if it could result to a stored hashed string.
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
