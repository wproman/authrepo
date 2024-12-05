import { db } from "@/lib/db"; // Import your Prisma client
import { registerFormSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";

// Define validation schema using Zod

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate incoming data using Zod
    const { name, email, password } = registerFormSchema.parse(body);

    // Check if the user already exists
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 } // 409 Conflict
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User registered successfully", user },
      { status: 201 } // 201 Created
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation errors
      return NextResponse.json(
        { errors: error.errors.map((err) => err.message) },
        { status: 400 } // 400 Bad Request
      );
    }

    console.error("Error during registration:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 } // 500 Internal Server Error
    );
  }
}
