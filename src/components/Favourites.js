import React, { Component } from 'react';
import { Card, List, ListItem, ListItemLink } from "@material-ui/core";

export default class Favourites extends React.Component {
    render () {
    return (
        <div className="favourite-card">
            <Card>
                <h2 className="header-name">Favourites</h2>
                <List>                
                </List>
            </Card>
        </div>
    );
    }
    
}