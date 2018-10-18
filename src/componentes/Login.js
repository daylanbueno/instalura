import React from 'react';

export default class Login extends React.Component {

    constructor(){
        super()
        this.state = {msg:''}
    }

    envia(event) {
        event.preventDefault();
        console.log(this.login.value);
        const resquetInfo = {
            method:'POST',
            body:JSON.stringify({login:this.login.value,senha:this.senha.value}),
            headers: new Headers({
                'Content-type':'application/json'
            })
        };
        fetch('http://localhost:8080/api/public/login',resquetInfo)
        .then(response => {
            if(response.ok){
                return response.text();
            } else {
                throw new Error('Não foi possivel fazer o login');
            }
        }).then(token => {
            localStorage.setItem('auth-token',token);
            this.props.history.push("/timeline");
        })
        .catch(error => {
            this.setState({msg:error.message});
        });
    }

    render() {
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <h2>{this.state.msg} </h2>
                <form onSubmit={this.envia.bind(this)}> 
                    <input type="text" ref={(input) => this.login = input}/> {/* Não precisa criar construtor para guardar o estado.*/}
                    <input type="password" ref={(input) => this.senha = input}/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        );
    }
}