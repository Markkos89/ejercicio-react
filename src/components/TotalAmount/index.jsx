/* eslint-disable react/prop-types */
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
// import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);
// const Handle = Slider.Handle;

class TotalAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 19500,
    };
  }

  handleOnSliderChange = value => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div style={{ margin: 50 }}>
        <table>
          <tr>
            <td>
              <h3>MONTO TOTAL</h3>
            </td>
            <td>
              <b>
                <h5>${value}</h5>
              </b>
            </td>
          </tr>
        </table>
        <p>Basic Slider</p>
        <Slider
          min={5000}
          max={50000}
          value={value}
          onChange={this.handleOnSliderChange}
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
            background: 'black',
          }}
        />
      </div>
    );
  }
}
// const TotalAmount = () => {
//   const [value, setValue] = useState(0)
//   const style = { width: 600, margin: 50 };

//   const onSliderChange = value => {
//     setValue(value)
//   };

//   return (
//     <div>
//       <div>
//         <h3>MONTO TOTAL</h3>
//         <b>
//           <h5>$19.500</h5>
//         </b>
//       </div>
//       <div style={{ margin: 50 }}>
//         <p>{value}</p>
//         <p>Basic Slider</p>
//         <Slider
//           min={0}
//           max={120}
//           value={value}
//           onChange={onSliderChange}
//           railStyle={{
//             height: 2
//           }}
//           handleStyle={{
//             height: 28,
//             width: 28,
//             marginLeft: -14,
//             marginTop: -14,
//             backgroundColor: "red",
//             border: 0
//           }}
//           trackStyle={{
//             background: "none"
//           }}
//         />
//       </div>
//     </div>
//   );
// };

export default TotalAmount;
