import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Hero } from '../../redux/heroes/state';
import { RootState } from '../../redux/rootState';
import * as styles from './heroSearch.less';

interface InjectedProps {
  heroes: Hero[];
}

interface State {
  foundHeroes: Hero[];
}

class HeroSearch extends React.Component<InjectedProps, State> {
  state: State = {
    foundHeroes: [],
  };

  render() {
    return (
      <div>
        <h4>Hero Search</h4>
        <input id={styles.searchBox} onKeyUp={event => this.filter(event.currentTarget.value)} />
        <div>
          {this.state.foundHeroes.map(this.renderSearchResultLink)}
        </div>
      </div>
    );
  }

  private renderSearchResultLink = (hero: Hero) => (
    <Link className={styles.searchResult} to={`/detail/${hero.id}`}>{hero.name}</Link>
  )

  private filter(name: string) {
    const nameInUpper = name.toUpperCase();
    this.setState({
      foundHeroes: this.props.heroes.filter(hero => hero.name.toUpperCase().includes(nameInUpper)),
    });
  }
}

export default connect(
  (state: RootState) => ({
    heroes: state.heroes,
  }),
)(HeroSearch);
