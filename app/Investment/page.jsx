'use client'
import PageLayout from '../../layout/pageLayout';
import styles from './investement.module.css';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";


const Investement = ( { user } ) => {
  const router = useRouter();
  console.log('url: ' + window.location.href);
  // const startingUser = {
  //   name: user.name,
  //   email: user.email,
  //   password: user.password,
  //   stock: user.stock,
  //   crypto: user.crypto,
  // }

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(user);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const res = await fetch(`/api/Users/${user._id}`, {
      method: "PUT",
      body: JSON.stringify({ formData }),
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
    <PageLayout>
      <div className={styles.addContainer}>
  
          <div className={styles.container}>
           <div className={styles.header}>Add Stock</div>
            <form
              onSubmit={handleSubmit}
              method="post"
            >
              <input id="stock"
                name="stock"
                type="text"
                placeholder="Name" 
                onChange={handleChange}
                required={true}
                value={formData.stock}
                className={styles.input}
              />
              <input id="amount"
                name="amount"
                type="text"
                placeholder="Shares" 
                onChange={handleChange}
                required={true}
                value={formData.amount}
                className={styles.input}
              />
              <input  id="purchasePrice"
                name="purchasePrice"
                type="text"
                placeholder="Purchase Price no $" 
                onChange={handleChange}
                required={true}
                value={formData.purchasePrice}
                className={styles.input}
              />
              <input
                type="submit"
                value="Add"
                className={styles.submission}
              />
              </form>
            </div>

          {/* <div className={styles.container}>
           <div className={styles.header}>Add Crypto</div>
            <form
              onSubmit={handleSubmit}
              method="post"
            >
              <input id="cryptoName"
                name="crypto"
                type="text"
                placeholder="Name" 
                onChange={handleChange}
                required={true}
                value={formData.crypto}
                className={styles.input}
              />
              <input id="amount"
                name="amount"
                type="text"
                placeholder="Shares" 
                onChange={handleChange}
                required={true}
                value={formData.amount}
                className={styles.input}
              />
              <input  id="purchasePrice"
                name="purchasePrice"
                type="text"
                placeholder="Purchase Price no $" 
                onChange={handleChange}
                required={true}
                value={formData.purchasePrice}
                className={styles.input}
              />
              <input
                type="submit"
                value="Add"
                className={styles.submission}
              />
              </form>
            </div> */}
        {errorMessage}
            
        </div>
    </PageLayout>
  );
}

export default Investement;