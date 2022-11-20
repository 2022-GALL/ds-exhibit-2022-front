import React from 'react';
import { useParams } from 'react-router';
import '../../css/DetailPage.css';
import worksData from '../../worksData';

const DetailPage = () => {
    const {id} = useParams();
    const thisWork = worksData.find((work) => {
        console.log(work);

        return work.id == id;
    })


    return (
        <div className='detail'>
            <div id='profile'>
                <p id='title'>{thisWork.name}</p>
                <p id='department'>컴퓨터공학과, <span id='year'>2021</span></p>
            </div>
        </div>
    );
}

export default DetailPage;