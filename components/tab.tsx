"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Tab({ id, active }: { id: string; active: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const setTab = (next: string) => {
    const q = new URLSearchParams(sp);
    q.set("tab", next);
    router.replace(`${pathname}?${q.toString()}`, { scroll: false });
  };

  return (
    <nav>
      <button aria-current={active==="credits"} onClick={() => setTab("credits")}>credits</button>
      <button aria-current={active==="videos"} onClick={() => setTab("videos")}>videos</button>
      <button aria-current={active==="similar"} onClick={() => setTab("similar")}>similar</button>
    </nav>
  );
}