import { styled } from "@mui/material"
import { FC, useEffect, useState } from "react"
import Circle from "../icons/Circle"

interface IProgres {
	value: number
}

let dashOffet = (472 - (472 * 25) / 100)

const ProgressBox = styled('div')(() => ({
	width: 160,
	height: 160,
	position: 'relative',
	'& svg': {
		position: 'absolute',
		top: 0,
		left: 0
	},
	'& circle': {
		fill: 'none',
		stroke: 'url(#GradientColor)',
		strokeWidth: 20,
		strokeDasharray: 472,
		strokeDashoffset: 472,
		animation: 'anim 1s cubic-bezier(.99,0,.55,.75) 0.2s forwards'
	},
	'@keyframes anim': {
		'100% ': {
			strokeDashoffset: dashOffet,
		}
	}

}))
const Outer = styled('div')(() => ({
	width: 160,
	height: 160,
	borderRadius: '50%',
	padding: 20,
	boxShadow: '6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)'
}))
const Inner = styled('div')(() => ({
	width: 120,
	height: 120,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '50%',
	boxShadow: 'inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.005)',
}))
const Number = styled('div')(() => ({
	fontWeight: 600,
	color: '#555'
}))

const ProgressBarv1: FC<IProgres> = ({ value }) => {

	let [counter, setCounter] = useState(0)

	useEffect(() => {

		setTimeout(() => {
			setInterval(() => {
				if (counter === value + 1) {
					clearInterval('')
				} else {
					setCounter(counter++);
				}
			}, 27);
		}, 150);
	}, []);

	return (
		<ProgressBox>
			<Outer><Inner><Number>{counter}%</Number></Inner></Outer>
			<Circle />
		</ProgressBox>
	)
}

export default ProgressBarv1