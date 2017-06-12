import moment from 'moment';

export const formatDigits = (number, length=2)=> {
	return number >= 10 ** (length-1)
		? number
		: `0${number}`
}

export const getFormattedDate = (date)=> {
	if(typeof date === 'string') date = new Date(date)
	return `${formatDigits(date.getDate())}/${formatDigits(date.getMonth()+1)}/${date.getFullYear()}` +
			` ${formatDigits(date.getHours())}:${formatDigits(date.getMinutes())}`;
}

export const toW3CString = function (date) {
	let year =  date.getFullYear();
	let month =  date.getMonth();
	month ++;
	if (month < 10) {
		month = '0' + month;
	}
	let day =  date.getDate();
	if (day < 10) {
		day = '0' + day;
	}
	let hours =  date.getHours();
	if (hours < 10) {
		hours = '0' + hours;
	}
	let minutes =  date.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	let seconds =  date.getSeconds();
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	let offset = - date.getTimezoneOffset();
	let offsetHours = Math.abs(Math.floor(offset / 60));
	let offsetMinutes = Math.abs(offset) - offsetHours * 60;
	if (offsetHours < 10) {
		offsetHours = '0' + offsetHours;
	}
	if (offsetMinutes < 10) {
		offsetMinutes = '0' + offsetMinutes;
	}
	let offsetSign = '+';
	if (offset < 0) {
		offsetSign = '-';
	}
	return year + '-' + month + '-' + day +
		'T' + hours + ':' + minutes + ':' + seconds +
		offsetSign + offsetHours + ':' + offsetMinutes;
};


const _structureMessage =(message, code)=>{
	const codes = {
		0: 'default',
		1: 'warning',
		2: 'bad'
	}
	return {
		message,
		code: codes[code]
	}
}
export const getDateMessageAlert = (deadline)=>{

	const date = moment();
	const deadln = moment(deadline);

	const duration = moment.duration(deadln.diff(date));
	const days = Math.round(duration.asDays());


	if(days > 0){
		return _structureMessage(`${days} days left`, 0)
	}
	else if(days < 0){
		return _structureMessage(`Woops, you are ${Math.abs(days)} days late`, 2)
	}
	else if(days===0) {
		const hours = Math.floor(duration.asHours());

		if(hours >= 0) {
			return _structureMessage(`${hours} hours left`, 1)
		} else {
			return _structureMessage(`Woops, you are ${Math.abs(hours)} hours late`, 2)
		}
	}
}