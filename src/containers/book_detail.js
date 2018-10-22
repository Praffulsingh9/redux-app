import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book){
            return <div>Please select a book to get started</div>
        }
        return (
            <div>
                <h2>Details for:</h2>
                <div>Title: {this.props.book.title}</div>
                <div>Pages : <strong>{this.props.book.pages}</strong></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        book:state.active
    };
}

export default connect(mapStateToProps)(BookDetail);