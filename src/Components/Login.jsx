import { Button, Col, Input, Row } from 'antd';
import React, {useEffect, useState} from 'react'
import { signInUser } from '../config/authCall';
import { useAuth } from '../Hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login({mail}) {
    const { user } = useAuth();
    const navigate = useNavigate();
    
    //userName va a inicializarse como ''
    //setUserName va a cambiar el parametro de userName
    const [userName, setUserName] = useState(mail);
    const [userPass, setUserPass] = useState('');
    useEffect(() => {
        if(user) navigate('/Navbar');
    }, [user])
    

    const cambiarNombre = (inputValue) => {
        setUserName(inputValue.target.value)
    }
    const cambiarContra = (inputValue) => {
        setUserPass(inputValue.target.value)
    }
    const login = () => {
        signInUser(userName, userPass); 
    }

    //Tratar de imprimir la lista de numeros
        return (
        <div>
            <>{JSON.stringify(user)}</>
            <Row>
                <Col xs={24} md={12} lg={12} xl={12}>
                    <Input size="small" placeholder='Correo del Usuario'
                    value={userName} onChange={cambiarNombre}
                    ></Input>
                </Col>
                <Col xs={24} md={12} lg={12} xl={12}>
                    <Input.Password size='small' placeholder='Contraseña' value={userPass}
                    onChange={cambiarContra}/>
                </Col>
            </Row>
        <Button onClick={login}>Login</Button>
        </div>
    );
}
