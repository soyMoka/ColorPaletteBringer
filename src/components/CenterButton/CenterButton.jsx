import './buttonStyle.css';


export const CenteredButton = ({buttonName, buttonAction}) => {
    const uselessButton = ()=>{console.log('non action asigned on the button');}
    return (
        
            <button className='m-auto buttonClass mv-4' onClick={buttonAction?buttonAction:uselessButton}>{buttonName?buttonName:'Botoncito'}</button>
        
    )
} 