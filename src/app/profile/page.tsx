"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { signOut, updateUser, useSession } from "@/app/lib/auth-client";

export default function ProfilePage() {
    const router = useRouter();
    const { data: session, isPending } = useSession();
    const [message, setMessage] = useState("");

    const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const { error } = await updateUser({ name: String(formData.get("name")) });
        setMessage(error ? error.message ?? "Update failed" : "Profile updated");
    };

    const handleSignOut = async () => {
        await signOut();
        router.push("/");
        router.refresh();
    };

    if (isPending || !session) return null;

    return (
        <main className="bg-[#f0f5f0]">
            <div className="mx-auto w-full max-w-md px-4 py-10">
                <Form onSubmit={handleUpdateUser}>
                    <Fieldset>
                        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
                        <Description>{session.user.email}</Description>

                        <FieldGroup>
                            <TextField
                                isRequired
                                name="name"
                                defaultValue={session.user.name}
                                validate={(value) =>
                                    value.length < 3 ? "Name must be at least 3 characters" : null
                                }
                            >
                                <Label>Name</Label>
                                <Input placeholder="John Doe" />
                                <FieldError />
                            </TextField>
                        </FieldGroup>

                        {message && <p className="text-sm text-gray-600">{message}</p>}

                        <Fieldset.Actions>
                            <Button type="submit">Save changes</Button>
                            <Button type="button" variant="secondary" onPress={handleSignOut}>
                                Sign out
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
            </div>
        </main>
    );
}