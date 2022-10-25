import styles from './default-button.module.css';

/* eslint-disable-next-line */
export interface DefaultButtonProps {}

export function DefaultButton(props: DefaultButtonProps) {
  return (
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
  );
}

export default DefaultButton;
