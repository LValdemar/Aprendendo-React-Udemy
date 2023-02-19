import {useState} from "react";

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);

    const [users, setUsers] = useState([
        { id: 1, name: "Matheus", age: 31},
        { id: 2, name: "joão", age: 28},
        { id: 3, name: "Pedro", age: 44},
        { id: 4, name: "Matheus", age: 39},
        { id: 5, name: "Maria", age: 35},
        { id: 6, name: "José", age: 24},
        { id: 7, name: "Fernando", age: 31},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 8);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>{users.map((user) => (
            <li key={user.id}>{user.name} tem {user.age} anos</li>
        ))}
            </ul>
            <button onClick={deleteRandom}> Delete random user</button>
    </div>
  )
}

export default ListRender