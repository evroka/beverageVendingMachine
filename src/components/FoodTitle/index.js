import React from 'react'
import styles from './styles.module.scss'

const FoodTitle = ({ children }) => (
	<div className={styles.titleContainer}>{children}</div>
)

export default FoodTitle