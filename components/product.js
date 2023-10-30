import React from 'react'

import PropTypes from 'prop-types'

import Soldout from './soldout'
import Ribbona from './ribbona'

const Product = (props) => {
  return (
    <>
      <div className="product-product">
        <img alt={props.IMAGE_alt} src={props.src} className="product-image" />
        <div className="product-texts">
          <div className="product-producttext">
            <span className="product-text">
              <span>Altın Harf Kolye – Özel Tasarım H Kolye</span>
            </span>
            <span className="product-text02">
              <span>Yüzükler</span>
            </span>
          </div>
          <div className="product-productprice">
            <div className="product-oldprice">
              <span className="product-text04">{props.text}</span>
              <span className="product-text05">
                <span>3.000,00</span>
              </span>
            </div>
            <div className="product-newprice">
              <span className="product-text07">{props.text1}</span>
              <span className="product-text08">
                <span>2.500,00</span>
              </span>
            </div>
          </div>
        </div>
        <div className="product-ribbons">
          <Soldout></Soldout>
          <Ribbona></Ribbona>
        </div>
      </div>
      <style jsx>
        {`
          .product-product {
            gap: var(--dl-space-space-halfunit);
            width: 280px;
            display: flex;
            position: relative;
            flex-grow: 1;
            max-width: 280px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .product-image {
            width: auto;
            height: auto;
            flex-grow: 1;
            align-self: stretch;
          }
          .product-texts {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            z-index: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .product-producttext {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .product-text {
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
          .product-text02 {
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
          .product-productprice {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .product-oldprice {
            display: flex;
            align-items: flex-start;
          }
          .product-text04 {
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
          .product-text05 {
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
          .product-newprice {
            display: flex;
            align-items: flex-start;
          }
          .product-text07 {
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
          .product-text08 {
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
          .product-ribbons {
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

Product.defaultProps = {
  src: '/external/imagei136-mrxg-200h.png',
  text1: '₺',
  text: '₺',
  IMAGE_alt: 'IMAGEI136',
}

Product.propTypes = {
  src: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  IMAGE_alt: PropTypes.string,
}

export default Product
