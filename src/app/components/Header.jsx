"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Dropdown} from "react-bootstrap";
import "./Header.scss";
import {Link} from "@nextui-org/react";
import React, {useEffect, useState} from 'react';


const navHotline = [
    {label: 'Hotline Hỗ Trợ', content: '02871002828'},
    {label: 'Hotline Vé Máy Bay', content: '19002644'},
];
const navHotline_show = navHotline.map((item) => (
    <NavDropdown.Item key={item.label}>
        <span className="fw-bolder">{item.label}: </span>
        <span className="fw-bold text-danger">{item.content}</span>
    </NavDropdown.Item>
));
const navTour = [
    {label: 'TOUR GIÁP THÌN', href: '/'},
    {label: 'TOUR NƯỚC NGOÀI', href: '/'},
    {label: 'TOUR TREKKING', href: '/'},
    {label: 'TOUR THEO YÊU CẦU', href: '/'}
];
const navDiary = [
    {label: 'KHÁCH LẺ GHÉP ĐOÀN', href: '/'},
    {label: 'BẤT ĐỘNG SẢN', href: '/'},
    {label: 'SỨC KHỎE - BẢO HIỂM', href: '/'},
    {label: 'GIẢI TRÍ - SHOWBIZ', href: '/'},
    {label: 'CÔNG NGHỆ CAO', href: '/'}

];

const navDiary_show = navDiary.map((item) => (
    <NavDropdown.Item key={item.label}>
        <NavDropdown.Item key={item.label}>
            <Nav.Link href={item.href} > {item.label}  </Nav.Link>
        </NavDropdown.Item>
    </NavDropdown.Item>
));

const Header = () => {
    const dropdownToggleElement = document.querySelector('.dropdown-toggle');
    const [showDropdown, setShowDropdown] = useState(false);

    const show_menu = () => {
        setShowDropdown(true);

    }

    const hide_menu = () => {
        setShowDropdown(false);

    }

    return (
        <>
            <Navbar expand="lg" className=" theme-background text-white navbar-above">
                <Container>
                    <div className={"d-flex justify-content-between w-100"}>

                        <div>
                            <NavDropdown id={'dropdown-hotline'}
                                         title={<span className='text-hotline fw-bold text-warning'>Hotline: <span
                                             className='text-white fw-bold'>1900 2644</span></span>}
                                         menuVariant="white">
                                {navHotline_show}
                            </NavDropdown>
                        </div>
                        <div className={"d-flex gap-4"}>
                            <Dropdown>
                                <Dropdown.Toggle as="span" id="dropdown-tour-watched"
                                                 className="custom-toggle cursor-pointer text-white">
                                    <i className='bx bxs-paper-plane '></i>
                                    <span className="ms-1">Tour đã xem</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle as="span" id="dropdown-cart"
                                                 className="custom-toggle cursor-pointer text-white">
                                    <i className='bx bx-basket'></i>
                                    <span className="ms-1">Giỏ hàng</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div>
                                |
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as="span" id="dropdown-language"
                                                 className="custom-toggle cursor-pointer text-white d-flex  justify-content-center flex-wrap align-items-center">
                                    <div className='rounded-circle bg-white  container-img'>
                                        <img src={'https://vigomanager.com/app-assets/mobile/manager/image/flag_vn.png'}
                                             alt='flag_icons'
                                             className={`inline-block w-100 `}/>
                                    </div>
                                    <span className={'ms-1 text-language'}>Ngôn ngữ</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </div>
                </Container>
            </Navbar>
            <div className='line_stripe'>
                <div className='line_stripe_righthaft'></div>
                <div className='line_stripe_wrap'></div>
            </div>
            <div className="clearfix"></div>
            <Navbar expand="lg" className=" theme-color bg-white navbar-behind header position-relative text-center">
                <Container>
                    <Link href="/">
                        <img
                            src="https://namecard.nhanhtravel.com/app-assets/mobile/GoldenSmileTravel/logo-gst-dovang-1624975291.png"
                            style={{width: '250px'}}/>
                    </Link>
                    <div>
                        <Nav>

                            <Nav.Link href="/" >TRANG CHỦ</Nav.Link>
                            <Nav.Link className='navcha '>
                                <Nav.Link href="/" className={'p-0'}> TOUR <i className='bx bx-caret-down'></i></Nav.Link>
                                <ul className='navcon'>
                                    <li><Nav.Link>TOUR GIÁP THÌN 2024</Nav.Link></li>
                                    <li><Nav.Link>TOUR NƯỚC NGOÀI <i className='bx bx-caret-down'></i>
                                        <ul className='navchau'>
                                            <li><Nav.Link>DU LỊCH INDONESIA</Nav.Link></li>
                                            <li><Nav.Link>DU LỊCH LÀO</Nav.Link></li>
                                            <li><Nav.Link>DU LỊCH CHÂU ÂU</Nav.Link></li>
                                            <li><Nav.Link>DU LỊCH ÚC</Nav.Link></li>
                                            <li><Nav.Link>DU LỊCH ẤN ĐỘ</Nav.Link></li>
                                        </ul>
                                    </Nav.Link>
                                    </li>
                                    <li><Nav.Link>TOUR THEO YÊU CẦU<i className='bx bx-caret-down'></i>
                                        <ul className='navchau'>
                                            <li><Nav.Link>TOUR GIA ĐÌNH</Nav.Link></li>
                                            <li><Nav.Link>TỔ CHỨC SỰ KIỆN</Nav.Link></li>
                                            <li><Nav.Link>TOUR NGHỈ DƯỠNG</Nav.Link></li>
                                            <li><Nav.Link>TOUR HÀNH HƯƠNG</Nav.Link></li>
                                        </ul>
                                    </Nav.Link>
                                    </li>
                                    <li><Nav.Link>TOUR TREKKING</Nav.Link></li>
                                </ul>
                            </Nav.Link>

                            <Nav.Link href="/">FLASHPACKING</Nav.Link>
                            <Nav.Link href="/">VISA</Nav.Link>
                            <Nav.Link href="/">VÉ MÁY BAY </Nav.Link>
                            <Nav.Link href="/">VOUCHER-COMBO</Nav.Link>

                            <Nav.Link className='navcha'><Nav.Link href='/Camnang' className={'p-0'}>NHẬT KÝ <i className='bx bx-caret-down'></i></Nav.Link>
                                <ul className='navcon'>
                                    <li><Nav.Link>KHÁCH LẺ GHÉP ĐOÀN</Nav.Link></li>
                                    <li><Nav.Link>BẤT ĐỘNG SẢN</Nav.Link></li>
                                    <li><Nav.Link>SỨC KHỎE - BẢO HIỂM</Nav.Link></li>
                                    <li><Nav.Link>CƠ QUAN NHÀ NƯỚC</Nav.Link></li>
                                    <li><Nav.Link>SỨC KHỎE</Nav.Link></li>
                                    <li><Nav.Link>GIẢI TRÍ - SHOWBIZ</Nav.Link></li>
                                    <li><Nav.Link>CÔNG NGHỆ CAO</Nav.Link></li>
                                    <li><Nav.Link>TÀI CHÍNH - NGÂN HÀNG</Nav.Link></li>
                                    <li><Nav.Link>SẢN XUẤT - CHẾ BIẾN</Nav.Link></li>
                                    <li><Nav.Link>THẨM MỸ - LÀM ĐẸP</Nav.Link></li>
                                    <li><Nav.Link>GIA ĐÌNH - NHÓM BẠN BÈ</Nav.Link></li>
                                    <li><Nav.Link>TÔN GIÁO - THIỆN NGUYỆN</Nav.Link></li>
                                </ul>
                            </Nav.Link>

                            <Nav.Link href="/about">TIN TỨC </Nav.Link>
                            <Nav.Link href="/Contact">REVIEW</Nav.Link>
                        </Nav>

                    </div>

                </Container>
            </Navbar>
        </>

    )
};
export default Header