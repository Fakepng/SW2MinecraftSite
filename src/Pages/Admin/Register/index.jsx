import React, { useState } from 'react'
import  { useNavigate } from 'react-router-dom'
import axios from 'axios'
import aesjs from 'aes-js'

const Admin = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const key = [ 16, 11, 13, 12, 9, 6, 3, 4, 1, 8, 2, 10, 5, 14, 15, 7 ];
        const passwordBytes = aesjs.utils.utf8.toBytes(password);
        const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
        const encryptedBytes = aesCtr.encrypt(passwordBytes);
        const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

        axios.post("https://api.fakepng.com/admin/register", { user, password: encryptedHex }).then((response) => {
            alert(`Welcome ${response.data.user}`);
            navigate('/admin/dashboard');
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="register">
                <label>Username:
                    <input
                        type="text"
                        name="username"
                        value={user || ""}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </label>
                <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={password || ""}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </>
    )
}

export default Admin