const slider = document.querySelector('.slider')
const lengthOutput = document.querySelector('.range-output')
const passwordOutput = document.querySelector('.generated')
const copyBtn = document.querySelector('.copy')
const copyBubble = document.querySelector('.copied')
const noCheck = document.querySelector('.no-check')
const strengthText = document.querySelector('.strength-text')
const box1 = document.querySelector('.box-1')
const box2 = document.querySelector('.box-2')
const box3 = document.querySelector('.box-3')
const box4 = document.querySelector('.box-4')
const generateBtn = document.querySelector('.generate-button')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')

const lowerCaseLetters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
]
const upperCaseLetters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
]
const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const selectedSpecialCharacters = [
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'+',
	'-',
	'.',
	'~',
	'<',
	'>',
	'=',
	'-',
	'_',
	'/',
	':',
	';',
	'?',
	'[',
	']',
	'{',
	'}',
	'~',
]

let length = 10

function setLength(e) {
	length = e.target.value
	lengthOutput.textContent = length
}

function makePass(e) {
	let length = lengthOutput.textContent
	let arr1 = []
	if (uppercase.checked === true) {
		arr1.push(...upperCaseLetters)
	}
	if (lowercase.checked === true) {
		arr1.push(...lowerCaseLetters)
	}
	if (numbers.checked === true) {
		arr1.push(...numbersZeroToNine)
	}
	if (symbols.checked === true) {
		arr1.push(...selectedSpecialCharacters)
	}
	if (arr1.length === 0) {
		noCheck.classList.add('show')
		setTimeout(() => noCheck.classList.remove('show'), 2100)
	}
	generatePassword(length, arr1)
}

function generatePassword(length, arr1) {
	let output = []
	let pass = ''
	if (length * 3 + arr1.length >= 122) {
		strengthText.textContent = 'excellent'
		box1.style.backgroundColor = 'green'
		box2.style.backgroundColor = 'green'
		box3.style.backgroundColor = 'green'
		box4.style.backgroundColor = 'green'
	} else if (length * 3 + arr1.length >= 95) {
		strengthText.textContent = 'good'
		box1.style.backgroundColor = 'yellowgreen'
		box2.style.backgroundColor = 'yellowgreen'
		box3.style.backgroundColor = 'yellowgreen'
		box4.style.backgroundColor = 'transparent'
	} else if (length * 3 + arr1.length >= 77) {
		strengthText.textContent = 'medium'
		box1.style.backgroundColor = 'orange'
		box2.style.backgroundColor = 'orange'
		box3.style.backgroundColor = 'transparent'
		box4.style.backgroundColor = 'transparent'
	} else {
		strengthText.textContent = 'low'
		box1.style.backgroundColor = 'red'
		box2.style.backgroundColor = 'transparent'
		box3.style.backgroundColor = 'transparent'
		box4.style.backgroundColor = 'transparent'
	}
	for (let i = 0; i < length; i++) {
		let random = Math.floor(Math.random() * arr1.length)
		output.push(arr1[random])
		pass = output.join('')
		passwordOutput.textContent = pass
	}
}

function copy() {
	copyBubble.classList.add('show')
	setTimeout(() => copyBubble.classList.remove('show'), 1900)
	let passText = passwordOutput.textContent
	navigator.clipboard.writeText(passText)
	console.log('icon click')
}

slider.addEventListener('input', setLength)
generateBtn.addEventListener('click', makePass)
copyBtn.addEventListener('click', copy)

setLength()
