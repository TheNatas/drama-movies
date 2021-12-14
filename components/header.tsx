import styles from './header.module.css'
import utilStyles from '../styles/utils.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={utilStyles.m0}>{`Yo. I'm Nate`}</h1>
    </div>
  )
}

export default Header;