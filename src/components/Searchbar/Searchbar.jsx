import React , {Component} from 'react';
import css from './Searchbar.module.css'

export default class Searchbar extends Component{
    state={
        imgName:''
    }
    inputValue= (e) => {
        this.setState({
            imgName: e.target.value.toLowerCase()
        })
    }
    formSubmit = (e) => {
        e.preventDefault();
        if (this.state.imgName.trim() === '') {
            return;
        }
        this.props.onSubmit(this.state.imgName)
        this.setState({ 
            imgName: '' 
        });
    }
    render(){
        const { imgName } = this.state
      return(
        <>
            <form className={css.form} onSubmit={this.formSubmit}>
            <button className={css.button} type="submit">
            <span className={css.span}>&#128269;</span>
            </button>
            <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={imgName}
            onInput={this.inputValue}
            />
            </form>
        </>
      )
    }
  }