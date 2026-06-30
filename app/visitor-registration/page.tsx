// app/visitor-registration/page.tsx
import { redirect } from "next/navigation";
import { redirectToRegister } from "@/app/register/registrationRoutes";

export default function VisitorRegistrationRedirect({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  redirect(redirectToRegister("enquiry", searchParams));
}