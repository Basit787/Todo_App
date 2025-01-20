import bcrypt from "bcrypt";
import "dotenv/config";
import { Jwt } from "hono/utils/jwt";

//create hash password
export const createHashPassword = (password: string) => {
  const saltRound = 10;
  return bcrypt.hash(password, saltRound);
};

//verify hash password
export const verifyHashPassword = (
  userPassword: string,
  hashPassword: string
) => {
  return bcrypt.compare(userPassword, hashPassword);
};

//encryption key for token encryption
const privateKey = process.env.JWT_SECRET_KEY as string;
const ENCRYPTION_KEY = await crypto.subtle.generateKey(
  { name: "AES-GCM", length: 256 },
  true,
  ["encrypt", "decrypt"]
);

//create jwt token
export const createToken = (payload: {
  id: string;
  name: string;
  email: string;
}) => {
  return Jwt.sign(payload, privateKey);
};

//verify jwt token
export const verifyToken = (token: string) => {
  return Jwt.verify(token, privateKey);
};

//token encryption
export const encryptToken = async (data: string): Promise<string> => {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encodedData = new TextEncoder().encode(data);
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    ENCRYPTION_KEY,
    encodedData
  );
  return `${btoa(String.fromCharCode(...iv))}:${btoa(
    String.fromCharCode(...new Uint8Array(encrypted))
  )}`;
};

//token decryption
export const decryptToken = async (data: string): Promise<string> => {
  const [iv, encryptedData] = data.split(":");
  const ivBuffer = Uint8Array.from(atob(iv), (c) => c.charCodeAt(0));
  const encryptedBuffer = Uint8Array.from(atob(encryptedData), (c) =>
    c.charCodeAt(0)
  );
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: ivBuffer },
    ENCRYPTION_KEY,
    encryptedBuffer
  );
  return new TextDecoder().decode(decrypted);
};

//creating deep copy of object
export const deepClone = (object: Object) => {
  return JSON.parse(JSON.stringify(object));
};
