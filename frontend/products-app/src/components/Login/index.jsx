import  './style.css'

export const Login = () => {


    

    return(

        <div>
            <div>
                <label htmlFor="" className="email">Email: </label>
                <input type="email" placeholder="Digite o email do usuário..."/>
            </div>
            <div>
                <label htmlFor="">Senha: </label>
                <input type="password" placeholder="Digite sua senha..." />
            </div>
        </div>

    )

}