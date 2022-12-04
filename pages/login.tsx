import React from "react";

export default class extends React.Component<{}, {
    userEmail: undefined | string, userPass: undefined | string,
}> {
    constructor(props: never) {
        super(props);
        this.state = {
            userEmail: undefined,
            userPass: undefined
        }
    }
    render() {
        return (
            <>
            <p className="tip"></p>
                <div className="cont">
                <form className="form">
                    <h2 style={{ color: "#cfcfcf" }}>Bem Vindo</h2>
                    <label>
                        <span>Email</span>
                        <input
                            type="email"
                            value={this.state.userEmail}
                            onChange={(event) => this.setState({ userEmail: event.target.value })}
                        />
                    </label>

                    <label>
                        <span>Senha</span>
                        <input
                            type="password"
                            value={this.state.userPass}
                            onChange={(event) => this.setState({ userPass: event.target.value })}
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