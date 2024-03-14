import React from 'react';
import './SalesPredictionOutput.css';

const SalesPredictionOutput = ({ Data }) => {
  return (
    <div className="sales-prediction-output">
      {Object.keys(Data).length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>W1</th>
              <th>W2</th>
              <th>W3</th>
              <th>W4</th>
              <th>W5</th>
              <th>W6</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(Data).map(([productName, product]) => (
              <tr key={productName}>
                <td>{productName}</td>
                {product.NewValue && product.NewValue.length > 0 ? (
                  product.NewValue
                    .filter(value => value !== 'null')
                    .map((value, index) => <td key={index} className='new-values'>{value}</td>)
                ) : (
                  <td colSpan="6">No new values found for this product.</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="msg">
          <h4>No data available right now</h4>
        </div>
      )}
    </div>
  );
};

export default SalesPredictionOutput;
