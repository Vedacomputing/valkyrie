import styles from './default-footer.module.css';

/* eslint-disable-next-line */
export interface DefaultFooterProps {}

export function DefaultFooter(props: DefaultFooterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DefaultFooter!</h1>
    </div>
  );
}

export default DefaultFooter;
