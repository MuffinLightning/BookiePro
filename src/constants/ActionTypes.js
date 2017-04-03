// List all the actions type used in the app here
export default {
  // Asset Actions
  ASSET_RECEIVE_LIST: 'ASSET_RECEIVE_LIST',
  // App Actions
  APP_SET_IS_LOGGED_IN: 'APP_SET_IS_LOGGED_IN',
  APP_SET_GLOBAL_BETTING_STATISTICS: 'APP_SET_GLOBAL_BETTING_STATISTICS',
  APP_SET_GET_GLOBAL_BETTING_STATISTICS_LOADING_STATUS: 'APP_SET_GET_GLOBAL_BETTING_STATISTICS_LOADING_STATUS',
  APP_SET_CONNECT_TO_BLOCKCHAIN_LOADING_STATUS: 'APP_SET_CONNECT_TO_BLOCKCHAIN_LOADING_STATUS',
  APP_SET_CONNECTION_STATUS: 'APP_SET_CONNECTION_STATUS',
  APP_SET_BLOCKCHAIN_DYNAMIC_GLOBAL_PROPERTY: 'APP_SET_BLOCKCHAIN_DYNAMIC_GLOBAL_PROPERTY',
  APP_SET_BLOCKCHAIN_GLOBAL_PROPERTY: 'APP_SET_BLOCKCHAIN_GLOBAL_PROPERTY',
  // Register Actions
  REGISTER_SET_LOADING_STATUS: 'REGISTER_SET_LOADING_STATUS',
  REGISTER_SET_ERROR: 'REGISTER_SET_ERROR',
  // Login Actions
  LOGIN_SET_LOADING_STATUS: 'LOGIN_SET_LOADING_STATUS',
  LOGIN_SET_ERROR: 'LOGIN_SET_ERROR',

  // Sport Actions
  SPORT_SET_GET_SPORTS_LOADING_STATUS: 'SPORT_SET_GET_SPORTS_LOADING_STATUS',
  SPORT_ADD_SPORTS: 'SPORT_ADD_SPORTS',
  // Event Group Actions
  EVENT_GROUP_SET_GET_EVENT_GROUPS_LOADING_STATUS: 'EVENT_GROUP_SET_GET_EVENT_GROUPS_LOADING_STATUS',
  EVENT_GROUP_ADD_EVENT_GROUPS: 'EVENT_GROUP_ADD_EVENT_GROUPS',
  // Competitor Actions
  COMPETITOR_SET_GET_COMPETITORS_LOADING_STATUS: 'COMPETITOR_SET_GET_COMPETITORS_LOADING_STATUS',
  COMPETITOR_ADD_COMPETITORS: 'COMPETITOR_ADD_COMPETITORS',
  // Event Group Actions
  EVENT_SET_GET_EVENTS_LOADING_STATUS: 'EVENT_SET_GET_EVENTS_LOADING_STATUS',
  EVENT_ADD_EVENTS: 'EVENT_ADD_EVENTS',
  EVENT_SET_SEARCH_EVENTS_LOADING_STATUS: 'EVENT_SET_SEARCH_EVENTS_LOADING_STATUS',
  EVENT_SET_SEARCH_RESULT: 'EVENT_SET_SEARCH_RESULT',
  // Betting Market Group Actions
  BETTING_MARKET_GROUP_ADD_BETTING_MARKET_GROUPS: 'BETTING_MARKET_GROUP_ADD_BETTING_MARKET_GROUPS',
  // Betting Market  Actions
  BETTING_MARKET_ADD_BETTING_MARKETS: 'BETTING_MARKET_ADD_BETTING_MARKETS',
  // Bet Actions
  BET_SET_GET_ONGOING_BETS_LOADING_STATUS: 'BET_SET_GET_ONGOING_BETS_LOADING_STATUS',
  BET_SET_GET_RESOLVED_BETS_LOADING_STATUS: 'BET_SET_GET_RESOLVED_BETS_LOADING_STATUS',
  BET_SET_MAKE_BETS_LOADING_STATUS: 'BET_SET_MAKE_BETS_LOADING_STATUS',
  BET_SET_CANCEL_BETS_LOADING_STATUS: 'BET_SET_CANCEL_BETS_LOADING_STATUS',
  BET_SET_EDIT_BETS_LOADING_STATUS: 'BET_SET_EDIT_BETS_LOADING_STATUS',
  BET_ADD_ONGOING_BETS: 'BET_ADD_ONGOING_BETS',
  BET_ADD_RESOLVED_BETS: 'BET_ADD_RESOLVED_BETS',
  // Account Actions
  ACCOUNT_LOGOUT: 'ACCOUNT_LOGOUT',
  ACCOUNT_SET_ACCOUNT: 'ACCOUNT_SET_ACCOUNT',
  ACCOUNT_SET_STATISTICS: 'ACCOUNT_SET_STATISTICS',
  ACCOUNT_SET_KEYS: 'ACCOUNT_SET_KEYS',
  ACCOUNT_SET_AVAILABLE_BALANCES: 'ACCOUNT_SET_AVAILABLE_BALANCES',
  ACCOUNT_UPDATE_AVAILABLE_BALANCE: 'ACCOUNT_UPDATE_AVAILABLE_BALANCE',
  ACCOUNT_REMOVE_AVAILABLE_BALANCE_BY_ID: 'ACCOUNT_REMOVE_AVAILABLE_BALANCE_BY_ID',
  ACCOUNT_SET_IN_GAME_BALANCES: 'ACCOUNT_SET_IN_GAME_BALANCES',
  ACCOUNT_SET_DEPOSIT_ADDRESS: 'ACCOUNT_SET_DEPOSIT_ADDRESS',
  ACCOUNT_SET_TRANSACTION_HISTORIES: 'ACCOUNT_SET_TRANSACTION_HISTORIES',
  ACCOUNT_SET_GET_BALANCE_LOADING_STATUS: 'ACCOUNT_SET_GET_BALANCE_LOADING_STATUS',
  ACCOUNT_SET_WITHDRAW_LOADING_STATUS: 'ACCOUNT_SET_WITHDRAW_LOADING_STATUS',
  ACCOUNT_SET_GET_DEPOSIT_ADDRESS_LOADING_STATUS: 'ACCOUNT_SET_GET_DEPOSIT_ADDRESS_LOADING_STATUS',
  ACCOUNT_SET_GET_TRANSACTION_HISTORIES_LOADING_STATUS: 'ACCOUNT_SET_GET_TRANSACTION_HISTORIES_LOADING_STATUS',
  ACCOUNT_SET_CHANGE_PASSWORD_LOADING_STATUS: 'ACCOUNT_SET_CHANGE_PASSWORD_LOADING_STATUS',
  ACCOUNT_SET_CHANGE_PASSWORD_ERROR: 'ACCOUNT_SET_CHANGE_PASSWORD_ERROR',
  // Setting Actions
  SETTING_UPDATE_LANG: 'SETTING_UPDATE_LANG',
  SETTING_UPDATE_TIMEZONE: 'SETTING_UPDATE_TIMEZONE',
  SETTING_UPDATE_NOTIFICATION: 'SETTING_UPDATE_NOTIFICATION',
  SETTING_UPDATE_CURRENCY_FORMAT: 'SETTING_UPDATE_CURRENCY_FORMAT',
  // Notification Actions
  NOTIFICATION_ADD_NOTIFICATIONS: 'NOTIFICATION_ADD_NOTIFICATIONS',
  NOTIFICATION_SET_LATEST_TRANSACTION_HISTORY_ID: 'NOTIFICATION_SET_LATEST_TRANSACTION_HISTORY_ID',
  // Sidebar Actions
  SIDEBAR_UPDATE_COMPLETE_TREE: 'SIDEBAR_UPDATE_COMPLETE_TREE',
  // All Sports Actions
  ALL_SPORTS_SET_LOADING_STATUS: 'ALL_SPORTS_SET_LOADING_STATUS',
  ALL_SPORTS_SET_DATA: 'ALL_SPORTS_SET_DATA',
  // Software update actions
  SOFTWARE_UPDATE_SET_REFERENCE_ACCOUNT: 'SOFTWARE_UPDATE_SET_REFERENCE_ACCOUNT',
  SOFTWARE_UPDATE_SET_REFERENCE_ACCOUNT_STATISTICS: 'SOFTWARE_UPDATE_SET_REFERENCE_ACCOUNT_STATISTICS',
  SOFTWARE_UPDATE_SET_UPDATE_PARAMETER: 'SOFTWARE_UPDATE_SET_UPDATE_PARAMETER',
  // Sport Page Actions
  SPORT_PAGE_SET_LOADING_STATUS: 'SPORT_PAGE_SET_LOADING_STATUS',
  SPORT_PAGE_SET_DATA: 'SPORT_PAGE_SET_DATA',
  // Event Group Page Actions
  EVENT_GROUP_PAGE_SET_LOADING_STATUS: 'EVENT_GROUP_PAGE_SET_LOADING_STATUS',
  EVENT_GROUP_PAGE_SET_DATA: 'EVENT_GROUP_PAGE_SET_DATA',
  // Quick Bet Drawer Actions
  QUICK_BET_DRAWER_ADD_QUICK_BET: 'QUICK_BET_DRAWER_ADD_QUICK_BET',
  // Market Drawer Actions
  MARKET_DRAWER_ADD_UNCONFIRMED_BET: 'MARKET_DRAWER_ADD_UNCONFIRMED_BET',
}
