import React from "react";

interface ILayoutProps {
  children: JSX.Element | string | React.ReactNode;
}

export default function MainLayout({ children }: ILayoutProps) {
  return <div>{children}</div>;
}
