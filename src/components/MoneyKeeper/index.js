import React from 'react'
import styles from './styles.module.scss'

const MoneyKeeper = ({ children }) => (
	<div className={styles.container}>{children}</div>
)

export default MoneyKeeper