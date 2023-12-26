import styles from "./styles.module.scss";
//import Link from 'next/link'

export function WhatsAppButton() {
  let url =
    "https://api.whatsapp.com/send?phone=5511980851787&text=Ol%C3%A1!%20gostaria%20de%20informa%C3%A7%C3%B5es!";

  const goToWhats = () => {
    window.open(url);
  };

  return (
    <div className={styles.main}>
      <button className={styles.container} onClick={() => goToWhats()} />
    </div>
  );
}
