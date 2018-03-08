import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    render(){
        const footerPages = ['Contact Us','Book a Grill','About Grillber','Recipes', 'How to Grill'];

        const footerStyle = {
            backgroundColor: '#818285',
            width:'100%',
            bottom: '0',
            position:'absolute',
            borderTop:'2px solid #bbb',
        }

        const alignColumn = {
            width:'100%',
            margin:'5px 0 5px 0',
            padding:'10px 0 10px 0',
            display:'flex',
            flexDirection:'column',
            alignItems: 'center'
        }

        const spaceItems = {
            margin:'5px',
            width:'350px',
            padding:'10px',
            display:'flex',
            justifyContent:'space-around',
        }

        const spacePages = {
            width:'75%',
            padding:'25px',
            display:'flex',
            justifyContent:'space-around',
            fontFamily:'Nanum Pen Script',
            fontSize:'25px',
            color:'#DCE0D9'
        }

        const trigger = function(){
                console.log(this)
        }


        const applStr = 'https://www.talkhomeapp.com/images/apps/download_app_store.svg';

        const gPly = 'http://www.fairhotel.org/sites/default/files/fairhotel-google-play.png';

        const imageStyle = {
            width:'150px'
        }

        return(
            <footer style = {footerStyle}>
                <div id="footer-container" style = {alignColumn}>
                    <div id="footer-items" style={spacePages}>
                        {
                            footerPages.map(function(item,i){
                                return <div>{item}</div>
                            })
                        }
                    </div>
                    <div id="download-stores" style = {spaceItems}>
                        <div><img src = {applStr} style = {imageStyle}/></div>
                        <div><img src = {gPly} style = {imageStyle}/></div>
                    </div>
                    <div id="social-icons" style = {spaceItems} >
                        <div>
                            <i className="fab fa-facebook-square" data-fa-transform="grow-15" ></i>
                        </div>
                        <div onMouseEnter={trigger}>
                            <i className="fab fa-twitter-square" data-fa-transform="grow-15"></i>
                        </div>
                        <div>
                            <i className="fab fa-instagram" data-fa-transform="grow-15"></i>
                        </div>
                        <div>
                            <i className="fab fa-youtube" data-fa-transform="grow-15"></i>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
