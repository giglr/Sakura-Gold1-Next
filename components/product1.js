import React from 'react'

import PropTypes from 'prop-types'

import Soldout1 from './soldout1'
import Ribbona1 from './ribbona1'

const Product1 = (props) => {
  return (
    <>
      <div className="product1-product">
        <img
          alt={props.IMAGE_alt}
          src={props.IMAGE_src}
          className="product1-image"
        />
        <div className="product1-texts">
          <div className="product1-producttext">
            <span className="product1-text">
              <span>Altın Harf Kolye – Özel Tasarım H Kolye</span>
            </span>
            <span className="product1-text02">
              <span>Yüzükler</span>
            </span>
          </div>
          <div className="product1-productprice">
            <div className="product1-oldprice">
              <span className="product1-text04">{props.text}</span>
              <span className="product1-text05">
                <span>3.000,00</span>
              </span>
            </div>
            <div className="product1-newprice">
              <span className="product1-text07">{props.text1}</span>
              <span className="product1-text08">
                <span>2.500,00</span>
              </span>
            </div>
          </div>
        </div>
        <div className="product1-ribbons">
          <Soldout1></Soldout1>
          <Ribbona1></Ribbona1>
        </div>
      </div>
      <style jsx>
        {`
          .product1-product {
            gap: var(--dl-space-space-halfunit);
            width: 280px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .product1-image {
            width: auto;
            height: auto;
            flex-grow: 1;
            align-self: stretch;
          }
          .product1-texts {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            z-index: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .product1-producttext {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .product1-text {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .product1-text02 {
            color: rgba(165, 165, 165, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 21.280000686645508px;
            font-stretch: normal;
            text-decoration: none;
          }
          .product1-productprice {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .product1-oldprice {
            display: flex;
            align-items: flex-start;
          }
          .product1-text04 {
            color: rgba(187, 187, 187, 1);
            width: 7px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: none;
          }
          .product1-text05 {
            color: rgba(187, 187, 187, 1);
            width: 52px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: line-through;
          }
          .product1-newprice {
            display: flex;
            align-items: flex-start;
          }
          .product1-text07 {
            color: rgba(195, 147, 91, 1);
            width: 8px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .product1-text08 {
            color: rgba(195, 147, 91, 1);
            width: 57px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .product1-ribbons {
            gap: 10px;
            top: 0px;
            left: 0px;
            display: flex;
            z-index: 2;
            position: absolute;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Product1.defaultProps = {
  IMAGE_alt: 'IMAGEI136',
  text1: '₺',
  IMAGE_src: 'daa93daa-db41-41d2-9ca5-b4810b864b75',
  text: '₺',
}

Product1.propTypes = {
  IMAGE_alt: PropTypes.string,
  text1: PropTypes.string,
  IMAGE_src: PropTypes.string,
  text: PropTypes.string,
}

export default Product1
