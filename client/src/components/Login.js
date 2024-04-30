import React, { useState } from 'react'

function Login({login}) {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    function loginFn(){
        login(phone,password);
        setPhone('');
        setPassword('');
    }

    return (
        <div className='login-container'>
            <div className='login-header'>WHATSAPP WEB CLONE</div>
            <div className='card'>
                <div className='ins'>
                    <span className='heading'>To use WhatsApp on your computer:</span>
                    <ol>
                        <li>You need to Signin using your Google Account.</li>
                        <li>You can anytime logout from the Web.</li>
                        <li>Click on Signin button to continue using the Whatsapp Clone.</li>
                    </ol>

                    <div className='flex' style={{gap:"10px"}}>
                        <input type='tel' placeholder='Phone Number' className='input' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input type='password' placeholder='Password' className='input' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className='btn' type='button' onClick={() => loginFn()}>Login</button>
                    </div>
                </div>

                <img src="image/qr.png" alt="qr" className='qr' />
            </div>
        </div>
    )
}

export default Login