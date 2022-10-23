import styles from './default-button.module.css';

/* eslint-disable-next-line */
export interface DefaultButtonProps {}

export function DefaultButton(props: DefaultButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DefaultButton!</h1>
    </div>
  );
}

export default DefaultButton;
