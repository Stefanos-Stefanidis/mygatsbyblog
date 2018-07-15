import React from 'react'
import FadeIn from 'react-fade-in'
import pen from "./../images/summary/pen.png"
import quil from "./../images/summary/quil.png"
import github from "./../images/summary/Orion_github.svg"
import facebook from "./../images/summary/Orion_facebook.svg"
import linkedin from './../images/summary/Orion_linkedin.svg'
import bacon from './../images/summary/Orion_bacon.svg'
import cell from './../images/summary/Orion_cell-phone.svg'
import coffee from './../images/summary/Orion_coffee-beans.svg'
import pin from './../images/summary/Orion_pin.svg'
import email from './../images/summary/Orion_send-email.svg'
import code from './../images/summary/Orion_source-code.svg'
import phone from './../images/summary/Orion_telephone-keypad.svg'
import headphones from './../images/summary/Orion_wireless-headphones.svg'
import globe from './../images/summary/Orion_world-globe.svg'

export default function AboutPage() {
    return(
    <div className="summaryPaper">
        <img id="pen-img" src={pen} alt="pen" />

        <div className="wrapper mr-top--lg">
            <div className="sidebar">
                <div id="avatar">
                    <div className="name-position">
                        <h2 className="flash--margins">STEVE STEVENIDIS</h2>
                        <p className="flash--margins">Web Developer</p>
                    </div>
                </div>
                <div className="mr-top--sm">
                    <h3 className="half-border-small">FOLLOW ME</h3>
                    <div className="social-wrapper">
                        <h3 className="flash--margins mr-top--sm">
                            <img src={facebook} />
                        </h3>
                        <p className="flash--margins">
                            <a href="//www.facebook.com/steve.stevenidis" target="_blank">facebook.com/steve.stevenidis</a>
                        </p>
                        <h3 className="flash--margins mr-top--sm">
                            <img src={linkedin} />
                        </h3>
                        <p className="flash--margins">
                            <a href="//www.facebook.com/steve.stevenidis" target="_blank">linkedin.com/steve.stevenidis</a>
                        </p>
                        <h3 className="flash--margins mr-top--sm">
                            <img src={github} />
                        </h3>
                        <p className="flash--margins">
                            <a href="//github.com/Stefanos-Stefanidis" target="_blank">github.com/Stefanos-Stefanidis</a>
                        </p>
                    </div>
                </div>
                <div className="mr-top--sm">
                    <h3 className="half-border-small">SKILLS</h3>
                </div>
                <div className="skillbox">
                    <p>Html5</p>
                    <div className="skill">
                        <div  style={ {width: "90%"} } className="skill-level"></div>
                    </div>
                </div>
                <div className="skillbox">
                    <p>Css</p>
                    <div className="skill">
                        <div  style={ {width: "75%"} } className="skill-level"></div>
                    </div>
                </div>
                <div className="skillbox">
                    <p>Javascript</p>
                    <div className="skill">
                        <div style={ {width: "60%"} } className="skill-level"></div>
                    </div>
                </div>
                <p>
                    <img id="quil-img" src={quil} alt="quil" />
                    <span className="signature">s.stevenidis</span>
                </p>
            </div>
            <FadeIn>
            <div className="content bg-color--fff">
                <div className="stable-content">
                    <div className="statement">
                        <h3 className="half-border-bottom pd-bt-tp--sm">STATEMENT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, pariatur. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Nihil, pariatur.
                        </p>
                        <div className="basic-info">
                            <div className="home">
                                <img className="vertical-align--middle pd-bt-tp--sm" src={pin} /> Korinthou 10, Thessaloniki Greece
                            </div>
                            <div className="split-grid">
                                <div className="email">
                                    <img className="vertical-align--middle pd-bt-tp--sm" src={email} /> s.stevenidis@gmail.com
                                </div>
                                <div className="website">
                                    <img className="vertical-align--middle pd-bt-tp--sm" src={globe} /> www.mysite.gr
                                </div>
                                <div className="mobile">
                                    <img className="vertical-align--middle pd-bt-tp--sm" src={cell} /> 6978032970
                                </div>
                                <div className="phone">
                                    <img className="vertical-align--middle pd-bt-tp--sm" src={phone} /> 2310314912
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="changing-content">
                    <h3 className="half-border-bottom pd-bt-tp--sm">EXPERIENCE</h3>
                    <div id="experience" className="split-grid">
                        <div className="position">
                            <p> Lorem ipsum, dolor sit amet consectetur. </p>
                            <small> 15/05/1990 </small>
                        </div>
                        <div className="description">
                            <h3>Lorem, ipsum dolor.</h3>
                            <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quaerat? </small>
                        </div>
                        <div className="position">
                            <p> Lorem ipsum, dolor sit amet consectetur. </p>
                            <small> 15/05/1990 </small>
                        </div>
                        <div className="description">
                            <h3>Lorem, ipsum dolor.</h3>
                            <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quaerat? </small>
                        </div>
                    </div>
                    <h3 className="half-border-bottom pd-bt-tp--sm">EDUCATION</h3>
                    <div id="education" className="split-grid">
                        <div className="position">
                            <p> Lorem ipsum, dolor sit amet consectetur. </p>
                            <small> 15/05/1990 </small>
                        </div>
                        <div className="description">
                            <h3>Lorem, ipsum dolor.</h3>
                            <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quaerat? </small>
                        </div>
                        <div className="position">
                            <p> Lorem ipsum, dolor sit amet consectetur. </p>
                            <small> 15/05/1990 </small>
                        </div>
                        <div className="description">
                            <h3>Lorem, ipsum dolor.</h3>
                            <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quaerat? </small>
                        </div>
                    </div>
                    <h3 className="half-border-bottom pd-bt-tp--sm">HOBBIES</h3>
                    <div id="hobbies" className="flex-grid">
                        <p className="flash--margins">
                            <img src={headphones} />
                        </p>
                        <p className="flash--margins">
                            <img src={code} />
                        </p>
                        <p className="flash--margins">
                            <img src={coffee} />
                        </p>
                        <p className="flash--margins">
                            <img src={bacon} />
                        </p>
                        <p className="flash--margins">Music</p>
                        <p className="flash--margins">Coding</p>
                        <p className="flash--margins">Coffee</p>
                        <p className="flash--margins">Eating</p>
                    </div>
                </div>
            </div>
            </FadeIn>
        </div>
    </div>

  )
}
