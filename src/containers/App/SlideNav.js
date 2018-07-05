import React, { Component } from 'react';
import { Tree } from "@blueprintjs/core";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrapped = styled.div`
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2)
`
let treeContent = [
    {
        id: 0,
        icon: "applications",
        label: <strong>DASHBOARD</strong>,
    },
    {
        id: 1,
        icon: "cog",
        isExpanded: true,
        label: <strong>THIẾT LẬP</strong>,
        childNodes: [
            { id: 5, icon: "office", label: <Link to='/departments'>Phòng ban</Link> },
            { id: 5, icon: "style", label: <Link to='/todos'>Todo</Link> },
        ],
    },
];

const SlideNav = (props) => {
    
    return (
        <Wrapped>
            <Tree contents={treeContent} />
        </Wrapped>
    )
};

export default SlideNav;