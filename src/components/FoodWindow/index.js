import React from 'react'
import styles from './styles.module.scss'
import FoodTitle from '../../components/FoodTitle'


const FoodWindow = ({ children }) => (
	<div className={styles.wrapper}>
		<div className={styles.foodWindow}>{children}</div>
		<FoodTitle />
	</div>
	
)

export default FoodWindow