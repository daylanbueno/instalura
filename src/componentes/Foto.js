import React, { Component } from 'react';

class FotoAtualizacoes extends Component {
    render() {
        return (
            <section className="fotoAtualizacoes">
              <a href="#" className="fotoAtualizacoes-like">Likar</a>
              <form className="fotoAtualizacoes-form">
                <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
                <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
              </form>

            </section>            
        );
    }
}

class FotoInfo extends Component {
    render(){
        return (
            <div className="foto-in fo">
              <div className="foto-info-likes">
              {
                this.props.foto.likers.map(liker => {
                 return (<a href="#">{liker.login}, </a>)
                })
              }
              curtiram
              </div>
              <ul className="foto-info-comentarios">
              {
                this.props.foto.comentarios.map(comentario => {
                  return (
                  <li className="comentario" key={comentario.login}>
                  <a className="foto-info-autor">{comentario.login}</a>
                  {comentario.texto}
                 </li>
                );
                })
              }
              </ul>
            </div>            
        );
    }
}

class FotoHeader extends Component {
    render(){
        return (
            <header className="foto-header">
              <figure className="foto-usuario">
                <img src={this.props.foto.urlPerfil} alt=""/>
                <figcaption className="foto-usuario">
                  <a href="#">
                    {this.props.foto.loginUsuario}
                  </a>  
                </figcaption>
              </figure>
              <time className="foto-data">{this.props.foto.horario}</time>
            </header>            
        );
    }
}

export default class Foto extends Component {
    render(){
        return (
          <div className="foto">
            {console.log(this.props.foto)}
            <FotoHeader foto={this.props.foto}/>
            <img alt="foto" className="foto-src" src={this.props.foto.urlPerfil}/>
            <FotoInfo  foto={this.props.foto}/>
            <FotoAtualizacoes/>
          </div>            
        );
    }
}