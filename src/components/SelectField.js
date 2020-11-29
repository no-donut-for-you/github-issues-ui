import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class SelectField extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  onChange = ({target: {value}}) => {
    const {name} = this.props;

    let attributes = {};

    attributes[name] = value;

    this.props.onChange(attributes);
  }

  renderMenuItems = items => {
    if (items) {
      const menuItems = items.map(item => {
        return (
          <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
        );
      });

      return menuItems;
    }

    return null;
  }

  render() {
    return (
      <React.Fragment>
        <TextField
          select
          fullWidth
          variant="outlined"
          id={this.props.id}
          className="input__select"
          name={this.props.name}
          value={this.props.value}
          label={this.props.label}
          onChange={this.onChange}
        >
          {this.renderMenuItems(this.props.items)}
        </TextField>
      </ React.Fragment>
    );
  }
}

export default SelectField;
