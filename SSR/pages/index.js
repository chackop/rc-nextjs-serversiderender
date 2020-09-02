import React from 'react';
import { bindActionCreators } from 'redux';
import { initStore, initialCards, addItem, wrapper } from '../store';
import { connect } from 'react-redux';
import './index.css';
import Card from './Card';

class Index extends React.Component {
  static async getInitialProps({ store }) {
    store.dispatch(initialCards());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/static/logo.png" className="static-logo" alt="logo" />
        </header>
        <div className="Grid">
          {this.props.cards &&
            this.props.cards.map((card) => <Card key={card.id} />)}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialCards: bindActionCreators(initialCards, dispatch),
    addItem: bindActionCreators(addItem, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default wrapper.withRedux(
  connect(mapStateToProps, mapDispatchToProps)(Index)
);

// export default wrapper.withRedux(
//   initStore,
//   mapStateToProps,
//   mapDispatchToProps
// )(Index);
