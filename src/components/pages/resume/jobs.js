import React from 'react'
import styled from 'styled-components';
import { sectionTitle, sectionContainer, dateAndTitle } from './styles';

export default class Jobs extends React.Component {
    render(){
        return (
            <JobsDiv>
                <div className="sectionTitle">
                    <h3>Employment</h3>
                </div>
                {/* //GTA */}
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Graduate Teaching Assistant</span>
                        <span className="two">School of Communication</span>
                        <span className="three">Aug 2016 - May 2018</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Delivered technical written and spoken communication to 4 classes of 
                                10-15 students on the basic operations of editing software and filmmaking equipment.</li>
                        </ul>
                    </div>
                </div>
                {/* //VR Lab */}
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">360 Video Specialist</span>
                        <span className="two">
                            <a href="https://www.facebook.com/nauivrlab/">Interactive Virtual Reality Lab</a></span>
                        <span className="three">Jan 2017 - Jun 2017</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Led and contributed to collaborative 360 video projects among artists, 
                                sound editors, archeologists, computer scientists. Software: Unreal Engine 4.</li>
                            <li>Projects: 
                                <a href="http://swvirtualmuseum.nau.edu/wp/Tonto_panos/Tonto-NM-pano-tour.html"> Tonto National Monument (interactive)</a>, 
                                <a href="https://vimeo.com/209591527"> Chem VR</a>, 
                                <a href="https://vimeo.com/214381757"> NAU basketball (interactive)</a>, 
                                <a href=""> Fiction film</a>
                                </li>
                        </ul>
                    </div>
                </div>
                {/* //Video Manager */}
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Video Manager</span>
                        <span className="two">
                            <a href="https://vimeo.com/nauvideo">NAU Marketing</a>
                        </span>
                        <span className="three">May 2015 - May 2016</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Managed, scheduled, budegeted, planned, supervised for a team of 5 videographers. </li>
                            <li>Organized workflows, created backup data managment plans. 
                                Corridnated among internal and external vendors.</li>
                        </ul>
                    </div>
                </div>
                {/* //Videographer */}
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Videographer</span>
                        <span className="two">
                            <a href="https://vimeo.com/nauvideo">NAU Marketing</a></span>
                        <span className="three">Jan 2014 - Dec 2014</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Produced, directed, and edited promotional videos for the university. 
                                Self-started a reorganization of the team's assets.</li>
                        </ul>
                    </div>
                </div>
                {/* //Vora */}
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Internship</span>
                        <span className="two">Vora Financial Group</span>
                        <span className="three">Oct 2012 - May 2013</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Assisted in the file managment and preservation of financial records,
                                 created necessary redundencies and </li>
                            <li>Knowledge Leveraged: Asset managments, wealth managment, 
                                financial planning, microeconomics.</li>
                            
                        </ul>
                    </div>
                </div>
                {/* //VVF */}                
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Various Positions</span>
                        <span className="two">Vail Valley Foundation</span>
                        <span className="three">2011 - 2017</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Various event managment positions for events throughout the 
                                Vail Valley in Colorado.</li>
                            <li>Knowledge Leveraged: Logistics, advanced planning, event managment, 
                                attention to detail, improvisation.</li>
                        </ul>
                    </div>
                </div>
                {/* //Toji */}                
                <div>
                    <strong className="dateAndTitle">
                        <span className="one">Internship</span>
                        <span className="two">Toji Trading</span>
                        <span className="three">May 2011</span>
                    </strong>
                    <div className="details">
                        <ul>
                            <li>Shadowed a high frequency trader and gained insights 
                                into the world of stocks, futures, currencies and strategy.</li>
                        </ul>
                    </div>
                </div>
            </JobsDiv>
        )
    }
}

const JobsDiv = styled.div`
    /* border: 1px solid red; */
    ${sectionContainer()}
    .sectionTitle {
        /* border: 1px solid blue; */
       ${sectionTitle()}
    }
    .dateAndTitle {
        /* border: 1px solid blue; */
        ${dateAndTitle()}
    }
`