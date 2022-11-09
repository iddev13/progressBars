import { FC, useEffect, useState } from "react"
import { Grid, styled } from "@mui/material"

interface IProgres {
	name: string
	value: number
	delay: number
}

const ProgressBox = styled('div')(() => ({
	width: '100%',
	margin: '0 0 20px 0',
	'&:hover span': {
		background: "yellow",
	},
}))
const ProgressHeader = styled(Grid)(() => ({
	justifyContent: 'space-between',
	flexWrap: 'nowrap',
}))
const Name = styled(Grid)(() => ({
	textTransform: 'uppercase',
}))
const Value = styled(Grid)(() => ({

}))
const Progress = styled('div')(() => ({
	display: 'flex',
	width: '100%',
	height: 5,
	borderRadius: 5,
	margin: '7px auto',
	background: 'black',
}))


const Progressing = styled('span')(() => ({
	display: 'block',
	width: 0,
	height: '100%',
	background: "orange",
	borderRadius: 5,
	animation: 'anim-line 1.5s cubic-bezier(.99,0,.55,.75) forwards',
	transition: 'all 0.3s ease',
	'@keyframes anim-line': {
		'100%': {
			width: '100%'
		}
	}
}))

const ProgressLine: FC<IProgres> = ({ name, value, delay }) => {

	let [counter, setCounter] = useState(0)

	useEffect(() => {

		setTimeout(() => {
			setInterval(() => {
				if (counter === value + 1) {
					clearInterval('')
				} else {
					setCounter(counter++);
				}
			}, 21 + (delay * 10));
		}, (150 + (delay * 1000)));
	}, []);

	return (
		<ProgressBox>
			<ProgressHeader container>
				<Name item>{name}</Name>
				<Value item>{counter}%</Value>
			</ProgressHeader>
			<Progress><Progressing style={{ maxWidth: `${value}%`, animationDelay: `${delay}s` }} /></Progress>
		</ProgressBox>
	)
}


export default ProgressLine