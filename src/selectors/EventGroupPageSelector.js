import CommonSelector from './CommonSelector';
import { createSelector } from 'reselect';
import { DateUtils } from '../utility';
import Immutable from 'immutable';
import { Config } from '../constants';

const {
  getBettingMarketsById,
  getSportsById,
  getEventGroupsById,
  getActiveEventsByEventGroupId,
  getSimpleBettingWidgetBinnedOrderBooksByEventId
} = CommonSelector;

const getRelatedEventGroupId = (state, ownProps) => ownProps.params.objectId;

const getEventGroup = createSelector(
  [
    getEventGroupsById,
    getRelatedEventGroupId
  ],
  (eventGroupsById, relatedEventGroupId) => {
    return eventGroupsById.get(relatedEventGroupId);
  }
);

const getEventGroupName = createSelector(
  [
    getRelatedEventGroupId,
    getEventGroupsById
  ],
  (eventGroupId, eventGroupsById) => {
    return eventGroupsById.getIn([eventGroupId, 'name']) || '';
  }
)

const getSportName = createSelector(
  [
    getRelatedEventGroupId,
    getEventGroupsById,
    getSportsById
  ],
  (eventGroupId, eventGroupsById, sportsById) => {
    const sportId = eventGroupsById.getIn([eventGroupId, 'sport_id']);
    return sportsById.getIn([sportId, 'name']) || '';
  }
)

const getEventGroupPageLoadingStatusByEventGroupId = (state) => state.getIn(['eventGroupPage', 'loadingStatusByEventGroupId']);
const getEventGroupPageLoadingStatus = createSelector(
  [
    getRelatedEventGroupId,
    getEventGroupPageLoadingStatusByEventGroupId
  ],
  (relatedEventGroupId, eventGroupPageLoadingStatusByEventGroupId) => {
    return eventGroupPageLoadingStatusByEventGroupId.get(relatedEventGroupId)
  }
)

// Event group page data is in the following format
// [
//   {
//     "event_id": "1.103.7",
//     "event_name": "Cincinnati Bengals vs New York Jets",
//     "time": 1497428288000,
//     "isLiveMarket": true,
//     "offers": [
//       {
//         "betting_market_id": "1.105.37",
//         "back": [
//           {
//             "odds": 4.9,
//             "price": 0.63
//           },
//           {
//             "odds": 3.9,
//             "price": 0.46
//           }
//         ],
//         "lay": [
//           {
//             "odds": 4.13,
//             "price": 0.8
//           },
//           {
//             "odds": 3.6,
//             "price": 0.72
//           }
//         ],
//       },
//       ...
//     ],
//      "moneyline": "1.104.19",
//    },
//    ...
// ]

const getEventGroupPageData = createSelector(
  [
    getRelatedEventGroupId,
    getEventGroupPageLoadingStatus,
    getActiveEventsByEventGroupId,
    getBettingMarketsById,
    getSimpleBettingWidgetBinnedOrderBooksByEventId
  ],
  (relatedEventGroupId, eventGroupPageLoadingStatus, activeEventsByEventGroupId, bettingMarketsById, simpleBettingWidgetBinnedOrderBooksByEventId) => {
    // Process all sports data only if the necessary data has been finished loaded
    // NOTE if you do not want to see incremental update, re-enable this if clause
    // if (eventGroupPageLoadingStatus !== LoadingStatus.DONE) {
    //   return Immutable.List();
    // }

    // Create event nodes (= event group page data) based on active events
    const activeEvents = activeEventsByEventGroupId.get(relatedEventGroupId) || Immutable.List();
    const eventGroupPageData = activeEvents.map((event) => {
      const offers = simpleBettingWidgetBinnedOrderBooksByEventId.get(event.get('id')) || Immutable.List();
      // Find the MoneyLine Betting Market Group of this event
      const moneylineBettingMarketId = offers.getIn(['0', 'betting_market_id']);
      const moneylineBettingMarketGroupId = bettingMarketsById.getIn([moneylineBettingMarketId, 'group_id']);
      // Create event node
      return Immutable.fromJS({
        event_id: event.get('id'),
        event_name: event.get('name'),
        time: DateUtils.getLocalDate(event.get('start_time')),
        isLiveMarket: event.get('is_live_market'),
        eventStatus: event.get('status').toLowerCase(),
        offers,
        bettingMarketGroupId: moneylineBettingMarketGroupId,
      });
    }).filter( eventNode => {
      // Feature check, is Moneyline filter enabled/disabled?
      let moneylineFilterEnabled = Config.features.moneylineFilter;
      return moneylineFilterEnabled ? eventNode.get('bettingMarketGroupId') !== undefined : eventNode;
    });

    return eventGroupPageData;
  }
)

const EventGroupPageSelector = {
  getEventGroup,
  getEventGroupPageData,
  getEventGroupName,
  getSportName
}

export default EventGroupPageSelector;
