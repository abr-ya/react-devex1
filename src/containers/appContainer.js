import App from '../App';
import {connect} from 'react-redux';
import {showAlert, hideAlert} from '../actions/alertActions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  alert: state.alert,
})
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  showAlert,
  hideAlert,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
