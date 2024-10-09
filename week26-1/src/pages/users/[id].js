import React from 'react';

function UserDetail({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  // params.id는 동적 라우트로 전달된 사용자 ID를 나타냄
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

  return {
    props: {
      user,
    },
  };
}

export default UserDetail;