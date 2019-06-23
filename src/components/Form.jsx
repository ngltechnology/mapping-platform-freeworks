import React from "react"
import { connect } from "react-redux"
import TextField from "@material-ui/core/TextField"
import { form_changed } from "../actions/authentication.js";


const mapDispatchToProps = dispatch => ({
	handleChange: e => dispatch(form_changed(e))
})

export const StepFirst = connect(
	null,
	mapDispatchToProps
)(props => {
    return(
      <div>
        <TextField
          variant="outlined"
          label="Name"
          onChange={props.handleChange}
          helperText="フルネームで入力"
          margin="normal"
          name="name"
          fullWidth
          required
        />
        <TextField
          name="number"
          variant="outlined"
          label="電話番号"
          type="number"
          onChange={props.handleChange}
          helperText="例：09012345678"
          margin="normal"
          fullWidth
          required
        />
        <TextField
            name="address1"
            variant="outlined"
            label="都道府県市町村区"
            onChange={props.handleChange}
            helperText="東京都渋谷区渋谷"
            margin="normal"
            fullWidth
            required
          />
          <TextField
              name="address2"
              variant="outlined"
              label="詳細の住所"
              onChange={props.handleChange}
              margin="normal"
              fullWidth
              required
          />
      </div>
    )
})

export const StepSecond = connect(
    null,
    mapDispatchToProps
)(
    ({handleChange}) => {
	return(
    <div>
      <TextField
        name="a"
        variant="outlined"
        label="Name"
        onChange={handleChange}
        helperText="フルネームで入力"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        name="b"
        variant="outlined"
        label="Name"
        onChange={handleChange}
        helperText="フルネームで入力"
        margin="normal"
        fullWidth
        required
      />
    </div>
	)
})

export const StepThird = connect(
	null,
	mapDispatchToProps
)(({handleChange}) => {
	return(
    <div>
      <TextField
        name="bankname"
        variant="outlined"
        label="銀行名"
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        name="banklocalname"
        variant="outlined"
        label="支店名"
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        name="bankNumber"
        type="number"
        variant="outlined"
        label="口座番号"
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
		</div>
	)
})

