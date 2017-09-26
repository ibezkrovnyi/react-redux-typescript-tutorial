import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { HeroType } from '../../redux/heroes/state';
import { RootState } from '../../redux/rootState';
import * as styles from './dashboard.less';

interface InjectedProps {
  heroes: HeroType[];
}

class Dashboard extends React.Component<InjectedProps> {
  renderHero(hero: HeroType) {
    return (
      <Link key={hero.id} to={`/detail/${hero.id}`} className={styles.link}>
        <div className={styles.module}>
          <h4 className={styles.heroName}>{hero.name}</h4>
        </div>
      </Link>
    );
  }

  // TODO: implement HeroSearch
  render() {
    return (
      <div className={styles.dashboard}>
        <h3 className={styles.title}>Top Heroes</h3>
        <div className={styles.grid}>
          {this.props.heroes.map(this.renderHero)}
        </div>
        {/*<HeroSearch />*/}
      </div>
    );
  }
}

export default connect(
  (state: RootState) => ({
    heroes: state.heroes.slice(1, 5),
  }),
)(Dashboard);
