import styles from './default-hero.module.css';

/* eslint-disable-next-line */
export interface DefaultHeroProps {}

export function DefaultHero(props: DefaultHeroProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DefaultHero!</h1>
    </div>
  );
}

export default DefaultHero;
