import React from 'react';
import '../../css/DetailPage.css';

function DetailPage(props) {
    return (
        <div className='detail'>
            <div id='profile'>
                <p id='title'>공공 생활을 위한 앱서비스, 투게더</p>
                <p id='department'>컴퓨터공학과, <span id='year'>2021</span></p>
            </div>
        </div>
    );
}

export default DetailPage;