import React from 'react';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg';
import { ReactComponent as AvisosIcon } from '../../assets/icons/avisos.svg';
import { ReactComponent as PerfilIcon } from '../../assets/icons/perfil.svg';
import { BottomBarDiv, HomeItemDiv, ChatItemDiv, AvisosItemDiv, PerfilItemDiv } from "./style"; 

// Define o componente BottomBar
export default function BottomBar() {
    return (
        <BottomBarDiv>
            <HomeItemDiv>
                <HomeIcon width={24} height={24} />
                <p>Home</p>
            </HomeItemDiv>
            
            <ChatItemDiv>
                <ChatIcon width={24} height={24} />
                <p>Chat</p>
            </ChatItemDiv>

            <AvisosItemDiv>
                <AvisosIcon width={24} height={24} />
                <p>Avisos</p>
            </AvisosItemDiv>

            <PerfilItemDiv>
                <PerfilIcon width={24} height={24} />
                <p>Perfil</p>
            </PerfilItemDiv>
        </BottomBarDiv>
    );
};