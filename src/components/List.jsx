import React, { useState } from 'react';
import worksData from '../worksData';
import { useNavigate } from 'react-router';
import dummyImg from '../images/200x200_dummy.png'
import '../css/List.css'

const List = () => {
    // 작품 클릭 시 화면 이동
    const navigate = useNavigate();
    const [works, setWorks] = useState([]);

    function fetchWorksHandler() {
        fetch('http://3.36.144.189/api/works')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const transWorks = data.result.map((worksData) => {
                    return (
                        <div className='parent'>
                            <div className='card' key={worksData.id} onClick={() => {navigate(`/computer/${worksData.id}`)}}>
                                <div className='card_inner'>
                                    <img className='card_img' src={worksData.img} />
                                    <div>
                                    <div className='card_name'>{worksData.name}</div>
                                    <div className='card_team'>{worksData.team}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                });
                setWorks(transWorks);
            })
    }

    
    // const works = worksData.map((work) => {
        
    // });
    return(
        <>
            {works}
        </>
    );
};

export default List;