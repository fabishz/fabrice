"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  end?: boolean;
  onClick?: () => void;
}

export const NavLink = ({
  to,
  children,
  className,
  activeClassName = "text-primary",
  end = false,
  onClick,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = end ? pathname === to : pathname.startsWith(to);

  return (
    <Link
      href={to}
      className={cn(className, isActive && activeClassName)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
