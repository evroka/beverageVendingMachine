import React from 'react'
import styles from './styles.module.scss'

const MoneyKeeper = ({ children }) => (
	<div className={styles.container}>
		<div className={styles.keeper}>
			{children}
		</div>
	</div>
)

export default MoneyKeeper