import React, {useState, useEffect} from 'react';
import './footer.css';


export const Footer = (props) => {
    const [firstRow, setFirstRow] = useState([]);
    const [secondRow, setSecondRow] = useState([]);
    const [thirdRow, setThirdRow] = useState([]);

    useEffect(() => {
        const first = props.data.first.map((item) => <td>{item}</td>);
        const second = props.data.second.map((item) => <td>{item}</td>);
        const third = props.data.third.map((item) => <td>{item}</td>);

        setFirstRow(first);
        setSecondRow(second);
        setThirdRow(third);
    }, [props.data]);

    return (
        <div className="footer">
            <table className="footer-table">
                <tbody>
                    <tr>
                        {firstRow}
                    </tr>
                    <tr>
                        {secondRow}
                    </tr>
                    <tr>
                        {thirdRow}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
