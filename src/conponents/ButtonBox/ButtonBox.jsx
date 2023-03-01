import React from 'react';

import styles from './ButtonBox.module.css';
import Button from '../Button/Button';

const btnValues = [
	["AC", "+/-", "%", "/"],
	[7, 8, 9, "X"],
	[4, 5, 6, "-"],
	[1, 2, 3, "+"],
	[0, ".", "="],
];

const ButtonBox = () => {
	const onClick = (e) => {
	
	}
	
	return (
		<div className={styles.root}>
			<Button className="result" onClick={onClick}>AC</Button>
			<Button className="result" onClick={onClick}>+/-</Button>
			<Button className="result" onClick={onClick}>%</Button>
			<Button className="orange" onClick={onClick}>/</Button>
			<Button className="gray" onClick={onClick}>7</Button>
			<Button className="gray" onClick={onClick}>8</Button>
			<Button className="gray" onClick={onClick}>9</Button>
			<Button className="orange" onClick={onClick}>X</Button>
			<Button className="gray" onClick={onClick}>4</Button>
			<Button className="gray" onClick={onClick}>5</Button>
			<Button className="gray" onClick={onClick}>6</Button>
			<Button className="orange" onClick={onClick}>-</Button>
			<Button className="gray" onClick={onClick}>1</Button>
			<Button className="gray" onClick={onClick}>2</Button>
			<Button className="gray" onClick={onClick}>3</Button>
			<Button className="orange" onClick={onClick}>+</Button>
			<Button className="gray" onClick={onClick}>0</Button>
			<Button className="gray" onClick={onClick}>,</Button>
			<Button className="result" onClick={onClick}>=</Button>
		</div>
	);
};

export default ButtonBox;