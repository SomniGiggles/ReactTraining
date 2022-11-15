import React from "react";
import './Common.css';
import lorem from '../assets/lorem.json';
import './HomePage.css';

const HomePage = () => {
    const data = lorem.lorem;
    return <>
            <img src="/assets/HomeBanner/HomeBanner.png" className="banner" />
            <table>
                <thead>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    <tr><td>{data.lorem10}</td><td rowSpan="2">{data.lorem100}</td></tr>
                    <tr><td className="advert">Advert</td></tr>
                    <tr>
                        <td>{data.lorem50}</td>
                        <td className="advert">Advert</td>
                    </tr>
                </tbody>
            </table>
    </>;
};

export default HomePage;