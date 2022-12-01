import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import '../css/List.css'

const List = (props) => {
    // 작품 클릭 시 화면 이동
    const navigate = useNavigate();

    const [works, setWorks] = useState([]);

    const pageNum = 0;

    // 드롭다운에서 선택된 값 가져오기
    console.log(props.dropdown);

    // useEffect(함수, 배열) : 컴포넌트가 화면에 나타났을 때 자동 실행 (1번만)
    useEffect(() => {
        // fetch(url, options) : Http 요청 함수
        // fetch(`http://3.36.144.189/api/works?department=${department}&major=${major}&year=0&page=0`)
        fetch(`http://15.164.121.45/api/works/all?page=${pageNum}`)
        .then((response) => {
            // 정상적으로 요청되면 json 값 리턴
            if(response.status === 200) {
                console.log("success");
                return(response.json());
            } else{
                return Promise.reject(response);
                console.log("fail")
            }
        })
        // 받아 온 데이터 중 'data' 값만 분리
        .then((data) => {
            console.log(data.data);
            setWorks(data.data);
        })
        // 오류 처리
        .catch(err => {
            console.log(err);
        })
    }, []);

    

    return(
        // 화면에 작품 출력
        works && works.map((list) => (
            <div className='parent'>
                <div className='card' key={list.id} onClick={() => {navigate(`/works/${list.id}`)}}>
                    <div className='card_inner'>
                        <img className='card_img' src={`/frontend${list.workImg}`} />
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