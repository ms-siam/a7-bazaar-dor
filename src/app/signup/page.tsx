"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
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

    const handleSocial = (provider: "google" | "github") => {
        toastNextPage("success", "Signed in successfully.");
        signIn.social({ provider, callbackURL: "/" });
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

                        <Button type="submit" className='w-full bg-green-700'>Create account</Button>
                    </Form>
                    <div className="my-3 flex items-center gap-4 text-sm text-gray-800">
                        <span className="h-px flex-1 bg-gray-200" />
                        <span>OR</span>
                        <span className="h-px flex-1 bg-gray-200" />
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={() => handleSocial("google")}
                            className="flex flex-1 items-center text-xs justify-center gap-2.5 rounded-xl border border-gray-200 bg-[#fafcf9] px-4 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                        >
                            <FcGoogle className="text-xl" />
                            Continue with Google
                        </button>

                        <button
                            type="button"
                            onClick={() => handleSocial("github")}
                            className="flex flex-1 items-center text-xs justify-center gap-2.5 rounded-xl border border-gray-200 bg-[#fafcf9] px-4 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                        >
                            <FaGithub className="text-xl" />
                            Continue with GitHub
                        </button>
                    </div>

                    <p className="mt-5 text-center">
                        Already have an account?{" "}
                        <Link href="/signin" className="text-green-700 underline">
                            Sign in
                        </Link>
                    </p>
                </div>

                <Link
                    href="/"
                    className="mt-6 flex items-center justify-center gap-1 text-gray-500 underline hover:text-green-700"
                >
                    <IoArrowBackOutline />
                    Back to home
                </Link>
            </div>
        </main>
    );
}