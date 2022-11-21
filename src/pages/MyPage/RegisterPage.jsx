import React from 'react'
import '../../css/RegisterPage.css'

export default function RegisterPage() {
    return (
        <div className="form1">
        
        <div class="container py-4">
            <div class="row align-items-center justify-content-between">
                <div class="navbar-brand h1 text-center">
                    <span class="text-dark h2">작품등록</span>   
                                
                </div>
                <div>
                <span id="editable" class="text-dark h6">마이페이지에서 수정가능합니다.</span>   
                </div>
            </div>
            <form>
                <form>
                <div class="row">
                    <div class="col">
                        <label for="exampleInputEmail1" class="form-label mt-4">작가 이름</label>
                        <input type="text" class="form-control" id="ownername" placeholder='필수항목'></input>
                    </div>
                    <div class="col">
					<label class="form-label mt-4" for="inputValid">학과 이름</label>
					<input type="text" class="form-control" id="majorname" placeholder='필수항목'></input>
				</div>
                
                </div>
                </form>
                <div class="row">
                    <div class="col">
                        <label for="exampleInputEmail1" class="form-label mt-4">팀명</label>
                        <input type="text" class="form-control" id="ownername" placeholder='필수항목'></input>
                    </div>
                    <div class="col">
					<label class="form-label mt-4" for="inputValid">팀원 명</label>
					<input type="text" class="form-control" id="majorname" placeholder='필수항목'></input>
				</div>
                </div>
                
                

				<div class="form-group">
					<label class="form-label mt-4" for="inputInvalid">작가 프로필 사진 업로드</label> 
                    <div class="button">
                    </div>
                    <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange="loadFile(this)"></input>
				</div>
                <div class="form-group">
					<label class="form-label mt-4" for="inputValid">프로젝트 진행기간</label>
					<input type="text" class="form-control" id="name" placeholder='필수항목'></input>
					
				</div>
                <div class="form-group">
					<label class="form-label mt-4" for="inputInvalid">작품 대표사진 업로드</label> 
                    <div class="button">
                    </div>
                    <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange="loadFile(this)"></input>
				</div>
                <div class="form-group">
                    <label class="form-label mt-4">작품 제목</label>
                    <input type="text" class="form-control" id="name" placeholder='필수항목'></input>
                </div>
                
                <div class="form-group">
					<label class="form-label mt-4" for="inputValid">작품 소개</label>
					<textarea class="form-control" id="name" placeholder='필수항목'></textarea>
					
				</div>
                <div class="form-group">
					<label class="form-label mt-4" for="inputInvalid">작품 상세이미지 업로드</label> 
                    <div class="button">
                    </div>
                    <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange="loadFile(this)"></input>
				</div>
                <div class="form-group">
					<label class="form-label mt-4" for="inputValid">웹사이트 링크</label>
					<input type="text" class="form-control" id="name" placeholder='필수항목이 아닙니다.'></input>
					
				</div>

                <div>
                    <button id="joinbtn" class="btn btn-lg" type="button">작품 등록</button>
                </div>
            </form>
        </div>
    
    </div>
    )
}
