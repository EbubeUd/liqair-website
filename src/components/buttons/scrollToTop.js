import React, { Component } from 'react';
import './scrollToTop.css';

export class ScrollToTop extends Component {

    componentDidMount(){
        // When the user scrolls down 20px from the top of the document, show the button
        window.addEventListener('scroll', this.startScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.startScroll);
    }

    startScroll = () => {
        // Get the button:
        const scrollToTopButton = document.getElementById("scrollToTopButton");

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    scrollUp = () => {
        window.scrollTo({top: 0, behavior: 'smooth'}); // For all modern browsers
        //document.body.scrollTop = 0; // For Safari
        //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render() {
        return (
            // <button onClick={()=>this.scrollUp()} id="scrollToTopButton" title="Go to top">Top</button>
	        <img onClick={()=>this.scrollUp()} id="scrollToTopButton" height={60} width={30}  src={process.env.REACT_APP_PUBLIC_URL+'/assets/img/icons/air.png'} alt="Go to top" />
        )
    }
}

export default ScrollToTop;

