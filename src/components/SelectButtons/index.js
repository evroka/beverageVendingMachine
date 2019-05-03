import React from 'react'
import styles from './styles.module.scss'
import SelectTitle from '../SelectTitle'

const SelectButtons = ({ children }) => (
	<div className={styles.container}>
		<div className={styles.button}>
			{children}
		</div>
		<SelectTitle />
	</div>
)

export default SelectButtons