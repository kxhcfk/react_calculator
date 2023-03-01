import React from 'react';

import styles from './Button.module.css';

const Button = ({ children, className, ...props }) => {
	
	if (className) {
		className += ' ' + styles.root;
	}
	
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export default Button;