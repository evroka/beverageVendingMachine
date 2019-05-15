import React from 'react'
import styles from './styles.module.scss'

const MoneyButtons = () => (
	<div className={styles.buttonsContainer}>
		<div className={styles.oneRub}></div>
		<div className={styles.twoRub}></div>
		<div className={styles.fiveRub}></div>
		<div className={styles.tenRub}></div>
	</div>
)

export default MoneyButtons