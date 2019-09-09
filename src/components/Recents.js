import React, { Component } from 'react';
import { Card, List, ListItem, ListItemLink } from "@material-ui/core";

export default class Navagation extends React.Component {
    render () {
    return (
        <div className="recents-card">
            <Card>
                <h2 className="header-name">Recents</h2>
                <List>
                </List>
            </Card>
        </div>
    );
    }
    
}