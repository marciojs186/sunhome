import styles from "./styles.module.scss";
//import Link from 'next/link'

export function WhatsAppButton() {
  let url =
    "https://api.whatsapp.com/send?phone=5511980851787&text=Ol%C3%A1.+Encontrei+a+SolarHome+pelo+website+e+gostaria+de+receber+atendimento.&type=phone_number&app_absent=0";

  const goToWhats = () => {
    window.open(url)
  }

  return (
    <div className={styles.main}>
      <button className={styles.container} onClick={() => goToWhats()} />
    </div>
  );
}
