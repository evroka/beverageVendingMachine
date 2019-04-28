import React from 'react'
import styles from './styles.module.scss'

const Display = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default Display