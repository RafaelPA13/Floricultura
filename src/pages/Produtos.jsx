import Menu from "./Menu.JSX"
import '../css/Produtos.css'
import Logo from '/Logo.svg'

function Produtos(){
    return(
        <html>
            <header>
                <img src={Logo} alt="Beija-Flor" />
                Beija-Flor
                <Menu/>
            </header>

            <body>
                <h1>Produtos</h1>

                <div className="flores">
                    <img src="https://static.cestasmichelli.com.br/images/product/23018gg.jpg?ims=750x750" alt="flores"/>
                    <div className="dados">
                        <h2>Mix Luxuoso de Flores</h2>
                        <p>R$372,90</p>
                    </div>
                </div>

                <div className="flores">
                    <img src="https://static.giulianaflores.com.br/images/product/22999gg.jpg" alt="flores"/>
                    <div className="dados">
                        <h2>Arranjo Luxuoso Mix de Flores do Campo</h2>
                        <p>R$248,90</p>
                    </div>
                </div>

                <div className="flores">
                    <img src="https://static.novaflor.com.br/images/product/rs-2094-5567-0.jpg" alt="flores"/>
                    <div className="dados">
                        <h2>Flores do Campo em Vaso Cerâmica Azul</h2>
                        <p>R$158,90</p>
                    </div>
                </div>

                <div className="flores">
                    <img src="https://img.elo7.com.br/product/original/27A0D32/cachepo-vaso-decorativo-porta-doces-vaso-flores-preto-porta-docinhos.jpg" alt="flores"/>
                    <div className="dados">
                        <h2>Cachepô - Vaso decorativo preto</h2>
                        <p>R$24,90</p>
                    </div>
                </div>

                <div className="flores">
                    <img src="https://static.giulianaflores.com.br/images/product/30091gg.jpg?ims=500x500" alt="flores"/>
                    <div className="dados">
                        <h2>Vaso de Kalanchoes Coloridas</h2>
                        <p>R$165,90</p>
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
export default Produtos;
