import React, { useState } from 'react'
import { TouchableOpacity, Image, View, Text, Linking } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'
import api from '../../service/api'

export interface Teacher {
    id: number,
    name: string,
    subject: string,
    avatar: string,
    bio: string,
    whatsapp: string,
    cost: number
}

interface TeacherItemProps {
    teacher: Teacher
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {

    const [isFavorited, setIsFavorited] = useState(favorited)

    function handleLinkToWhatsApp() {
        api.post('connections', {
            user_id: teacher.id
        })

        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}&text=Olá, gostaria de agendar uma aula com você.`)
    }

    async function handleToggleFavorite() {
        
        const favorites = await AsyncStorage.getItem('favorites')

        let favoritesArray = []

        if (favorites)
            favoritesArray = JSON.parse(favorites)
        
        if (isFavorited) {
            const favoritedIndex = favoritesArray.findIndex((teacherItem: Teacher) => teacherItem.id === teacher.id)
            favoritesArray.splice(favoritedIndex, 1)
            setIsFavorited(false)
        } else {
            favoritesArray.push(teacher)
            setIsFavorited(true)
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }

    return (
        <View style={styles.container} >
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri: teacher.avatar}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora  {'   '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={handleToggleFavorite} style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}>
                        { isFavorited ? <Image source={unfavoriteIcon}/> : <Image source={heartOutlineIcon}/>}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLinkToWhatsApp} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entre em contato</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem