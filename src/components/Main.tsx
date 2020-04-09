import React from 'react';

interface Props {
  changeUsername: (newName: string) => {};
}

export default function Main() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The Main Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button
            className="btn btn-primary"
            // onClick={() => changeUsername('Anna')}
          >
            Change the Username
          </button>
        </div>
      </div>
    </div>
  );
}