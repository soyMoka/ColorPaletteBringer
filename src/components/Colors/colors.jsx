import './colorsStyle.css'

function valueToHex(c) {
    var hex = c.toString(16);
    return hex
  }
  
  function rgbToHex(r, g, b) {
    return(valueToHex(r) + valueToHex(g) + valueToHex(b));
  }




const ColorPalette = ({color})=>{
    const style = {
        backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
    }
    return (
        <div className="border">
            <div className="color color-border" style={style} >
            </div>
            <p className='color-palette--text'>hexCode</p>
            <p className="color-palette--textCode">#{rgbToHex(color[0],color[1],color[2])}</p>
        </div>
 
    )
}

export const ListPalette = ({colors})=>{

    
    return (
        <section className="colors-container">

            {colors.map((color, i) => {
                return(
                    <ColorPalette 
                        key={i+color}
                        color={color}
                    />
                )
            })}

        </section>
        )
}

export default ColorPalette
  
