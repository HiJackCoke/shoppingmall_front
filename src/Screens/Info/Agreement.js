import React from 'react';
import {Col, Container} from "react-bootstrap";

import {LayoutTwo} from "../../components/Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";


const Agreement = () => {
    return (
        <LayoutTwo>
            <Breadcrumb
                title="AGREEMENT"
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
            />
            <div className="policy-area space-mt--r100 space-mb--r100">
                <Container>
                    <Col lg={12} className="space-mb-mobile-only--50">
                        <h3 className="title text-center mb-5">
                            AGREEMENT
                        </h3>
                        <div className="lezada-form login-form--register ">
                            <p>
                                제1조(목적)
                                <br/>
                                이 약관은 토니스트 (전자상거래 사업자)가 운영하는 TONIST 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.
                                <br/>
                                ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」
                            </p>
                        </div>
                    </Col>
                </Container>
            </div>
        </LayoutTwo>
    );
};

export default Agreement;
