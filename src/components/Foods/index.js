import React from 'react'
import styles from './styles.module.scss'
import FoodWindow from '../../components/FoodWindow'

const Foods = ({ items }) => (
	<div className={styles.foodsContainer}>
		{items.map((item) => (
			<FoodWindow />
		))}
	</div>
)

export default Foods