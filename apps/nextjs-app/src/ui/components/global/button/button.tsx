"use client";

import Link from "next/link";

import classes from "./button.module.scss";

export interface ButtonProps {
  route?: string;
  color?: string;
  handelClick?: () => void;
  handelSubmit?: () => void;
  type?: "button" | "submit";
  children: React.ReactNode;
  disabled?: boolean;
  role?: string;
}

export function Button({
  route,
  color,
  handelClick,
  handelSubmit,
  type,
  children,
  disabled,
  role,
}: ButtonProps) {
  return (
    <>
      {!route
        ? (
            <button
              className={`${color === "white" ? classes.btn__white : classes.btn__black}`}
              role={role}
              type={type}
              onClick={handelClick}
              onSubmit={handelSubmit}
              disabled={disabled}
            >
              {children}
            </button>
          )
        : (
            <Link
              href={route}
              className={`${color === "white" ? classes.btn__white : classes.btn__black}`}
            >
              {children}
            </Link>
          )}
    </>
  );
}
