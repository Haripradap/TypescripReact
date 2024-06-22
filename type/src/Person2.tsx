import { useContext } from "react"
import { UserContext } from "./UserContext";

export interface Props{
    name: string,
    age: number,
    isMarried: boolean
}

const Person2 = (props:Props) => {

    const {user , addUser, updateUser, deleteUser} = useContext(userContext);
  return (
    <>
    <h1> Name :{props.name} </h1>
    <h3>Age:{props.age}  </h3>
    <h3>isMarried: {props.isMarried ? "Yes" : "No"} </h3>
    </>
  )
}

export default Person2