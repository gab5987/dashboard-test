import React from "react";

export default class extends React.Component {
    render() {
        return (
            <>
            <p className="tip"></p>
                <div className="cont">
                <div className="form">
                    <h2 style={{ color: "#cfcfcf" }}>Bem Vindo</h2>
                    <label>
                        <span>Email</span>
                        <input type="email" />
                    </label>

                    <label>
                        <span>Senha</span>
                        <input type="password" />
                    </label>

                    <p className="forgot-pass">Esqueceu sua senha?</p>
                    <button type="button" className="submit">Entrar</button>
                    <button type="button" className="fb-btn">Conectar com <span>facebook</span></button>
                </div>
                
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