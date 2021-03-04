import React from 'react';
import PropTypes from 'prop-types';

const SocialShare = ({ selectedStyle }) => (
  <>
    <a
      className="facebook-share-button"
      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCat&amp;src=sdkpreparse"
      target="_blank"
      rel="noreferrer"
    >
      Share
    </a>

    <a
      className="twitter-share-button"
      href="https://twitter.com/intent/tweet?text=Hei%20d00dz%20check%20out%20this%20$weeet%20"
      target="_blank"
      rel="noreferrer"
    >
      Tweet
    </a>

    <a
      className="pinterest-share-button"
      href="https://www.pinterest.com/pin/create/button/"
      target="_blank"
      rel="noreferrer"
    >
      Save
    </a>
  </>
);

SocialShare.defaultProps = {
  selectedStyle: {},
};

SocialShare.propTypes = {
  selectedStyle: PropTypes.oneOfType([PropTypes.object]),
};

export default SocialShare;
