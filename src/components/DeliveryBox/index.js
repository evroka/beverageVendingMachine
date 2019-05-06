import React from 'react'
import styles from './styles.module.scss'


const DeliveryBox = ({ children }) => (
	<div className={styles.boxWrapper}>
		<div className={styles.boxContainer}>
			<div className={styles.boxCover}></div>
				{children}
		</div>
	</div>
	
)

export default DeliveryBox