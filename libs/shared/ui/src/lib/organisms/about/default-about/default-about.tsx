import styles from './default-about.module.css';

/* eslint-disable-next-line */
export interface DefaultAboutProps {}

export function DefaultAbout(props: DefaultAboutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DefaultAbout!</h1>
    </div>
  );
}

export default DefaultAbout;
