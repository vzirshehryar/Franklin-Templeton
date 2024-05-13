"use client";
// export const dynamic = "force-dynamic";

import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../components/Home"), {
  ssr: false,
});
export default function Home() {
  return <HomePage />;
}
