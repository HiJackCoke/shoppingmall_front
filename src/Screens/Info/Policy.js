import React from 'react';
import {Col, Container} from "react-bootstrap";
import {LayoutTwo} from "../../components/Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";


const Policy = () => {
    return (
        <LayoutTwo>
            <Breadcrumb
                title="Policy"
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
            />

            <div className="policy-area space-mt--r100 space-mb--r100">
                <Container>
                    <Col lg={12} className="space-mb-mobile-only--50">
                        <h3 className="title text-center mb-5">
                            Policy
                        </h3>
                        <div className="lezada-form login-form--register ">
                            <p>
                                토니스트은 (이하 "회사"는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다. 회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                                <br/>
                                <br/>
                                ■ 수집하는 개인정보 항목 및 수집방법 가. 수집하는 개인정보의 항목 o 회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다. - 회원가입시 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 자택 전화번호 , 휴대전화번호 , 이메일 , 14세미만 가입자의 경우 법정대리인의 정보 - 서비스 신청시 : 주소, 결제 정보
                            </p>
                        </div>
                    </Col>
                </Container>
            </div>
        </LayoutTwo>


    );
};

export default Policy;
