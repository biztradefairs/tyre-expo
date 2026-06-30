// app/become-partner/page.tsx
import { redirect } from "next/navigation";
import { redirectToRegister } from "@/app/register/registrationRoutes";

export default function BecomePartnerRedirect({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  redirect(redirectToRegister("sponsor", searchParams));
}