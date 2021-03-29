import { FormControlLabel, Radio, RadioGroup, Typography } from "@material-ui/core";

function RadioCreatePokemon({ value, onChange, ariaLabel, name, label }) {
  return (
    <>
      <Typography variant="span" component="span" style={{ fontSize: '1.8rem', color: 'gray'}}>{label}</Typography>
      <RadioGroup style={{ borderBottom: '1px solid #ccc'}} aria-label={ariaLabel} name={name} value={value} onChange={onChange}>
        <FormControlLabel style={{ fontSize: '1rem', color: 'gray'}} value={true} control={<Radio color="primary"  size="small"/>} label='True' />
        <FormControlLabel style={{ fontSize: '1rem', color: 'gray'}} value={false} control={<Radio color="primary"  size="small"/>} label='False' />
      </RadioGroup>
    </>
  )
}

export default RadioCreatePokemon;