import React from 'react';
import styles from './Nav.module.css';
import { ClientSpace, MatchMakerSpace, AdminSpace } from './links';

// Define the user types and their corresponding spaces
export enum UserType {
  Client = "client",
  MatchMaker = "matchmaker",
  Admin = "admin",
}

const Navbar: React.FC<{ userType: UserType | undefined }> = ({ userType }) => {
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

  // Handling the undefined case
  if (userType === undefined) {
    return <div>Loading...</div>;
  }

  const space = getSpace();

  return (
    <nav className={styles.navbar}>
    <div className={styles['logo-container']}>
      <span>Logo</span>
    </div>
    <div className={styles['links-container']}>
      <ul>
        {Array.from(space.entries()).map(([label, url]) => (
          <li className={styles['link']} key={label}>
            <a href={url}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;