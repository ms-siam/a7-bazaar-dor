
"use client";
import { PiSignOut } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { showSuccess } from "@/app/lib/toast";
import {
    Button,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { signOut, updateUser, useSession } from "@/app/lib/auth-client";
import Image from "next/image";

export default function ProfilePage() {
    const router = useRouter();
    const { data: session, isPending } = useSession();
    const [message, setMessage] = useState("");

    const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = String(formData.get("name"));

        const { error } = await updateUser({ name });

        setMessage(error ? error.message ?? "Update failed" : "Profile updated");
    };

    const handleSignOut = async () => {
    await signOut();
    showSuccess("Signed out successfully.");
    router.push("/");
    router.refresh();
};

    if (isPending) return null;

    if (!session) {
        router.push("/signin");
        return null;
    }

    const user = session.user;

    return (
        <main className="min-h-screen bg-[#f0f5f0]">
            <div className="mx-auto max-w-6xl px-5 py-12">

                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-[#1c2920]">
                        My Profile
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Manage your account information.
                    </p>
                </div>

                <section className="mb-9 flex flex-col gap-5 rounded-3xl border border-[#dce6dd] bg-white p-7 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-green-100 text-2xl font-bold text-green-800">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    height={20}
                                    width={40}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                user.name?.charAt(0).toUpperCase()
                            )}
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#1c2920]">
                                {user.name}
                            </h2>
                            <p className="mt-1 text-gray-500">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        onPress={handleSignOut}
                        className="border-red-500 text-red-600 hover:bg-red-50"
                    >
                        <PiSignOut className="inline" />Sign Out
                    </Button>
                </section>

                <section className="rounded-3xl border border-[#dce6dd] bg-white p-7">
                    <h2 className="mb-6 text-2xl font-bold text-[#1c2920]">
                        Update Your Name
                    </h2>

                    <Form onSubmit={handleUpdateUser}>
                        <Fieldset>
                            <FieldGroup>
                                <TextField
                                    isRequired
                                    name="name"
                                    defaultValue={user.name}
                                    validate={(value) =>
                                        value.length < 3
                                            ? "Name must be at least 3 characters"
                                            : null
                                    }
                                >
                                    <Label>Name</Label>
                                    <Input placeholder="Your name" />
                                    <FieldError />
                                </TextField>
                            </FieldGroup>

                            {message && (
                                <p className={`mt-3 text-sm ${
                                    message === "Profile updated"
                                        ? "text-green-700"
                                        : "text-red-600"
                                }`}>
                                    {message}
                                </p>
                            )}

                            <Fieldset.Actions>
                                <Button
                                    type="submit"
                                    className="bg-green-700 font-semibold text-white hover:bg-green-800"
                                >
                                    Save Changes
                                </Button>
                            </Fieldset.Actions>
                        </Fieldset>
                    </Form>
                </section>
            </div>
        </main>
    );
}
