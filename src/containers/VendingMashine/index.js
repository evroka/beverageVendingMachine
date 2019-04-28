import React from 'react'

import styles from './styles.module.scss'


class VendingMashine extends React.Component {
	render() {
		return (
			<div className={styles.wrap}>
				<div className={styles.container}>
					<div className={styles.standLeft}></div>
					<div className={styles.standRight}></div>
				</div>
			</div>
		)
	}
}

export default VendingMashine