import React, { useState, useEffect } from 'react';
import { TimelineNode } from '../timeline/TimelineNode';
import { Timeline } from "../timeline/Timeline";
import { SelectiveView } from "../selective-view/SelectiveView";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header"
import { ReactiveCircleContainer } from '../reactive-circle/ReactiveCircleContainer';
import { MousePositionContext } from '../context/MousePositionContext';
import { LanguageChart } from '../language-chart/LanguageChart';
import { Expandable } from '../expandable/Expandable';
import { ExpandableContainer } from '../expandable/ExpandableContainer';
import { CSSTransition } from 'react-transition-group';
import { Panel } from '../panel/Panel';
import TrackVisibility from 'react-on-screen';
import './slide.css';

const nodeContents = [
    {
        date: "07.09.1998",
        title: "First Timeline node",
        content: "Test content of the first Timeline node. Nothing special. This is of normal size"
    },
    {
        date: "10.07.2001",
        title: "Second Timeline node with quite a long title, to test how it behaves. This should be long enough.",
        content: "Test content of the second Timeline node."
    },
    {
        date: "23.11.2007",
        title: "Third Timeline node",
        content: "Test content of the third Timeline node. This one is extra large to test the responsive behaviour of the Timeline node leafs. <br />aaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaa sssssssssss ssssssssssssss ddddd ddddddddddddddd dddddddddddd <br />ffffffff fffffffffffffffff fffffff ggggggggggggggggggggggggggg <br />rrrrrrrrrrrr eeeeeeee wwwwwwwwwwwwwwwwww qqqqqqqqqqqqqqq <br />qqqqqqqqqqqqqqqqq a aaaaaaaaaaa"
    },
    {
        date: "03.02.2013",
        title: "Test test test",
        content: "Test Content of 4th Timeline node with no title. (Not Supported)"
    },
    {
        date: "10.05.2019",
        title: "5th Timeline node with no content (Not Supported)",
        content: "test test test test test"
    },
    {
        date: "10.05.2019",
        title: "6th Timeline node with no content (Not Supported)",
        content: "test test test test test"
    },
    {
        date: "10.05.2019",
        title: "7th Timeline node with no content (Not Supported)",
        content: "test test test test test"
    },
];

export const Slide = (props) => {
    const [nodes, setNodes] = useState([]);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        if (props.showContent && nodes.length === 0) {
            let index = 0;
            const nodes = nodeContents.map((node) => {
                index++;
                return <TimelineNode key={index} title={node.title} date={node.date} content={node.content} />
            })

            setTimeout(() => setNodes(nodes), 100);
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
                        <h2>Work Experience</h2>
                        <Panel alternation="odd">
                            <Timeline>
                                {nodes}
                            </Timeline>
                        </Panel>
                        <h2>IT Skills</h2>
                        <Panel alternation="even">
                            <SelectiveView/>
                        </Panel>
                        <h2>Language Proficiency</h2>
                        <Panel alternation="odd">
                            <TrackVisibility once>
                                <LanguageChart/>
                            </TrackVisibility>
                        </Panel>
                        <h2>Education</h2>
                        <Panel alternation="even">
                            <Timeline>
                                {nodes}
                            </Timeline>
                        </Panel>
                        <h2>Private Interests</h2>
                        <Panel alternation="odd">
                            <ExpandableContainer/>
                        </Panel>
                        <Footer/>
                    </div>
                </CSSTransition>
            </MousePositionContext.Provider>
        </div>
    );
}
