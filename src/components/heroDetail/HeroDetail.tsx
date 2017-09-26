import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Dispatch } from 'redux';

import { heroesActions } from '../../redux/heroes/actions';
import { HeroType } from '../../redux/heroes/state';
import { ThunkAction } from '../../redux/reduxThunk';
import { RootState } from '../../redux/rootState';

interface State {
  hero?: HeroType;
}

interface InjectedProps {
  heroes: HeroType[];
  save: () => ThunkAction;
  edit: typeof heroesActions.edit;
}

type Props = InjectedProps & RouteComponentProps<{ heroId: number }>;

class HeroDetail extends React.Component<Props, State> {
  private inputRef: HTMLInputElement | null = null;

  constructor(props: Props) {
    super(props);
    const heroId = Number(this.props.match.params.heroId);
    const hero = this.props.heroes.find(hero => hero.id === heroId);
    this.state = { hero };
  }

  goBack = () => window.history.back();

  save = async () => {
    if (!this.inputRef) return;

    this.props.edit(this.state.hero!.id, this.inputRef.value);
    await this.props.save();
    this.goBack();
  }

  render() {
    const hero = this.state.hero;
    if (!hero) return null;

    return (
      <div>
        <h2>{hero.name} details!</h2>
        <div>
          <label>id: </label>{hero.id}</div>
        <div>
          <label>name: </label>
          <input type="text" placeholder="name" defaultValue={hero.name} ref={ref => this.inputRef = ref} />
        </div>
        <button onClick={this.goBack}> Back</button>
        <button onClick={this.save}> Save</button>
      </div>
    );
  }
}

export default connect(
  (state: RootState) => ({
    heroes: state.heroes,
  }),
  (dispatch: Dispatch<RootState>) => ({
    save: () => dispatch(heroesActions.save()),
    edit: (heroId: number, name: string) => dispatch(heroesActions.edit(heroId, name)),
  }),
)(HeroDetail);
