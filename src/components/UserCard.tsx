import React from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <div className="mb-4">
      <div className="flex flex-row align-items-center card p-3 shadow-sm">
        <div className=" p-3">
          <img src={avatarUrl} alt={user.name} className="rounded-circle" style={{ width: '150px', height: '150px' }} />
        </div>
        <div className="card-body">
          <h1 className="card-title">{user.name}</h1>
          <div className="card-text">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
