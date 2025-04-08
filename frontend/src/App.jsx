import React, { useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import CryptoCurrencyCard from './components/CryptoCurrencyCard';
import { Spin } from 'antd';


const App = () => {

  const [currencies, setCurrencies] = useState([])
  const [currencyID, setCurrencyID] = useState(1)
  const [currencyData, setCurrencyData] = useState(null)

  const fetch_currencies = () => {
    axios.get('http://127.0.0.1:8000/currencies').then(r => {
        const currenciesResponse = r.data
        const menuItems = [
          {
            label: 'list of cryptocurrencies',
            key: 'g1',
            icon: null,
            children: currenciesResponse.map(c => ({
              label: c.name,
              key: c.id
            })),
            type: 'group'
          },
        ]
        setCurrencies(menuItems)
    })
  }

  const fetch_currency = () => {
    axios.get(`http://127.0.0.1:8000/currencies/${currencyID}`).then(r => {
        setCurrencyData(r.data)
    })
  }

  useEffect(() => {
    fetch_currencies()
  }, [] );

  useEffect(() => {
    setCurrencyData(null)
    fetch_currency()
  }, [currencyID] );


  const onClick = e => {
    setCurrencyID(e.key)
  };

  return (
    <div className='flex'>
      <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={currencies}
      className='h-screen overflow-scroll'
      />
        <div className='mx-auto my-auto'>
          {currencyData ? <CryptoCurrencyCard currency={currencyData}/> : <Spin syze="large"/>}
        </div>
    </div>
  );
};

export default App;