import styles from './default-navbar.module.css';

/* eslint-disable-next-line */
export interface DefaultNavbarProps {}

export function DefaultNavbar(props: DefaultNavbarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DefaultNavbar!</h1>
    </div>
  );
}

export default DefaultNavbar;
