import React from 'react';
import { UserChildren, UserClass, UserFunction } from './user';
import Button from './components/button/Button';


export default class App extends React.Component {
  state = {
    users: [
      { name: 'Ivan', years: 30 },
      { name: 'Marko', years: 35 },
      { name: 'Ana', years: 25 },
    ],
    children: 'A hobi mi je plivanje.',
  };

  changeState = (event) => {
    const { users } = this.state;
    users[0].years =  this.state.users[0].years + 1;
    users[1].years =  this.state.users[1].years + 1;
    users[2].years =  this.state.users[2].years + 1;

    this.setState({
        users,
    });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <UserFunction 
          name={users[0].name} 
          years={users[0].years} 
          onButtonClick={this.changeState} />
        <UserFunction name={users[1].name} years={users[1].years} />
        <UserClass name={users[2].name} years={users[2].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          A hobi mi je plivanje.
        </UserChildren>
        <Button 
            type="button"
            change={this.changeState}
        >
           Dodaj godinu
          </Button>
      </div>
    );
  }
}
