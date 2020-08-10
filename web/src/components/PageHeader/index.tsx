import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

// COM TYPESCRIPT
// os parâmetros externos que podem ser inseridos no componente é feito através da INTERFACE
// utiliza o React.FC<interface>
// insere PROPS como argumento da função
// acessa as propriedades adicionais com função ponto

interface PageHeaderProps {
    // isso é tipagem
    title: string;
    description?: string; //o ? implica que essa propriedade não é obrigatória
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <div>
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                    <img src={logoImg} alt="Logo"/>
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>
                    { props.description && <p>{props.description}</p>}

                    {props.children}
                </div>
            </header>
        </div>
    )
}

export default PageHeader