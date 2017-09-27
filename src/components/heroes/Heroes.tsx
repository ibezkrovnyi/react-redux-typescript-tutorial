import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import { heroesActions } from '../../redux/heroes/actions';
import { Hero } from '../../redux/heroes/state';
import { RootState } from '../../redux/rootState';
import * as styles from './heroes.less';

interface InjectedProps {
  add: typeof heroesActions.add;
  delete: typeof heroesActions.delete;
  heroes: Hero[];
}

interface State {
  selected: Hero | null;
}

class Heroes extends React.Component<InjectedProps, State> {
  state: State = {
    selected: null,
  };

  private inputElement: HTMLInputElement;

  componentWillReceiveProps(nextProps: InjectedProps) {
    if (this.state.selected && !nextProps.heroes.find(hero => hero.id === this.state.selected!.id)) {
      this.setState({ selected: null });
    }
  }

  render() {
    return (
      <div>
        <h2>My Heroes</h2>
        <div>
          <label>Hero name:</label>
          <input ref={el => (this.inputElement = el!)} />
          <button className={styles.button} onClick={this.onAddClick}>
            Add
          </button>
        </div>
        <ul className={styles.heroes}>
          {this.props.heroes.map(this.renderHeroListItem)}
        </ul>
        {this.renderSelected()}
      </div>
    );
  }

  private renderHeroListItem = (hero: Hero) => (
    <li
      onClick={() => this.setState({ selected: hero })}
      className={this.state.selected === hero ? styles.selected : ''}
    >
      <span className={styles.badge}>{hero.id}</span>
      <span>{hero.name}</span>
      <button className={`${styles.button} ${styles.delete}`} onClick={e => this.onDeleteClick(e, hero.id)}>x</button>
    </li>
  )

  private onAddClick = () => {
    const name = this.inputElement.value.trim();
    if (!name) return;
    this.props.add(name);
    this.inputElement.value = '';
    this.setState({ selected: null });
  }

  private renderSelected = () => {
    if (!this.state.selected) return null;

    const hero = this.state.selected;
    return (
      <div>
        <h2>{hero.name.toUpperCase()} is my hero</h2>
        <Link to={`/detail/${hero.id}`} className={styles.button}>View Details</Link>
      </div>
    );
  }

  private onDeleteClick = (event: React.SyntheticEvent<{}>, id: number) => {
    this.props.delete(id);
    event.stopPropagation();
  }
}

export default connect(
  (state: RootState) => ({
    heroes: state.heroes,
  }),
  (dispatch: Dispatch<RootState>) => bindActionCreators({
    add: heroesActions.add,
    delete: heroesActions.delete,
  }, dispatch),
)(Heroes);
