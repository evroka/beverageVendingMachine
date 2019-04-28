import React from 'react'
import styles from './styles.module.scss'

const SelectButtons = ({ children }) => (
	<div className={styles.container}>{children}</div>
)

export default SelectButtons