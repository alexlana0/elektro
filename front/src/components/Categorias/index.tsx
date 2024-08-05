import React from 'react';
import { CategoriaDiv } from './style';

type Props = {
    imgSrc: string;
    title: string;
}

export function Categoria(props: Props){
    return(
        <CategoriaDiv>
            <img src={props.imgSrc} alt={props.title}/>
            <p>{props.title}</p>
        </CategoriaDiv>
    )
}