import React, {useState, useEffect} from 'react';
import { CSSTransition } from "react-transition-group";
import { SelectiveViewPanelItem } from "./SelectiveViewPanelItem";

const technologies = [
    <SelectiveViewPanelItem key="HTML" label="HTML" img="html"/>,
    <SelectiveViewPanelItem key="CSS" label="CSS" img="css"/>,
    <SelectiveViewPanelItem key="JacaScript" label="JacaScript" img="js"/>,
    <SelectiveViewPanelItem key="TypeScript" label="TypeScript" img="ts"/>,
    <SelectiveViewPanelItem key="REACT" label="REACT" img="react"/>,
    <SelectiveViewPanelItem key="Jest" label="Jest" img="jest"/>,
    <SelectiveViewPanelItem key="REST" label="REST" img="rest"/>,
    <SelectiveViewPanelItem key="Java" label="Java" img="java"/>,
    <SelectiveViewPanelItem key="JSF" label="JSF" img="jsf"/>,
    <SelectiveViewPanelItem key="JUnit" label="JUnit" img="junit"/>,
    <SelectiveViewPanelItem key="PL/1" label="PL/1" img="pli"/>,
    <SelectiveViewPanelItem key="JCL" label="JCL" img="jcl"/>,
    <SelectiveViewPanelItem key="SQL" label="SQL" img="sql"/>
];

const tools = [
    <SelectiveViewPanelItem key="Eclipse" label="Eclipse" img="eclipse"/>,
    <SelectiveViewPanelItem key="IntelliJ" label="IntelliJ" img="intelliJ"/>,
    <SelectiveViewPanelItem key="VSCode" label="VSCode" img="vscode"/>,
    <SelectiveViewPanelItem key="Atom" label="Atom" img="atom"/>,
    <SelectiveViewPanelItem key="Maven" label="Maven" img="maven"/>,
    <SelectiveViewPanelItem key="NPM" label="NPM" img="npm"/>,
    <SelectiveViewPanelItem key="JBoss" label="JBoss" img="jboss"/>,
    <SelectiveViewPanelItem key="UML" label="UML" img="uml"/>,
    <SelectiveViewPanelItem key="Git" label="Git" img="git"/>,
    <SelectiveViewPanelItem key="Office" label="Office" img="office"/>,
];

export const SelectiveViewPanel = (props) => {
    const [animatePanel, setAnimatePanel] = useState(false);
    const [content, setContent] = useState([]);

    useEffect(() => {
        setContent(props.content === "technologies" ? technologies : tools);

        setAnimatePanel(props.active && props.isVisible)
    }, [props.content, props.active, props.isVisible]);

    return (
        <CSSTransition in={animatePanel} timeout={400} classNames="selective-view-panel-animation">
            <div className="selective-view-panel">
                {content}
            </div>
        </CSSTransition>
    );
}
