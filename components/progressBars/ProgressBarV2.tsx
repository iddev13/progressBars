import { styled } from "@mui/material"
import { FC } from "react"

interface IProps {
	value: number
	animName: string
	text: string
}
let dashOffetAnim = (440 - (440 * 65) / 100)
let dashOffetAnim1 = (440 - (440 * 90) / 100)

const Container = styled('div')(() => ({
	'& svg': {
		position: 'relative',
		width: 150,
		height: 150,
		zIndex: 1000,
		'& circle': {
			width: '100%',
			height: '100%',
			fill: 'none',
			stroke: '#00ff43',
			strokeWidth: 10,
			strokeLinecap: 'round',
			transform: 'translate(5px, 5px)',
			strokeDasharray: 440,
			strokeDashoffset: 440,
			animation: 'anim1 1s cubic-bezier(.99,0,.55,.75) 0.2s forwards'
		}
	}, '@keyframes next': {
		'100% ': {
			strokeDashoffset: dashOffetAnim,
		}
	},
	'@keyframes anim1': {
		'100% ': {
			strokeDashoffset: dashOffetAnim1
		}
	}
}))
const Card = styled('div')(() => ({
	position: 'relative',
	width: 250,
	height: 300,
	background: '#333',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
	overflow: 'hidden',
	transition: 'all 0.3s ease',
	'&:hover': {
		'& h2': {
			color: '#fff'
		}
	}
}))
const Box = styled('div')(() => ({}))
const Percent = styled('div')(() => ({
	position: 'relative',
	width: 150,
	height: 150,
	borderRadius: '50%',
	background: '#222',
	zIndex: 1000
}))
const Number = styled('div')(() => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '50%',
	'& h6': {
		color: '#777',
		fontWeight: 700,
		fontSize: 40,
		transition: 'all 0.3s ease'
	}
}))
const Text = styled('span')(() => ({
	display: 'inline-block',
	position: 'relative',
	color: '#777',
	margin: '20px 0 0 0',
	fontWeight: 700,
	fontSize: 18,
	textTransform: 'uppercase',
	transition: 'all 0.3s ease'
}))

const ProgressBarv2: FC<IProps> = ({ value, text, animName }) => {
	return (
		<Container>
			<Card>
				<Box>
					<Percent>
						<svg>
							<circle style={{ animationName: animName }} cx={70} cy={70} r={70}></circle>
							<circle style={{ animationName: animName }} cx={70} cy={70} r={70}></circle>
						</svg>
						<Number>
							<h6>{value}<span>%</span></h6>
						</Number>
					</Percent>
					<Text>{text}</Text>
				</Box>
			</Card>
		</Container>
	)
}

export default ProgressBarv2