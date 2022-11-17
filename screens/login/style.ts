import { StyleSheet } from "react-native";
import { Platform } from "react-native";


export const styles = StyleSheet.create({
    
    container: {
        fontFamily: 'sans-serif',
        justifyContent: 'center',
        backgroundColor: '#232323',
        paddingHorizontal: 15,
        height: '100%',
    },

    title: {
        color: '#FFFFF0',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2, 
        
    },

    text: {
        color: '#FFFFF0',
        fontSize: 15,
        marginBottom: 30,        
    },

    placeholder: {
        zIndex: 1,
        position: 'absolute',
        top: 8,
        left: 8,
        color: '#FFFFF0',
        fontSize: 12,
    },

    input: {
        backgroundColor:'#000000',
        color: '#FFFFF0',
        height: 70,
        fontSize: 15,
        marginBottom: 20,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 7
    },

    eye: {
        zIndex: 1,
        position: 'absolute',
        top: 20,
        right: 20
    },

    forgot: {
        color: '#FFFFF0',
        fontSize: 12,
        marginBottom: 18,
        textAlign: 'center'
        
    },
    
   button: {
        backgroundColor: '#FFFFF0',
        color: '#000000',
        fontSize: 16,
        height: 50,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
   
    account: {
        color: '#FFFFF0',
        fontSize: 12,
        marginTop: 30,
        textAlign: 'center'
        
    },
})
