import React from 'react'
import styled from 'styled-components'

const StyledHeding = styled.h1`
	height: 10vmin;
	pointer-events: none;
	background-color: #c1c1c1;

	/* @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
	}
		
	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	} */
`

export const Heading: React.FC = () => (
		<StyledHeding>Exercise App</StyledHeding>
)