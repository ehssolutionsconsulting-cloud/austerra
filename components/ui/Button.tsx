import Link from "next/link";
import "@/styles/components/button.scss";

interface ButtonProps {
  href: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export default function Button({ href, variant = "primary", children }: ButtonProps) {
  return (
    <Link className={`button button--${variant}`} href={href}>
      {children}
    </Link>
  );
}
