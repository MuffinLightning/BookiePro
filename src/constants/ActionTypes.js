// List all the actions type used in the app here
export default {
  // Asset Actions
  ASSET_ADD_OR_UPDATE_ASSETS: 'ASSET_ADD_OR_UPDATE_ASSETS',
  ASSET_SET_GET_ASSETS_BY_IDS_LOADING_STATUS: 'ASSET_SET_GET_ASSETS_BY_IDS_LOADING_STATUS',
  // App Actions
  APP_SET_IS_LOGGED_IN: 'APP_SET_IS_LOGGED_IN',
  APP_SET_GLOBAL_BETTING_STATISTICS: 'APP_SET_GLOBAL_BETTING_STATISTICS',
  APP_SET_GET_GLOBAL_BETTING_STATISTICS_LOADING_STATUS: 'APP_SET_GET_GLOBAL_BETTING_STATISTICS_LOADING_STATUS',
  APP_SET_CONNECT_TO_BLOCKCHAIN_LOADING_STATUS: 'APP_SET_CONNECT_TO_BLOCKCHAIN_LOADING_STATUS',
  APP_SET_CONNECTION_STATUS: 'APP_SET_CONNECTION_STATUS',
  APP_SET_BLOCKCHAIN_DYNAMIC_GLOBAL_PROPERTY: 'APP_SET_BLOCKCHAIN_DYNAMIC_GLOBAL_PROPERTY',
  APP_SET_BLOCKCHAIN_GLOBAL_PROPERTY: 'APP_SET_BLOCKCHAIN_GLOBAL_PROPERTY',
  APP_SET_CONNECT_TO_BLOCKCHAIN_ERROR: 'APP_SET_CONNECT_TO_BLOCKCHAIN_ERROR',
  APP_SET_GET_GLOBAL_BETTING_STATISTICS_ERROR: 'APP_SET_GET_GLOBAL_BETTING_STATISTICS_ERROR',
  APP_SHOW_LOGOUT_POPUP: 'APP_SHOW_LOGOUT_POPUP',
  // Register Actions
  REGISTER_SET_LOADING_STATUS: 'REGISTER_SET_LOADING_STATUS',
  REGISTER_SET_ERROR: 'REGISTER_SET_ERROR',
  // Login Actions
  LOGIN_SET_LOADING_STATUS: 'LOGIN_SET_LOADING_STATUS',
  LOGIN_SET_ERROR: 'LOGIN_SET_ERROR',
  // Sport Actions
  SPORT_SET_GET_ALL_SPORTS_LOADING_STATUS: 'SPORT_SET_GET_ALL_SPORTS_LOADING_STATUS',
  SPORT_ADD_OR_UPDATE_SPORTS: 'SPORT_ADD_OR_UPDATE_SPORTS',
  SPORT_SET_GET_SPORTS_BY_IDS_LOADING_STATUS: 'SPORT_SET_GET_SPORTS_BY_IDS_LOADING_STATUS',
  SPORT_REMOVE_SPORTS_BY_IDS: 'SPORT_REMOVE_SPORTS_BY_IDS',
  // Event Group Actions
  EVENT_GROUP_ADD_OR_UPDATE_EVENT_GROUPS: 'EVENT_GROUP_ADD_OR_UPDATE_EVENT_GROUPS',
  EVENT_GROUP_SET_GET_EVENT_GROUPS_BY_IDS_LOADING_STATUS: 'EVENT_GROUP_SET_GET_EVENT_GROUPS_BY_IDS_LOADING_STATUS',
  EVENT_GROUP_REMOVE_EVENT_GROUPS_BY_IDS: 'EVENT_GROUP_REMOVE_EVENT_GROUPS_BY_IDS',
  // Competitor Actions
  COMPETITOR_ADD_OR_UPDATE_COMPETITORS: 'COMPETITOR_ADD_OR_UPDATE_COMPETITORS',
  COMPETITOR_SET_GET_COMPETITORS_BY_IDS_LOADING_STATUS: 'COMPETITOR_SET_GET_COMPETITORS_BY_IDS_LOADING_STATUS',
  COMPETITOR_SET_GET_COMPETITORS_BY_SPORT_IDS_LOADING_STATUS: 'COMPETITOR_SET_GET_COMPETITORS_BY_SPORT_IDS_LOADING_STATUS',
  COMPETITOR_REMOVE_COMPETITORS_BY_IDS: 'COMPETITOR_REMOVE_COMPETITORS_BY_IDS',
  // Event Actions
  EVENT_SET_GET_EVENTS_BY_SPORT_IDS_LOADING_STATUS: 'EVENT_SET_GET_EVENTS_BY_SPORT_IDS_LOADING_STATUS',
  EVENT_SET_GET_EVENTS_BY_IDS_LOADING_STATUS: 'EVENT_SET_GET_EVENTS_BY_IDS_LOADING_STATUS',
  EVENT_ADD_OR_UPDATE_EVENTS: 'EVENT_ADD_OR_UPDATE_EVENTS',
  EVENT_REMOVE_EVENTS_BY_IDS: 'EVENT_REMOVE_EVENTS_BY_IDS',
  EVENT_SET_SEARCH_EVENTS_LOADING_STATUS: 'EVENT_SET_SEARCH_EVENTS_LOADING_STATUS',
  EVENT_SET_SEARCH_RESULT: 'EVENT_SET_SEARCH_RESULT',
  EVENT_SET_SEARCH_EVENTS_ERROR: 'EVENT_SET_SEARCH_EVENTS_ERROR',
  // Betting Market Group Actions
  BETTING_MARKET_GROUP_ADD_OR_UPDATE_BETTING_MARKET_GROUPS: 'BETTING_MARKET_GROUP_ADD_OR_UPDATE_BETTING_MARKET_GROUPS',
  BETTING_MARKET_GROUP_REMOVE_BETTING_MARKET_GROUPS_BY_IDS: 'BETTING_MARKET_GROUP_REMOVE_BETTING_MARKET_GROUPS_BY_IDS',
  BETTING_MARKET_GROUP_SET_GET_BETTING_MARKET_GROUPS_BY_IDS_LOADING_STATUS: 'BETTING_MARKET_GROUP_SET_GET_BETTING_MARKET_GROUPS_BY_IDS_LOADING_STATUS',
  // Betting Market  Actions
  BETTING_MARKET_ADD_OR_UPDATE_BETTING_MARKETS: 'BETTING_MARKET_ADD_OR_UPDATE_BETTING_MARKETS',
  BETTING_MARKET_REMOVE_BETTING_MARKETS_BY_IDS: 'BETTING_MARKET_REMOVE_BETTING_MARKETS_BY_IDS',
  BETTING_MARKET_SET_GET_BETTING_MARKETS_BY_IDS_LOADING_STATUS: 'BETTING_MARKET_SET_GET_BETTING_MARKETS_BY_IDS_LOADING_STATUS',
  // Bet Actions
  BET_SET_GET_ONGOING_BETS_LOADING_STATUS: 'BET_SET_GET_ONGOING_BETS_LOADING_STATUS',
  BET_SET_GET_ONGOING_BETS_ERROR: 'BET_SET_GET_ONGOING_BETS_ERROR',
  BET_SET_GET_RESOLVED_BETS_LOADING_STATUS: 'BET_SET_GET_RESOLVED_BETS_LOADING_STATUS',
  BET_SET_GET_RESOLVED_BETS_ERROR: 'BET_SET_GET_RESOLVED_BETS_ERROR',
  BET_SET_MAKE_BETS_LOADING_STATUS: 'BET_SET_MAKE_BETS_LOADING_STATUS',
  BET_SET_MAKE_BETS_ERROR: 'BET_SET_MAKE_BETS_ERROR',
  BET_SET_CANCEL_BETS_BY_IDS_LOADING_STATUS: 'BET_SET_CANCEL_BETS_BY_IDS_LOADING_STATUS',
  BET_SET_CANCEL_BETS_ERROR_BY_BET_ID: 'BET_SET_CANCEL_BETS_ERROR_BY_BET_ID',
  BET_SET_EDIT_BETS_BY_IDS_LOADING_STATUS: 'BET_SET_EDIT_BETS_BY_IDS_LOADING_STATUS',
  BET_SET_EDIT_BETS_ERROR_BY_BET_ID: 'BET_SET_EDIT_BETS_ERROR_BY_BET_ID',
  BET_ADD_OR_UPDATE_ONGOING_BETS: 'BET_ADD_OR_UPDATE_ONGOING_BETS',
  BET_REMOVE_ONGOING_BETS: 'BET_REMOVE_ONGOING_BETS',
  BET_ADD_OR_UPDATE_RESOLVED_BETS: 'BET_ADD_OR_UPDATE_RESOLVED_BETS',
  // Binned order books actions
  BINNED_ORDER_BOOK_SET_GET_BINNED_ORDER_BOOKS_BY_BETTING_MARKET_IDS_LOADING_STATUS: 'BINNED_ORDER_BOOK_SET_GET_BINNED_ORDER_BOOKS_BY_BETTING_MARKET_IDS_LOADING_STATUS',
  BINNED_ORDER_BOOK_ADD_OR_UPDATE_BINNED_ORDER_BOOKS_BY_BETTING_MARKET_ID: 'BINNED_ORDER_BOOK_ADD_OR_UPDATE_BINNED_ORDER_BOOKS_BY_BETTING_MARKET_ID',
  BINNED_ORDER_BOOK_REMOVE_BINNED_ORDER_BOOKS_BY_BETTING_MARKET_ID: 'BINNED_ORDER_BOOK_REMOVE_BINNED_ORDER_BOOKS_BY_BETTING_MARKET_ID',
  // Account Actions
  ACCOUNT_LOGOUT: 'ACCOUNT_LOGOUT',
  ACCOUNT_SET_ACCOUNT: 'ACCOUNT_SET_ACCOUNT',
  ACCOUNT_SET_PASSWORD: 'ACCOUNT_SET_PASSWORD',
  ACCOUNT_SET_STATISTICS: 'ACCOUNT_SET_STATISTICS',
  ACCOUNT_SET_KEYS: 'ACCOUNT_SET_KEYS',
  ACCOUNT_ADD_OR_UPDATE_AVAILABLE_BALANCES: 'ACCOUNT_ADD_OR_UPDATE_AVAILABLE_BALANCES',
  ACCOUNT_REMOVE_AVAILABLE_BALANCE_BY_ID: 'ACCOUNT_REMOVE_AVAILABLE_BALANCE_BY_ID',
  ACCOUNT_SET_IN_GAME_BALANCES: 'ACCOUNT_SET_IN_GAME_BALANCES',
  ACCOUNT_SET_DEPOSIT_ADDRESS: 'ACCOUNT_SET_DEPOSIT_ADDRESS',
  ACCOUNT_SET_TRANSACTION_HISTORIES: 'ACCOUNT_SET_TRANSACTION_HISTORIES',
  ACCOUNT_SET_GET_TRANSACTION_HISTORIES_ERROR: 'ACCOUNT_SET_GET_TRANSACTION_HISTORIES_ERROR',
  ACCOUNT_SET_GET_BALANCE_LOADING_STATUS: 'ACCOUNT_SET_GET_BALANCE_LOADING_STATUS',
  ACCOUNT_SET_WITHDRAW_LOADING_STATUS: 'ACCOUNT_SET_WITHDRAW_LOADING_STATUS',
  ACCOUNT_SET_WITHDRAW_ERROR: 'ACCOUNT_SET_WITHDRAW_ERROR',
  ACCOUNT_SET_GET_DEPOSIT_ADDRESS_LOADING_STATUS: 'ACCOUNT_SET_GET_DEPOSIT_ADDRESS_LOADING_STATUS',
  ACCOUNT_SET_GET_DEPOSIT_ADDRESS_ERROR: 'ACCOUNT_SET_GET_DEPOSIT_ADDRESS_ERROR',
  ACCOUNT_SET_GET_TRANSACTION_HISTORIES_LOADING_STATUS: 'ACCOUNT_SET_GET_TRANSACTION_HISTORIES_LOADING_STATUS',
  ACCOUNT_SET_CHANGE_PASSWORD_LOADING_STATUS: 'ACCOUNT_SET_CHANGE_PASSWORD_LOADING_STATUS',
  ACCOUNT_SET_CHANGE_PASSWORD_ERRORS: 'ACCOUNT_SET_CHANGE_PASSWORD_ERRORS',
  ACCOUNT_SET_TRANSACTION_HISTORIES_EXPORT: 'ACCOUNT_SET_TRANSACTION_HISTORIES_EXPORT',
  ACCOUNT_SET_GET_TRANSACTION_HISTORIES_ERROR_EXPORT: 'ACCOUNT_SET_GET_TRANSACTION_HISTORIES_ERROR_EXPORT',
  ACCOUNT_SET_GET_TRANSACTION_HISTORIES_LOADING_STATUS_EXPORT: 'ACCOUNT_SET_GET_TRANSACTION_HISTORIES_LOADING_STATUS_EXPORT',
  // Liquidity Actions
  LIQUIDITY_SET_GET_TOTAL_MATCHED_BETS_BY_BETTING_MARKET_GROUP_IDS_LOADING_STATUS: 'LIQUIDITY_SET_GET_TOTAL_MATCHED_BETS_BY_BETTING_MARKET_GROUP_IDS_LOADING_STATUS',
  LIQUIDITY_ADD_OR_UPDATE_TOTAL_MATCHED_BETS_BY_BETTING_MARKET_GROUP_ID: 'LIQUIDITY_ADD_OR_UPDATE_TOTAL_MATCHED_BETS_BY_BETTING_MARKET_GROUP_ID',
  // Setting Actions
  SETTING_UPDATE_LANG: 'SETTING_UPDATE_LANG',
  SETTING_UPDATE_TIMEZONE: 'SETTING_UPDATE_TIMEZONE',
  SETTING_UPDATE_NOTIFICATION: 'SETTING_UPDATE_NOTIFICATION',
  SETTING_UPDATE_CURRENCY_FORMAT: 'SETTING_UPDATE_CURRENCY_FORMAT',
  SETTING_SET_INITIAL_SETTING: 'SETTING_SET_INITIAL_SETTING',
  SETTING_MARK_SKIP_LOGOUT_POPUP: 'SETTING_MARK_SKIP_LOGOUT_POPUP',
  // Notification Actions
  NOTIFICATION_ADD_NOTIFICATIONS: 'NOTIFICATION_ADD_NOTIFICATIONS',
  NOTIFICATION_SET_LATEST_TRANSACTION_HISTORY_ID: 'NOTIFICATION_SET_LATEST_TRANSACTION_HISTORY_ID',
  NOTIFICATION_SET_INIT_NOTIFICATION_ERROR: 'NOTIFICATION_SET_INIT_NOTIFICATION_ERROR',
  NOTIFICATION_SET_INIT_NOTIFICATION_LOADING_STATUS: 'NOTIFICATION_SET_INIT_NOTIFICATION_LOADING_STATUS',
  NOTIFICATION_SET_UPDATE_NOTIFICATION_ERROR: 'NOTIFICATION_SET_UPDATE_NOTIFICATION_ERROR',
  NOTIFICATION_SET_UPDATE_NOTIFICATION_LOADING_STATUS: 'NOTIFICATION_SET_UPDATE_NOTIFICATION_LOADING_STATUS',
  // Sidebar Actions
  SIDEBAR_UPDATE_COMPLETE_TREE: 'SIDEBAR_UPDATE_COMPLETE_TREE',
  SIDEBAR_SET_ERROR: 'SIDEBAR_SET_ERROR',
  SIDEBAR_SET_LOADING_STATUS: 'SIDEBAR_SET_LOADING_STATUS',
  // All Sports Actions
  ALL_SPORTS_SET_LOADING_STATUS: 'ALL_SPORTS_SET_LOADING_STATUS',
  ALL_SPORTS_SET_DATA: 'ALL_SPORTS_SET_DATA',
  ALL_SPORTS_SET_ERROR: 'ALL_SPORTS_SET_ERROR',
  // Software update actions
  SOFTWARE_UPDATE_SET_REFERENCE_ACCOUNT: 'SOFTWARE_UPDATE_SET_REFERENCE_ACCOUNT',
  SOFTWARE_UPDATE_SET_REFERENCE_ACCOUNT_STATISTICS: 'SOFTWARE_UPDATE_SET_REFERENCE_ACCOUNT_STATISTICS',
  SOFTWARE_UPDATE_SET_UPDATE_PARAMETER: 'SOFTWARE_UPDATE_SET_UPDATE_PARAMETER',

  // Sport Page Actions
  SPORT_PAGE_SET_LOADING_STATUS: 'SPORT_PAGE_SET_LOADING_STATUS',
  SPORT_PAGE_SET_DATA: 'SPORT_PAGE_SET_DATA',
  SPORT_PAGE_SET_ERROR: 'SPORT_PAGE_SET_ERROR',
  // Event Group Page Actions
  EVENT_GROUP_PAGE_SET_LOADING_STATUS: 'EVENT_GROUP_PAGE_SET_LOADING_STATUS',
  EVENT_GROUP_PAGE_SET_DATA: 'EVENT_GROUP_PAGE_SET_DATA',
  EVENT_GROUP_PAGE_SET_ERROR: 'EVENT_GROUP_PAGE_SET_ERROR',
  // Betting Mkt Group Page Actions
  BETTING_MARKET_GROUP_PAGE_SET_LOADING_STATUS: 'BETTING_MARKET_GROUP_PAGE_SET_LOADING_STATUS',
  BETTING_MARKET_GROUP_PAGE_SET_ERROR: 'BETTING_MARKET_GROUP_PAGE_SET_ERROR',

  // Quick Bet Drawer Actions
  QUICK_BET_DRAWER_ADD_ONE_BET: 'QUICK_BET_DRAWER_ADD_ONE_BET',
  QUICK_BET_DRAWER_DELETE_ONE_BET: 'QUICK_BET_DRAWER_DELETE_ONE_BET',
  QUICK_BET_DRAWER_DELETE_MANY_BETS: 'QUICK_BET_DRAWER_DELETE_MANY_BETS',
  QUICK_BET_DRAWER_DELETE_ALL_BETS: 'QUICK_BET_DRAWER_DELETE_ALL_BETS',
  QUICK_BET_DRAWER_UPDATE_ONE_BET: 'QUICK_BET_DRAWER_UPDATE_ONE_BET',
  QUICK_BET_DRAWER_SHOW_BETSLIP_CONFIRMATION: 'QUICK_BET_DRAWER_SHOW_BETSLIP_CONFIRMATION',
  QUICK_BET_DRAWER_HIDE_BETSLIP_CONFIRMATION: 'QUICK_BET_DRAWER_HIDE_BETSLIP_CONFIRMATION',
  // Market Drawer Actions
  MARKET_DRAWER_ADD_UNCONFIRMED_BET: 'MARKET_DRAWER_ADD_UNCONFIRMED_BET',
  MARKET_DRAWER_DELETE_ONE_UNCONFIRMED_BET: 'MARKET_DRAWER_DELETE_ONE_UNCONFIRMED_BET',
  MARKET_DRAWER_DELETE_MANY_UNCONFIRMED_BETS: 'MARKET_DRAWER_DELETE_MANY_UNCONFIRMED_BETS',
  MARKET_DRAWER_DELETE_ALL_UNCONFIRMED_BETS: 'MARKET_DRAWER_DELETE_ALL_UNCONFIRMED_BETS',
  MARKET_DRAWER_UPDATE_ONE_UNCONFIRMED_BET: 'MARKET_DRAWER_UPDATE_ONE_UNCONFIRMED_BET',
}
