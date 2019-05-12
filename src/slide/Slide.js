import React, {useState, useEffect} from 'react';
import {TimelineNode} from '../timeline/TimelineNode';
import {Timeline} from "../timeline/Timeline";
import {SelectiveView} from "../selective-view/SelectiveView";
import {Footer} from "../footer/Footer";
import {Header} from "../header/Header"
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
    const [selectiveView, setSelectiveView] = useState("");
    const [footer, setFooter] = useState("");

    useEffect(() => {
        if(props.showContent && nodes.length === 0) {
            let index = 0;
            const nodes = nodeContents.map((node) => {
                index++;
                return <TimelineNode key={index} title={node.title} date={node.date} content={node.content}/>
            })

            setTimeout(() => {setNodes(nodes); setFooter(<Footer/>); setSelectiveView(<SelectiveView/>)}, 300);
        }
    });

    return (
        <div className="slide-wrapper">
            <Header/>
            <Timeline>
                {nodes}
            </Timeline>
            {selectiveView}
            {footer}
        </div>
    );
}
