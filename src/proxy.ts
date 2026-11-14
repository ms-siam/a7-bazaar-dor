import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/lib/auth";

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({ headers: request.headers });

    if (!session) {
        const url = new URL("/signin", request.url);
        url.searchParams.set("callbackURL", request.nextUrl.pathname);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/category/:path*", "/products/:path*", "/profile"],
};