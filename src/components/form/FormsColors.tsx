import { colorPalette } from '../types/types';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import Inputs from '../input/Inputs';
import './FormsColors.css'

function Forms() {
const [colorPalette, setColorPalette] = useState<colorPalette>();
function addPropiety(event: ChangeEvent<HTMLInputElement>){
    let newColor: colorPalette ={
        ...colorPalette,
       [event.target.id]: event.target.value,
    }
setColorPalette(newColor); 


}
  return (
    <form>
        <Inputs type='text' name='title-palette' required={true} max={20} min={1} onChange={addPropiety}  value={colorPalette? colorPalette.title : ""} id='title'/>
        <Inputs type='color' name='color-one-palette' required={true} max={20} min={1} onChange={addPropiety}  value={colorPalette? colorPalette.color_one :""} id='color_one'/>
        <Inputs type='color' name='color-two-palette' required={true} max={20} min={1} onChange={addPropiety}  value={colorPalette? colorPalette.color_two :""} id='color_two'/>
        <Inputs type='color' name='color-three-palette' required={true} max={20} min={1} onChange={addPropiety}  value={colorPalette? colorPalette.color_three :""} id='color_three'/>
        <Inputs type='color' name='color-four-palette' required={true} max={20} min={1} onChange={addPropiety}  value={colorPalette? colorPalette.color_four :""} id='color_four'/>
        <button type="submit">Guardar</button>
    </form>
  )
}

export default Forms;