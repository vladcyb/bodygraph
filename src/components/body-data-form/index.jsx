import React                        from 'react';
import { TextField, RaisedButton }  from 'material-ui';

const inputStyles = {
  cursor: 'pointer',
  position: 'absolute',
  top: '0',
  bottom: '0',
  right: '0',
  left: '0',
  width: '100%',
  opacity: '0'
};

class BodyDataForm extends React.Component {
  render() {
    const p = this.props;
    const {
      fields: {weight, bodyfat, image},
      handleSubmit,
    } = p;
    return <section className="m-register">
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            type="number"
            hintText="Weight"
            errorText={weight.touched && weight.error}
            {...weight}
          />
        </div>
        <div>
          <TextField
            type="number"
            hintText="Body Fat Percentage"
            errorText={bodyfat.touched && bodyfat.error}
            {...bodyfat}
          />
        </div>
        <div>
          <RaisedButton
            primary={true}
            label="Submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </section>
  }
}

export default BodyDataForm;
