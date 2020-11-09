import React, {Fragment} from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Header from "../../components/Header/Header"


const ComingSoon = () => {
    return (
        <Fragment>
            <Header/>
            <div
                className="coming-soon-area bg-coming-soon"
                style={{
                    backgroundImage: `url(${require("../../assets/images/work.jpg")})`
                }}
            >
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="coming-soon-content">
                                <div className="subscription-form subscription-form--comingsoon">
                                    <h4 className="coming-soon-subtitle space-mb--10">
                                        Our Clothes Collection
                                    </h4>
                                    <h2 className="coming-soon-title space-mb--40">
                                        Look Book coming soon
                                    </h2>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
};

export default ComingSoon;
