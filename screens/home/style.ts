import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container: {
        fontFamily: 'sans-serif',
        paddingTop: 40,
        backgroundColor: '#232323',
        paddingHorizontal: 15,
        height: '100%',
    },

    certificate: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#fffff0',
        width: 150,
        height: 45,
        borderRadius: 7, 
        justifyContent: 'center',
        marginLeft: 15,
        
    },

    textCertificate: {
        color: "#fffff0",
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  

    },

    buttonHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    categoriaTitulo: {
        color: '#FFFFF0',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
        width: '30%',
        
    },

    categoriaLink: {
        color: '#FFFFF0',
        fontSize: 16,
        marginBottom: 2,
        width: '30%',
        textDecorationLine: 'underline',
        
    },

    categoriaContainer: {
        marginTop: '10',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '115%', 

    }
})