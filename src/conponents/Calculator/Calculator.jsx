import React from "react";

import styles from './Calculator.module.css'
import Screen from '../Screen/Screen';
import ButtonBox from '../ButtonBox/ButtonBox';

const Calculator = () => {
	return (
		<div className={styles.root}>
			<Screen/>
			<ButtonBox/>
		</div>
	);
};

export default Calculator;