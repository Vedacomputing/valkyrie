// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { DefaultHeader, DefaultFooter, DefaultHero, DefaultFeature, DefaultAbout } from '@valkyrie/shared/ui';

export function App() {
  return (
    <>
      <DefaultHeader />
      <DefaultHero />
      <DefaultFeature />
      <DefaultAbout />
      <DefaultFooter />
    </>
  );
}

export default App;
