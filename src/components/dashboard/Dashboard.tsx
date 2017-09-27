import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Hero } from '../../redux/heroes/state';
import { RootState } from '../../redux/rootState';
import HeroSearch from '../heroSearch/HeroSearch';
import * as styles from './dashboard.less';

interface InjectedProps {
  heroes: Hero[];
}

class Dashboard extends React.Component<InjectedProps> {
  render() {
    return (
      <div className={styles.dashboard}>
        <h3 className={styles.title}>Top Heroes</h3>
        <div className={styles.grid}>
          {this.props.heroes.map(this.renderHero)}
        </div>
        <HeroSearch />
      </div>
    );
  }

  private renderHero(hero: Hero) {
    return (
      <Link key={hero.id} to={`/detail/${hero.id}`} className={styles.link}>
        <div className={styles.module}>
          <h4 className={styles.heroName}>{hero.name}</h4>
        </div>
      </Link>
    );
  }
}

export default connect(
  (state: RootState) => ({
    heroes: state.heroes.slice(1, 5),
  }),
)(Dashboard);
