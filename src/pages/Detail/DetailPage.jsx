import React from 'react';
import { useParams } from 'react-router';
import '../../css/DetailPage.css';
import worksData from '../../worksData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCopyright, faCircle } from "@fortawesome/free-solid-svg-icons";
import dummyImg from '../../images/200x200_dummy.png'
import List from '../../components/List';

const DetailPage = () => {
    const {id} = useParams();
    const thisWork = worksData.find((work) => {
        console.log(work);

        return work.id == id;
    })

    return (
        <div className='detail'>
            <FontAwesomeIcon icon={faCircleUser} className='profile_img'/>

            <div id='div_profile'>
                <p id='title'>{thisWork.name}</p>
                <p id='department'>컴퓨터공학과, <span id='year'>2021</span></p>
                <br></br>
                <hr></hr>
                <p id='team'>{thisWork.team}</p>
                <p id='member'>김덕성, 이컴공, 강덕조, 차미고</p>
                <p id='email'>email@duksung.ac.kr</p>
            </div>

            <img src={dummyImg} className='img'></img>
            <p id='description'>{thisWork.description}</p>
            <p id='date'>2022.03.01 - 2022.11.10</p>
            <hr></hr>
            <FontAwesomeIcon icon={faCopyright} />
            <FontAwesomeIcon icon={faCircle} />

            <h5>More</h5>
            <a id='video' href="https://www.naver.com/">작품 시연 영상</a>

            <h5>다른 작품 보러가기</h5>
            <List />
        </div>
    );
}

export default DetailPage;