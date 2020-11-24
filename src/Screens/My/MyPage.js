import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { FaCloudDownloadAlt, FaRegEdit } from "react-icons/fa";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {LayoutTwo} from "../../components/Layout/Layout";

const MyPage = () => {
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
                                                    받는분
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
                                                    <form
                                                        style={{
                                                            margin: "-10px 0px"
                                                        }}
                                                    >
                                                        <button className="lezada-button lezada-button--small">
                                                            배송지 변경
                                                        </button>
                                                    </form>
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
                                                    <form
                                                        style={{
                                                            margin: "-10px 0px"
                                                        }}
                                                    >
                                                        <button className="lezada-button lezada-button--small">
                                                            Change Password
                                                        </button>
                                                    </form>
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
