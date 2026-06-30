// app/exhibiting-enquiry/page.tsx
import { redirect } from "next/navigation";
import { redirectToRegister } from "@/app/register/registrationRoutes";

export default function ExhibitingEnquiryRedirect({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  redirect(redirectToRegister("exhibitor", searchParams));
}