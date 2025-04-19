import type { PropsWithChildren } from "react";

export default function MoveLayout({ children }: PropsWithChildren) {
  return <div className="pt-28 p-10">{children}</div>;
}
