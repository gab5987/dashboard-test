import React from "react";
import { getProviders, signIn } from "next-auth/react"
import { getCsrfToken } from "next-auth/react"

export async function getServerSideProps(context: any) {
    return {
      props: {
        csrfToken: await getCsrfToken(context),
      },
    }
  }

export default class extends React.Component<{ csrfToken: any}, {
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

        const tst = await signIn('credentials', {
            email: this.state.Username,
            password: this.state.Password,
            // redirect: true,
            callbackUrl: `${window.location.origin}/dashboard`
        })
    }
    render() { console.log(this.props.csrfToken)
        return (
            <>
            <p className="tip"></p>
                <div className="cont">
                <form className="form" onSubmit={(event) => this.handleSubmit(event)}>
                <input name="csrfToken" type="hidden" defaultValue={this.props.csrfToken} />
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