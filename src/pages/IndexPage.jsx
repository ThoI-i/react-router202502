import { Link } from 'react-router-dom';
import styles from './IndexPage.module.scss';

const IndexPage = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>개발자의 기술 블로그</h1>
      <p className={styles.subtitle}>React와 관련된 기술들을 공유합니다.</p>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;