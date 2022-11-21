import React from 'react'
import '../../css/LoginPage.css'

export default function LoginPage() {
    return (
    <div className="form1">
        
        <div class="container py-4">
            <div class="row align-items-center justify-content-between">
                <div class="navbar-brand h1 text-center" >
                    <span class="text-dark h2">로그인</span>                 
                </div>
            </div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">아이디</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
				<div class="form-group has-success">
					<label class="form-label mt-4" for="inputValid">비밀번호</label>
					<input type="password" class="form-control is-valid" id="inputValid"></input>
					<div class="valid-feedback"></div>
				</div>
                <div>
                    <button id="loginbtn" class="btn btn-lg" type="button">로그인</button>
                </div>
            </form>
            <div id="footer">
                <div>덕성여자대학교 온라인 졸업 전시공간</div>
            </div>
        </div>
    
    </div>
    )
}
