import React from "react";
import axios from "axios";


export function catchApiStuff(response: any) {
    switch(response.response.status) {
        case 200: alert("deu bom"); break;
        case 401: alert("Usuario ou senha incorretos"); break;
        case 500: alert("Erro interno de servidor")
    }
}
export default class Login extends React.Component<{}, {
    Username: undefined | string, Password: undefined | string,
}> {
    constructor(props: never) {
        super(props);
        this.state = {
            Username: undefined,
            Password: undefined
        }
    }

    async handleSubmit(event: any) {
        event.preventDefault();

        axios({
            method: 'get',
            url: `/api/auth/Login?em=${this.state.Username}&ps=${this.state.Password}`,
          })
            .then((response) => window.location.replace(`/dashboard?q=${response.data.jdw}`))
            .catch((error) => catchApiStuff(error))
    }

    render() {
        return (
            <>
            <p className="tip"></p>
                <div className="cont">
                <form className="form" onSubmit={(event) => this.handleSubmit(event)}>
                    <h2 style={{ color: "#cfcfcf" }}>Bem Vindo</h2>
                    <label>
                        <span>Email</span>
                        <input
                            type="text"
                            value={this.state.Username}
                            onChange={(event) => this.setState({ Username: event.target.value })}
                        />
                    </label>

                    <label>
                        <span>Senha</span>
                        <input
                            type="password"
                            value={this.state.Password}
                            onChange={(event) => this.setState({ Password: event.target.value })}
                        />
                    </label>

                    <p className="forgot-pass">Esqueceu sua senha?</p>
                    <button type="submit" className="submit">Entrar</button>
                    <button type="button" className="fb-btn">Conectar com <span>facebook</span></button>
                </form>
                
                <div className="sub-cont">
                    <div className="img">
                    <div className="img__text m--up">
                        <h2>Novo por aqui?</h2>
                        <p>Crie sua conta agora mesmo!</p>
                        <p>É rapidinho viu 😉</p>
                    </div>

                    <div className="img__btn">
                        <span className="m--up">Cadastrar</span>
                    </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
}

const useLogin = () => {

}