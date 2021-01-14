const style =
{
    headerBorder:
    {
        borderBottom:'2px solid #00000029',
        boxShadow: '0px 3px 6px #00000070',
        
    },
    headerLogo:
    {
        height: '10vh', 
        width: '100vw', 
        backgroundColor: 'white',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo:
    {   
        width: '20vw',
        height: '10vh',
        borderRight: '1px solid #D3D3D3',
        margin: 'auto 0px 0px 0px 10px',
        cursor:'pointer'
    },
    imageLogo:
    {
        width: '20vw',
        height: '10vh',
        display: 'flex',
        flexDirection: 'row',
        margin: 'Auto 0px',
        borderLeft:'1px solid #D3D3D3'
    },
    image:
    {
        width: '2.5vw',
        height: '5vh',
        margin:'auto 10px',
        borderRadius: '50vh',
        borderLeft:'1px solid gray' 
    },
    direction:
    {
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        flexDirection: 'column'
    },
    directionArrow:
    {
        cursor:'pointer',
        padding:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        flexDirection: 'column',
        
    },
    text:
    {
        fontWeight:'Bold',
        fontSize: '2.5vh',
    },
    lightText:
    {
        color: '#808080',
        fontSize: '2vh'
    }


} 
export default style;