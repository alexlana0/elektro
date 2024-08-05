import React from 'react';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { NavBarDiv, MenuDiv, SearchBarDiv, CartDiv, SearchInput } from "./style";

export default function NavBar() {
    return (
        <NavBarDiv>
            <MenuDiv>
                <MenuIcon width={24} height={24} />
            </MenuDiv>
            <SearchBarDiv>
                <SearchInput type="text" placeholder="Encontre no Elektro" />
            </SearchBarDiv>
            <CartDiv>
                <CartIcon width={24} height={24} />
            </CartDiv>
        </NavBarDiv>
    );
}