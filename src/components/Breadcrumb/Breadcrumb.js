import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types'

const BreadCrumb = ({ children, className, title, backgroundImage }) => {
    return (
        <div
            className={`breadcrumb-area space-pt--70 space-pb--70 ${
                className ? className : ""
            }`}
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <Container>
                <Row>
                    <Col>
                        <h1 className="breadcrumb__title">{title}</h1>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


BreadCrumb.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
}

export default BreadCrumb ;
