import React, {useState} from 'react';
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {LayoutTwo} from "../../components/Layout/Layout";

const MyPage = () => {

    const [modal, setModal] = useState(false)

    return (
        <LayoutTwo>
            <Breadcrumb
                title="Profile"
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
            />
            <div className="my-account-area space-mt--r130 space-mb--r130">
                <Container>
                    <Tab.Container defaultActiveKey="order">
                        <Nav
                            variant="pills"
                            className="my-account-area__navigation space-mb--r60"
                            style={{
                                justifyContent: "center"
                            }}
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="order">
                                    Order
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="address">
                                    Address
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="info">
                                    My Info
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="order">
                                <div className="my-account-area__content">
                                    <h2>Order</h2>
                                    <div className="text-center table-responsive">
                                        <table
                                            style={{
                                                width: "100%",
                                                lineHeight: "24px",
                                                border: "1px solid #e7e7e7"
                                            }}
                                        >
                                            <thead
                                                className="thead-dark"
                                                style={{
                                                    borderBottom: "1px solid #ededed",

                                                }}
                                            >
                                            <th
                                                className="w-25 p-3"
                                            >
                                                    Product Info
                                                </th>
                                                <th>
                                                    Date
                                                </th>
                                                <th>
                                                    order number
                                                </th>
                                                <th>
                                                    order Price
                                                </th>
                                                <th>
                                                    order state
                                                </th>
                                            </thead>
                                            <tbody>
                                            <tr
                                                style={{ height: "120px"}}
                                            >
                                                <td

                                                >
                                                    name / color / size
                                                </td>
                                                <td>
                                                    date
                                                </td>
                                                <td>
                                                    order number
                                                </td>
                                                <td>
                                                    order Price
                                                </td>
                                                <td>
                                                    shipment
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="address">
                                <div className="my-account-area__content">
                                    <h2>Address </h2>
                                    <div className="text-center">
                                        <table
                                            style={{
                                                width: "100%",
                                                lineHeight: "24px",
                                                border: "1px solid #e7e7e7"
                                            }}
                                        >
                                            <thead
                                                className="thead-dark"
                                                style={{
                                                    borderBottom: "1px solid #ededed",
                                                }}
                                            >
                                                <th
                                                    className="w-25 p-3"
                                                >
                                                    배송지
                                                </th>
                                                <th>
                                                    배송지 정보
                                                </th>
                                                <th>
                                                    &nbsp;
                                                </th>

                                            </thead>
                                            <tbody
                                            >
                                            <tr
                                                style={{ height: "100px"}}
                                            >
                                                <td
                                                    className="p-3"
                                                >
                                                    임태
                                                </td>
                                                <td>
                                                    incheon dong gu injung street
                                                    <br/>
                                                    010 - xxxx - xxxx
                                                </td>
                                                <td>

                                                    <button
                                                        className="lezada-button lezada-button--small"
                                                        onClick={() => setModal(true)}
                                                    >
                                                        배송지 변경
                                                    </button>
                                                    <Modal show={modal}>
                                                        <Modal.Header
                                                            closeButton
                                                            onHide={() => setModal(false)}
                                                            style={{
                                                                alignItems: "center"
                                                            }}
                                                        >
                                                            배송지 관리
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <div
                                                                className="table-responsive"
                                                                style={{
                                                                    lineHeight: "70px",
                                                                    marginTop: "-16px"
                                                                }}
                                                            >
                                                               <form>
                                                                   <div>
                                                                       <Row>
                                                                           <Col lg={12}

                                                                                style={{
                                                                                    borderBottom: "1px solid #ededed"
                                                                                }}
                                                                           >
                                                                               <label
                                                                                   style={{
                                                                                       width: "20%",
                                                                                       margin: "0px 20px"
                                                                                   }}
                                                                               >
                                                                                   수령인 <span className="required">*</span>{" "}
                                                                               </label>
                                                                               <input
                                                                                   style={{
                                                                                       width: "30%",
                                                                                       height: "34px",
                                                                                   }}
                                                                               />
                                                                           </Col>
                                                                           <Col lg={12}
                                                                                className="space-mb--20"
                                                                                style={{
                                                                                    borderBottom: "1px solid #ededed"
                                                                                }}
                                                                           >
                                                                               <label
                                                                                   style={{
                                                                                       width: "20%",
                                                                                       margin: "0px 20px"
                                                                                   }}
                                                                               >
                                                                                    휴대전화 <span className="required">*</span>{" "}
                                                                               </label>
                                                                               <span>
                                                                                   <input
                                                                                       style={{
                                                                                           width: "15%",
                                                                                           height: "34px"
                                                                                       }}
                                                                                   /> -
                                                                                   <input
                                                                                       style={{
                                                                                           width: "15%",
                                                                                           height: "34px"
                                                                                       }}
                                                                                   /> -
                                                                                   <input
                                                                                       style={{
                                                                                           width: "15%",
                                                                                           height: "34px"
                                                                                       }}
                                                                                   />
                                                                               </span>
                                                                           </Col>
                                                                           <Col lg={12}
                                                                                className="space-mb--20 d-flex"
                                                                                style={{
                                                                                    lineHeight: "31px"
                                                                                }}
                                                                           >
                                                                               <label
                                                                                   style={{
                                                                                       width: "20%",
                                                                                       margin: "0px 20px"
                                                                                   }}
                                                                               >
                                                                                   배송지 주소 <span className="required">*</span>{" "}
                                                                               </label>

                                                                               <div>
                                                                                   <input
                                                                                       readOnly
                                                                                       style={{
                                                                                           width: "40%",
                                                                                           height: "35px"
                                                                                       }}
                                                                                   /> {" "}
                                                                                   <button className="lezada-button">
                                                                                       주소 찾기
                                                                                   </button>



                                                                                   <div className="mt-1">
                                                                                       <input style={{width: "100%"}}/>
                                                                                       <input
                                                                                           style={{width: "100%", margin: "4px 0px"}}
                                                                                       />
                                                                                   </div>
                                                                               </div>
                                                                           </Col>
                                                                           <Col
                                                                               lg={12}
                                                                               style={{textAlign: "center"}}
                                                                           >
                                                                               <form>
                                                                                   <Button
                                                                                       type="submit"
                                                                                       className="lezada-button lezada-button--small"
                                                                                   >
                                                                                       YES
                                                                                   </Button>{' '}
                                                                                   <Button
                                                                                       className="lezada-button lezada-button--small"
                                                                                       onClick={() => setModal(false)}
                                                                                   >
                                                                                       NO
                                                                                   </Button>
                                                                               </form>
                                                                           </Col>
                                                                       </Row>
                                                                   </div>
                                                               </form>
                                                            </div>
                                                        </Modal.Body>
                                                    </Modal>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="info">
                                <div className="my-account-area__content">
                                    <h2>Basic Info </h2>
                                    <div className="table-responsive">
                                        <table
                                            className="cart-table"
                                            style={{border: "none"}}
                                        >
                                            <tbody>
                                            <tr>
                                                <td
                                                    className="w-25"
                                                >
                                                    Id
                                                </td>
                                                <td>
                                                    dsa1235
                                                </td>
                                                <td>
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    password
                                                </td>
                                                <td>
                                                    ******
                                                </td>
                                                <td
                                                    className="text-center"
                                                >
                                                    <button className="lezada-button lezada-button--small">
                                                        Change Password
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    name
                                                </td>
                                                <td>
                                                    임태
                                                </td>
                                                <td>
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    BirthDay
                                                </td>
                                                <td>
                                                    19xx.xx.xx
                                                </td>
                                                <td>
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    E-Mail
                                                </td>
                                                <td>
                                                    dsa1520@naver.com
                                                </td>
                                                <td>
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    phone
                                                </td>
                                                <td>
                                                    010-xx79-6xxx
                                                </td>
                                                <td>
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Basic Address
                                                </td>
                                                <td>
                                                    Incheon
                                                </td>
                                                <td>
                                                    &nbsp;
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Container>
            </div>
        </LayoutTwo>
    );
};

export default MyPage;
