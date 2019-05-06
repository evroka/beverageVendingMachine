import React from 'react'
import styles from './styles.module.scss'
import ControlPanel from '../../containers/ControlPanel'
import Foods from '../../components/Foods'
import DeliveryBox from '../../components/DeliveryBox'

const items = [1, 2, 3, 4, 5, 6]

class VendingMashine extends React.Component {
	render() {
		return (
			<div className={styles.wrap}>
				<div className={styles.container}>
					<div className={styles.itemsContainer}>
						<Foods items={items}/>
						<ControlPanel items={items}/>
					</div>
					<div className={styles.box}>
						<DeliveryBox />
					</div>
				</div>
				<div className={styles.stands}>
						<div className={styles.standLeft}></div>
						<div className={styles.standRight}></div>
					</div>
			</div>
		)
	}
}

export default VendingMashine