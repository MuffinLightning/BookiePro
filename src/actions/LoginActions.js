import AppActions from './AppActions';
import { LoadingStatus, ActionTypes } from '../constants';
import { AccountService } from '../services';
import { FetchChain } from 'graphenejs-lib';
import NavigateActions from './NavigateActions';
var I18n = require('react-redux-i18n').I18n;

/**
 * Private actions
 */
class LoginPrivateActions {
  static setLoadingStatusAction(loadingStatus) {
    return {
      type: ActionTypes.LOGIN_SET_LOADING_STATUS,
      loadingStatus
    }
  }

  static setLoginErrorAction(errors) {
    return {
      type: ActionTypes.LOGIN_SET_ERROR,
      errors:errors
    }
  }
}

/**
 * Public actions
 */
class LoginActions {
  static login(accountName, password) {
    return (dispatch) => {
      // Set register status to loading
      dispatch(LoginPrivateActions.setLoadingStatusAction(LoadingStatus.LOADING));

      FetchChain('getAccount', accountName).then((account) => {
        const isAuthenticated = AccountService.authenticateAccount(accountName, password, account);

        if (isAuthenticated) {
          // Set login status to done
          dispatch(LoginPrivateActions.setLoadingStatusAction(LoadingStatus.DONE));
          // Set is logged in
          dispatch(AppActions.setIsLoggedInAction(true));
          // Save account information
          dispatch(AppActions.setAccount(account));
          // Navigate to home
          dispatch(NavigateActions.navigateTo('/home'))
        } else {
          //set error on password mismatch
          dispatch(LoginPrivateActions.setLoginErrorAction([I18n.t('login.password_match')]));
        }
      }).catch((error) => {
        // Set error
        dispatch(LoginPrivateActions.setLoginErrorAction([I18n.t('login.wrong_accountname_password')]));
      })
    }
  }
}

export default LoginActions;
