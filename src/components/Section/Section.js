// import React, { Component } from "react";
import PropTypes from "prop-types";

function Section({ title = "", children }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;

// class Section extends Component {
//   static defaultProps = { title: "" };
//   static propTypes = {
//     title: PropTypes.string,
//   };

//   render() {
//     const title = this.props.title;
//     return <section>{title && <h2>{title}</h2>}</section>;
//   }
// }

// export default Section;
