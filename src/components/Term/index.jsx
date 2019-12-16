/* eslint-disable react/prop-types */
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Slider from 'rc-slider';
// import Tooltip from 'rc-tooltip';

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);
// const Handle = Slider.Handle;

class Term extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 16,
    };
  }

  onSliderChange = value => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div style={{ margin: 50 }}>
        <div>
          <h3>PLAZO</h3>
          <b>
            <h5>{value}</h5>
          </b>
        </div>
        <p>Basic Slider</p>
        <Slider
          min={3}
          max={24}
          value={value}
          onChange={this.onSliderChange}
          railStyle={{
            height: 2,
          }}
          handleStyle={{
            height: 28,
            width: 28,
            marginLeft: -14,
            marginTop: -14,
            backgroundColor: 'red',
            border: 0,
          }}
          trackStyle={{
            background: 'none',
          }}
        />
      </div>
    );
  }
}

// const Term = () => {
//   const wrapperStyle = { width: 400, margin: 50 };

//   const handle = props => {
//     const { value, dragging, index, ...restProps } = props;
//     return (
//       <Tooltip
//         prefixCls="rc-slider-tooltip"
//         overlay={value}
//         visible={dragging}
//         placement="top"
//         key={index}
//       >
//         <Handle value={value} {...restProps} />
//       </Tooltip>
//     );
//   };

//   return (
//     <>
//       <div>
//         <h3>PLAZO</h3>
//         <b>
//           <h5>16</h5>
//         </b>
//       </div>
//       <div style={wrapperStyle}>
//         <p>Slider with custom handle</p>
//         <Slider min={5000} max={50000} defaultValue={19500} />
//         <Range />
//       </div>
//     </>
//   );
// };

export default Term;
