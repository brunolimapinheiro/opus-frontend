import * as S from "./styles";
import img from "../../assets/img/istockphoto-1253922154-612x612.png"


export const About = ()=>{

    return(

        <>
            <S.DivMain>
               <S.H1>Sobre nos</S.H1> 
               <S.DivAbout>
                <img src={img} width={450} height={300}/>
                <S.DivText>
                    <S.P>
                    A Opus é um projeto dedicado a facilitar a conexão entre profissionais e oportunidades de trabalho. Nossa plataforma intuitiva oferece ferramentas para busca de empregos, cadastro de atividades e gestão de perfis profissionais, proporcionando uma experiência completa tanto para candidatos quanto para empregadores. Com o objetivo de tornar o processo de recrutamento mais ágil e eficiente, a Opus atua como um elo estratégico, contribuindo para o crescimento e sucesso de pessoas e empresas.
                    </S.P>
                </S.DivText>
               </S.DivAbout>
            </S.DivMain>
        </>


    )

}