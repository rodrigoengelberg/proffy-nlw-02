import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },

    teacherList: {
        marginTop: -40
    },

    inputFilter: {
        width: '100%',
        justifyContent: 'space-between',
        paddingBottom: 10,
        borderWidth: 0,
        marginTop: 0,
        marginBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#9871f5"
    },

    searchForm: {
        marginTop: 20,
        marginBottom: 20
    },

    labelFilter: {
        justifyContent: 'space-between',
        marginLeft: 20,
        fontSize: 16,
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputDiaDaSemana: {
        width: '60%'
    },

    inputHorario: {
        paddingLeft: 10,
        width: '40%'
    },

    picker: {
        color: '#c1bccc',
    },

    input: {
        backgroundColor: '#FFF',
        color: '#c1bccc',
        height: 54,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    submitButton: {
        width: '100%',
        backgroundColor: '#04d361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16
    }
})

export default styles