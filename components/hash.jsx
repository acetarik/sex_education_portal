import bcrypt from "bcryptjs";

const saltValue = process.env.salt_val;

export default async function hashPassword(password) {
  const salt = await bcrypt.genSalt(parseInt(saltValue, 10));
  const hashedPassword = await bcrypt.hash(password, salt);
  //   console.log(hashedPassword);
  return hashedPassword;
}
