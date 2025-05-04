import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("로그인 성공:", userCredential.user);
        } catch (error) {
        console.error("로그인 실패:", error.message);
        }
    };

    return (
        <div>
            <h1>로그인페이지입니다.</h1>

            <h2>Firebase 로그인</h2>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" type="password" />
            <button onClick={handleLogin}>로그인</button>
        </div>
    )
}

export default Login;