const style = 
{
    selectedBackground:{
        backgroundColor:'#e6f2ff',
        borderRight:'3px solid #3767bb'
        
    },
    option:
    {
        padding:15,
        display:'flex',
        flexDirection:'row',
        cursor:'pointer',
        position:'relative' ,
        
    },
    lastOption:{
        backgroundImage: 'linear-gradient(to right, lightblue , blue)',
        padding:15,
        display:'flex',
        flexDirection:'row',
        cursor:'pointer',  
        position:'relative'
    },
    icon:
    {
        padding:5,
        height:'0.5vh',
        width:'0.5vw'
    },
    text:
    {
        fontSize:'1.3vw',
        fontWeight:'bold',
        textAlign:'center',
        margin:'auto 1vw',
        fontFamily:'Open Sans',
        display:'flex',
        flexGrow:1
        
    },
    plusIcon:
    {
        padding:5,
        height:'1vh',
        width:'1vw',
        cursor:'pointer',
        display:'flex',
        justifyContent:'flex-end'
       
    },
    dropdown:
    {
        display:'flex',
        justifyContent:'flex-end'
    },
    iconPosition:
    {
        position:"absolute",
        right:15,
        top:'35%',
        margin:0,
        padding:0, 
    }
}
export default style;