import React, { useState, useEffect } from 'react';
import { TimelineNode } from '../timeline/TimelineNode';
import { Timeline } from "../timeline/Timeline";
import { SelectiveView } from "../selective-view/SelectiveView";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header"
import { MousePositionContext } from '../context/MousePositionContext';
import { LanguageChart } from '../language-chart/LanguageChart';
import { ExpandableContainer } from '../expandable/ExpandableContainer';
import { CSSTransition } from 'react-transition-group';
import { Panel } from '../panel/Panel';
import TrackVisibility from 'react-on-screen';
import './slide.css';

const nodeContents = [
    {
        date: "07.09.1998",
        title: "First Timeline node",
        content: "Test content of the first Timeline node. Nothing special. This is of normal size",
        noTag: false
    },
    {
        date: "10.07.2001",
        title: "Second Timeline node with quite a long title, to test how it behaves. This should be long enough.",
        content: "Test content of the second Timeline node.",
        noTag: false
    },
    {
        date: "23.11.2007",
        title: "Third Timeline node",
        content: "Test content of the third Timeline node. This one is extra large to test the responsive behaviour of the Timeline node leafs. <br />aaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaa sssssssssss ssssssssssssss ddddd ddddddddddddddd dddddddddddd <br />ffffffff fffffffffffffffff fffffff ggggggggggggggggggggggggggg <br />rrrrrrrrrrrr eeeeeeee wwwwwwwwwwwwwwwwww qqqqqqqqqqqqqqq <br />qqqqqqqqqqqqqqqqq a aaaaaaaaaaa",
        noTag: false
    },
    {
        date: "03.02.2013",
        title: "Test test test",
        content: "Test Content of 4th Timeline node with no title. (Not Supported)",
        noTag: true
    },
    {
        date: "10.05.2019",
        title: "5th Timeline node with no content (Not Supported)",
        content: "test test test test test",
        noTag: true
    },
    {
        date: "10.05.2019",
        title: "6th Timeline node with no content (Not Supported)",
        content: "test test test test test",
        noTag: false
    },
    {
        date: "10.05.2019",
        title: "7th Timeline node with no content (Not Supported)",
        content: "test test test test test",
        noTag: false
    },
];

export const Slide = (props) => {
    const [workNodes, setWorkNodes] = useState([]);
    const [educationNodes, setEducationNodes] = useState([]);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        if (props.showContent && workNodes.length === 0) {
            let index = 0;
            const tmpWorkNodes = props.data.work.map((node) => {
                index++;
                return <TimelineNode key={index} title={node.title} date={node.date} content={node.content} noTag={node.noTag} />
            })
            
            index = 0;
            const tmpEducationNodes = props.data.education.map((node) => {
                index++;
                return <TimelineNode key={index} title={node.title} date={node.date} content={node.content} noTag={node.noTag} />
            })
            
            setTimeout(() => {setWorkNodes(tmpWorkNodes); setEducationNodes(tmpEducationNodes)}, 100);
        }
    });

    const trackMousePosition = (event) => {
        setX(event.pageX);
        setY(event.pageY);
    }

    return (
        <div onMouseMove={trackMousePosition} className="slide-wrapper">
            <MousePositionContext.Provider value={{x: x, y: y}}>
                {/*<ReactiveCircleContainer />*/}
                <Header />
                <CSSTransition in={props.showContent} timeout={200} classNames='slide-content-animation'>
                    <div className='slide-content'>
                        <Panel title="Work Experience">
                            <Timeline>
                                {workNodes}
                            </Timeline>
                        </Panel>
                        <Panel title="IT Skills">
                            <SelectiveView/>
                        </Panel>
                        <Panel title="Language Proficiency">
                            <TrackVisibility once>
                                <LanguageChart/>
                            </TrackVisibility>
                        </Panel>
                        <Panel title="Education">
                            <Timeline>
                                {educationNodes}
                            </Timeline>
                        </Panel>
                        <Panel title="Private Interests">
                            <ExpandableContainer/>
                        </Panel>
                        <Footer data={props.data.footer}/>
                    </div>
                </CSSTransition>
            </MousePositionContext.Provider>
        </div>
    );
}
