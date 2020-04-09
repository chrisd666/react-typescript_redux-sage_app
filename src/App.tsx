import React from 'react';
import Main from './components/Main';
import User from './components/User';
import { connect } from 'react-redux';

interface Props {
  user: { name: string },
  setName: (name: string) => {}
}


const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    math: state.math
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setName: (name: any) =>{
       dispatch({ type: 'SET_NAME', payload: name })
    }
  }
}


function App(props: Props) {
  return (
    <div className="App container">
      <Main changeUsername={() => props.setName('Kevin')} />
      <User username={props.user.name} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

