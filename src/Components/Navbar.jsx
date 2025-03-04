import { Button } from "antd";
import React, {useEffect, useState} from "react";
import { useAuth } from "../Hooks/useAuth";
import { LogoutOutlined } from "@ant-design/icons"
import { readData } from "../config/reallTimeCalls";
import { readDataFirestore } from "../config/fireStoreCalls";

export default function NavBar() {
    const { logout, user } = useAuth();

    //Si se intenta usar el useState, deben de usarse los
    //corchetes!
    const [ localUser, setLocalUser ] = useState(null)

    useEffect(() => {
        readUser();
    },[user]);

    const readUser = async () => {
        console.log("Ingresando a readUser")
        const lUser = await readData("users", "email", user.email);
        if(lUser.val()) {
            setLocalUser(lUser.val()[Object.keys(lUser.val())[0]]);
        }
        const lUser2 = await readDataFirestore("users", "email", user.email);
        if(!lUser2.empty) console.log(lUser2.docs[0].data())
    };

    return (
        <div style={{ textAlign: 'left'}}>
            {localUser&&<>{localUser.name}</>}
            <LogoutOutlined onClick={logout}></LogoutOutlined>
        </div>
    );
}