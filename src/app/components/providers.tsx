"use client";

import { DatabaseProvider } from "@nozbe/watermelondb/react";
import { PropsWithChildren } from "react";
import { database } from "~/databases";

export function Providers({ children }: PropsWithChildren) {
  return <DatabaseProvider database={database}>{children}</DatabaseProvider>;
}
