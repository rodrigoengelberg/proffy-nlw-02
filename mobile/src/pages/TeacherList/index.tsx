import React, { useState } from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { TextInputMask } from 'react-native-masked-text'
import { ItemValue } from '@react-native-picker/picker/typings/Picker'
import CollapsibleView from '@eliav2/react-native-collapsible-view'
import AsyncStorage from '@react-native-async-storage/async-storage'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'
import api from '../../service/api'

function TeacherList() {

    const [subject, setSubject] = useState<ItemValue>()
    const [week_day, setWeekDay] = useState<ItemValue>()
    const [time, setTime] = useState('')

    const [teachers, setTeachers] = useState([])
    const [favorites, setFavorites] = useState<number[]>([])

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response)
                
                const favoritedTeachersID = favoritedTeachers.map((teacher: Teacher) => teacher.id)

                setFavorites(favoritedTeachersID)
            }
        })
    }

    async function handlerFilterSubmit() {

        loadFavorites()

        await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        }).then(response => {
            setTeachers(response.data)
        })
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis">

                <CollapsibleView
                    style={styles.inputFilter}
                    title={<Text style={styles.labelFilter}>Filtrar por dia, hora e matéria</Text>}
                    initExpanded = {false}
                    arrowStyling={{ size: 20, rounded: true, thickness: 5, color: "#04D361"}}
                    >
                    
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>

                        <TouchableOpacity style={styles.input}>
                            <Picker
                                selectedValue={subject}
                                style={styles.picker}
                                dropdownIconColor="#c1bccc"
                                onValueChange={(itemValue) => setSubject(itemValue)}
                                >
                                <Picker.Item label="Artes" value="Artes" />
                                <Picker.Item label="Biologia" value="Biologia" />
                                <Picker.Item label="Ciências" value="Ciências" />
                                <Picker.Item label="Educação física" value="Educação física" />
                                <Picker.Item label="Física" value="Física" />
                                <Picker.Item label="Geografia" value="Geografia" />
                                <Picker.Item label="História" value="História" />
                                <Picker.Item label="Matemática" value="Matemática" />
                                <Picker.Item label="Português" value="Português" />
                                <Picker.Item label="Química" value="Química" />
                            </Picker>
                        </TouchableOpacity>

                        <View style={styles.inputGroup}>
                            
                            <View style={styles.inputDiaDaSemana}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TouchableOpacity style={styles.input}>
                                    <Picker
                                        selectedValue={week_day}
                                        style={styles.picker}
                                        dropdownIconColor="#c1bccc"
                                        onValueChange={(itemValue) => setWeekDay(itemValue)}
                                        >
                                        <Picker.Item label="Domingo" value="0" />
                                        <Picker.Item label="Segunda-feira" value="1" />
                                        <Picker.Item label="Terça-feira" value="2" />
                                        <Picker.Item label="Quarta-feira" value="3" />
                                        <Picker.Item label="Quinta-feira" value="4" />
                                        <Picker.Item label="Sexta-feira" value="5" />
                                        <Picker.Item label="Sábado" value="6" />
                                    </Picker>
                                </TouchableOpacity>
                                
                            </View>

                            <View style={styles.inputHorario}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInputMask
                                    style={styles.input}
                                    type={'datetime'}
                                    options={{
                                        format: 'HH:mm'
                                    }}
                                    value={time}
                                    placeholder="HH:mm"
                                    placeholderTextColor="#c1bccc"
                                    onChangeText={text => setTime(text)}
                                />
                            </View>

                        </View>

                        <TouchableOpacity onPress={handlerFilterSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Ver resultados</Text>
                        </TouchableOpacity>
                    </View>
                </CollapsibleView>

            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />))}

            </ScrollView>
        </View>
    )
}

export default TeacherList