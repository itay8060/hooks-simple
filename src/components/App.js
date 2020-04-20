import React, { useState } from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList'

const App = () => {
const [resource, setResource] = useState('posts');

    return (
        <div>
            <div>
                <button onClick={() => setResource('posts')}>Post</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <UserList/>
            <ResourceList resource={resource}/>
        </div>
    );
}

// const App = () => {
//     return (
//         <div>App</div>
//     )
// }

export default App;