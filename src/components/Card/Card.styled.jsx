import styled from 'styled-components'

export const CardItem = styled.div`
	border-radius: 8px;
	border: 2px solid;
	padding: 25px 15px;
	width: 30%;
	background-color: lightblue;
	box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.75);
	transition: all 0.3s linear;
	&:hover {
		box-shadow: 0px 0px 9px 0px blue;
		cursor: pointer;
	}
	background-color: ${props => (props.isOpenToWork ? 'lightblue' : 'yellow')};
`
export const UserImg = styled.img`
	width: 20%;
	border-radius: 50%;
	display: block;
	margin: 0 auto;
`
export const UserName = styled.h1`
	text-align: center;
`
export const UserMail = styled.h3`
	color: blue;
`
export const UserBio = styled.h3`
	color: red;
`
export const UserSkills = styled.h4`
	color: green;
`
