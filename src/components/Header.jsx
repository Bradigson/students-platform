import React from 'react';
import '../assets/styles/Header.scss';
import {NavLink} from 'react-router-dom';
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            menu : false,
           
            
        }
    }


    handleMenu = ()=>{
        this.setState(state=>({
            menu: !state.menu
        }));
    }
    handleLink = ()=>{
        this.setState(state=>({
            menu: !state.menu
        }))
    }
    render(){
        const menu = this.state.menu;
        return(
            <header className='header'>
                <nav className={`${menu ? 'change' : ''}${' navbar '}`}>
                    <div className='hamburger-menu' onClick={this.handleMenu}>
                        <div className='line line-1'></div>
                        <div className='line line-2'></div>
                        <div className='line line-3'></div>
                    </div>
                    
                    <ul className='menu-list text-center'>
                       
                        <li><i className='bx bx-home-alt-2'></i><NavLink to='inicio' 
                        className='nav-link' onClick={this.handleLink}>Inicio</NavLink></li>

                        <li><i className='bx bx-trending-up'></i><NavLink to='progresosemanal' 
                        className='nav-link' onClick={this.handleLink}>Progreso Semanal</NavLink></li>

                        <li><i className='bx bx-edit'></i><NavLink to='tareas' 
                        className='nav-link' onClick={this.handleLink}>Tareas</NavLink></li>

                        <li><i className='bx bx-task' ></i><NavLink to='practicas' 
                        className='nav-link' onClick={this.handleLink}>Practica</NavLink></li>

                        <li><i className='bx bx-user-check'></i><NavLink to='calificacion' 
                        className='nav-link' onClick={this.handleLink}>Calificacion Semanal</NavLink></li>
                    </ul>
                </nav>

            </header>
        )
    }
}


export default Header;