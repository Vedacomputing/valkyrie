import styles from './default-sidebar.module.css';

/* eslint-disable-next-line */
export interface DefaultSidebarProps {}

export function DefaultSidebar(props: DefaultSidebarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DefaultSidebar!</h1>
    </div>
  );
}

export default DefaultSidebar;
