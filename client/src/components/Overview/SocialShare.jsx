import React from 'react';
import PropTypes from 'prop-types';

const SocialShare = ({ selectedStyle, productInfo }) => {
  let price;
  if (selectedStyle.sale_price) {
    price = selectedStyle.sale_price;
  } else {
    price = selectedStyle.original_price;
  }
  const twitterQuery = `Hei%20ma%20d00dz%20check%20oot%20diz%20Saweeet%20~${selectedStyle.name}~%20${productInfo.name}%20i%20foond%20for%20juzz%20$${price}%20from%20mi%20fav%20websyte`;
  return (
    <div className="overview-social-share">
      <div className="overview-facebook">
        <a
          id="overview-facebook-share-button"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCat&amp;src=sdkpreparse"
          target="_blank"
          rel="noreferrer"
        >
          Share
        </a>
      </div>
      <div className="overview-twitter">
        <a
          id="overview-twitter-share-button"
          href={`https://twitter.com/intent/tweet?text=${twitterQuery}`}
          target="_blank"
          rel="noreferrer"
        >
          Tweet
        </a>
      </div>
      <div className="overview-pinterest">
        <a
          id="overview-pinterest-share-button"
          href="https://www.pinterest.com/pin/create/button/"
          target="_blank"
          rel="noreferrer"
        >
          Pin
        </a>
      </div>
    </div>
  );
};

SocialShare.defaultProps = {
  selectedStyle: {},
  productInfo: {},
};

SocialShare.propTypes = {
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
  productInfo: PropTypes.oneOfType([PropTypes.object]),
};

export default SocialShare;
