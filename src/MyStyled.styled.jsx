import styled from 'styled-components'

export const Content = styled.div`
	padding: 12px 0;
`

export const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 20px;
	@media (max-width: 767px) {
		display: block;
	}
`
