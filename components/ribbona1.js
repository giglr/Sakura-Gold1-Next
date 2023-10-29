import React from 'react'

const Ribbona1 = (props) => {
  return (
    <>
      <div className="ribbona1-ribbona">
        <span className="ribbona1-text">
          <span>Yenİ</span>
        </span>
      </div>
      <style jsx>
        {`
          .ribbona1-ribbona {
            gap: 10px;
            width: 50px;
            height: 50px;
            display: flex;
            padding: 7px 5px;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-radius: 35px;
            justify-content: center;
            background-color: rgba(67, 142, 68, 1);
          }
          .ribbona1-text {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
            line-height: 16.799999237060547px;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Ribbona1
