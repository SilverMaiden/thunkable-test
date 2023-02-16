import React from "react";


import { Layout } from 'antd';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="Logo" style={{ height: 'auto', width: 32, marginRight: 16 }} />
        <h1 style={{ color: 'white', fontSize: 24, margin: 0 }}>Project List</h1>
      </div>
    </Header>
  );
};

export default AppHeader;
