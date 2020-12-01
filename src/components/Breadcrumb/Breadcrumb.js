import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types'

import img from '../../assets/images/banners/banner.png'

const Breadcrumb = ({ children, className, title, backgroundImage }) => {
    return (
        <div
            className={`breadcrumb-area space-pt--70 space-pb--70 ${
                className ? className : ""
            }`}
            style={{backgroundImage: `url(${img})`}}
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


Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
}

export default Breadcrumb ;
