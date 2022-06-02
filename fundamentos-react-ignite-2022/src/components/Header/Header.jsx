import styles from './styles.module.css';

import logoImg from '../../assets/logo.svg';
export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Logotipo do Ignite feed" />
      <strong>Ignite feed</strong>
    </header>
  );
}
