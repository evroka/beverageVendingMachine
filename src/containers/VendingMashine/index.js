import React from 'react'
import styles from './styles.module.scss'
import ControlPanel from '../../containers/ControlPanel'

const items = [1, 2, 3, 4, 5, 6]

class VendingMashine extends React.Component {
	render() {
		return (
			<div className={styles.wrap}>
				<div className={styles.container}>
					<div className={styles.itemsContainer}>
						<ControlPanel items={items}/>
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