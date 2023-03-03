import React from 'react'
import PropTypes from 'prop-types'

import styles from './Card.module.scss'
import {
	CardItem,
	UserImg,
	UserName,
	UserMail,
	UserBio,
	UserSkills,
} from './Card.styled'

export const Card = props => {
	const {
		name,
		img = 'https://uybor.uz/borless/avtobor/img/user-images/user_no_photo_400x400.png',
		email,
		bio,
		skills,
		isOpenToWork,
		id,
	} = props
	// document.getElementById('#card').addEventListener('click', ()=> {})

	return (
		<React.Fragment>
			<CardItem isOpenToWork={isOpenToWork}>
				<UserImg src={img} alt='img' />
				<UserName>Name:{name}</UserName>
				<UserMail>Email:{email}</UserMail>
				<UserBio>Bio:{bio}</UserBio>
				<UserSkills>Skills:{skills} </UserSkills>
			</CardItem>

			{/* <div className={styles.card}>
				<img src={data[1].img} alt='img' />
				<h1>Name:{data[1].name}</h1>
				<h3>Email:{data[1].email}</h3>
				<h4>Bio:{data[1].bio}</h4>
				<h5>Skills:{data[1].skills} </h5>
			</div>
			<div className={styles.card}>
				<img src={data[2].img} alt='img' />
				<h1>Name:{data[2].name}</h1>
				<h3>Email:{data[2].email}</h3>
				<h4>Bio:{data[2].bio}</h4>
				<h5>Skills:{data[2].skills} </h5>
			</div> */}
		</React.Fragment>
	)
}

Card.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string,
	email: PropTypes.string.isRequired,
	bio: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf(PropTypes.string).isRequired,
	id: PropTypes.number.isRequired,
	isOpenToWork: PropTypes.bool.isRequired,
}
