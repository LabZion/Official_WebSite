import React, {Component, Fragment} from 'react';
import './FollowUs.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class FollowUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Container style={{background: "#323c3c", paddingTop: '2em', paddingBottom: '2em'}}>
                    <Row>
                        <Col md={1}></Col>
                        <Col md={10} style={{textAlign: "left"}}>
                            <h2 style={{color: "#fff"}}>Follow Us</h2>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }


    componentWillReceiveProps(nextProps) {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(FollowUs);
