import styles from './default-feature.module.css';

/* eslint-disable-next-line */
export interface DefaultFeatureProps {}

export function DefaultFeature(props: DefaultFeatureProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DefaultFeature!</h1>
    </div>
  );
}

export default DefaultFeature;
