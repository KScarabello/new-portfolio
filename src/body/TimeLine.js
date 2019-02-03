import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimeLine = () => (
    <div style={{width: '80%', height:'500px'}}>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Feb. 2019 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Engineer II</h3>
                <h4 className="vertical-timeline-element-subtitle">American Express - Phoenix, AZ</h4>
                <p>
                User Interface engineer, utilizing React JS
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="July 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">User Interface Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">American Express </h4>
                <h6 className="vertical-timeline-element-subtitle">Contracted via Insight Global </h6>
                <p>
                User Interface engineer, utilizing React JS
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Moved to beautiful Arizona</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
                <p>
                I decided Utah was not for me, and moved to the greener (err... more desert-like) pastures of Arizona.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="November 2017"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Graduated from DevMountain</h3>
                <h4 className="vertical-timeline-element-subtitle">Provo, UT</h4>
                <p>
                I completed DevMountain's immersive in-person Web Development program, learning fullstack JavaScript development. Technical skills acquired include ReactJS, NodeJS, PostGreSQL, HTML/CSS. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="June 2017"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Quit my government job to go to DevMountain</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">moved from Baltimore to Utah</h4> */}
                <p> I packed up my belongings, left Baltimore behind, and headed to Utah. My formal coronation as a 'geekess'.
                
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="September 2014"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">AmeriCorps NCCC - Atlantic Region</h3>
                <h4 className="vertical-timeline-element-subtitle">Member Support Specialist</h4>
                <h6 className="vertical-timeline-element-subtitle">Baltimore, MD </h6>
                <p>
                I fulfilled one of my dreams of working for AmeriCorps NCCC as a staff member. My title was Assistant Member Support Specialist. The role was comparable to that of a Human Resource administrator. During my tenure, I was promoted to Member Support Specialist. Along the way, I learned a lot about managing an HR department, and also about life (thanks to the incredible young adults who went through our program).
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Approximately June 2014"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">First learned about coding bootcamps</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                While managing a volunteer event for The Presidio Trust, I met an incredible young woman who told me about her experience of completing a coding bootcamp - and I was deeply intrigued. I realized that she was a badass and my hero.  Thank you, mysterious young lady, who I didn't remain in contact with. You impacted my life in ways you'll never know.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="September 2011 - July 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">AmeriCorps NCCC - Pacific Region*</h3>
                <h4 className="vertical-timeline-element-subtitle">Corps Member and Team Leader</h4>
                <h6 className="vertical-timeline-element-subtitle">Sacramento, CA </h6>
                <p>
                If you've never heard of AmeriCorps NCCC (most haven't), please click <a href={`https://www.facebook.com/AmeriCorpsNCCC/`}>here</a> to learn more.
                </p>
                <p>I traveled across the western US completing 6-8 week service projects with 9 of my closest friends. We shared housing, food, a 16-passenger van, adventures, gripes, and so much more. I got to do projects in homeless shelters, national parks, summer camps, community gardens, non-profit offices and more. </p>
                <p>I signed on for a second term as a Team Leader. Being a TL is basically being a supervisor on steroids. I had to be a supervisor, disciplinarian, team-builder, occasional stand-in mom 24 hours a day for 10 months, all while completing rigorous service projects, including a Hurricane Sandy disaster relief hitch. </p>
                <p style={{fontSize: '10px'}}>* Richest experience of my entire life. I wish every human being had the opportunity to do this. You reaaaaaally need to click that link and learn more about this program. It's unbelievable. Feel free to ask me about my experience here - I'll love it.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="May 2010"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">B.S. in News-Editorial Journalism</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Illinois at Urbana-Champaign</h4>
                <p>
                I will never regret learning how to write and present information to mass audiences in an academic setting. My education and experience with writing and newspaper page design has greatly impacted my perspective as a web designer.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
            />
        </VerticalTimeline>
    </div>
);

export default TimeLine;