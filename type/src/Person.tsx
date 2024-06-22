import { useState } from "react"

export interface User{
    name: string,
    age: number,
    isMarried: boolean
}

const User = (props: User) => {
    const [showInfo, setShowInfo] = useState<boolean >(false);

    const toggleInfo = () => {
        setShowInfo((prev) => !prev)
    }

    const [personBio, setPersonBio] = useState<String | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setPersonBio(e.target.value)
    };

  return (
    <>
    {showInfo && (
        <>
    <h1> Name :{props.name} </h1>
    <h3>Age:{props.age}  </h3>
    <h3>isMarried: {props.isMarried ? "Yes" : "No"} </h3>
    </>
    )
}
<button onClick={toggleInfo}>Toogle hear</button>

<p> {props.name} Bio: {personBio === null ? "No Bio Available" : personBio} </p>
<input onChange={handleChange}/>
    </>
  )
}

export default User;