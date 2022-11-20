import React from 'react';
import '../../css/MyPage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPlus, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import dummyImg from '../../images/200x200_dummy.png'

function MyPage(props) {
    return (
        <>
        <FontAwesomeIcon icon={faCircleUser} className='btn_profile'/>
        <div className='div_infoBox'>
            <div className="div_mypage">
            <p>김덕성 님</p>
            <hr></hr>
            <p>email@duksung.ac.kr</p>
            <p>컴퓨터공학전공, 수학전공</p>
            </div>
        </div>
        <div className='div_workBox'>
            <div className='work_title'><p id='p_work'>나의 작품</p>
            <FontAwesomeIcon icon={faPlus} className='btn_plus' /></div>
        </div>
        <hr className='hr'></hr>
        <div className='div_mywork'>
            <div className='div_img'>
                <img src={dummyImg} className='img'></img>
                <FontAwesomeIcon icon={faPen} className='btn_edit'/>
                <FontAwesomeIcon icon={faTrash} className='btn_delete'/>
            </div>
        </div>
        </>
    );
}

export default MyPage;