import Menu from "./Menu.JSX"
import '../css/Cliente.css'
import Logo from '/Logo.svg'

function Cliente(){
    function Login(){
        const email = 'dev@access.com';
        const senha = 123;

        if(
            document.getElementById('email').value == email 
            &&
            document.getElementById('senha').value == senha
        )
        {
            alert('Seja bem vindo a floricultura Beija-Flor');
        }
        else{
            alert('Seu email ou senha é inválido');
        }
    }

    return(
        <html>
        <header>
            <img src={Logo} alt="Beija-Flor" />
            Beija-Flor 
            <Menu/>
        </header>

        <body>
            <h1>Login</h1>
            
            <label>Email</label>
            <input type="email"  id="email"/>

            <label>Senha</label>
            <input type="password" id="senha"/>

            <button onClick={Login}>Entrar</button>
        </body>
        </html>
    )
}
export default Cliente;