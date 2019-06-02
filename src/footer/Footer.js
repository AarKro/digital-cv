import React, {useState, useEffect} from 'react';
import './footer.css';


export const Footer = (props) => {
    const [firstRow, setFirstRow] = useState([]);
    const [secondRow, setSecondRow] = useState([]);
    const [thirdRow, setThirdRow] = useState([]);
    const [fourthRow, setFourthRow] = useState([]);

    useEffect(() => {
        const first = props.data.first.map((item) => <th style={{transform: "translateY(-15px)"}}>{item}</th>);
        const second = props.data.second.map((item) => <td>{item}</td>);
        const third = props.data.third.map((item) => <td>{item}</td>);
        const fourth = props.data.fourth.map((item) => <td>{item}</td>);

        setFirstRow(first);
        setSecondRow(second);
        setThirdRow(third);
        setFourthRow(fourth);
    }, [props.data]);

    return (
        <div className="footer">
            <table className="footer-table">
            <thead>
                <tr>
                    {firstRow}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {secondRow}
                </tr>
                <tr>
                    {thirdRow}
                </tr>
                <tr>
                    {fourthRow}
                </tr>
            </tbody>
            </table>
        </div>
    );
}
