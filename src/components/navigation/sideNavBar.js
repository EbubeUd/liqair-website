import React, { Component } from 'react';

export class SideNavBar extends Component {

    toggleSideNavBar = (e) => {

        e.preventDefault();
        const sidebar = document.getElementById('mySidenav');

        if (sidebar.classList.contains('toggled')) {

            sidebar.classList.remove('toggled');
            document.getElementById("mySidenav").style.width = "0";
            document.body.style.backgroundColor = "white";
            
        } else {
            
            sidebar.classList.add('toggled');
            document.getElementById("mySidenav").style.width = "250px";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }
    }

    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href="#0" className="closebtn" onClick={(e)=>this.toggleSideNavBar(e)}>×</a>
                    <a href="#0">Home</a>
                    <a href="#0">Carousel</a>
                    <a href="#0">Videos</a>
                    <a href="#0">Clients</a>
                    <a href="#0">Messages</a>
                    <a href="#0">Logout</a>
                </div>

                <span onClick={(e)=>this.toggleSideNavBar(e)}>Open</span>
            </div>
        )
    }
}

export default SideNavBar;
