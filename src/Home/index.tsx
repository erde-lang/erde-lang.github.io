import Logo from '../../static/logo.svg';
import styles from './index.module.scss';

export const Home = () => (
  <div className={styles.logo}>
    <Logo />
    <h1>Erde</h1>
  </div>
);
