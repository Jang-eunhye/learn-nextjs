import styles from "../styles/cast.module.css"

type Cast = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};

export default function Cast({ item }: { item: Cast }) {
  return (
        <li key={item.id} className={styles.card}>
          <img
            src={item.profile_path ?? "https://via.placeholder.com/185x278?text=No+Image"}
            alt={item.name}
            className={styles.img}
          />
          <div className={styles.info}>
            <strong style={{ fontSize: 14 }}>{item.name}</strong>
            <span style={{ fontSize: 12, color: "#666" }}>{item.character}</span>
          </div>
        </li>
  );
}

// import styles from "../styles/cast.module.css";

// type Cast = {
//   id: number;
//   credit_id?: string;
//   name: string;
//   character: string;
//   profile_path: string | null;
// };

// export default function CastList({ items }: { items: Cast[] }) {
//   return (
//     <ul className={styles.container}>
//       {items.map((c) => (
//         <li key={c.credit_id ?? String(c.id)} className={styles.card}>
//           <img
//             src={c.profile_path ?? "https://via.placeholder.com/185x278?text=No+Image"}
//             alt={c.name}
//             className={styles.img}
//           />
//           <div className={styles.info}>
//             <strong style={{ fontSize: 14 }}>{c.name}</strong>
//             <span style={{ fontSize: 12, color: "#666" }}>{c.character}</span>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }