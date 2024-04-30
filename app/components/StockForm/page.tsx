import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { User } from '../../functions/Context/UserContext';
import GetUser from '../../functions/GetUser';
import styles from './stockForm.module.css';

const StockForm = () => {

  const router = useRouter();
  const user: User | undefined = GetUser();  
  
  const [stock, setStock] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setStock((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  stock._id = user?._id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // If it doesn't work, I added a the /Stock dir, so delete
    const res = await fetch(`/api/Users/${user?._id}/Stock`, {
      method: "PUT",
      body: JSON.stringify({stock}),
      "content-type": "application/json",
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/dashboard");
    }
  };

  return (
    <div className={styles.addContainer}>
      <div className={styles.container}>
        <div className={styles.header}>Add Stock</div>
        <form
          onSubmit={handleSubmit}
          method="post"
        >
          <input id="stockName"
            name="stockName"
            type="text"
            placeholder="Name" 
            onChange={handleChange}
            required={true}
            value={stock.stockName}
            className={styles.input}
          />
          <input id="stockAmount"
            name="stockAmount"
            type="text"
            placeholder="Shares" 
            onChange={handleChange}
            required={true}
            value={stock.stockAmount}
            className={styles.input}
          />
          <input  id="stockPurchasePrice"
            name="stockPurchasePrice"
            type="text"
            placeholder="Purchase Price no $" 
            onChange={handleChange}
            required={true}
            value={stock.stockPurchasePrice}
            className={styles.input}
          />
          <input
            type="submit"
            value="Add"
            className={styles.submission}
          />
          </form>
        </div>
    </div>
  )
}

export default StockForm;