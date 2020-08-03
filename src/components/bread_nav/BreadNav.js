import React, {Component, Fragment} from 'react';
import './BreadNav.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class BreadNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Container className="BreadNav">
                    <Container className="SplashContainer">
                        <Container className={"bannerContainer"}
                                   style={{background: this.props.bg}}>
                            <Row>
                                <Col md={2}> </Col>
                                <Col md={8} >
                                    <Row>{this.props.bread}</Row>
                                    <Row style={{marginTop: '1.5em'}}><h1 style={{fontSize: '2.5em'}}>{this.props.title}</h1></Row>
                                    <Row><h5 style={{lineHeight: '1.7em',fontSize: '1em',marginRight: '30%'}}>{this.props.subtitle}</h5></Row>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(BreadNav);
