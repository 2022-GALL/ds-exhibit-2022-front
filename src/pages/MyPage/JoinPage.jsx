import React from 'react'
import '../../css/JoinPage.css';

export default function JoinPage() {
    return (
        <div className="form1">
        
        <div class="container py-4">
            <div class="row align-items-center justify-content-between">
                <div class="navbar-brand h1 text-center">
                    <span class="text-dark h2">회원가입</span>                 
                </div>
            </div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">아이디</label> <span id="warning">*덕성여자대학교 이메일로만 가입가능</span>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder='*******@duksung.ac.kr'></input>
                </div>
				<div class="form-group has-success">
					<label class="form-label mt-4" for="inputValid">비밀번호</label>
					<input type="password" class="form-control is-valid" id="inputValid" placeholder='6자 이상이어야 합니다.'></input>
					<div class="valid-feedback"></div>
				</div>

				<div class="form-group has-danger">
					<label class="form-label mt-4" for="inputInvalid">비밀번호 재확인</label> 
					<input type="password" class="form-control is-invalid" id="inputInvalid"></input>
					<div class="invalid-feedback">비밀번호가 일치하지 않습니다</div>
				</div>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">이름</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div class ="bir_wrap">
                    <label class="form-label mt-4">전공</label>
                    <div class="bir_yy">
                        <span class="ps_box">
                            <input type="text" class="form-control"></input>
                        </span>
                    </div>
                </div>
                <div>
                    <button id="joinbtn" class="btn btn-lg" type="button">회원가입</button>
                </div>
            </form>
        </div>
        <div id="footer">
            <div>덕성여자대학교 온라인 졸업 전시공간</div>
        </div>
    
    </div>
    
    )
}
