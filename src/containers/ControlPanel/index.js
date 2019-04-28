import React from 'react'
import styles from './styles.module.scss'
import Display from '../../components/Display'
import SelectButtons from '../../components/SelectButtons'
import MoneyKeeper from '../../components/MoneyKeeper'
import MoneyButtons from '../../components/MoneyButtons'
import CashBack from '../../components/CashBack'

class ControlPanel extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<Display />
					<SelectButtons />
					<MoneyKeeper />
					<MoneyButtons />
					<CashBack />
				</div>
			</div>
		)
	}
}

export default ControlPanel