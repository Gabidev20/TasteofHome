import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taste of Home | Admin",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
