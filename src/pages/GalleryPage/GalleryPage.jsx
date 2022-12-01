import React, { useState } from 'react';
import DropdownCascade from 'react-dropdown-cascade';
import List from '../../components/List';
import '../../css/GalleryPage.css'

// 드롭다운
const items = [
    {
        value: 'global',
        label: '글로벌융합대학',
        children: [
        { value: 'korean', label: '국어국문학전공'}, { value: 'japanese', label: '일어일문학전공'},
        { value: 'chinese', label: '중어중문학전공'}, { value: 'english', label: '영어영문학전공'},
        { value: 'french', label: '불어불문학전공'}, { value: 'germany', label: '독어독문학전공'},
        { value: 'spanish', label: '스페인어전공'}, { value: 'history', label: '사학전공'},
        { value: 'philosophy', label: '철학전공'}, { value: 'arthistory', label: '미술사학전공'},
        { value: 'humanity', label: '문화인류학전공'}, { value: 'management', label: '경영학전공'},
        { value: 'accounting', label: '회계학전공'}, { value: 'trade', label: '국제통상학전공'},
        { value: 'law', label: '법학전공'}, { value: 'library', label: '문헌정보학전공'},
        { value: 'sociology', label: '사회학전공'}, { value: 'psychology', label: '심리학전공'},
        { value: 'childfamily', label: '아동가족학전공'}, { value: 'socialwelfare', label: '사회복지학전공'},
        { value: 'political', label: '정치외교학전공'}, { value: 'clothesdesign', label: '의상디자인전공'},
        { value: 'childeducation', label: '유아교육과'}
        ]
    },
    {
        value: 'science',
        label: '과학기술대학',
        children: [
            { value: 'computer', label: '컴퓨터공학전공'}, { value: 'itmedia', label: 'IT미디어공학전공'},
            { value: 'security', label: '사이버보안전공'}, { value: 'software', label: '소프트웨어전공'},
            { value: 'bio', label: '바이오공학전공'}, { value: 'math', label: '수학전공'},
            { value: 'statistics', label: '정보통계학전공'}, { value: 'chemistry', label: '화학전공'},
            { value: 'foodnutrition', label: '식품영양학전공'}, { value: 'physical', label: '생활체육학전공'},
        ]
    },
    {
        value: 'art',
        label: 'Art&Design',
        children: [
            { value: 'oriental', label: '동양화전공'}, { value: 'western', label: '서양화전공'},
            { value: 'interior', label: '실내디자인전공'}, { value: 'visual', label: '시각디자인전공'},
            { value: 'textile', label: '텍스타일디자인전공'}
        ]
    }
];

function GalleryPage(props) {
    const [dropdownValue, setDropdownValue] = useState();

    function handleCategoryChange(event) {
        setDropdownValue(event.target.value);
    }
    // function getFilteredList() {
    //     if (!dropdownValue) {
    //         return 
    //     }
    //     return works.filter((item) => item.major === dropdownValue)
    // }

    return (
        <div>
            <div className='div_search'>
                <label>학과별 검색</label>
                <DropdownCascade customStyles={{dropdown: { style: { marginLeft:'5px' }}}}
                    items={items}
                    onSelect={(value, selectedItems) => {
                        console.log(value);
                        setDropdownValue(value);
                        // handleCategoryChange
                    }}
                    value={dropdownValue}
                />
            </div>
            <List dropdown={dropdownValue}/>
        </div>
    );
}

export default GalleryPage;