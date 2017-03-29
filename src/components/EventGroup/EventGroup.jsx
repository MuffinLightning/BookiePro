import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SportBanner } from '../Banners';
import SimpleBettingWidget from '../SimpleBettingWidget';
import { EventGroupPageActions } from '../../actions';
import Immutable from 'immutable';

const { getData } = EventGroupPageActions;

class EventGroup extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(getData(props.params.objectId));
  }

  render() {
    return (
      <div className='event-group-wrapper'>
        <SportBanner sport={ this.props.sport }/>
        <SimpleBettingWidget
          title={ this.props.eventGroup }
          events={ this.props.events }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const eventsById = state.getIn(['event', 'eventsById']);
  const eventIds = state.getIn(['eventGroupPage', 'eventIds']);
  const binnedOrderBooksByEvent = state.getIn(['eventGroupPage', 'binnedOrderBooksByEvent']);

  // For each event, generate data entry for the Simple Betting Widget
  const myEvents = eventsById.toArray()
    .filter((event) => eventIds.includes(event.get('id')))
    .map((event) => {
      const eventId = event.get('id');
      const offers = binnedOrderBooksByEvent.has(eventId)? binnedOrderBooksByEvent.get(eventId) : Immutable.List() ;
      return {
        id: eventId,
        name: event.get('name'),
        time: event.get('start_time'),
        offers: offers
      }
    });

  return {
    sport: state.getIn(['eventGroupPage', 'sportName']),
    eventGroup: state.getIn(['eventGroupPage', 'eventGroupName']),
    events: myEvents
  };
};

export default connect(mapStateToProps)(EventGroup);
