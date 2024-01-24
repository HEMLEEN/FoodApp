import { CSSProperties } from 'react';
export const containerStyle:{ [key: string]: CSSProperties } = {
    appContainer: {
        display:'flex',
        flexDirection:'row',
        width: '100%',
        height: '100vh',
        backgroundColor: 'green',
    },
    appContainerLeft:{
        display:'flex',
        width: '50%',
        height: '100vh',
        backgroundColor: 'blue',   
    },
    appContainerRight:{
        display:'flex',
        width: '50%',
        height: '100vh',
        backgroundColor: 'orange',  
    }
};