import Link from 'next/link';
import React from 'react';

function Users({ users }) {
  return (
    <div>
      <Link href="/">🏡</Link>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// SSR을 위한 getServerSideProps 함수
export async function getServerSideProps() {
  // API 호출
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users, // users 데이터를 컴포넌트에 props로 전달
    },
  };
}

export default Users;
