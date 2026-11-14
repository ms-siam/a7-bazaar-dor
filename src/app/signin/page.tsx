"use client";

import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { signIn } from "@/app/lib/auth-client";
import { showError, toastNextPage } from "@/app/lib/toast";

const getCallback = () => {
    const url = new URLSearchParams(window.location.search).get("callbackURL");
    return url && url.startsWith("/") && !url.startsWith("//") ? url : "/";
};

export default function SignInPage() {
    const router = useRouter();

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { error } = await signIn.email({
            email: String(formData.get("email")),
            password: String(formData.get("password")),
        });

        if (error) return showError(error.message ?? "Please check your form and try again.");

        toastNextPage("success", "Signed in successfully.");
        router.push(getCallback());
        router.refresh();
    };

    const handleSocial = (provider: "google" | "github") => {
        toastNextPage("success", "Signed in successfully.");
        signIn.social({ provider, callbackURL: getCallback() });
    };

    return (
        <main className="bg-[#f0f5f0]">
            <div className="mx-auto w-full max-w-md px-4 py-12">
                <h1 className="text-center text-3xl font-extrabold text-gray-900">Sign in</h1>
                <p className="mt-2 text-center text-gray-500">
                    Sign in to see detailed prices and market comparisons.
                </p>

                <div className="mt-6 rounded-3xl border border-gray-200/70 bg-[#fafcf9] p-6">
                    <Form
                        className="flex flex-col gap-4"
                        onSubmit={handleSignIn}
                        onInvalid={() => showError("Please check your form and try again.")}
                    >
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

                        <Button type="submit" className='w-full bg-green-700'>Sign in</Button>
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
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-green-700 underline">
                            Sign up
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