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
                <Container style={{background: "rgb(223,102,159)", paddingTop: '2em', paddingBottom: '2em'}}>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8} style={{textAlign: "left"}}>
                            <h2 style={{color: "#fff"}}>Follow Us</h2>
                            <h2 style={{color: "#fff",float:'right'}}>+86-029-63389890</h2>
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
