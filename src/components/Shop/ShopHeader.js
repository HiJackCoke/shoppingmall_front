import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const ShopHeader = () => {

    return (
        <div className="shop-header">
            <Container>
                <Row className="align-items-center">
                    <Col md={5} className="text-center text-md-left">
                        Showing {} of {} results
                    </Col>

                    <Col md={7}>
                        <div className="shop-header__filter-icons justify-content-center justify-content-md-end">
                            <div className="single-icon filter-dropdown">
                                <select>
                                    <option value="default">Default</option>
                                    <option value="priceHighToLow">Price - High to Low</option>
                                    <option value="priceLowToHigh">Price - Low to High</option>
                                </select>
                            </div>

                            {/*<div className="single-icon grid-icons d-none d-lg-block">*/}
                            {/*    <button*/}
                            {/*        onClick={(e) => {*/}
                            {/*            getLayout("grid three-column")*/}
                            {/*        }}*/}
                            {/*    >*/}
                            {/*        <MdApps/>*/}
                            {/*    </button>*/}

                            {/*    <button*/}
                            {/*        onClick={(e) => {*/}
                            {/*            getLayout("grid four-column")*/}
                            {/*        }}*/}
                            {/*    >*/}
                            {/*        <MdViewComfy/>*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShopHeader;
