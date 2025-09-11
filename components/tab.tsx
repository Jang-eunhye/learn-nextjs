"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "../styles/tab.module.css";

const TABS = ["credits", "videos", "similar"];
type TabKey = (typeof TABS)[number];

export default function Tab({ id, active }: { id: string; active: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();


  const setTab = (next: string) => {
    const q = new URLSearchParams(sp);
    q.set("tab", next);
    router.replace(`${pathname}?${q.toString()}`, { scroll: false });
  };

  const current = (active) as TabKey;

  return (
    // <nav>
    //   <button aria-current={active==="credits"} onClick={() => setTab("credits")}>credits</button>
    //   <button aria-current={active==="videos"} onClick={() => setTab("videos")}>videos</button>
    //   <button aria-current={active==="similar"} onClick={() => setTab("similar")}>similar</button>
    // </nav>
    <nav className={styles.wrap} role="tablist" aria-label="Movie sections">
      <ul className={styles.list}>
        {TABS.map((t) => (
          <li key={t} className={styles.item}>
            <button
              type="button"
              role="tab"
              aria-current={current === t}
              aria-selected={current === t}
              className={styles.tab}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
            <div className={styles.underline} />
          </li>
        ))}
      </ul>
    </nav>
  );
}