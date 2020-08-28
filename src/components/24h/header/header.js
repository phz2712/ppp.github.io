import React, {useState,} from "react";
import {StyleDiv} from './styledheader';
import { connect } from 'react-redux';
import homapage from '../image/24h_logo_trang_chu_2015.png';
import menu from '../image/menu.png';
import soccer from "../image/bongda.png";
import business from '../image/KinhDoanh.png';
import market from '../image/ThiTruong.png';
import health from '../image/SucKhoe.png';
import hitech from '../image/hi-tech.png';
import showbiz from '../image/showbiz.png';
import world from '../image/thegioi.png';
import beauty from '../image/PhaiDep.png';
import sport from '../image/TheThao.png';
import specialsport from '../image/NgoaiHangAnh.png';
import date from '../image/XemLich.png';
import search from '../image/search.png';
import {BongDa, KinhDoanh, ThiTruong, SucKhoe, HiTech, ShowBiz, TheGioi,  DanhMuc} from './listTitle'

function Header(props) {
    return (
        <StyleDiv className="cover">
            <div className="blank"></div>
            <StyleDiv className="content">
                <img className="icon" src={homapage} alt="Trang chủ"></img>
                <div>
                    <div className="group_icon">
                        <img className="icon-menu" src={menu} alt="Menu"></img>
                        <div className="listTitle"><DanhMuc /></div>
                    </div>
                </div>
                <div className='group-title'>
                    <div type='button' className="group_icon">
                        <span className="icon-span"><img className="icon2" src={soccer} alt="Bóng Đá"></img></span>
                        <span className="header_title">BÓNG ĐÁ</span>  
                    </div>
                    <div className="listTitle"><BongDa /></div>
                </div>
                <div className='group-title'>
                    <div className="group_icon">
                        <span className="icon-span"><img className="icon2" src={business} alt="Kinh Doanh"></img></span>
                        <span className="header_title">KINH DOANH</span>
                    </div>
                    <div className="listTitle"><KinhDoanh /></div>
                </div>
                <div className='group-title'>
                    <div className="group_icon">
                        <span className="icon-span"><img className="icon2" src={market} alt="thị trường"></img></span>
                        <span className="header_title">THỊ TRƯỜNG</span>
                    </div>
                    <div className="listTitle"><ThiTruong /></div>
                </div>
                <div className='group-title'>
                    <div className="group_icon">
                        <span className="icon-span"><img className="icon2" src={health} alt="sức khỏe"></img></span>
                        <span className="header_title">SỨC KHỎE</span>
                    </div>
                    <div className="listTitle"><SucKhoe /></div>
                </div>
                <div className='group-title'>
                    <div className="group_icon">
                        <span className="icon-span"><img className="icon2" src={hitech} alt="hi tech"></img></span>
                        <span className="header_title">HI-TECH</span>
                    </div>
                    <div className="listTitle"><HiTech /></div>
                </div>
                <div className='group-title'>
                    <div className="group_icon">
                        <span className="icon-span"><img className="icon2" src={showbiz} alt="showbiz"></img></span>
                        <span className="header_title">SHOWBIZ</span>
                    </div>
                    <div className="listTitle"><ShowBiz /></div>
                </div>
                <div className='group-title'>
                    <div className="group_icon">
                        <span className="icon-span"><img className="icon2" src={world} alt="thế giới"></img></span>
                        <span className="header_title">THẾ GIỚI</span>
                    </div>
                    <div className="listTitle"><TheGioi /></div>
                </div>
                <div className='group-title'>
                    <div className="group_icon">
                        <span className="icon-span"><img className="icon2" src={beauty} alt="phái đẹp"></img></span>
                        <span className="header_title">PHÁI ĐẸP</span>
                    </div>
                </div>
                <div className='group-title'>
                    <div className="group_icon">
                        <span className="icon-span"><img className="icon2" src={sport} alt="thể thao"></img></span>
                        <span className="header_title">THỂ THAO</span>
                    </div>
                </div>
                <div className='group-title'>
                    <div className="group_icon">
                        <span className="icon-span"><img className="icon2" src={specialsport} alt="ngoại hạng anh"></img></span>
                        <span className="header_title">NGOẠI HẠNG ANH</span>
                    </div>
                </div>
                <div className='group-title'>
                    <div className="group_icon">
                        <span className="icon-span"><img className="icon2" src={date} alt="xem lịch"></img></span>
                        <span className="header_title">XEM LỊCH</span>
                    </div>
                </div>
                <div className="between"></div>
                <div className="icon-search"><img src={search} alt="search"></img></div>
                <input className="typeSearch" placeholder='Nhập tin tức cần tìm'></input>
            </StyleDiv>
            <div className="blank"></div>
        </StyleDiv>
    );
}

export default Header;