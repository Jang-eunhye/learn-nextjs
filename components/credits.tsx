import { API_URL } from "../app/constants";
import styles from "../styles/home.module.css";

async function getCasts(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  console.log(`Fetching similar movies: ${Date.now()}`);
  return response.json();
}

export default async function Credits({ id }: { id: string }) {
  const casts = await getCasts(id);

  return (
    <div className={styles.container}>
      {casts.map((item) => (
        <li key={item.credit_id} className={styles.card}>
          <img
            src={
              item.profile_path ??
              "/image/dafult_profile_image.png"
            }
            alt={item.name}
            className={styles.img}
          />
          <div className={styles.info}>
            <strong style={{ fontSize: 14 }}>{item.name}</strong>
            <span style={{ fontSize: 12, color: "#666" }}>
              {item.character}
            </span>
          </div>
        </li>
      ))}
    </div>
  );
}
