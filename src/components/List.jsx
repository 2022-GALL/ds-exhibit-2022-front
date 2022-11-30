import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import '../css/List.css'


const List = (props) => {
    // 작품 클릭 시 화면 이동
    const navigate = useNavigate();

    const [works, setWorks] = useState([]);

    // fetch(`http://3.36.144.189/api/works/all?page=0`)
    // .then((response) => response.json())
    // .then((data) => console.log(data));

    // useEffect(함수, 배열) : 컴포넌트가 화면에 나타났을 때 자동 실행 (1번만)
    useEffect(() => {
        // fetch(url, options) : Http 요청 함수
        // fetch(`http://3.36.144.189/api/works?department=${department}&major=${major}&year=0&page=0`)
        fetch(`http://3.36.144.189/api/works/all?page=0`)
        .then((response) => {
            if(response.status === 200) {
                response.json();
                console.log("success")
            } else{
                return Promise.reject(response);
                console.log("fail")
            }
        })
        .then((data) => {
            setWorks(data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);


    return(
        works && works.map((list) => (
            <div className='parent'>
                <div className='card' key={list.id} onClick={() => {navigate(`/works/${list.id}`)}}>
                    <div className='card_inner'>
                        <img className='card_img' src={list.workImg} />
                        <div>
                        <div className='card_name'>{list.title}</div>
                        <div className='card_team'>{list.authorName}</div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )

    
    // const works = worksmap((work) => {
        
    // });
    // return(
    //     <>
    //         {works}
    //     </>
    // );
};

export default List;