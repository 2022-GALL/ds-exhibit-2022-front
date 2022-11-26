import React from 'react';
import worksData from '../worksData';
import { useNavigate } from 'react-router';
import dummyImg from '../images/200x200_dummy.png'
import '../css/List.css'

const List = () => {
    const navigate = useNavigate();
    const works = worksData.map(work => {
        return (
            <div className='parent'>
                <div className='card' key={work.id} onClick={() => {navigate(`/computer/${work.id}`)}}>
                    <div className='card_inner'>
                        <img className='card_img' src={dummyImg} />
                        <div>
                        <div className='card_name'>{work.name}</div>
                        <div className='card_team'>{work.team}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return(
        <>
            {works}
        </>
    );
};

export default List;