import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({ name, abc, children, favoriteNumber }) => {
//   // const { name, abc, children } = props;

//   return (
//     <>
//       <div>
//         해당 컴포넌트에서 name이라는 prop를 {name} / {abc} 하도록 설정.
//         <br />
//         children 값은 : {children}
//         <br />
//         가장 좋아하는 숫자는 {favoriteNumber} 이다.
//       </div>

//     </>
//   );
// };

class MyComponent extends Component {
  static defaultProps = {
    name: '<name props 자리>',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        안녕, 내이름은 {name}이야. <br />
        children 값은 {children} 이고
        <br />
        가장 좋아하는 숫자는 {favoriteNumber} 이다.
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: '<name props 자리>',
//   abc: '<abc props 자리>',
//   children: '<children 기본값 자리>',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// };

export default MyComponent;
