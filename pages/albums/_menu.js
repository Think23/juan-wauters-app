import posed from 'react-pose'
import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';


const BurgerMenu = posed.div({
    hidden: {
      bottom: '-74px',
      width: '64px',
      height: '64px',
      backgroundColor: 'rgba(255,255,255,0)',
      borderWidth: '0px',
      flip: true
    },
    open: {
      bottom: '10px',
      width: '285px',
      height: 'auto',
      backgroundColor: 'rgba(255,255,255,255)',
      borderWidth: '3px',
      flip: true
    },
    closed: {
      bottom: '10px',
      width: '64px',
      height: '64px',
      backgroundColor: 'rgba(255,255,255,0)',
      borderWidth: '0px',
      flip: true    
    },
    initialPose: 'hidden'
  })
  
  const BurgerIcon = posed.img({
    hoverable: true,
    init: { scale: 1 },
    hover: { scale: 1.2 },
    hidden:  { 
        opacity: 0, 
    },
    open: {
        opacity: 0,
    },
    closed: {
        opacity: 1,
    }
  })
  
  const CloseIcon = posed.div({
    hidden:  { opacity: 0 },
    open: { opacity: 1 },
    closed: { opacity: 0 }
  })
  
  const NavItem = posed.li({
    hoverable: true,
    init: { scale: 1 },
    hover: { scale: 1.2 },
    hidden:  { opacity: 0 },
    open: { opacity: 1 },
    closed: { opacity: 0 }
  })


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuState: props.menuState || 'closed'
        };
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu() {
        this.props.showMenu();
    }
    hideMenu() {
        this.props.hideMenu();
    }
    closeMenu() {
        this.props.closeMenu();
    }
    render() {
        const {menuState} = this.props;
        return (
            <BurgerMenu pose={menuState} className={"burger-menu burger-menu--" + menuState}>
                <BurgerIcon onClick={this.showMenu} className="burger-menu--icon" src={require('../../static/images/burger-menu.png')}/>
                <ul className="nav">
                    <NavItem className="nav-item"><a href="/es/albums">Albums</a></NavItem>
                    <NavItem className="nav-item sub-nav-item"><a href="/en/introducing-juan-pablo">Introducing Juan Pablo</a></NavItem>
                    <NavItem className="nav-item sub-nav-item"><a href="/en/la-onda-de-juan-pablo">La Onda de Juan Pablo</a></NavItem>
                    <br/>
                    <NavItem className="nav-item"><a href="/en/about-juan">About Juan</a></NavItem>
                    <NavItem className="nav-item"><a href="/en/tour-dates">Tour Dates</a></NavItem>
                </ul>
                <ul className="social-icons">
                    <NavItem className="social-nav-item"><SocialIcon style={{margin:'5px'}} url="https://www.instagram.com/juanwautersofficial"/></NavItem>
                    <NavItem className="social-nav-item"><SocialIcon style={{margin:'5px'}} url="https://www.facebook.com/juanwauters/"/></NavItem>
                    <NavItem className="social-nav-item"><SocialIcon style={{margin:'5px'}} url="https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"/></NavItem>
                    <NavItem className="social-nav-item"><SocialIcon style={{margin:'5px'}} url="https://itunes.apple.com/us/artist/juan-wauters/619568264"/></NavItem>
                </ul>
                <CloseIcon className="close" onClick={this.closeMenu}></CloseIcon>
                <style jsx>{`
                    :global(.burger-menu--hidden) {
                        opacity: 0;
                    }
                    .social-icons {
                        padding: 0.5em;
                        display: flex;
                        justify-content: center;
                        text-align: center;
                        list-style-type: none;
                        margin: 0;
                    }
                    :global(.sub-nav-item a) {
                        font-family: 'Open Sans', sans-serif!important;
                        font-size: 16px!important;
                        text-transform: uppercase;
                    }
                    a {
                        font-family: 'Bree Serif', serif;
                        font-size: 24px;
                        color: #333;
                        text-decoration: none;
                    }
                    a:hover {
                        color: #000;
                    }
                    :global(.social-icons a:hover) {
                        filter: brightness(1.2);
                    }
                    :global(.burger-menu) {
                        position: absolute;
                        bottom: 0;
                        left: 10px;
                        border-style: solid;
                        border-color: #000;
                    }
                    :global(.burger-menu .close) {
                        top: -15px;
                        right: -15px;
                    }
                    :global(.burger-menu .burger-menu--icon) {
                        width:64px;
                        cursor: pointer;
                        display: block;
                        position:absolute;
                    }
                    ul {
                        width: 100%;
                        text-align: center;
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                        padding-top: 2em;
                        padding-bottom: 2em;
                    }
                    :global(ul li.social-nav-item) {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                    }
                    :global(.burger-menu li) {
                        padding: 0.5em;
                    }
                    :global(.burger-menu--closed ul) {
                        display: none;
                    }
                    :global(.burger-menu--closed .social-icons) {
                        display: none;
                    }
                `}</style>
            </BurgerMenu>
        );
    }
}

export default Menu;