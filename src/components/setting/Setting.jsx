import "./style.scss";
import { useUserContext } from "../context/userContext/UserContextProvider";

export default function Setting(props){
    const {user} = useUserContext();
    console.log(user);
    return(
        <>
            <h1>setting</h1>
            <p>{user.user.username}</p>
        </>
    )
}