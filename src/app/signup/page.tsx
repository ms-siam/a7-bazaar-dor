"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { signIn, signUp } from "@/app/lib/auth-client";
import { showError, toastNextPage } from "@/app/lib/toast";

export default function SignUpPage() {
    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const password = String(formData.get("password"));

        if (password !== String(formData.get("confirm"))) {
            return showError("Passwords do not match. Please try again.");
        }

        const { error } = await signUp.email({
            name: String(formData.get("name")),
            email: String(formData.get("email")),
            password,
        });

        if (error) return showError(error.message ?? "Please check your form and try again.");

        toastNextPage("success", "Account created! Welcome.");
        router.push("/");
        router.refresh();
    };

    return (
        <main className="bg-[#f0f5f0]">
            <div className="mx-auto w-full max-w-md px-4 py-12">
                <h1 className="text-center text-3xl font-extrabold text-gray-900">Create an account</h1>
                <p className="mt-2 text-center text-gray-500">
                    Sign up for free to see all detailed prices.
                </p>

                <div className="mt-6 rounded-3xl border border-gray-200/70 bg-[#fafcf9] p-6">
                    <Form
                        className="flex flex-col gap-4"
                        onSubmit={handleSignUp}
                        onInvalid={() => showError("Please check your form and try again.")}
                    >
                        <TextField isRequired name="name">
                            <Label>Name</Label>
                            <Input placeholder="John Doe" />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="you@example.com" />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="password" type="password" minLength={8}>
                            <Label>Password</Label>
                            <Input placeholder="At least 8 characters" />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="confirm" type="password" minLength={8}>
                            <Label>Confirm password</Label>
                            <Input placeholder="Type it again" />
                            <FieldError />
                        </TextField>

                        <Button type="submit">Create account</Button>
                    </Form>

                    <div className="mt-4 flex gap-3">
                        <Button
                            variant="secondary"
                            className="flex-1"
                            onPress={() => signIn.social({ provider: "google", callbackURL: "/" })}
                        >
                            Google
                        </Button>
                        <Button
                            variant="secondary"
                            className="flex-1"
                            onPress={() => signIn.social({ provider: "github", callbackURL: "/" })}
                        >
                            GitHub
                        </Button>
                    </div>

                    <p className="mt-5 text-center">
                        Already have an account?{" "}
                        <Link href="/signin" className="text-green-700 hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>

                <Link href="/" className="mt-6 block text-center text-gray-500 hover:text-green-700">
                    ← Back to home
                </Link>
            </div>
        </main>
    );
}