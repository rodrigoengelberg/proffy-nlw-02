import React, { useState } from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker';
import CollapsibleView from "@eliav2/react-native-collapsible-view"

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import { ItemValue } from '@react-native-picker/picker/typings/Picker';

import styles from './styles'

function TeacherList() {

    const [subject, setSubject] = useState<ItemValue>()

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
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={styles.inputHorario}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                        </View>

                        <TouchableOpacity style={styles.submitButton}>
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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default TeacherList