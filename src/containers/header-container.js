import {connect} from 'react-redux';
import Header from '../components/header/header';
import {logOut} from '../actions/actions-auth';


function mapStateToProps({auth}){
	return {
		authed: auth.authed
	}
}

export default connect(mapStateToProps, {logOut})(Header);