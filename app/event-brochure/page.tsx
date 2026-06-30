// app/event-brochure/page.tsx
import { redirect } from "next/navigation";
import { redirectToRegister } from "@/app/register/registrationRoutes";

export default function EventBrochureRedirect({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  redirect(redirectToRegister("brochure", searchParams));
}