import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {Dispatch} from "redux";

interface Props {
  dispatch: Dispatch
}

const changePage = (dispatch: Dispatch) => () => dispatch({
  type: 'SOME_PAGE',
  payload: {
    query: {
      inPayload: 'theQuery'
    }
  },
  meta: {
    query: {
      inMeta: 'theQuery'
    }
  },
  query: {
    inRoot: 'theQuery'
  }
});

const App: React.FC<Props> = ({ dispatch }) => {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={changePage(dispatch)}>Change URL</button>
      </header>
    </div>
  );
};

export default connect(null, dispatch => ({ dispatch }))(App);
