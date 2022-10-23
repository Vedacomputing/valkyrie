import styles from './default-header.module.css';

/* eslint-disable-next-line */
export interface DefaultHeaderProps {}

export function DefaultHeader(props: DefaultHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DefaultHeader!</h1>
    </div>
  );
}

export default DefaultHeader;
