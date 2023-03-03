import React, { Children } from 'react'
import { Card } from '../Card/Card'
import { Flex } from '../../MyStyled.styled'

export const CardList = ({ users, onClickFn, title, children }) => {
	return (
		<>
			<h1>{title}</h1>
			<Flex>
				{users.map(user => (
					<Card
						onClickFn={onClickFn}
						key={user.id}
						// {...user}
						name={user.name}
						bio={user.bio}
						img={user.img}
						email={user.email}
						skills={user.skills}
						isOpenToWork={user.isOpenToWork}
						id={user.id}
					/>
				))}
			</Flex>
		</>
	)
}
