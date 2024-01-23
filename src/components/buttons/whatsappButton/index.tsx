import styles from "./styles.module.scss";
//import Link from 'next/link'

export function WhatsAppButton() {
  let url = "https://api.whatsapp.com/send?phone=5511986797419";

  const goToWhats = () => {
    window.open(url);
  };

  return (
    <div className={styles.main}>
      <button className={styles.container} onClick={() => goToWhats()} />
    </div>
  );
}
