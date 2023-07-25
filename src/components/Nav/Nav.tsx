import React from 'react';
import styles from './Nav.module.css';
import { ClientSpace, MatchMakerSpace, AdminSpace } from './links';

// Define the user types and their corresponding spaces
export enum UserType {
  Client = "client",
  MatchMaker = "matchmaker",
  Admin = "admin",
}

const Navbar: React.FC<{ userType: UserType }> = ({ userType }) => {
  const getSpace = () => {
    switch (userType) {
      case UserType.Client:
        return ClientSpace;
      case UserType.MatchMaker:
        return MatchMakerSpace;
      case UserType.Admin:
        return AdminSpace;
      default:
        return new Map<string, string>(); // Empty map if the user type is not recognized
    }
  };

  const space = getSpace();

  return (
    <nav>
      <ul>
        {Array.from(space.entries()).map(([label, url]) => (
          <li key={label}>
            <a href={url}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
