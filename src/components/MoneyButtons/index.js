import React from 'react'
import styles from './styles.module.scss'

const MoneyButtons = ({ children }) => (
	<div className={styles.container}>{children}</div>
)

export default MoneyButtons