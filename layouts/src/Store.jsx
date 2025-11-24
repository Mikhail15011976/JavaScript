import React, { Component } from 'react';
import IconSwitch from './components/IconSwitch';
import CardsView from './components/CardsView';
import ListView from './components/ListView';
import products from './products.json';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'cards',
    };
  }

  handleSwitch = () => {
    this.setState(prevState => ({
      view: prevState.view === 'cards' ? 'list' : 'cards'
    }));
  }

  render() {
    const { view } = this.state;
    const icon = view === 'cards' ? 'view_list' : 'view_module';

    return (
      <div>
        <IconSwitch icon={icon} onSwitch={this.handleSwitch} />
        {view === 'cards' ? <CardsView products={products} /> : <ListView items={products} />}
      </div>
    );
  }
}

export default Store;
