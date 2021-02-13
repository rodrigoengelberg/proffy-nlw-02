import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image, View, Text } from 'react-native'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItem(){
    return (
        <View style={styles.container} >
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://avatars.githubusercontent.com/u/2336715?s=460&u=8be295f94b550e46f27d9260bf8df76669b7cdff&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Rodrigo Engelberg</Text>
                    <Text style={styles.subject}>Física</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Entusiasta das melhores tecnologias e física avançada.
                {'\n'}{'\n'}
                Apaixonado por música, filmes, games e aviação.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora  {'   '}
                    <Text style={styles.priceValue}>R$ 120,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.favoriteButton, styles.favorited]}>
                        {/*<Image source={heartOutlineIcon} />*/}
                        <Image source={unfavoriteIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entre em contato</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem