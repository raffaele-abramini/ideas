import {connect} from 'react-redux';
import Header from '../components/header/header';
import {toggleCompletedIdeas} from '../actions/actions-app';


function mapStateToProps(state){
	return {
		hideCompletedIdeas: state.app.hideCompletedIdeas
	}
}

export default connect(mapStateToProps, {toggleCompletedIdeas})(Header);