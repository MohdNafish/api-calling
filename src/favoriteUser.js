import React,{useEffect, useState} from 'react'

 const FavoriteUser = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('FavoriteList'));
      if (items) {
       setItems(items);
      }
    }, []);

    const getElementsfromLocalStorage = () => {
        let elements = [];
        if (localStorage.getItem('FavoriteList')) {
            elements = JSON.parse(localStorage.getItem('FavoriteList'));
        }
        return elements;  
    };
    
    const removeElementLocalStorage = (id) => {
        let elements = getElementsfromLocalStorage();
        elements = elements.filter(element => element.id !== id);
        setItems(elements)
        localStorage.setItem('FavoriteList', JSON.stringify(elements));
    };

  return (
    <>
        <div style={{padding: "20px"}}>
            <table style={{ width: '100%', textAlign: "left" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>City</th>
                        <th>Delete Item</th>
                    </tr>
                </thead>
                <tbody>
                {
                    items && items.length ? 
                    items.map((element) => (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.username}</td>
                            <td>{element.email}</td>
                            <td>{element.phone}</td>
                            <td>{element.website}</td>
                            <td>{element.city}</td>
                            <td>
                                <button onClick={()=> removeElementLocalStorage(element.id)} >Delete</button>
                            </td>
                        </tr>
                    )) :
                    <tr>
                        <td style={{textAlign: "center", paddingTop: "30px"}} colSpan={8}>No Favorite list added.</td>
                    </tr>
                }
                </tbody>
            </table>
        </div>
    </>
  )
}
export default FavoriteUser