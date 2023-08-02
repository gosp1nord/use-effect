import { AllUsersComponent, UserDetailComponent } from './allUsers';
import { useEffect, useState } from "react";


export const UsersApp = () => {
  const [usersList, setUsersList] = useState({items: []});
  const [userDetail, setUserDetail] = useState({items: {}});
  
  useEffect(() => {
    Requests('users')
  }, [])

  const Requests = (param) => {
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${param}.json`)
      .then((result) => {
          let answer;
          if (result.status === 200) {
          answer = result.json();
          }
          return answer
      })
      
      .then((data) => {
        if (data) {
          if (param === 'users') {
            setUsersList({items: data})
          } else {
            setUserDetail({items: data})
          }
        }
      })
  }

  const onGetContetnUser = (e) => {
    Requests(e.target.id)
  }
  
  return (
    <div className='block-app'>
      <AllUsersComponent props={{click: onGetContetnUser, items: usersList.items}} />
        <div className="block-details">
          <UserDetailComponent props={userDetail.items}/>
        </div>
    </div>
  )
}
