import React, { Children } from 'react'
import styles from './Header.module.scss'

export const Header = ({ title = 'Ours default cards', children }) => {
	return (
		<header className={styles.header}>
			<h1>{title}</h1>
			{children}
		</header>
	)
}
