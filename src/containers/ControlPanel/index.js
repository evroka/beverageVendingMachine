import React from 'react'
import styles from './styles.module.scss'
import Display from '../../components/Display'
import SelectButtons from '../../components/SelectButtons'
import MoneyKeeper from '../../components/MoneyKeeper'
import MoneyButtons from '../../components/MoneyButtons'
import CashBack from '../../components/CashBack'

class ControlPanel extends React.Component {
	render() {
		const { items } = this.props

		return (
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<Display />
					<div className={styles.buttonContainer}>
					 {items.map((item) => (
							<SelectButtons 
								onClick={() => {}}
							/>
						))}
					</div>
					<div className={styles.moneyContainer}>
						<MoneyKeeper />
						<MoneyButtons />
					</div>
					<CashBack />
				</div>
			</div>
		)
	}
}

export default ControlPanel