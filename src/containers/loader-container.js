import {connect} from 'react-redux';
import Loader from '../components/loader/loader';

const mapStateToProps = ({loader: {isVisible, message}})=>{
	return {
		isVisible,
		message
	}
}

export default connect(mapStateToProps)(Loader)