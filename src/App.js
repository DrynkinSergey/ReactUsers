import { CardList } from './components/CardList/CardList'
import { Header } from './components/Header'
import UsersJson from './assets/users.json'
import { Card } from './components/Card/Card'
import { Content } from './MyStyled.styled'
import PropTypes from 'prop-types'
import styled from 'styled-components'
function App({ title }) {
	const HeaderTop = styled.div`
		padding: 20px 20px;
	`
	return (
		<HeaderTop>
			<Header title='Header' />
			<Content>
				<CardList users={UsersJson} />
			</Content>

			{/* {userJson.map(user => (
				<Card
					// {...user}
					name={user.name}
					bio={user.bio}
					img={user.img}
					email={user.email}
					skills={user.skills}
				/>
			))} */}
		</HeaderTop>
	)
}

export default App

App.propTypes = {
	title: PropTypes.string,
}
