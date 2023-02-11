import './colorsStyle.css'

const ColorPalette = ({color})=>{
    const style = {
        backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
    }
    return (
        <div className="box" style={style} >
            <p>{color}</p>
        </div>
 
    )
}

export const ListPalette = ({colors})=>{
    console.log('llegamos hasat el componente')
    return (
        <section>

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
  
