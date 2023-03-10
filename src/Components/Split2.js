import React from "react";

export default function Split2(props) {
  return (
    <div>
      <div className="container px-4 aboutUs">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 justify-content-center aboutImg"></div>
          </div>
          <div className="col">
            <div className="p-3">
              <h1> {props.fact1}</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda voluptas consectetur porro necessitatibus, atque rem
                animi asperiores sapiente, eveniet esse, voluptate placeat qui
                debitis?Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Assumenda voluptas consectetur porro necessitatibus, atque
                rem animi asperiores sapiente, eveniet esse, voluptate placeat
                qui debitis?atque rem animi asperiores sapiente, eveniet esse,
                voluptate placeat qui debitis?
              </p>
            </div>
            <div className="p-3">
              <h1> {props.fact2}</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda voluptas consectetur porro necessitatibus, atque rem
                animi asperiores sapiente, eveniet esse, voluptate placeat qui
                debitis?Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Assumenda voluptas consectetur porro necessitatibus, atque
                rem animi asperiores sapiente, eveniet esse, voluptate placeat
                qui debitis?atque rem animi asperiores sapiente, eveniet esse,
                voluptate placeat qui debitis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
