import Menu from "./Menu";
import "../css/Home.css"
import Logo from '/Logo.svg'

function Home(){
return(
<html>
    <header>
        <img src={Logo} alt="Beija-Flor" />
        Beija-Flor 
        <Menu/>
    </header>
            
    <body>
        <img src="https://img.freepik.com/fotos-premium/vaso-de-flores-de-verao-no-patio-do-jardim-patio-exterior-elementos-de-decoracao-decoracao-de-rua-plantas-na-cidade-foto-de-alta-qualidade_84738-5758.jpg" alt="banner" />

        <h1>Depoimentos</h1>

        <div className="depoimentos">
        <div className="box">
            <h2>Maria</h2>
            <img src="https://marilianoticia.com.br/wp-content/uploads/2016/04/asfixia.jpg" alt="Maria"/>
            <p>Muito bom lugar, flores lindas e cheirosas!</p>
        </div>

        <div className="box">
            <h2>Julia</h2>
            <img src="https://cortesdecabelo.pro.br/wp-content/uploads/2019/07/CORTE-DE-CABELO-SENHORAS-2020.jpg" alt="Julia"/>
            <p>Loja super confiável e flores de alta qualidade, recomendo!</p>
        </div>

        <div className="box">
            <h2>Adélia</h2>
            <img src="https://pequenamila.com.br/wp-content/uploads/2016/08/Natalia-do-Vale2.jpg" alt="Adelia"/>
            <p>Bons preços e flores lindas recomendo!</p>
        </div>
        </div>
    </body>  

    <footer className="site">
        <img src={Logo} alt="Beija-Flor" />
        <h1>
            Beija-Flor
        </h1>

        <div>
            <h2>Telefone</h2>
            <p>(XX)XXXXX-XXXX</p>
            <p>(XX)XXXXX-XXXX</p>
        </div>  

        <div>
            <h2>Institucional</h2>
            <p>Quem Somos</p>
            <p>Loja Presencial</p>    
        </div>  

        <div>
            <h2>Ajuda</h2>
            <p>Central de ajuda</p>
        </div>
    </footer>          
</html>
)
}
export default Home;