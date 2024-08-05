import NavBar from "../../components/NavBar";
import BottomBar from "../../components/BottomBar";
import { Categoria } from "../../components/Categorias";
import { HomeDiv } from "./style";

export default function Home(){
    return (
        <HomeDiv>
            <NavBar/>
            <Categoria imgSrc="../../assets/produtos/catg1.png" title="Celulares"/>
        </HomeDiv>
    )
}