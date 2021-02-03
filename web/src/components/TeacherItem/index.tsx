import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars.githubusercontent.com/u/2336715?s=460&u=8be295f94b550e46f27d9260bf8df76669b7cdff&v=4" alt="Rodrigo Engelberg" />
                <div>
                    <strong>Rodrigo Engelberg</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de física avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora:
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem