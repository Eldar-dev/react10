import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./counter.css";

const Counter = ({ inc, dec, rnd, counter }) => {
  return (
    <Fragment>
      <div>
        <h2>{counter}</h2>
        <button onClick={inc} className="green">
          INC
        </button>
        <button onClick={dec} className="red">
          DEC
        </button>
        <button onClick={rnd} className="blue">
          RND
        </button>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(actions.inc()),
    dec: () => dispatch(actions.dec()),
    rnd: () => dispatch(actions.rnd()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
