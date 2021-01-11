import React from 'react'
import './App.css';

export default function AccountList(props) {
    return (
        <div>
        {
          props.accounts.map((account,index) => {
              return <div>{account.name},{account.email}</div>
          })
        }
        </div>
    )
}
