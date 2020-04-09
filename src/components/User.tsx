import React from 'react';

interface Props {
  username: string;
}

export default function User(props: Props) {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The User Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <p>User Name: {props.username}</p>
        </div>
      </div>
    </div>
  );
}
