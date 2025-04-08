import React from 'react';
import { Card, Space } from 'antd';

function CryptoCurrencyCard(props) {

  const {currency} = props


  return (
      <div>
      <Space direction="vertical" size={16}>
      <Card title={
        <div className="flex items-center gap-4" >
          {currency && (
            <>
              <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} alt={`${currency.name} logo`} />
              <span>{currency.name}</span>
            </>
          )}
        </div>
      }
      extra={<a href="https://youtu.be/xvFZjo5PgG0">More</a>} 
      style={{ width: 300 }}>
      <p>Current price: {currency.quote.USD.price} </p>
      <p>Total supply: {currency.total_supply}</p>
      <p>nFactorial is the best!!!!❤️😘 </p>
      </Card>
    </Space>
    </div>
  )
  }

export default CryptoCurrencyCard
