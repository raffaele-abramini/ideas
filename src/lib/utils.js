export const formatDigits = (number, length=2)=> {
	return number >= 10 ** (length-1)
		? number
		: `0${number}`
}

export const getFormattedDate = (date)=> {
	if(typeof date === 'string') date = new Date(date)
	return `${formatDigits(date.getDate())}/${formatDigits(date.getMonth())}/${date.getFullYear()}` +
			` ${formatDigits(date.getHours())}:${formatDigits(date.getMinutes())}`;
}