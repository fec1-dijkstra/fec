import React from 'react';
import OutfitCard from './OutfitCard.jsx';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { outfits: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.getCurrentOutfit = this.getCurrentOutfit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({ outfits: this.getCurrentOutfit() });
  }

  handleAdd() {
    const { id, name, category } = this.props.productInfo;
    const { original_price, sale_price, photos} = this.props.productStyles.results[0];
    localStorage.setItem(
      `${id}`,
      `${id}, ${name}, ${category}, ${original_price}, ${sale_price}, ${photos[0].url}`
    );
    this.setState({ outfits: this.getCurrentOutfit() });
  }

  handleDelete(id) {
    localStorage.removeItem(`${id}`);
    this.setState({ outfits: this.getCurrentOutfit() });
  }

  getCurrentOutfit() {
    let outfits = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while ( i -- ) {
      outfits.push(localStorage.getItem(keys[i]));
    }
    return outfits;
  }

  render() {
    return (
      <div>
        <h3>Your Outfit</h3>
        <div className="carousel">
            <div className="ProductCard carousel_item" onClick={this.handleAdd}>+</div>
          {this.state.outfits.map((outfit) => (
            <OutfitCard key={outfit.split(',')[0]} outfit={outfit.split(',')} handleDelete={this.handleDelete} handleProductChange={this.props.handleProductChange} />
          ))}
          <div className="carousel_actions">
            <button className="carousel_left" >&#10094;</button>
            <button className="carousel_right">&#10095;</button>
            {/* onclick="plusDivs(-1)" onclick="plusDivs(+1)" */}
          </div>
        </div>
      </div>
    );
  }
}

export default Outfit;