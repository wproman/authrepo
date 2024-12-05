// // actions/register.ts
// "use server";
// import { db } from "@/lib/db"; // Import your Prisma client
// import bcrypt from "bcrypt";

// export async function registerUser(data: {
//   name: string;
//   email: string;
//   password: string;
// }) {
//   const { name, email, password } = data;

//   // Check if the user already exists
//   const existingUser = await db.user.findUnique({
//     where: { email },
//   });

//   if (existingUser) {
//     throw new Error("User already exists11");
//   }

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create a new user
//   const user = await db.user.create({
//     data: {
//       name,
//       email,
//       password: hashedPassword,
//     },
//   });

//   return user;
// }
