import React,{useState, useEffect} from "react";
import getData from "./useApi";
import { Link } from 'react-router-dom'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
     const getUserData =  async ()=>{
      const baseData = await getData(url);

        if(baseData){
          setLoading(false)
          setUserData(baseData)
        }

     };
     getUserData()

    }, []);

    console.log(userData, "data is loaded")

    const addFavorite = (id, name, username, email, phone, website, city) => {
      let elementArray = localStorage.getItem('FavoriteList') ? JSON.parse(localStorage.getItem('FavoriteList')) : []
      if(!elementArray.find((element,index) => element.id === id ))
      {
        const obj = {
          id: id,
          name: name,
          username: username,
          email: email,
          phone: phone,
          website: website,
          city: city,
        }
        elementArray.push(obj)
        localStorage.setItem('FavoriteList', JSON.stringify(elementArray))
      }
    }

      return (
        <>
        {
          !loading ? 
          <div style={{padding: '20px'}}>
            <h2 style={{textAlign: 'center'}}>Data fetched successfully.</h2>
            {/* {JSON.stringify(data)} */}

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
                  <th>Favorite</th>
                </tr>
              </thead>
              <tbody>
              {
                userData && userData.length ?
                userData.map((user, index)=>(
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.address.city}</td>
                    <td>
                      <Link to="/favorite">
                        <button onClick={() => addFavorite(user.id, user.name, user.username, user.email, user.phone, user.website, user.address.city)} >Favorite</button>
                      </Link>
                    </td>
                  </tr>
                  )) :
                  <tr>
                    <td>No data found.</td>
                  </tr>
              }
              </tbody>
            </table>
          </div>
          : "Loading..."
        }
        </>
  );
}

export default Home;